const steps = [
  {
    number: "01",
    title: "Conversación inicial",
    body: "Entendemos qué está pasando, qué te preocupa, qué has intentado y qué impacto está teniendo en la empresa.",
  },
  {
    number: "02",
    title: "Radiografía Empresarial",
    body: "Si existe un problema que merece profundizarse, analizamos la empresa con evidencia para identificar hallazgos, prioridades y oportunidades de mayor impacto.",
  },
  {
    number: "03",
    title: "Intervención adecuada",
    body: "A partir de lo encontrado, podemos recomendar Automatizar, Transformar, combinar ambos caminos o incluso no continuar si no somos la opción adecuada.",
  },
];

const ArchitectureSection = () => {
  return (
    <section id="metodo" className="scroll-mt-28 bg-white text-slate-900 md:scroll-mt-32">
      <div className="wrap py-20 lg:py-28">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Cómo empezamos</p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
            El primer paso es conversar
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            No necesitas saber si tu empresa requiere software, procesos, acompañamiento o una combinación de varias cosas. Esa decisión no debería tomarse antes de entender el problema.
          </p>
        </div>

        <div className="relative mt-14 grid gap-8 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-px bg-[rgba(29,47,104,0.14)] lg:block" />
          {steps.map((step) => (
            <article key={step.number} className="relative">
              <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(29,47,104,0.16)] bg-white font-display text-sm text-[var(--color-emphasys-blue)]">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-[var(--color-emphasys-blue)]">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{step.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a href="#contacto" className="btn-primary">
            Agendar una conversación
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
