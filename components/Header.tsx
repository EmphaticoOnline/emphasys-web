"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const navItems = [
  { label: "Método", href: "#metodo" },
  { label: "Impacto", href: "#impacto" },
  { label: "Casos", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScrollState = useCallback(() => {
    setScrolled((window.scrollY || window.pageYOffset) > 10);
  }, []);

  const handleNav = useCallback((hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    handleScrollState();
    window.addEventListener("scroll", handleScrollState, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollState);
  }, [handleScrollState]);

  return (
    <header
      className={`fixed left-[10px] top-0 z-50 w-[calc(100%-10px)] border-b border-slate-100 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="h-1 w-full bg-[var(--color-emphasys-green)]" />
      <div className="mx-auto flex max-w-[1100px] items-center gap-6 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <a href="#contacto" onClick={(e) => { e.preventDefault(); handleNav("#contacto"); }} className="flex items-center">
            <Image
              src="/logos/logo-emphasys.png"
              alt="Emphasys Soluciones"
              width={260}
              height={76}
              className="h-16 w-auto md:h-20"
              priority
            />
          </a>
        </div>

        <div className="flex flex-1 items-center gap-6 justify-end">
          <nav className="hidden w-full items-center justify-end gap-8 pr-[4.5rem] md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="text-sm md:text-base font-semibold uppercase tracking-[0.16em] text-[var(--color-emphasys-blue)] border-b-2 border-transparent pb-1 transition-colors duration-200 ease-out hover:text-[var(--color-emphasys-green)] hover:border-[var(--color-emphasys-green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA oculto temporalmente a solicitud del usuario */}
          {/* <div className="hidden md:block ml-10">
            <button
              type="button"
              onClick={() => handleNav("#contacto")}
              className="rounded-full bg-[var(--color-emphasys-green)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Agendar Conversación
            </button>
          </div> */}

          <button
            type="button"
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            <span className="block h-[2px] w-5 bg-slate-700" />
            <span className="sr-only">Menú</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 pb-4 pt-3 shadow-sm md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="text-base font-semibold uppercase tracking-[0.14em] text-[var(--color-emphasys-blue)] text-left border-b-2 border-transparent pb-1 transition-colors duration-200 hover:text-[var(--color-emphasys-green)] hover:border-[var(--color-emphasys-green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav("#contacto")}
              className="mt-2 rounded-full bg-[var(--color-emphasys-green)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Agendar Conversación
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
