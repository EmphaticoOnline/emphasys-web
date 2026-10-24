import test from "node:test";
import assert from "node:assert/strict";
import { businessDateISO, monitorDateRange } from "./business-date";

test("mantiene el mismo día de negocio a las 18:00 de Guadalajara", () => {
  assert.equal(businessDateISO(new Date("2026-10-25T00:00:00.000Z")), "2026-10-24");
  assert.deepEqual(monitorDateRange("today", new Date("2026-10-25T00:00:00.000Z")), { from: "2026-10-24", to: "2026-10-24" });
});

test("cambia de día sólo a medianoche de Guadalajara", () => {
  assert.equal(businessDateISO(new Date("2026-10-25T05:59:59.999Z")), "2026-10-24");
  assert.equal(businessDateISO(new Date("2026-10-25T06:00:00.000Z")), "2026-10-25");
  assert.deepEqual(monitorDateRange("yesterday", new Date("2026-10-25T06:00:00.000Z")), { from: "2026-10-24", to: "2026-10-24" });
});

test("los presets usan fechas locales consecutivas", () => {
  const now = new Date("2026-10-25T00:00:00.000Z");
  assert.deepEqual(monitorDateRange("7d", now), { from: "2026-10-18", to: "2026-10-24" });
  assert.deepEqual(monitorDateRange("30d", now), { from: "2026-09-25", to: "2026-10-24" });
});
