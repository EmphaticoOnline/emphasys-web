import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Automatización de ventas | Control de margen y trazabilidad",
  description:
    "Automatización de ventas conectada a inventario y finanzas. Protege margen, estandariza cotizaciones y gana trazabilidad de punta a punta.",
  alternates: {
    canonical: "/automatizacion-ventas",
  },
  keywords: [
    "automatización de ventas",
    "control de margen",
    "trazabilidad comercial",
    "ERP a la medida",
    "software empresarial",
  ],
  openGraph: {
    title: "Automatización de ventas | Control de margen y trazabilidad",
    description:
      "Automatizamos ventas con reglas claras, integración a inventario y finanzas para proteger margen y eliminar fugas.",
    url: "https://emphasys.mx/automatizacion-ventas",
    type: "article",
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "Automatización de ventas | Control de margen y trazabilidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización de ventas | Control de margen",
    description:
      "Automatiza ventas con trazabilidad, control de margen y conexión a inventario/finanzas.",
    images: ["/social-card.svg"],
  },
};

const Section = ({
  id,
  title,
  children,
  background = "bg-white",
}: {
  id?: string;
  title: string;
  children: ReactNode;
  background?: string;
}) => (
  <section id={id} className={`${background} text-slate-900 ${id ? "scroll-mt-28 md:scroll-mt-32" : ""}`}>
    <div className="wrap space-y-4 py-16 lg:py-24">
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const CTA = () => (
  <a href="#contacto" className="btn-primary">
    Agendar una conversación
  </a>
);

export default function AutomatizacionVentasPage() {
  return (
    <>
      <PageHero
        eyebrow="Automatizar"
        title="Automatización de ventas con control de margen y trazabilidad"
        actions={<CTA />}
      >
        <p>
          Estandarizamos cotizaciones, reglas comerciales y aprobaciones para que cada venta proteja el margen y se integre con inventario y finanzas.
          Automatizamos después de ordenar el proceso, no antes.
        </p>
      </PageHero>
      <div id="metodo" className="sr-only" aria-hidden="true" />

      <Section title="Dolores que atendemos" background="bg-white" id="impacto">
        <ul className="mt-4 divide-y divide-[rgba(29,47,104,0.10)] border-y border-[rgba(29,47,104,0.10)]">
          {[
            "Seguimiento inconsistente y pérdida de oportunidades.",
            "Márgenes que se erosionan por descuentos sin control.",
            "Promesas comerciales desconectadas de inventario o capacidad operativa.",
            "Falta de trazabilidad desde el lead hasta la facturación.",
          ].map((item) => (
            <li key={item} className="py-4 text-base leading-relaxed text-slate-700">{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Implementación" background="bg-[#eceff4]">
        <ol className="mt-2 space-y-5">
          {[
            "Radiografía de ciclo comercial y puntos de fuga.",
            "Diseño de reglas, aprobaciones y datos obligatorios por etapa.",
            "Integración con inventario, facturación y finanzas.",
            "Automatización de alertas, tareas y reportes para dirección.",
          ].map((item, index) => (
            <li key={item} className="flex gap-4 text-base leading-relaxed text-slate-700">
              <span className="font-display text-[var(--color-emphasys-green)]">{String(index + 1).padStart(2, "0")}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <div className="pt-8">
          <CTA />
        </div>
      </Section>

      <ContactSection />
    </>
  );
}
