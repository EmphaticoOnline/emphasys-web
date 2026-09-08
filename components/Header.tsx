"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Cómo trabajamos", href: "/#metodo" },
  { label: "Radiografía", href: "/radiografia-empresarial" },
  { label: "Casos", href: "/#casos" },
  { label: "Contacto", href: "/#contacto" },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [heroInView, setHeroInView] = useState(true);

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

      if (href.startsWith("/#")) {
        const id = href.split("#")[1];
        if (pathname === "/") {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          router.push(href);
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

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) {
      setHeroInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry?.isIntersecting ?? false),
      { threshold: 0.1 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      className={`fixed left-[10px] top-0 z-50 w-[calc(100%-10px)] border-b border-slate-100 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="h-1 w-full bg-[var(--color-emphasys-green)]" />
      <div className="mx-auto flex max-w-[1100px] items-center gap-6 px-4 py-4 sm:px-6">
        <button type="button" onClick={() => handleNav("/")} className="flex items-center">
          <Image
            src="/logos/logo-emphasys.png"
            alt="Emphasys Soluciones"
            width={260}
            height={76}
            className="h-16 w-auto md:h-20"
            priority
          />
        </button>

        <div className="flex flex-1 items-center justify-end gap-6">
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="border-b-2 border-transparent pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-emphasys-blue)] transition-colors duration-200 hover:border-[var(--color-emphasys-green)] hover:text-[var(--color-emphasys-green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {heroInView && (
            <a
              href="https://wa.me/523311107328?text=Hola%2C%20quiero%20conversar%20sobre%20lo%20que%20est%C3%A1%20pasando%20en%20mi%20empresa.%20%C2%BFPodemos%20revisar%20mi%20caso%3F"
              target="_blank"
              rel="noreferrer"
              className="hidden whitespace-nowrap rounded-full bg-[var(--color-emphasys-green)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-90 md:block"
            >
              Iniciar conversación
            </a>
          )}

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
                className="border-b-2 border-transparent pb-1 text-left text-base font-semibold uppercase tracking-[0.12em] text-[var(--color-emphasys-blue)] transition-colors duration-200 hover:border-[var(--color-emphasys-green)] hover:text-[var(--color-emphasys-green)]"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav("/#contacto")}
              className="mt-2 rounded-full bg-[var(--color-emphasys-green)] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Agendar conversación
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
