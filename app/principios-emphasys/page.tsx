import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import DirectionMark from "@/components/visual/DirectionMark";

export const metadata: Metadata = {
  title: "Los 10 principios de Emphasys | Cómo trabajamos",
  description:
    "Conoce los principios que guían cómo Emphasys entiende el negocio, recomienda tecnología, acompaña el cambio y mide los resultados.",
  alternates: { canonical: "https://emphasys.mx/principios-emphasys" },
  openGraph: {
    title: "Los 10 principios de Emphasys | Cómo trabajamos",
    description:
      "Conoce los principios que guían cómo Emphasys entiende el negocio, recomienda tecnología, acompaña el cambio y mide los resultados.",
    url: "https://emphasys.mx/principios-emphasys",
    type: "article",
    images: [{ url: "/social-card.svg", width: 1200, height: 630, alt: "Los 10 principios de Emphasys" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Los 10 principios de Emphasys | Cómo trabajamos",
    description:
      "Conoce los principios que guían cómo Emphasys entiende el negocio, recomienda tecnología, acompaña el cambio y mide los resultados.",
    images: ["/social-card.svg"],
  },
};

const Principle = ({ number, title, children }: { number: string; title: string; children: ReactNode }) => (
  <article className="grid gap-4 border-t border-[rgba(29,47,104,0.12)] py-12 sm:gap-6 sm:py-14 lg:grid-cols-[7.5rem_minmax(0,1fr)] lg:gap-16 lg:py-[4.5rem]">
    <p className="font-display text-[3.4rem] font-semibold leading-none tracking-tight text-[rgba(29,47,104,0.18)] sm:text-7xl">
      {number}
    </p>
    <div className="max-w-2xl lg:pt-2">
      <h3 className="font-display text-[1.65rem] font-semibold leading-snug text-[var(--color-emphasys-blue)] sm:text-3xl">
        {title}
      </h3>
      <div className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{children}</div>
    </div>
  </article>
);

const SectionTitle = ({ id, children }: { id: string; children: ReactNode }) => (
  <h2
    id={id}
    className="font-display max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl"
  >
    {children}
  </h2>
);

export default function PrincipiosEmphasysPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f5f4ef] text-slate-900">
        <div className="grid-faint pointer-events-none absolute inset-0 opacity-70" />
        <div className="wrap relative grid items-center gap-10 pb-16 pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <p className="eyebrow">Nuestra forma de trabajar</p>
            <h1 className="font-display mt-5 max-w-[16ch] text-[34px] font-semibold leading-[1.08] tracking-tight text-[var(--color-emphasys-blue)] sm:text-5xl lg:text-[3.4rem]">
              Los 10 principios de Emphasys
            </h1>
            <p className="font-display mt-8 max-w-[34rem] border-l-2 border-[var(--color-emphasys-green)] pl-5 text-2xl font-medium leading-snug text-[var(--navy-deep)] sm:text-[1.7rem]">
              “Ayudamos a los empresarios a recuperar el control de su empresa y, como consecuencia, de su vida.”
            </p>
            <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-slate-600">
              La tecnología importa. Pero antes están el negocio, las personas, los procesos y los resultados. Estos principios definen cómo tomamos decisiones y cómo nos relacionamos con cada empresa que confía en nosotros.
            </p>
          </div>
          <DirectionMark />
        </div>
      </section>

      <section aria-labelledby="antes-de-soluciones" className="bg-white text-slate-900">
        <div className="wrap pb-2 pt-16 lg:pt-24">
          <SectionTitle id="antes-de-soluciones">Antes de hablar de soluciones, entendemos el negocio</SectionTitle>
          <div className="mt-10 lg:mt-14">
            <Principle number="01" title="El negocio siempre va antes que el software.">
              Primero escuchamos y entendemos el negocio, sus retos, objetivos y frenos. La tecnología es una herramienta, no el punto de partida.
            </Principle>
            <Principle number="02" title="Toda transformación comienza con una Radiografía Empresarial.">
              <p>
                No partimos de diagnósticos superficiales ni de soluciones genéricas. Primero entendemos qué funciona, qué falla y dónde están las oportunidades de mayor impacto.
              </p>
              <Link
                href="/radiografia-empresarial"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-emphasys-green)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-4"
              >
                Conoce la Radiografía Empresarial
                <span aria-hidden="true">→</span>
              </Link>
            </Principle>
            <Principle number="03" title="La tecnología debe adaptarse a la empresa; nunca la empresa a la tecnología.">
              El software debe servir al negocio y respetar aquello que lo hace valioso, no obligarlo a deformarse para encajar en una herramienta rígida.
            </Principle>
          </div>
        </div>

        <div className="surface-navy mt-4">
          <div className="wrap py-14 lg:py-20">
            <article className="grid gap-4 sm:gap-6 lg:grid-cols-[7.5rem_minmax(0,1fr)] lg:gap-16">
              <p className="font-display text-[3.4rem] font-semibold leading-none tracking-tight text-white/25 sm:text-7xl">04</p>
              <div className="max-w-2xl lg:pt-2">
                <h3 className="font-display text-[1.65rem] font-semibold leading-snug text-white sm:text-3xl">
                  Nunca venderemos una solución que no tenga posibilidades reales de éxito.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                  Si las condiciones necesarias no existen, preferimos decirlo y trabajar primero en ellas antes que impulsar una implementación destinada a fracasar.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="resultados" className="bg-[#eceff4] text-slate-900">
        <div className="wrap py-16 lg:py-24">
          <SectionTitle id="resultados">El cambio sólo vale si produce resultados</SectionTitle>
          <div className="mt-10 lg:mt-14">
            <Principle number="05" title="El éxito no se mide por sistemas instalados, sino por resultados obtenidos.">
              Mejores decisiones, menos errores, mayor eficiencia, más ventas, mejor rentabilidad, control del efectivo y una operación más ordenada.
            </Principle>
            <Principle number="06" title="Nos involucramos hasta que el cambio suceda.">
              El trabajo no termina cuando una plataforma funciona técnicamente. Acompañamos la adopción hasta que las nuevas prácticas formen parte de la operación.
            </Principle>
            <Principle number="07" title="Aspiramos a generar mucho más valor del que recibimos.">
              La inversión debe producir un beneficio claramente superior a su costo: en dinero, productividad, reducción de riesgos, información, tiempo o capacidad de decisión.
            </Principle>
          </div>
        </div>
      </section>

      <section aria-labelledby="empresarios" className="bg-white text-slate-900">
        <div className="wrap pb-2 pt-16 lg:pt-24">
          <SectionTitle id="empresarios">Trabajamos como empresarios, no como vendedores de tecnología</SectionTitle>
          <div className="mt-10 lg:mt-14">
            <Principle number="08" title="Hablamos el idioma del empresario.">
              Ventas, inventarios, compras, costos, márgenes, cobranza, flujo de efectivo, operación, liderazgo y personas. La tecnología sólo tiene sentido cuando se conecta con esas realidades.
            </Principle>
          </div>
        </div>

        <div className="surface-navy mt-2">
          <div className="wrap py-16 lg:py-24">
            <article className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
              <div>
                <p className="font-display text-[3.4rem] font-semibold leading-none tracking-tight text-white/25 sm:text-7xl">09</p>
                <h3 className="font-display mt-6 max-w-md text-[1.65rem] font-semibold leading-snug text-white sm:text-3xl">
                  La confianza es el activo más importante de Emphasys.
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
                  Cada recomendación debe fortalecerla. Preferimos perder una venta antes que recomendar algo que no convenga al cliente.
                </p>
              </div>
              <blockquote className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-3">
                <p className="font-display text-[1.7rem] font-medium leading-snug text-white sm:text-3xl lg:text-[2rem]">
                  “Preferimos perder una venta antes que comprometer nuestra credibilidad o recomendar algo que no sea conveniente para el cliente.”
                </p>
              </blockquote>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="proposito" className="overflow-hidden bg-[#f5f4ef] text-slate-900">
        <div className="wrap py-20 lg:py-32">
          <SectionTitle id="proposito">Todo conduce a un propósito</SectionTitle>
          <article className="mt-12 grid gap-6 border-t border-[rgba(29,47,104,0.12)] pt-12 sm:gap-8 lg:mt-16 lg:grid-cols-[7.5rem_minmax(0,1fr)] lg:gap-16 lg:pt-16">
            <p className="font-display text-[4.5rem] font-semibold leading-none tracking-tight text-[rgba(29,47,104,0.16)] sm:text-8xl">
              10
            </p>
            <div className="max-w-3xl lg:pt-2">
              <h3 className="font-display text-[1.85rem] font-semibold leading-snug text-[var(--color-emphasys-blue)] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.18]">
                Nuestro propósito es ayudar a los empresarios a recuperar el control de su empresa y, como consecuencia, de su vida.
              </h3>
              <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                <p>
                  Una empresa bien administrada no sólo genera utilidades. También genera orden, tranquilidad, capacidad para delegar, tiempo y libertad.
                </p>
                <p>
                  Emphasys existe para ayudar a que la empresa deje de dominar al empresario y vuelva a convertirse en el vehículo de sus objetivos.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <ContactSection
        description="No necesitas saber qué sistema necesitas ni llegar con un diagnóstico. Cuéntanos qué está pasando y qué te gustaría cambiar."
        ctaLabel="Agendar una conversación"
      />
    </>
  );
}
