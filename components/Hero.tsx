"use client";

const capabilityNodes = ["Ventas", "CRM", "Compras", "Inventario", "Finanzas"];

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(0,98,97,0.10),transparent_34%),linear-gradient(180deg,#F8FAFC_0%,#F4F7FA_100%)] text-slate-900"
    >
      <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full border border-[rgba(29,47,104,0.08)]" />
      <div className="pointer-events-none absolute -right-4 top-36 h-52 w-52 rounded-full border border-[rgba(0,98,97,0.10)]" />

      <div className="mx-auto grid w-full max-w-[1100px] gap-14 px-6 pb-20 pt-20 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-0 lg:pb-24 lg:pt-24">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--color-emphasys-blue)", opacity: 0.65 }}
          >
            Para empresas que han crecido más rápido que su estructura
          </p>

          <h1
            className="mt-6 max-w-[720px] text-[36px] font-extrabold leading-[1.04] tracking-tight md:text-5xl lg:text-[58px]"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            Recupera el control de tu negocio
          </h1>

          <p className="mt-8 max-w-[680px] text-lg leading-relaxed text-slate-600 md:text-xl">
            Cuando una empresa crece, también crecen las decisiones, los pendientes, las personas y la información que hay que coordinar.
          </p>

          <p className="mt-4 max-w-[680px] text-base leading-relaxed text-slate-600 md:text-lg">
            Emphasys ayuda a empresarios a entender qué está frenando a su empresa, recuperar claridad y construir una operación capaz de crecer con mayor control.
          </p>

          <a
            href="https://wa.me/523311107328?text=Hola%2C%20quiero%20conversar%20sobre%20lo%20que%20est%C3%A1%20pasando%20en%20mi%20empresa.%20%C2%BFPodemos%20revisar%20mi%20caso%3F"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(0,98,97,0.18)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(0,98,97,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F9FB]"
            style={{ backgroundColor: "var(--color-emphasys-green)" }}
          >
            Agendar una conversación
            <span aria-hidden="true" className="text-lg">→</span>
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[430px] lg:mx-0">
          <div className="absolute inset-x-10 top-8 h-56 rounded-full bg-[rgba(0,98,97,0.08)] blur-3xl" />

          <div className="relative rounded-[30px] border border-white/80 bg-white/88 p-5 shadow-[0_30px_70px_rgba(29,47,104,0.16)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Empresa conectada</p>
                <p className="mt-1 text-lg font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>
                  Una sola visión del negocio
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(0,98,97,0.10)]">
                <div className="h-3 w-3 rounded-full bg-[var(--color-emphasys-green)] shadow-[0_0_0_7px_rgba(0,98,97,0.10)]" />
              </div>
            </div>

            <div className="relative py-7">
              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[rgba(29,47,104,0.18)]" />
              <div className="relative mx-auto flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[var(--color-emphasys-blue)] text-center text-white shadow-[0_20px_40px_rgba(29,47,104,0.24)]">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">Control</span>
                <span className="mt-1 text-lg font-semibold">Emphasys</span>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {capabilityNodes.map((node, index) => (
                  <div
                    key={node}
                    className={`rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm ${
                      index === capabilityNodes.length - 1 ? "col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[var(--color-emphasys-green)]" />
                      {node}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#F7F9FB] px-4 py-3 text-sm leading-relaxed text-slate-600">
              Información conectada para decidir con más claridad y depender menos de la improvisación.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
