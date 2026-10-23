export const trackEvaluationEvent = (args: { eventType: string; evaluationId?: string; stepNumber?: number; metadata?: Record<string, string | number | boolean> }) => {
  if (typeof window === "undefined") return;
  const aggregateEventTypes = new Set(["visit", "evaluation_start", "question_answered", "step_advanced", "evaluation_complete", "results_email_requested", "results_email_sent", "results_email_failed", "commercial_interest"]);
  if (aggregateEventTypes.has(args.eventType)) trackEvaluationAggregate({ eventType: args.eventType, stepNumber: args.stepNumber });
};

let pageMeasurementNonce: string | undefined;
const trackEvaluationAggregate = (args: { eventType: string; stepNumber?: number }) => {
  if (typeof window === "undefined") return;
  pageMeasurementNonce ??= crypto.randomUUID();
  const suffix = args.stepNumber === undefined ? "" : `:${args.stepNumber}`;
  const idempotencyKey = `${pageMeasurementNonce}:${args.eventType}${suffix}`;
  void fetch("/api/evaluation-aggregate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...args, idempotencyKey, website: "" }), keepalive: true }).catch(() => undefined);
};
