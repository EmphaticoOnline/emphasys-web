"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ArticleTocProps = {
  sections: { id: string; text: string }[];
};

const ArticleToc = ({ sections }: ArticleTocProps) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-140px 0px -70% 0px" },
    );
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="sticky top-36">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">En este artículo</p>
      <ol className="mt-4 flex flex-col gap-3 text-sm leading-snug">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`-ml-3.5 block border-l-2 pl-3 transition-colors ${
                active === section.id
                  ? "border-[var(--color-emphasys-green)] font-semibold text-[var(--color-emphasys-green)]"
                  : "border-transparent text-[var(--muted)] hover:text-[var(--color-emphasys-blue)]"
              }`}
            >
              {section.text}
            </a>
          </li>
        ))}
      </ol>
      <div className="mt-10 border-t border-[var(--line)] pt-4">
        <Link href="/evaluacion-empresarial" className="block text-[13px] leading-normal text-[var(--color-emphasys-blue)]">
          <span className="block font-semibold text-[var(--color-emphasys-green)]">Evaluación Empresarial</span>
          en 4 minutos →
        </Link>
      </div>
    </div>
  );
};

export default ArticleToc;
