const symptoms = [
  "La información se dispersa",
  "Las áreas trabajan desconectadas",
  "Aparecen errores y retrabajos",
  "Las responsabilidades pierden claridad",
  "El dueño carga con demasiadas decisiones",
];

const ProblemSection = () => {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-[1100px] px-6 py-20 sm:px-10 lg:px-0 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Cuando el crecimiento empieza a pesar
            </p>
            <h2
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]"
              style={{ color: "var(--color-emphasys-blue)" }}
            >
              El crecimiento no ahorca a las empresas. La falta de estructura sí.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Cuando una empresa crece más rápido que su capacidad para organizarse, lo que antes funcionaba deja de ser suficiente.
            </p>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {symptoms.map((symptom, index) => (
                <div
                  key={symptom}
                  className={`group rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-[0_8px_26px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(0,98,97,0.25)] hover:shadow-[0_14px_32px_rgba(15,23,42,0.07)] ${
                    index === symptoms.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-semibold shadow-sm" style={{ color: "var(--color-emphasys-green)" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-base font-medium leading-relaxed text-slate-700">{symptom}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[26px] bg-[var(--color-emphasys-blue)] px-6 py-7 shadow-[0_20px_45px_rgba(29,47,104,0.18)] sm:px-8">
              <div className="h-1 w-16 rounded-full bg-[var(--color-emphasys-green)]" />
              <p className="mt-5 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                No es falta de esfuerzo.
                <br />
                No es falta de tecnología.
                <br />
                <span className="text-white/75">Es falta de estructura.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
