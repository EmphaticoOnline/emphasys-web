const PlatformSection = () => {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-[900px] px-6 pt-16 pb-20 sm:px-10 lg:px-0">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--color-emphasys-blue)", opacity: 0.65 }}>
            Una plataforma para conectar la operación
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
            Una sola fuente de verdad para tu negocio
          </h2>
          <div className="space-y-2 text-lg leading-relaxed text-slate-600">
            <p>La tecnología debe ayudar a que la información fluya entre áreas y deje de depender de capturas aisladas.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Operación y finanzas",
              desc: "Ventas, compras, inventarios, cobranza y finanzas conectados para mejorar control, seguimiento y visibilidad.",
            },
            {
              title: "CRM y seguimiento comercial",
              desc: "Oportunidades, cotizaciones y seguimiento comercial integrados con la operación.",
            },
            {
              title: "WhatsApp y atención",
              desc: "Conversaciones ligadas a clientes y procesos, evitando información dispersa en sistemas aislados.",
            },
            {
              title: "Integraciones",
              desc: "SAT/CFDI, bancos, comercio electrónico y otras herramientas pueden conectarse cuando el proceso lo requiere.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#F7F9FB] p-6 shadow-sm">
              <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
