import test from "node:test";
import assert from "node:assert/strict";
import { MONITOR_DAILY_QUERY } from "./evaluation-analytics";

test("el monitor une cada fecha con counter_day en ambas tablas", () => {
  assert.doesNotMatch(MONITOR_DAILY_QUERY, /USING\s*\(\s*day\s*\)/i);
  assert.match(MONITOR_DAILY_QUERY, /aggregate\.counter_day\s*=\s*days\.day/i);
  assert.match(MONITOR_DAILY_QUERY, /site\.counter_day\s*=\s*days\.day/i);
  assert.match(MONITOR_DAILY_QUERY, /site_daily_counters/);
  assert.match(MONITOR_DAILY_QUERY, /aggregate_daily_counters/);
});
