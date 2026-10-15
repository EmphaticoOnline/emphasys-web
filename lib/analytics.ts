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
