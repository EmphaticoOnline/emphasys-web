import assert from "node:assert/strict";
import test from "node:test";
import { aggregateMetric, isAggregateEventType, recordAggregateEvent, recordSiteAggregateEvent } from "./evaluation-analytics.ts";

test("mapea la medición operativa a contadores agregados", () => {
  assert.equal(aggregateMetric("visit"), "visits");
  assert.equal(aggregateMetric("question_answered", 4), "question_answered_4");
  assert.equal(aggregateMetric("step_advanced", 8), "step_advanced_8");
  assert.equal(aggregateMetric("commercial_interest"), "radiografia_click");
  assert.equal(isAggregateEventType("evaluation_restart"), false);
  assert.equal(isAggregateEventType("evaluation_complete"), true);
});

test("valida eventos agregados del sitio sin persistir datos personales", async () => {
  const result = await recordSiteAggregateEvent({ metricKey: "whatsapp_click", pagePath: "/servicios", idempotencyKey: "site-page:whatsapp:/servicios" });
  assert.deepEqual(result, { stored: false, duplicate: false });
});

test("la medición agregada no exige consentimiento ni base configurada para validar el evento", async () => {
  const result = await recordAggregateEvent({ eventType: "evaluation_start", idempotencyKey: "test-page:1" });
  assert.deepEqual(result, { stored: false, duplicate: false });
});
