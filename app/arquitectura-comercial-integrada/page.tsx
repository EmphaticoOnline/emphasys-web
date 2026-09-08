import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Arquitectura Comercial Integrada | Automatización de ventas y ERP a la medida",
  description:
    "Ordena ingreso, márgenes y trazabilidad antes de digitalizar. Automatización de ventas con control de costos y conexión a ERP a la medida.",
  alternates: {
    canonical: "/arquitectura-comercial-integrada",
  },
  keywords: [
    "automatización de ventas",
    "arquitectura comercial",
    "ERP a la medida",
    "control de costos",
    "trazabilidad comercial",
    "software empresarial",
  ],
  openGraph: {
    title: "Arquitectura Comercial Integrada | Automatización de ventas y ERP a la medida",
    description:
      "Estructura estratégica para automatizar ventas, proteger margen y conectar con ERP/finanzas.",
    url: "https://emphasys.mx/arquitectura-comercial-integrada",
    type: "article",
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "Arquitectura Comercial Integrada | Automatización de ventas y ERP a la medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arquitectura Comercial Integrada | Automatización de ventas y ERP a la medida",
    description:
      "Arquitectura comercial que protege margen, automatiza ventas y conecta con operación y finanzas.",
    images: ["/social-card.svg"],
  },
};

const problemPoints = [
  "Cotizaciones construidas sin un criterio uniforme ni base comparativa.",
  "Margen que se diluye porque no existe un control metodológico de costos.",
  "Seguimiento inconsistente que depende de estilos personales.",
  "Facturación desconectada de la operación y del cumplimiento real.",
];

const proposalHighlights = [
  "Establece reglas comerciales explícitas, aprobadas por dirección.",
  "Estandariza criterios y formatos de cotización para preservar margen.",
  "Conecta las decisiones comerciales con la estructura real de costos.",
  "Vincula facturación con la operación para asegurar cumplimiento.",
  "Genera trazabilidad completa del ingreso, del contacto al cobro.",
];

const structuralComponents = [
  {
    title: "Etapas definidas con gobernanza",
    description:
      "Cada fase del ciclo comercial tiene responsables, entregables y criterios de avance validados con la dirección comercial y operativa.",
  },
  {
    title: "Información obligatoria antes de cotizar",
    description:
      "Se establecen datos mínimos por segmento, riesgos permitidos y documentación que respalde cada propuesta antes de enviarse.",
  },
  {
    title: "Control de margen",
    description:
      "El margen objetivo se protege con reglas de aprobación y conexión directa con la estructura de costos aprobada.",
  },
  {
    title: "Integración con inventario o ejecución",
    description:
      "La promesa comercial se enlaza con capacidades reales: inventario disponible, capacidad operativa y políticas de cumplimiento.",
  },
  {
    title: "Registro formal del ciclo completo",
    description:
      "Desde la detección de oportunidad hasta la facturación, cada paso queda documentado para auditoría y aprendizaje institucional.",
  },
  {
    title: "Coherencia con el Sistema Operativo",
    description:
      "La arquitectura comercial alimenta la capa financiera y operativa cuando se integra a la Plataforma Integral de Negocios completa.",
  },
];

const Section = ({
  children,
  background = "bg-white",
}: {
  children: ReactNode;
  background?: string;
}) => (
  <section className={`${background} text-slate-900`}>
    <div className="wrap py-16 lg:py-24">{children}</div>
  </section>
);

