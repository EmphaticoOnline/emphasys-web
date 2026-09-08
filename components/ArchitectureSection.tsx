const ArchitectureSection = () => {
  return (
    <section id="metodo" className="bg-white text-slate-900 scroll-mt-28 md:scroll-mt-32">
      <div className="mx-auto max-w-[900px] px-6 pt-16 pb-24 sm:px-10 lg:px-0">
        <div className="space-y-4">
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            El primer paso es conversar
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            No necesitas saber si tu empresa requiere software, procesos, acompañamiento o una combinación de varias cosas. Esa decisión no debería tomarse antes de entender el problema.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">01 — Conversación inicial</p>
            <p className="text-base leading-relaxed text-slate-600">
              Entendemos qué está pasando, qué te preocupa, qué has intentado y qué impacto está teniendo en la empresa.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">02 — Radiografía Empresarial</p>
            <p className="text-base leading-relaxed text-slate-600">
              Si existe un problema que merece profundizarse, analizamos la empresa con evidencia para identificar hallazgos, prioridades y oportunidades de mayor impacto.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">03 — Intervención adecuada</p>
            <p className="text-base leading-relaxed text-slate-600">
              A partir de lo encontrado, podemos recomendar Automatizar, Transformar, combinar ambos caminos o incluso no continuar si no somos la opción adecuada.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Agendar una conversación
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
