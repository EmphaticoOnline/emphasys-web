const ProblemSection = () => {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-[900px] px-6 py-28 sm:px-10 lg:px-0">
        <div className="space-y-8">
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            <span className="block">Automatizar sin orden solo escala el problema.</span>
            <span className="block">
              El crecimiento no ahorca a las empresas. La falta de estructura sí.
            </span>
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              Cuando una empresa comienza a crecer, lo que antes funcionaba deja de ser suficiente.
            </p>
            <p>
              Las decisiones se vuelven más complejas. La información se dispersa. El dueño carga con todo.
            </p>
            <p>
              No es falta de esfuerzo. No es falta de tecnología. Es falta de arquitectura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
