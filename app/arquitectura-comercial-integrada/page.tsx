import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Arquitectura Comercial Integrada | Emphasys",
  description:
    "La arquitectura que ordena ingreso, criterios comerciales y conexión con operación antes de digitalizar cualquier CRM.",
  openGraph: {
    title: "Arquitectura Comercial Integrada | Emphasys",
    description:
      "Estructura estratégica para el ingreso: reglas comerciales, trazabilidad y control antes de automatizar.",
    url: "https://emphasys.mx/arquitectura-comercial-integrada",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arquitectura Comercial Integrada | Emphasys",
    description:
      "El ingreso requiere arquitectura: claridad en márgenes, integración con operación y trazabilidad completa.",
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
      "La arquitectura comercial alimenta la capa financiera y operativa cuando se integra al Sistema Operativo Empresarial completo.",
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
    <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 lg:px-0 lg:py-20">{children}</div>
  </section>
);

const CTAButton = ({ className = "" }: { className?: string }) => (
  <a
    href="#contacto"
    className={`inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-200 ease-out hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className}`}
  >
    Iniciar Radiografía Empresarial 360°
  </a>
);

const Hero = () => (
  <section className="relative bg-[#F4F6FA] text-slate-900">
    <div className="mx-auto max-w-[1100px] px-6 pt-24 pb-20 sm:px-10 lg:px-0 lg:pt-28 lg:pb-24">
      <p
        className="text-xs font-semibold uppercase tracking-[0.28em]"
        style={{ color: "var(--color-emphasys-blue)", opacity: 0.7 }}
      >
        Arquitectura del ingreso
      </p>
      <h1
        className="mt-6 text-[34px] font-extrabold leading-tight tracking-tight md:text-5xl"
        style={{ color: "var(--color-emphasys-blue)" }}
      >
        La gestión comercial también requiere arquitectura.
      </h1>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
        La Arquitectura Comercial Integrada de Emphasys ordena criterios, márgenes y trazabilidad del ingreso antes de pensar en herramientas. No se digitaliza el desorden.
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
        className="text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: "var(--color-emphasys-blue)", opacity: 0.6 }}
      >
        El problema estructural
      </p>
      <h2
        className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        style={{ color: "var(--color-emphasys-blue)" }}
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
  <Section background="bg-slate-50">
    <div className="space-y-4">
      <p
        className="text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: "var(--color-emphasys-blue)", opacity: 0.6 }}
      >
        Punto de quiebre
      </p>
      <h2
        className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        style={{ color: "var(--color-emphasys-blue)" }}
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
        className="text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: "var(--color-emphasys-blue)", opacity: 0.6 }}
      >
        Propuesta Emphasys
      </p>
      <h2
        className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        style={{ color: "var(--color-emphasys-blue)" }}
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
        Puede implementarse como iniciativa independiente, pero es parte natural del Sistema Operativo Empresarial cuando la empresa decide integrar todo su modelo.
      </p>
    </div>
  </Section>
);

const StructuralSection = () => (
  <Section background="bg-[#F7F9FB]">
    <div className="space-y-8">
      <p
        className="text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: "var(--color-emphasys-blue)", opacity: 0.6 }}
      >
        Componentes estructurales
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {structuralComponents.map((component) => (
          <div key={component.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>
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
        className="text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: "var(--color-emphasys-blue)", opacity: 0.6 }}
      >
        Integración al Sistema Operativo
      </p>
      <h2
        className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        style={{ color: "var(--color-emphasys-blue)" }}
      >
        El ingreso como eje estructural.
      </h2>
      <p className="max-w-4xl text-lg leading-relaxed text-slate-600">
        Cuando la Arquitectura Comercial Integrada se conecta con finanzas y operación dentro del Sistema Operativo Empresarial, cada decisión comercial impacta tableros financieros y capacidad operativa en tiempo real. No es un módulo aislado, es la columna vertebral de cómo entra el dinero a la organización.
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
      <ProblemSection />
      <BreakPointSection />
      <ProposalSection />
      <StructuralSection />
      <IntegrationSection />
      <ClosingSection />
      <ContactSection />
    </>
  );
}
