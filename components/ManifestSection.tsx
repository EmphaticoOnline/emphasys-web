const principles = [
  {
    title: "El negocio siempre va antes que el software",
    description: "Primero escuchamos y entendemos cómo funciona tu empresa. Después hablamos de soluciones.",
  },
  {
    title: "No recomendamos soluciones destinadas a fracasar",
    description: "Si no existen las condiciones para que una intervención produzca resultados, preferimos decirlo antes que vender algo que no va a funcionar.",
  },
  {
    title: "Medimos resultados, no sistemas instalados",
    description: "Menos errores. Mejor control. Márgenes protegidos. Información confiable. Tiempo recuperado. Eso es lo que importa.",
  },
  {
    title: "La tecnología debe adaptarse a la empresa",
    description: "El software es una herramienta al servicio del negocio. Nunca el objetivo.",
  },
];

const ManifestSection = () => {
  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-[900px] px-6 pt-16 pb-24 sm:px-10 lg:px-0">
        <div className="space-y-4">
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            Una forma diferente de trabajar con tu empresa
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            La claridad no aparece sola. Se construye con criterio, método y una conversación que empieza por el negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle.title} className="space-y-3 border-l-2 border-slate-200 pl-5">
              <h3 className="text-xl font-semibold text-slate-900">{principle.title}</h3>
              <p className="text-base leading-relaxed text-slate-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestSection;
