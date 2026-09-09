"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Cómo trabajamos", href: "/#metodo" },
  { label: "Radiografía", href: "/radiografia-empresarial" },
  { label: "Casos", href: "/#casos" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleNav = useCallback(
    (href: string) => {
      if (href === "/") {
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          router.push("/");
        }
        setOpen(false);
        return;
      }

      if (href.startsWith("#") || href.startsWith("/#")) {
        const id = href.split("#")[1];
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          router.push(`/#${id}`);
        }
        setOpen(false);
        return;
      }

      router.push(href);
      setOpen(false);
    },
    [pathname, router],
  );

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || window.pageYOffset) > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-[8px] top-0 z-50 w-[calc(100%-8px)] border-b bg-white/90 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? "border-[rgba(29,47,104,0.10)] shadow-[0_10px_30px_rgba(18,26,61,0.06)]" : "border-transparent shadow-none"
      }`}
    >
      <div className="h-[3px] w-full bg-[var(--color-emphasys-green)]" />
      <div className="mx-auto flex max-w-[1120px] items-center gap-6 px-4 py-3 sm:px-6">
        <button type="button" onClick={() => handleNav("/")} className="flex items-center">
          <Image
            src="/logos/logo-emphasys.png"
            alt="Emphasys Soluciones"
            width={260}
            height={76}
            className="h-14 w-auto md:h-[68px]"
            priority
          />
        </button>

        <div className="flex flex-1 items-center justify-end gap-6">
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="border-b-2 border-transparent pb-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--color-emphasys-blue)] transition-colors duration-200 hover:border-[var(--color-emphasys-green)] hover:text-[var(--color-emphasys-green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-slate-200 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <span className={`block h-[1.5px] w-5 bg-[var(--color-emphasys-blue)] transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-[var(--color-emphasys-blue)] transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-[var(--color-emphasys-blue)] transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-sm lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="border-b border-slate-100 pb-3 text-left text-base font-semibold uppercase tracking-[0.12em] text-[var(--color-emphasys-blue)]"
              >
                {item.label}
              </button>
            ))}
            <button type="button" onClick={() => handleNav("#contacto")} className="btn-primary mt-2">
              Agendar conversación
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
