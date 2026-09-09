import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Control de costos | Visibilidad financiera y operación integrada",
  description:
    "Control de costos con software empresarial integrado. Visibilidad de márgenes, flujo y compras alineadas a inventario y ventas.",
  alternates: {
    canonical: "/control-de-costos",
  },
  keywords: [
    "control de costos",
    "software empresarial",
    "ERP a la medida",
    "visibilidad financiera",
    "automatización de compras",
  ],
  openGraph: {
    title: "Control de costos | Visibilidad financiera y operación integrada",
    description:
      "Implementamos control de costos conectando compras, inventario y ventas. Tableros de margen y flujo en tiempo real.",
    url: "https://emphasys.mx/control-de-costos",
    type: "article",
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "Control de costos | Visibilidad financiera y operación integrada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Control de costos | Software empresarial",
    description:
      "Controla costos conectando compras, inventario y ventas con tableros financieros confiables.",
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

export default function ControlDeCostosPage() {
  return (
    <>
      <PageHero
        eyebrow="Control financiero"
        title="Control de costos con visibilidad financiera real"
        actions={<CTA />}
      >
        <p>
          Conectamos compras, inventario, ventas y finanzas para mostrar márgenes y flujo en tiempo real. Reducimos fugas y mejoramos la rentabilidad con reglas claras y tableros accionables.
        </p>
      </PageHero>
      <div id="metodo" className="sr-only" aria-hidden="true" />

      <Section title="Problemas típicos" background="bg-white" id="impacto">
        <ul className="mt-4 divide-y divide-[rgba(29,47,104,0.10)] border-y border-[rgba(29,47,104,0.10)]">
          {[
            "Compras sin control y sin impacto inmediato en flujo.",
            "Costos indirectos invisibles que erosionan margen.",
            "Inventario desalineado con ventas y abastecimiento.",
            "Tableros financieros que no concilian con la operación.",
          ].map((item) => (
            <li key={item} className="py-4 text-base leading-relaxed text-slate-700">{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Implementación" background="bg-[#eceff4]">
        <ol className="mt-2 space-y-5">
          {[
            "Radiografía de costos y flujo de información.",
            "Diseño de reglas de compras, autorizaciones y centros de costo.",
            "Integración con inventario, ventas y contabilidad.",
            "Tableros de margen y flujo con alertas automáticas.",
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
