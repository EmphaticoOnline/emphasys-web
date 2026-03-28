"use client";

import { useEffect, useState, useCallback } from "react";

const StickyCTA = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    const docHeight = typeof document !== "undefined" ? document.body.offsetHeight : 0;
    const nearBottom = windowHeight + scrollY >= docHeight - 300;
    return scrollY > 200 && !nearBottom;
  });

  const evaluateVisibility = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.offsetHeight;
    const nearBottom = windowHeight + scrollY >= docHeight - 300;
    setVisible(scrollY > 200 && !nearBottom);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", evaluateVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", evaluateVisibility);
    };
  }, [evaluateVisibility]);

  const handleClick = () => {
    const target = document.getElementById("contact-section") || document.getElementById("contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!visible) return null;

  return (
      <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden md:block">
      <button
        type="button"
        onClick={handleClick}
        className="pointer-events-auto rounded-full bg-[var(--color-emphasys-green)] px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white whitespace-nowrap"
        aria-label="Iniciar conversación"
      >
        Iniciar conversación
      </button>
    </div>
  );
};

export default StickyCTA;
