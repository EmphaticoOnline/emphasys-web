import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Radiografía Empresarial | Diagnóstico estratégico para empresas",
  description:
    "Radiografía Empresarial de Emphasys: diagnóstico estratégico para entender qué está frenando a tu empresa, priorizar problemas y definir el siguiente paso con criterio.",
  alternates: { canonical: "/radiografia-empresarial" },
  keywords: [
    "Radiografía empresarial",
    "diagnóstico empresarial",
    "diagnóstico de procesos",
    "orden empresarial",
    "empresa en crecimiento",
    "control empresarial",
  ],
  openGraph: {
    title: "Radiografía Empresarial | Emphasys",
    description:
      "Diagnóstico estratégico para entender qué está frenando a tu empresa, qué merece atención primero y qué intervención puede generar mayor valor.",
    url: "https://emphasys.mx/radiografia-empresarial",
    type: "article",
    images: [{ url: "/social-card.svg", width: 1200, height: 630, alt: "Radiografía Empresarial de Emphasys" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radiografía Empresarial | Emphasys",
    description:
      "Diagnóstico estratégico para entender qué está frenando a tu empresa y definir el siguiente paso con criterio.",
    images: ["/social-card.svg"],
  },
};

const content = {
  why: [
    "Problemas que se repiten sin resolver su causa",
    "Información dispersa o poco confiable",
    "Responsabilidades y procesos poco claros",
    "Dependencia excesiva del dueño o de personas clave",
    "Errores, retrabajos y fugas de tiempo o dinero",
  ],
  includes: [
    "Entrevistas con personas clave",
    "Observación de la operación y revisión de evidencia",
    "Análisis de procesos, responsabilidades e información",
    "Identificación de hallazgos con impacto real",
    "Priorización de problemas y oportunidades",
  ],
  deliverables: [
    "Reporte ejecutivo con hallazgos centrales",
    "Prioridades claras para actuar",
    "Recomendaciones concretas",
    "Una ruta crítica de intervención",
    "Claridad suficiente para decidir qué hacer después",
  ],
};

const SectionWrapper = ({ children, background = "bg-white" }: { children: ReactNode; background?: string }) => (
  <section className={`${background} text-slate-900`}>
    <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:px-0 lg:py-20">{children}</div>
  </section>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="mt-8 space-y-3 text-base leading-relaxed text-slate-700 md:text-lg">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full" style={{ backgroundColor: "var(--color-emphasys-blue)" }} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Hero = () => (
  <section className="relative bg-[#F7F9FB] text-slate-900">
    <div className="mx-auto w-full max-w-[900px] px-6 pt-20 pb-16 sm:px-10 lg:px-0 lg:pt-24 lg:pb-20">
      <p className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--color-emphasys-blue)", opacity: 0.6 }}>
        Diagnóstico estratégico
      </p>
      <h1 className="mt-6 max-w-[820px] text-[32px] font-extrabold leading-[1.06] tracking-tight md:text-4xl lg:text-5xl" style={{ color: "var(--color-emphasys-blue)" }}>
        Radiografía Empresarial
      </h1>
      <p className="mt-6 max-w-[760px] text-lg leading-relaxed text-slate-600 md:text-xl">
        Una forma estructurada de entender qué está frenando a tu empresa, qué merece atención primero y qué tipo de intervención puede generar mayor valor.
      </p>
      <p className="mt-4 max-w-[760px] text-base leading-relaxed text-slate-600 md:text-lg">
        No parte de una solución predeterminada. Parte de evidencia, observación y criterio.
      </p>
      <div className="mt-10">
        <a href="#contacto" className="inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-8 py-3 text-sm font-semibold text-white shadow-md transition duration-200 ease-out hover:-translate-y-0.5 hover:brightness-90">
          Agendar una conversación
        </a>
      </div>
    </div>
  </section>
);

const SectionBlock = ({ title, description, items }: { title: string; description?: string; items: string[] }) => (
  <div className="space-y-4">
    <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>{title}</h2>
    {description && <p className="text-lg leading-relaxed text-slate-600 md:text-xl">{description}</p>}
    <List items={items} />
  </div>
);

export default function RadiografiaEmpresarialPage() {
  return (
    <>
      <Hero />

      <SectionWrapper background="bg-white">
        <SectionBlock
          title="¿Por qué una Radiografía?"
          description="Porque los síntomas cotidianos rara vez explican por sí solos qué está causando el problema."
          items={content.why}
        />
      </SectionWrapper>

      <SectionWrapper background="bg-slate-50">
        <SectionBlock
          title="¿Cómo trabajamos?"
          description="Entrevistamos, observamos y validamos antes de convertir una percepción en un hallazgo."
          items={content.includes}
        />
      </SectionWrapper>

      <SectionWrapper background="bg-white">
        <SectionBlock
          title="¿Qué recibe la empresa?"
          description="La Radiografía tiene valor por sí misma. Al terminar, la empresa recibe claridad, prioridades y recomendaciones concretas, continúe o no con Emphasys."
          items={content.deliverables}
        />
      </SectionWrapper>

      <SectionWrapper background="bg-slate-50">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
            Inversión y duración
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
            Inversión base para una empresa de complejidad normal: <span className="font-semibold text-slate-900">$35,000 MXN + IVA</span>.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            El alcance puede ajustarse cuando la complejidad de la empresa lo requiere. El proceso normalmente se desarrolla en aproximadamente tres semanas.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            Forma de pago: 50% al contratar y 50% contra entrega.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="bg-white">
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
            ¿Qué puede pasar después?
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            La Radiografía no obliga a contratar una solución posterior. A partir de los hallazgos, Emphasys puede recomendar Automatizar, Transformar, combinar ambos caminos o incluso no continuar si otra alternativa es más conveniente.
          </p>
          <p className="text-base font-semibold leading-relaxed text-slate-800">
            Primero entendemos. Después recomendamos.
          </p>
        </div>
      </SectionWrapper>

      <ContactSection />
    </>
  );
}
