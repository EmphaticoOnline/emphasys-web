const steps = [
  {
    title: "Un solo Core",
    desc: "Diseñamos y gobernamos un Core empresarial: roles, reglas, datos y procesos compartidos. Ahí vive la verdad del negocio.",
  },
  {
    title: "Módulos según prioridad",
    desc: "Activamos módulos (ERP, CRM, WhatsApp, Finanzas) sobre el mismo Core. Nada se construye aislado.",
  },
  {
    title: "Crecimiento progresivo",
    desc: "Liberamos por fases. Cada módulo hereda la estructura y mantiene integridad de datos mientras la empresa escala.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-[900px] px-6 pt-16 pb-20 sm:px-10 lg:px-0">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--color-emphasys-blue)", opacity: 0.65 }}>
            Cómo funciona Emphasys
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
            Orden primero. Tecnología después. Así es como tu negocio empieza a funcionar.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Emphasys es una plataforma modular multiempresa. Cada avance reutiliza la misma base de reglas y datos para evitar retrabajos y mantener control.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
