import Link from "next/link";

const paths = [
  {
    title: "Radiografía Empresarial",
    href: "/radiografia-empresarial",
    description: "Un análisis estructurado para entender qué está frenando a la empresa, qué merece atención primero y qué tipo de intervención puede generar mayor valor.",
  },
  {
    title: "Automatizar",
    href: "/erp-a-la-medida",
    description: "Cuando el reto requiere conectar información, reducir captura duplicada, establecer controles y sostener mejor la operación mediante tecnología.",
  },
  {
    title: "Transformar",
    href: "/#contacto",
    description: "Cuando el reto exige cambios más profundos en procesos, responsabilidades, coordinación, adopción y forma de operar.",
  },
];

const ServiceLinks = () => {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-[900px] px-6 pt-16 pb-16 sm:px-10 lg:px-0">
        <div className="space-y-4">
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            Después de entender el problema, definimos la intervención adecuada
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            No todas las empresas necesitan lo mismo. La recomendación surge de lo que realmente está ocurriendo en el negocio, no de un catálogo de soluciones.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {paths.map((path) => (
            <Link
              key={path.title}
              href={path.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-[var(--color-emphasys-green)]">
                {path.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{path.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--color-emphasys-green)]">
                Conocer más
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-base font-semibold leading-relaxed text-slate-800">
          La solución no se decide antes de entender el problema.
        </p>
      </div>
    </section>
  );
};

export default ServiceLinks;
