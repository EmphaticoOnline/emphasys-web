import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import RadiographMark from "@/components/visual/RadiographMark";

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
    <div className="wrap py-16 lg:py-24">{children}</div>
  </section>
);

const List = ({ items }: { items: string[] }) => (
  <ol className="mt-8 divide-y divide-[rgba(29,47,104,0.10)] border-y border-[rgba(29,47,104,0.10)]">
    {items.map((item, index) => (
      <li key={item} className="flex gap-5 py-4">
        <span className="w-8 shrink-0 font-display text-[var(--color-emphasys-green)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-base leading-relaxed text-slate-700 md:text-lg">{item}</span>
      </li>
    ))}
  </ol>
);

const SectionBlock = ({ title, description, items }: { title: string; description?: string; items: string[] }) => (
  <div className="space-y-4">
    <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">{title}</h2>
    {description && <p className="text-lg leading-relaxed text-slate-600 md:text-xl">{description}</p>}
    <List items={items} />
  </div>
);

export default function RadiografiaEmpresarialPage() {
  return (
    <>
      <PageHero
        eyebrow="Diagnóstico estratégico"
        title="Radiografía Empresarial"
        visual={<RadiographMark />}
        actions={<a href="#contacto" className="btn-primary">Agendar una conversación</a>}
      >
        <p>
          Una forma estructurada de entender qué está frenando a tu empresa, qué merece atención primero y qué tipo de intervención puede generar mayor valor.
        </p>
        <p>
          No parte de una solución predeterminada. Parte de evidencia, observación y criterio.
        </p>
      </PageHero>

      <SectionWrapper background="bg-white">
        <SectionBlock
          title="¿Por qué una Radiografía?"
          description="Porque los síntomas cotidianos rara vez explican por sí solos qué está causando el problema."
          items={content.why}
        />
      </SectionWrapper>

      <SectionWrapper background="bg-[#eceff4]">
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

      <SectionWrapper background="bg-[#f5f4ef]">
        <div className="space-y-4">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
            Inversión y duración
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="border border-[rgba(29,47,104,0.10)] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Inversión base</p>
              <p className="mt-3 font-display text-2xl text-[var(--color-emphasys-blue)]">$35,000 MXN + IVA</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Para una empresa de complejidad normal.</p>
            </div>
            <div className="border border-[rgba(29,47,104,0.10)] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Duración</p>
              <p className="mt-3 font-display text-2xl text-[var(--color-emphasys-blue)]">3 semanas</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Aproximada. El alcance puede ajustarse cuando la complejidad lo requiere.</p>
            </div>
            <div className="border border-[rgba(29,47,104,0.10)] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Forma de pago</p>
              <p className="mt-3 font-display text-2xl text-[var(--color-emphasys-blue)]">50% / 50%</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">50% al contratar y 50% contra entrega.</p>
            </div>
          </div>
          <p className="text-base leading-relaxed text-slate-600">
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

      <section className="surface-navy">
        <div className="wrap py-16 lg:py-24">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            ¿Qué puede pasar después?
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            La Radiografía no obliga a contratar una solución posterior. A partir de los hallazgos, Emphasys puede recomendar Automatizar, Transformar, combinar ambos caminos o incluso no continuar si otra alternativa es más conveniente.
          </p>
          <p className="mt-6 font-display text-xl text-white">
            Primero entendemos. Después recomendamos.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
