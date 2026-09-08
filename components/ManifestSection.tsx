const principles = [
  {
    number: "01",
    title: "El negocio siempre va antes que el software",
    description: "Primero escuchamos y entendemos cómo funciona tu empresa. Después hablamos de soluciones.",
  },
  {
    number: "02",
    title: "No recomendamos soluciones destinadas a fracasar",
    description: "Si no existen las condiciones para que una intervención produzca resultados, preferimos decirlo antes que vender algo que no va a funcionar.",
  },
  {
    number: "03",
    title: "Medimos resultados, no sistemas instalados",
    description: "Menos errores. Mejor control. Márgenes protegidos. Información confiable. Tiempo recuperado. Eso es lo que importa.",
  },
  {
    number: "04",
    title: "La tecnología debe adaptarse a la empresa",
    description: "El software es una herramienta al servicio del negocio. Nunca el objetivo.",
  },
];

const ManifestSection = () => {
  return (
    <section className="bg-[#eceff4] text-slate-900">
      <div className="wrap py-20 lg:py-28">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Criterio de trabajo</p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
            Una forma diferente de trabajar con tu empresa
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            La claridad no aparece sola. Se construye con criterio, método y una conversación que empieza por el negocio.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {principles.map((principle) => (
            <article key={principle.title} className="relative pl-0">
              <p className="font-display text-sm tracking-[0.2em] text-[var(--color-emphasys-green)]">{principle.number}</p>
              <div className="mt-3 h-px w-12 bg-[var(--color-emphasys-green)]" />
              <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-[var(--color-emphasys-blue)]">
                {principle.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestSection;
