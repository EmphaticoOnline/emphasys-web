CREATE TABLE IF NOT EXISTS evaluation_analytics.site_daily_counters (
  counter_day date NOT NULL DEFAULT current_date,
  metric_key text NOT NULL CHECK (metric_key IN ('page_view', 'whatsapp_click', 'phone_click', 'email_click', 'contact_form_sent', 'evaluation_cta_click', 'radiografia_click')),
  page_path text NOT NULL CHECK (char_length(page_path) BETWEEN 1 AND 200),
  counter_value bigint NOT NULL DEFAULT 0 CHECK (counter_value >= 0),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (counter_day, metric_key, page_path)
);

CREATE INDEX IF NOT EXISTS site_daily_counters_lookup_idx
  ON evaluation_analytics.site_daily_counters (counter_day, metric_key);

COMMENT ON TABLE evaluation_analytics.site_daily_counters IS 'Aggregate site counters only; no cookies, identity, IP or personal data.';
