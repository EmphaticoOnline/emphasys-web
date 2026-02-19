const CommercialImpactSection = () => {
  return (
  <section id="impacto" className="bg-white text-slate-900 scroll-mt-28 md:scroll-mt-32">
  <div className="mx-auto max-w-[900px] px-6 pt-16 pb-24 sm:px-10 lg:px-0">
        <div className="space-y-6">
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            La estructura también impacta tus ventas.
          </h2>

          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            <p>El crecimiento comercial no depende solo del talento del vendedor.</p>
            <p>Depende de claridad.</p>
            <p>Cuando el proceso comercial tiene estructura:</p>

            <ul className="list-disc space-y-3 pl-16 text-slate-700">
              <li>El seguimiento deja de ser opcional.</li>
              <li>Las oportunidades no se pierden.</li>
              <li>El margen se protege.</li>
              <li>Las políticas se respetan.</li>
              <li>Las decisiones dejan de improvisarse.</li>
              <li>El vendedor entiende qué puede negociar y qué no.</li>
              <li>El dueño deja de intervenir en cada cierre.</li>
              <li>Las ventas dejan de depender del precio.</li>
            </ul>

            <p>No es motivación.</p>
            <p>Es diseño estratégico del proceso comercial.</p>
            <p>Y cuando existe estructura, el crecimiento deja de ser accidental.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialImpactSection;
