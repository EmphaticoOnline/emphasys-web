import type { Metadata } from "next";
import type { ReactNode } from "react";

const WHATSAPP_URL =
  "https://wa.me/523312889584?text=Hola%2C%20quiero%20ordenar%20mi%20negocio%20y%20mejorar%20mi%20control%20de%20ventas%20y%20costos.%20%C2%BFPodemos%20revisar%20mi%20caso%3F";

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
  headingAs = "h2",
}: {
  id?: string;
  title: string;
  children: ReactNode;
  background?: string;
  headingAs?: "h1" | "h2";
}) => {
  const Heading = headingAs;
  return (
    <section id={id} className={`${background} text-slate-900`}>
      <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:px-0 lg:py-20 space-y-4">
        <Heading
          className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          style={{ color: "var(--color-emphasys-blue)" }}
        >
          {title}
        </Heading>
        {children}
      </div>
    </section>
  );
};

const CTA = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-8 py-3 text-sm font-semibold text-white shadow-md transition duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
  >
  Agendar una conversación
  </a>
);

export default function ControlDeCostosPage() {
  return (
    <>
      <Section
        id="metodo"
        title="Control de costos con visibilidad financiera real"
        background="bg-[#F7F9FB]"
        headingAs="h1"
      >
        <p className="text-lg leading-relaxed text-slate-600">
          Conectamos compras, inventario, ventas y finanzas para mostrar márgenes y flujo en tiempo real. Reducimos fugas y mejoramos la rentabilidad con reglas claras y tableros accionables.
        </p>
        <CTA />
      </Section>

  <Section title="Problemas típicos" background="bg-white" id="impacto" headingAs="h2">
        <ul className="mt-4 space-y-3 text-base leading-relaxed text-slate-700">
          <li>Compras sin control y sin impacto inmediato en flujo.</li>
          <li>Costos indirectos invisibles que erosionan margen.</li>
          <li>Inventario desalineado con ventas y abastecimiento.</li>
          <li>Tableros financieros que no concilian con la operación.</li>
        </ul>
      </Section>

  <Section title="Implementación" background="bg-slate-50" headingAs="h2">
        <ol className="mt-2 list-decimal space-y-3 pl-6 text-base leading-relaxed text-slate-700">
          <li>Radiografía de costos y flujo de información.</li>
          <li>Diseño de reglas de compras, autorizaciones y centros de costo.</li>
          <li>Integración con inventario, ventas y contabilidad.</li>
          <li>Tableros de margen y flujo con alertas automáticas.</li>
        </ol>
        <div className="pt-6">
          <CTA />
        </div>
      </Section>
    </>
  );
}
