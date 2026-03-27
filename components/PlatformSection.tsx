const PlatformSection = () => {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-[900px] px-6 pt-16 pb-20 sm:px-10 lg:px-0">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--color-emphasys-blue)", opacity: 0.65 }}>
            Un solo sistema para todo tu negocio
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
            Emphasys Core: una fuente de verdad, módulos que crecen contigo.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            No son proyectos sueltos. Todo vive en un mismo Core que asegura datos consistentes y crecimiento ordenado.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "ERP + Operación",
              desc: "Inventario, compras, producción y finanzas conectados al mismo Core para ver costos y márgenes en tiempo real.",
            },
            {
              title: "CRM + Ingreso",
              desc: "Pipeline, cotizaciones y margen protegidos con reglas compartidas con operación y finanzas.",
            },
            {
              title: "WhatsApp + Atención",
              desc: "Conversaciones ligadas a clientes, pedidos y cobranzas, sin duplicar información en sistemas aislados.",
            },
            {
              title: "Integraciones",
              desc: "SAT/CFDI, bancos, e-commerce y BI se conectan al Core, evitando islas de datos.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#F7F9FB] p-6 shadow-sm">
              <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
