"use client";

import { useEffect, useState, useCallback } from "react";

const StickyCTA = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const scrollY = window.scrollY || window.pageYOffset;
    return scrollY > 200;
  });
  const [contactInView, setContactInView] = useState(false);
  const [heroInView, setHeroInView] = useState(true);
  const [footerInView, setFooterInView] = useState(false);

  const evaluateVisibility = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset;
    setVisible(scrollY > 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", evaluateVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", evaluateVisibility);
    };
  }, [evaluateVisibility]);

  useEffect(() => {
    const contact = document.getElementById("contacto") || document.getElementById("contact-section");
    if (!contact) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setContactInView(entry?.isIntersecting || false);
      },
      {
        root: null,
        rootMargin: "0px 0px -45% 0px",
        threshold: 0,
      },
    );

    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHeroInView(entry?.isIntersecting || false);
      },
      { threshold: 0.1 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setFooterInView(entry?.isIntersecting || false);
      },
      {
        root: null,
        rootMargin: "0px 0px -20% 0px",
        threshold: 0,
      },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const target = document.getElementById("contact-section") || document.getElementById("contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!visible || heroInView || contactInView || footerInView) return null;

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
