import Link from "next/link";

const services = [
  {
    title: "ERP a la medida",
    href: "/erp-a-la-medida",
    description: "Integramos ventas, compras e inventario con finanzas para controlar costos y tomar decisiones con datos confiables.",
  },
  {
    title: "Automatización de ventas",
    href: "/automatizacion-ventas",
    description: "Reglas comerciales, aprobaciones y trazabilidad conectadas a inventario y facturación para proteger margen.",
  },
  {
    title: "Control de costos",
    href: "/control-de-costos",
    description: "Visibilidad financiera en tiempo real: compras, inventario y ventas integradas en tableros accionables.",
  },
];

const ServiceLinks = () => {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-[900px] px-6 pt-16 pb-12 sm:px-10 lg:px-0">
        <div className="space-y-4">
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            Elige por dónde empezar. Nosotros nos encargamos de estructurar tu negocio.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Elige el punto de entrada según tu reto principal. Todas las rutas conectan con nuestro enfoque de arquitectura empresarial.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-[var(--color-emphasys-green)]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--color-emphasys-green)]">
                Ver más
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceLinks;
