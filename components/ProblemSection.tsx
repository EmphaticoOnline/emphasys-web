const ProblemSection = () => {
  return (
    <section className="bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-[900px] px-6 pt-2 pb-20 sm:px-10 lg:px-0">
        <div className="space-y-8">
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            <span className="block">Cuando el crecimiento empieza a pesar</span>
            <span className="block">El crecimiento no ahorca a las empresas. La falta de estructura sí.</span>
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              Cuando una empresa crece más rápido que su capacidad para organizarse, lo que antes funcionaba deja de ser suficiente.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>La información se dispersa.</li>
              <li>Las áreas comienzan a trabajar desconectadas.</li>
              <li>Aparecen errores, retrabajos y seguimientos perdidos.</li>
              <li>Las responsabilidades se vuelven menos claras.</li>
              <li>El dueño termina cargando con demasiadas decisiones.</li>
            </ul>

            <p>
              <strong>No es falta de esfuerzo. No es falta de tecnología. Es falta de estructura.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
