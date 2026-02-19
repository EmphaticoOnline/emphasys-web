"use client";

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contacto");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="inicio" className="relative bg-[#F7F9FB] text-slate-900">
  <div className="mx-auto w-full max-w-[900px] px-6 sm:px-10 lg:px-0 pt-20 pb-16">

        <p
          className="text-xs font-semibold uppercase tracking-[0.35em]"
          style={{ color: "var(--color-emphasys-blue)", opacity: 0.55 }}
        >
          Arquitectura empresarial
        </p>

        <h1
          className="mt-6 max-w-[820px] text-[32px] font-extrabold leading-[1.06] tracking-tight md:text-4xl lg:text-5xl"
          style={{ color: "var(--color-emphasys-blue)" }}
        >
          Las empresas en crecimiento necesitan <span className="font-black">claridad</span>, no más herramientas.
        </h1>

        <p className="mt-8 max-w-[780px] text-lg leading-relaxed text-slate-600 md:text-xl">
          Escuchamos primero. Estructuramos después. Implementamos solo cuando hay claridad.
        </p>

        <button
          type="button"
          onClick={scrollToContact}
          className="mt-12 inline-block rounded-full px-10 py-4 text-base font-semibold text-white shadow-md transition duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F9FB]"
          style={{ backgroundColor: "var(--color-emphasys-green)" }}
        >
          Agendar Conversación
        </button>

        <div className="mt-16 h-px w-full bg-slate-200" />
      </div>
    </section>
  );
};

export default Hero;
