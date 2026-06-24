import type { Metadata } from "next";
import type { ReactNode } from "react";

const WHATSAPP_URL =
  "https://wa.me/523311107328?text=Hola%2C%20quiero%20ordenar%20mi%20negocio%20y%20mejorar%20mi%20control%20de%20ventas%20y%20costos.%20%C2%BFPodemos%20revisar%20mi%20caso%3F";

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

export default function AutomatizacionVentasPage() {
  return (
    <>
      <Section
        id="metodo"
        title="Automatización de ventas con control de margen y trazabilidad"
        background="bg-[#F7F9FB]"
        headingAs="h1"
      >
        <p className="text-lg leading-relaxed text-slate-600">
          Estandarizamos cotizaciones, reglas comerciales y aprobaciones para que cada venta proteja el margen y se integre con inventario y finanzas.
          Automatizamos después de ordenar el proceso, no antes.
        </p>
        <CTA />
      </Section>

  <Section title="Dolores que atendemos" background="bg-white" id="impacto" headingAs="h2">
        <ul className="mt-4 space-y-3 text-base leading-relaxed text-slate-700">
          <li>Seguimiento inconsistente y pérdida de oportunidades.</li>
          <li>Márgenes que se erosionan por descuentos sin control.</li>
          <li>Promesas comerciales desconectadas de inventario o capacidad operativa.</li>
          <li>Falta de trazabilidad desde el lead hasta la facturación.</li>
        </ul>
      </Section>

  <Section title="Implementación" background="bg-slate-50" headingAs="h2">
        <ol className="mt-2 list-decimal space-y-3 pl-6 text-base leading-relaxed text-slate-700">
          <li>Radiografía de ciclo comercial y puntos de fuga.</li>
          <li>Diseño de reglas, aprobaciones y datos obligatorios por etapa.</li>
          <li>Integración con inventario, facturación y finanzas.</li>
          <li>Automatización de alertas, tareas y reportes para dirección.</li>
        </ol>
        <div className="pt-6">
          <CTA />
        </div>
      </Section>
    </>
  );
}
