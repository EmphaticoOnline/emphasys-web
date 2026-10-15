"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const CONSENT_KEY = "emphasys-analytics-consent";

type Consent = "granted" | "denied" | null;

const Analytics = () => {
  const [consent, setConsent] = useState<Consent>(() => {
    if (typeof window === "undefined") return null;
    const saved = window.localStorage.getItem(CONSENT_KEY);
    return saved === "granted" || saved === "denied" ? saved : null;
  });

  useEffect(() => {
    window.__emphasysAnalyticsConsent = consent === "granted";
  }, [consent]);

  const chooseConsent = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });`}
          </Script>
        </>
      ) : null}
      {consent === null ? (
        <aside className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-2xl border border-[rgba(29,47,104,0.16)] bg-white p-5 text-sm text-slate-700 shadow-xl sm:inset-x-auto sm:right-6 sm:mx-0">
          <p>
            Usamos analítica para entender cómo se utiliza el sitio y mejorar la Evaluación Empresarial. No enviamos nombres, correos ni respuestas individuales a Google Analytics.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" className="btn-primary" onClick={() => chooseConsent("granted")}>Aceptar analítica</button>
            <button type="button" className="btn-ghost" onClick={() => chooseConsent("denied")}>Continuar sin analítica</button>
          </div>
        </aside>
      ) : null}
    </>
  );
};

export default Analytics;
