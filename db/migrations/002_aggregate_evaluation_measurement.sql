CREATE TABLE IF NOT EXISTS evaluation_analytics.aggregate_daily_counters (
  counter_day date NOT NULL DEFAULT current_date,
  metric_key text NOT NULL CHECK (metric_key IN ('visits', 'starts', 'question_answered_1', 'question_answered_2', 'question_answered_3', 'question_answered_4', 'question_answered_5', 'question_answered_6', 'question_answered_7', 'question_answered_8', 'step_advanced_1', 'step_advanced_2', 'step_advanced_3', 'step_advanced_4', 'step_advanced_5', 'step_advanced_6', 'step_advanced_7', 'step_advanced_8', 'completed', 'email_requested', 'email_sent', 'email_failed', 'radiografia_click')),
  counter_value bigint NOT NULL DEFAULT 0 CHECK (counter_value >= 0),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (counter_day, metric_key)
);

-- Only a short-lived replay/double-submit guard; it is not a visitor or session identifier.
CREATE TABLE IF NOT EXISTS evaluation_analytics.aggregate_event_dedup (
  dedupe_key text PRIMARY KEY,
  expires_at timestamptz NOT NULL
);

CREATE INDEX IF NOT EXISTS aggregate_event_dedup_expiry_idx
  ON evaluation_analytics.aggregate_event_dedup (expires_at);

COMMENT ON TABLE evaluation_analytics.aggregate_daily_counters IS 'Operational aggregate counts only; no consent-dependent identity or individual answers.';
