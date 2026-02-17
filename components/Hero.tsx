const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white text-slate-900">
      
      {/* Franja estructural */}
      <div
        className="absolute left-0 top-0 h-full w-[12px]"
        style={{ backgroundColor: "var(--color-emphasys-blue)" }}
      />

      {/* Contenido */}
      <div className="mx-auto w-full max-w-[900px] px-8 pt-28 pb-24">
        
        <p
          className="text-xs font-semibold uppercase tracking-[0.4em]"
          style={{ color: "var(--color-emphasys-blue)", opacity: 0.5 }}
        >
          Arquitectura empresarial
        </p>

        <h1
          className="mt-4 text-6xl font-extrabold leading-tight tracking-tight sm:text-7xl"
          style={{ color: "var(--color-emphasys-blue)" }}
        >
          Las empresas en crecimiento necesitan claridad, no más herramientas.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600">
          Escuchamos primero. Estructuramos después. Implementamos solo cuando hay claridad.
        </p>

        <button
          type="button"
          className="mt-14 inline-block rounded-full px-10 py-4 text-base font-semibold text-white transition-colors"
          style={{ backgroundColor: "var(--color-emphasys-green)" }}
        >
          Agendar una conversación de claridad
        </button>

      </div>
    </section>
  );
};

export default Hero;