const CTAButton = ({ className = "" }: { className?: string }) => (
  <a
    href="#contacto"
    className={`btn-primary ${className}`}
  >
    Iniciar Radiografía Empresarial 360°
  </a>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-[#f5f4ef] text-slate-900">
    <div className="wrap relative pb-20 pt-16 lg:pb-24 lg:pt-20">
      <p
        className="eyebrow"
      >
        Arquitectura del ingreso
      </p>
      <h1 className="font-display mt-6 text-[34px] font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] md:text-5xl">
        Arquitectura Comercial (Diseño sobre el Core)
      </h1>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
        Diseñamos las reglas y flujos comerciales que se conectan al Emphasys Core. Así, cada módulo (CRM, WhatsApp, facturación) hereda la misma estructura y control de margen.
      </p>
      <div className="mt-10">
        <CTAButton />
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <Section>
    <div className="space-y-6">
      <p
        className="eyebrow"
      >
        El problema estructural
      </p>
      <h2
        className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-[var(--color-emphasys-blue)] font-display"
      >
        Sin reglas, el ingreso depende de improvisaciones.
      </h2>
      <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
        La mayoría de las áreas comerciales operan con héroes individuales. La información vive en múltiples formatos y la rentabilidad se decide caso por caso.
      </p>
      <ul className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 md:text-lg">
        {problemPoints.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-2 h-[6px] w-[6px] rounded-full" style={{ backgroundColor: "var(--color-emphasys-blue)" }} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

const BreakPointSection = () => (
  <Section background="bg-[#eceff4]">
    <div className="space-y-4">
      <p
        className="eyebrow"
      >
        Punto de quiebre
      </p>
      <h2
        className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-[var(--color-emphasys-blue)] font-display"
      >
        Digitalizar sin estructura solo automatiza el desorden.
      </h2>
      <p className="max-w-4xl text-lg leading-relaxed text-slate-600">
        Un CRM sin arquitectura termina siendo un registro costoso de la misma falta de disciplina. Primero se diseñan las reglas, después se elige la herramienta.
      </p>
    </div>
  </Section>
);

const ProposalSection = () => (
  <Section>
    <div className="space-y-6">
      <p
        className="eyebrow"
      >
        Propuesta Emphasys
      </p>
      <h2
        className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-[var(--color-emphasys-blue)] font-display"
      >
        Arquitectura Comercial Integrada.
      </h2>
      <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
        No es un CRM. Es la estructura que vuelve gobernable el ingreso y lo conecta con operación.
      </p>
      <ul className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 md:text-lg">
        {proposalHighlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-[6px] w-[6px] rounded-full" style={{ backgroundColor: "var(--color-emphasys-blue)" }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-base leading-relaxed text-slate-600">
        Puede implementarse como iniciativa independiente, pero es parte natural de la Plataforma Integral de Negocios cuando la empresa decide integrar todo su modelo.
      </p>
    </div>
  </Section>
);

const StructuralSection = () => (
  <Section background="bg-[#f5f4ef]">
    <div className="space-y-8">
      <p
        className="eyebrow"
      >
        Componentes estructurales
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {structuralComponents.map((component) => (
          <div key={component.title} className="border border-[rgba(29,47,104,0.10)] bg-white p-6">
            <h3 className="text-xl font-semibold text-[var(--color-emphasys-blue)]">
              {component.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{component.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const IntegrationSection = () => (
  <Section>
    <div className="space-y-5">
      <p
        className="eyebrow"
      >
        Integración al Sistema Operativo
      </p>
      <h2
        className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-[var(--color-emphasys-blue)] font-display"
      >
        El ingreso como eje estructural.
      </h2>
      <p className="max-w-4xl text-lg leading-relaxed text-slate-600">
        Cuando la Arquitectura Comercial Integrada se conecta con finanzas y operación dentro de la Plataforma Integral de Negocios, cada decisión comercial impacta tableros financieros y capacidad operativa en tiempo real. No es un módulo aislado, es la columna vertebral de cómo entra el dinero a la organización.
      </p>
    </div>
  </Section>
);

const ClosingSection = () => (
  <Section background="bg-[#F4F5F7]">
    <div className="space-y-6">
      <p className="text-xl font-semibold text-slate-800 md:text-2xl">
        Antes de intervenir el proceso comercial, diagnosticamos su arquitectura actual.
      </p>
      <CTAButton />
    </div>
  </Section>
);

export default function ArquitecturaComercialIntegradaPage() {
  return (
    <>
      <Hero />
      <div id="metodo" className="sr-only" aria-hidden="true" />
      <div id="impacto" className="sr-only" aria-hidden="true" />
      <ProblemSection />
      <BreakPointSection />
      <ProposalSection />
      <StructuralSection />
      <IntegrationSection />
      <ClosingSection />
      <Section background="bg-white">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[var(--color-emphasys-blue)]">
            Rutas relacionadas
          </h3>
          <p className="text-base leading-relaxed text-slate-700">
            También te puede interesar <a className="text-[var(--color-emphasys-green)] font-semibold" href="/erp-a-la-medida">ERP a la medida</a> o
            <a className="text-[var(--color-emphasys-green)] font-semibold ml-2" href="/control-de-costos">Control de costos</a>.
          </p>
        </div>
      </Section>
      <ContactSection />
    </>
  );
}
