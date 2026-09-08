const symptoms = [
  "La información se dispersa.",
  "Las áreas comienzan a trabajar desconectadas.",
  "Aparecen errores, retrabajos y seguimientos perdidos.",
  "Las responsabilidades se vuelven menos claras.",
  "El dueño termina cargando con demasiadas decisiones.",
];

const ProblemSection = () => {
  return (
    <section className="bg-white text-slate-900">
      <div className="wrap py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <p className="eyebrow">Cuando el crecimiento empieza a pesar</p>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl lg:text-[42px]">
              El crecimiento no ahorca a las empresas. La falta de estructura sí.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Cuando una empresa crece más rápido que su capacidad para organizarse, lo que antes funcionaba deja de ser suficiente.
            </p>
          </div>

          <ol className="divide-y divide-[rgba(29,47,104,0.10)] border-y border-[rgba(29,47,104,0.10)]">
            {symptoms.map((symptom, index) => (
              <li key={symptom} className="flex gap-5 py-5">
                <span className="w-8 shrink-0 font-display text-lg text-[var(--color-emphasys-green)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed text-slate-700">{symptom}</p>
              </li>
            ))}
          </ol>
        </div>

        <blockquote className="surface-navy mt-16 overflow-hidden px-8 py-10 sm:px-12 sm:py-14">
          <p className="font-display text-2xl leading-tight text-white sm:text-4xl">
            No es falta de esfuerzo.
            <br />
            No es falta de tecnología.
            <br />
            <span className="text-white/70">Es falta de estructura.</span>
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default ProblemSection;
