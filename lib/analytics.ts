export const GA_MEASUREMENT_ID = "G-NCV8GS3SF0";

type AnalyticsEvent =
  | "evaluation_start"
  | "evaluation_complete"
  | "results_email_requested"
  | "radiografia_interest";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    __emphasysAnalyticsConsent?: boolean;
  }
}

export const trackEvent = (eventName: AnalyticsEvent) => {
  if (typeof window === "undefined" || !window.__emphasysAnalyticsConsent || !window.gtag) return;
  window.gtag("event", eventName);
};

export const trackEvaluationEvent = (args: { eventType: string; evaluationId?: string; stepNumber?: number; metadata?: Record<string, string | number | boolean> }) => {
  if (typeof window === "undefined") return;
  const aggregateEventTypes = new Set(["visit", "evaluation_start", "question_answered", "step_advanced", "evaluation_complete", "results_email_requested", "results_email_sent", "results_email_failed", "commercial_interest"]);
  if (aggregateEventTypes.has(args.eventType)) trackEvaluationAggregate({ eventType: args.eventType, stepNumber: args.stepNumber });
  if (!window.__emphasysAnalyticsConsent) return;
  const key = "emphasys-evaluation-visit-id";
  let visitId = window.localStorage.getItem(key);
  if (!visitId) { visitId = crypto.randomUUID(); window.localStorage.setItem(key, visitId); }
  const eventId = crypto.randomUUID();
  void fetch("/api/evaluation-event", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...args, visitId, eventId, consentState: "granted", idempotencyKey: eventId }), keepalive: true }).catch(() => undefined);
};

let pageMeasurementNonce: string | undefined;
const trackEvaluationAggregate = (args: { eventType: string; stepNumber?: number }) => {
  if (typeof window === "undefined") return;
  pageMeasurementNonce ??= crypto.randomUUID();
  const suffix = args.stepNumber === undefined ? "" : `:${args.stepNumber}`;
  const idempotencyKey = `${pageMeasurementNonce}:${args.eventType}${suffix}`;
  void fetch("/api/evaluation-aggregate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...args, idempotencyKey, website: "" }), keepalive: true }).catch(() => undefined);
};
