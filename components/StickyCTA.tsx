"use client";

import { useEffect, useState, useCallback } from "react";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  const evaluateVisibility = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset;
    setVisible(scrollY > 400);
  }, []);

  useEffect(() => {
    evaluateVisibility();
    window.addEventListener("scroll", evaluateVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", evaluateVisibility);
    };
  }, [evaluateVisibility]);

  useEffect(() => {
    const contact = document.getElementById("contacto");
    if (!contact) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setContactInView(entry?.isIntersecting || false);
      },
      {
        root: null,
        rootMargin: "0px 0px -35% 0px",
        threshold: 0,
      }
    );

    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const target = document.getElementById("contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!visible || contactInView) return null;

  return (
      <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden md:block">
      <button
        type="button"
        onClick={handleClick}
        className="pointer-events-auto rounded-full bg-[var(--color-emphasys-green)] px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-label="Agendar Conversación"
      >
        Agendar Conversación
      </button>
    </div>
  );
};

export default StickyCTA;
