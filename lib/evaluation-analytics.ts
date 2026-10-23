import { randomUUID, createHmac } from "node:crypto";
import type { Pool, PoolClient } from "pg";

export const EVENT_TYPES = [
  "visit", "evaluation_start", "question_answered", "step_advanced", "evaluation_abandoned",
  "evaluation_complete", "results_email_opened", "results_email_requested", "results_email_sent",
  "results_email_failed", "commercial_interest", "evaluation_restart",
] as const;
export type EvaluationEventType = (typeof EVENT_TYPES)[number];
export type ConsentState = "granted" | "denied" | "unknown";
export type AggregateEventType = EvaluationEventType;
export const AGGREGATE_EVENT_TYPES = ["visit", "evaluation_start", "question_answered", "step_advanced", "evaluation_complete", "results_email_requested", "results_email_sent", "results_email_failed", "commercial_interest"] as const;

type EventInput = {
  eventId?: string; idempotencyKey: string; visitId?: string; evaluationId?: string;
  eventType: EvaluationEventType; stepNumber?: number; metadata?: Record<string, string | number | boolean>;
  consentState: ConsentState;
};

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const MAX_METADATA_KEYS = 8;
const validUuid = (value?: string) => !value || UUID.test(value);
const aggregateRateWindow = { startedAt: 0, count: 0 };

export const analyticsEnabled = () => Boolean(process.env.EVALUATION_ANALYTICS_DATABASE_URL);
export const consentRequired = () => process.env.EVALUATION_ANALYTICS_REQUIRE_CONSENT !== "false";
export const detailedAnalyticsEnabled = () => process.env.EVALUATION_ANALYTICS_DETAILED_ENABLED === "true";

export const hashEmail = (email: string) => {
  const secret = process.env.EVALUATION_ANALYTICS_HMAC_SECRET;
  if (!secret) throw new Error("missing-analytics-hmac-secret");
  return createHmac("sha256", secret).update(email.trim().toLowerCase()).digest("hex");
};

const pool = new Map<string, Pool>();
const getPool = async () => {
  if (!analyticsEnabled()) return null;
  const pg = await import("pg");
  const url = process.env.EVALUATION_ANALYTICS_DATABASE_URL!;
  let instance = pool.get(url);
  if (!instance) { instance = new pg.Pool({ connectionString: url, max: 5, connectionTimeoutMillis: 1500, idleTimeoutMillis: 10000 }); pool.set(url, instance); }
  return instance;
};

const validateEvent = (input: EventInput) => {
  if (consentRequired() && input.consentState !== "granted") throw new Error("analytics-consent-required");
  if (!validUuid(input.visitId) || !validUuid(input.evaluationId) || !validUuid(input.eventId)) throw new Error("invalid-identifier");
  if (!input.idempotencyKey || input.idempotencyKey.length > 160) throw new Error("invalid-idempotency-key");
  if (input.stepNumber !== undefined && (!Number.isInteger(input.stepNumber) || input.stepNumber < 1 || input.stepNumber > 8)) throw new Error("invalid-step");
  if (input.metadata && Object.keys(input.metadata).length > MAX_METADATA_KEYS) throw new Error("metadata-too-large");
};

export const recordEvaluationEvent = async (input: EventInput) => {
  if (!detailedAnalyticsEnabled()) throw new Error("detailed-analytics-disabled");
  validateEvent(input);
  const db = await getPool();
  if (!db) return { stored: false, duplicate: false };
  const client: PoolClient = await db.connect();
  try {
    await client.query("BEGIN");
    if (input.visitId) await client.query(`INSERT INTO evaluation_analytics.visits (visit_id, landing_path, consent_state) VALUES ($1, $2, $3) ON CONFLICT (visit_id) DO UPDATE SET last_seen_at = now(), consent_state = EXCLUDED.consent_state`, [input.visitId, "/evaluacion-empresarial", input.consentState]);
    if (input.evaluationId) await client.query(`INSERT INTO evaluation_analytics.evaluation_sessions (evaluation_id, visit_id, started_at) VALUES ($1, $2, CASE WHEN $3 = 'evaluation_start' THEN now() ELSE NULL END) ON CONFLICT (evaluation_id) DO UPDATE SET last_activity_at = now(), current_step = GREATEST(evaluation_sessions.current_step, COALESCE($4, 0)), questions_answered = GREATEST(evaluation_sessions.questions_answered, COALESCE($5, 0)), completed_at = CASE WHEN $3 = 'evaluation_complete' THEN now() ELSE evaluation_sessions.completed_at END, completion_status = CASE WHEN $3 = 'evaluation_complete' THEN 'completed' ELSE evaluation_sessions.completion_status END`, [input.evaluationId, input.visitId ?? null, input.eventType, input.stepNumber ?? null, input.eventType === "question_answered" ? input.stepNumber : null]);
    const result = await client.query(`INSERT INTO evaluation_analytics.events (event_id, idempotency_key, visit_id, evaluation_id, event_type, step_number, metadata) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (idempotency_key) DO NOTHING`, [input.eventId ?? randomUUID(), input.idempotencyKey, input.visitId ?? null, input.evaluationId ?? null, input.eventType, input.stepNumber ?? null, JSON.stringify(input.metadata ?? {})]);
    await client.query("COMMIT");
    return { stored: true, duplicate: result.rowCount === 0 };
  } catch (error) { await client.query("ROLLBACK"); throw error; } finally { client.release(); }
};

