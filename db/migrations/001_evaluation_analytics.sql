CREATE SCHEMA IF NOT EXISTS evaluation_analytics;

CREATE TABLE IF NOT EXISTS evaluation_analytics.visits (
  visit_id uuid PRIMARY KEY,
  first_seen_at timestamptz NOT NULL DEFAULT now(),
  last_seen_at timestamptz NOT NULL DEFAULT now(),
  landing_path text NOT NULL CHECK (char_length(landing_path) <= 200),
  referrer_category text CHECK (referrer_category IS NULL OR char_length(referrer_category) <= 80),
  consent_state text NOT NULL CHECK (consent_state IN ('granted', 'denied', 'unknown')),
  bot_status text NOT NULL DEFAULT 'unknown' CHECK (bot_status IN ('unknown', 'human', 'bot', 'suspicious'))
);

CREATE TABLE IF NOT EXISTS evaluation_analytics.evaluation_sessions (
  evaluation_id uuid PRIMARY KEY,
  visit_id uuid REFERENCES evaluation_analytics.visits(visit_id) ON DELETE SET NULL,
  started_at timestamptz,
  last_activity_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz,
  current_step smallint NOT NULL DEFAULT 0 CHECK (current_step BETWEEN 0 AND 8),
  questions_answered smallint NOT NULL DEFAULT 0 CHECK (questions_answered BETWEEN 0 AND 8),
  completion_status text NOT NULL DEFAULT 'started' CHECK (completion_status IN ('started', 'abandoned', 'completed', 'restarted')),
  result_level text CHECK (result_level IS NULL OR result_level IN ('encaminado', 'oportunidades', 'atencion')),
  score_bucket text CHECK (score_bucket IS NULL OR score_bucket IN ('0-24', '25-40', '41-54')),
  schema_version text NOT NULL DEFAULT '2026-10-23'
);

CREATE TABLE IF NOT EXISTS evaluation_analytics.events (
  event_id uuid PRIMARY KEY,
  idempotency_key text NOT NULL UNIQUE,
  visit_id uuid REFERENCES evaluation_analytics.visits(visit_id) ON DELETE SET NULL,
  evaluation_id uuid REFERENCES evaluation_analytics.evaluation_sessions(evaluation_id) ON DELETE SET NULL,
  event_type text NOT NULL CHECK (event_type IN ('visit', 'evaluation_start', 'question_answered', 'step_advanced', 'evaluation_abandoned', 'evaluation_complete', 'results_email_opened', 'results_email_requested', 'results_email_sent', 'results_email_failed', 'commercial_interest', 'evaluation_restart')),
  occurred_at timestamptz NOT NULL DEFAULT now(),
  step_number smallint CHECK (step_number IS NULL OR step_number BETWEEN 1 AND 8),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  bot_status text NOT NULL DEFAULT 'unknown' CHECK (bot_status IN ('unknown', 'human', 'bot', 'suspicious'))
);

CREATE TABLE IF NOT EXISTS evaluation_analytics.email_requests (
  request_id uuid PRIMARY KEY,
  evaluation_id uuid REFERENCES evaluation_analytics.evaluation_sessions(evaluation_id) ON DELETE SET NULL,
  requested_at timestamptz NOT NULL DEFAULT now(),
  email_hmac text NOT NULL,
  provider_message_id text,
  status text NOT NULL CHECK (status IN ('accepted', 'sent', 'failed', 'rate_limited')),
  failure_category text,
  retention_expires_at timestamptz NOT NULL DEFAULT (now() + interval '90 days')
);

CREATE INDEX IF NOT EXISTS events_occurred_at_idx ON evaluation_analytics.events (occurred_at);
CREATE INDEX IF NOT EXISTS events_evaluation_idx ON evaluation_analytics.events (evaluation_id, occurred_at);
CREATE INDEX IF NOT EXISTS email_requests_retention_idx ON evaluation_analytics.email_requests (retention_expires_at);

COMMENT ON SCHEMA evaluation_analytics IS 'Independent, minimized measurement for the public evaluation; never use ERP tables or credentials.';
