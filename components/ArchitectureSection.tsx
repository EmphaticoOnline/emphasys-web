const ArchitectureSection = () => {
  return (
  <section id="metodo" className="bg-white text-slate-900 scroll-mt-28 md:scroll-mt-32">
  <div className="mx-auto max-w-[900px] px-6 pt-16 pb-24 sm:px-10 lg:px-0">
        <div className="space-y-4">
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            El crecimiento no se improvisa. Se diseña.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            La claridad no aparece sola. Se construye con método.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              01 — Diagnóstico Estratégico
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              No tocamos tecnología primero. Entendemos el negocio completo: decisiones, flujo, responsabilidades y fricciones.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              02 — Diseño de Arquitectura
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Definimos estructura. Procesos claros. Roles definidos. Información organizada. El orden antes que la automatización.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              03 — Implementación Inteligente
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Solo después diseñamos sistemas. Automatizamos lo que ya tiene lógica. Nunca automatizamos el caos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