export const aggregateMetric = (eventType: AggregateEventType, stepNumber?: number) => {
  if (eventType === "visit") return "visits";
  if (eventType === "evaluation_start") return "starts";
  if (eventType === "evaluation_complete") return "completed";
  if (eventType === "results_email_requested") return "email_requested";
  if (eventType === "results_email_sent") return "email_sent";
  if (eventType === "results_email_failed") return "email_failed";
  if (eventType === "commercial_interest") return "radiografia_click";
  if (eventType === "question_answered" && stepNumber) return `question_answered_${stepNumber}`;
  if (eventType === "step_advanced" && stepNumber) return `step_advanced_${stepNumber}`;
  return null;
};

export const isAggregateEventType = (value: string): value is AggregateEventType => (AGGREGATE_EVENT_TYPES as readonly string[]).includes(value);

export const recordAggregateEvent = async (args: { eventType: AggregateEventType; stepNumber?: number; idempotencyKey: string }) => {
  const metric = aggregateMetric(args.eventType, args.stepNumber);
  if (!metric || !args.idempotencyKey || args.idempotencyKey.length > 160) throw new Error("invalid-aggregate-event");
  if (args.stepNumber !== undefined && (!Number.isInteger(args.stepNumber) || args.stepNumber < 1 || args.stepNumber > 8)) throw new Error("invalid-step");
  const now = Date.now();
  if (now - aggregateRateWindow.startedAt > 60_000) { aggregateRateWindow.startedAt = now; aggregateRateWindow.count = 0; }
  if (++aggregateRateWindow.count > 500) throw new Error("aggregate-rate-limit");
  const db = await getPool();
  if (!db) return { stored: false, duplicate: false };
  const client: PoolClient = await db.connect();
  try {
    await client.query("BEGIN");
    await client.query("DELETE FROM evaluation_analytics.aggregate_event_dedup WHERE expires_at < now()");
    const dedupe = await client.query("INSERT INTO evaluation_analytics.aggregate_event_dedup (dedupe_key, expires_at) VALUES ($1, now() + interval '15 minutes') ON CONFLICT DO NOTHING", [args.idempotencyKey]);
    if (dedupe.rowCount === 0) { await client.query("COMMIT"); return { stored: true, duplicate: true }; }
    await client.query(`INSERT INTO evaluation_analytics.aggregate_daily_counters (counter_day, metric_key, counter_value) VALUES (current_date, $1, 1) ON CONFLICT (counter_day, metric_key) DO UPDATE SET counter_value = evaluation_analytics.aggregate_daily_counters.counter_value + 1, updated_at = now()`, [metric]);
    await client.query("COMMIT");
    return { stored: true, duplicate: false };
  } catch (error) { await client.query("ROLLBACK"); throw error; } finally { client.release(); }
};

export const recordEmailRequest = async (args: { requestId?: string; evaluationId?: string; email: string; status: "accepted" | "sent" | "failed" | "rate_limited"; failureCategory?: string }) => {
  if (!detailedAnalyticsEnabled()) return { stored: false };
  if (!analyticsEnabled()) return { stored: false };
  if (!validUuid(args.evaluationId)) throw new Error("invalid-evaluation-id");
  const db = await getPool(); if (!db) return { stored: false };
  await db.query(`INSERT INTO evaluation_analytics.email_requests (request_id, evaluation_id, email_hmac, status, failure_category) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (request_id) DO NOTHING`, [args.requestId ?? randomUUID(), args.evaluationId ?? null, hashEmail(args.email), args.status, args.failureCategory ?? null]);
  return { stored: true };
};
