import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Radiografía Empresarial 360° | Emphasys",
  description:
    "Diagnóstico integral que revela cuellos de botella, riesgos y oportunidades antes de invertir en nuevas herramientas. Claridad accionable para decidir con criterio.",
  openGraph: {
    title: "Radiografía Empresarial 360° | Emphasys",
    description:
      "Diagnóstico integral que revela cuellos de botella, riesgos y oportunidades antes de invertir en nuevas herramientas. Claridad accionable para decidir con criterio.",
    url: "https://emphasys.mx/radiografia-empresarial",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radiografía Empresarial 360° | Emphasys",
    description:
      "Diagnóstico integral que revela cuellos de botella, riesgos y oportunidades antes de invertir en nuevas herramientas.",
  },
};

const content = {
  why: [
    "Cuellos de botella invisibles",
    "Desorden operativo",
    "Fricciones entre áreas",
    "Decisiones sin información confiable",
    "Tecnología desconectada del proceso real",
  ],
  includes: [
    "Entrevistas con líderes clave",
    "Revisión de procesos",
    "Análisis de flujo entre áreas",
    "Identificación de riesgos",
    "Evaluación tecnológica y financiera",
    "Mapa de oportunidades estratégicas",
  ],
  deliverables: [
    "Documento estructurado por área",
    "Hallazgos claros",
    "Prioridades estratégicas",
    "Recomendaciones concretas",
    "Propuesta de primer paso viable",
  ],
};

const SectionWrapper = ({
  children,
  background = "bg-white",
}: {
  children: ReactNode;
  background?: string;
}) => (
  <section className={`${background} text-slate-900`}>
    <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:px-0 lg:py-20">{children}</div>
  </section>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="mt-8 space-y-3 text-base leading-relaxed text-slate-700 md:text-lg">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-1 h-[6px] w-[6px] rounded-full" style={{ backgroundColor: "var(--color-emphasys-blue)" }} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const InvestmentBlock = () => (
  <div className="space-y-4">
    <h2
      className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
      style={{ color: "var(--color-emphasys-blue)" }}
    >
      Inversión
    </h2>
    <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
      Inversión referencial: <span className="font-semibold text-slate-900">$25,000 MXN</span>
    </p>
    <p className="text-base leading-relaxed text-slate-600">
      Se ajusta según tamaño y complejidad.
    </p>
    <div className="pt-4">
      <a
        href="#contacto"
        className="inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        Agendar Conversación
      </a>
    </div>
  </div>
);

const Hero = () => (
  <section className="relative bg-[#F7F9FB] text-slate-900">
    <div className="mx-auto w-full max-w-[900px] px-6 pt-20 pb-16 sm:px-10 lg:px-0 lg:pt-24 lg:pb-20">
      <p
        className="text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: "var(--color-emphasys-blue)", opacity: 0.6 }}
      >
        Diagnóstico estratégico
      </p>
      <h1
        className="mt-6 max-w-[820px] text-[32px] font-extrabold leading-[1.06] tracking-tight md:text-4xl lg:text-5xl"
        style={{ color: "var(--color-emphasys-blue)" }}
      >
        Radiografía Empresarial 360°
      </h1>
      <p className="mt-6 max-w-[720px] text-lg leading-relaxed text-slate-600 md:text-xl">
        Antes de cambiar herramientas, entiende cómo está funcionando realmente tu empresa.
      </p>
      <p className="mt-4 text-base font-semibold leading-relaxed text-slate-800 md:text-lg">
        El crecimiento no se improvisa. Se diseña.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#contacto"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-8 py-3 text-sm font-semibold text-white shadow-md transition duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F9FB]"
        >
          Agendar conversación
        </a>
      </div>
    </div>
  </section>
);

const SectionBlock = ({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: string[];
}) => (
  <div className="space-y-4">
    <h2
      className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
      style={{ color: "var(--color-emphasys-blue)" }}
    >
      {title}
    </h2>
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
          title="¿Por qué una radiografía?"
          description="Un diagnóstico integral revela lo que los síntomas diarios ocultan."
          items={content.why}
        />
      </SectionWrapper>

      <SectionWrapper background="bg-slate-50">
        <SectionBlock
          title="¿Qué incluye?"
          description="Trabajo estructurado para entender operación, riesgos y soporte tecnológico."
          items={content.includes}
        />
      </SectionWrapper>

      <SectionWrapper background="bg-white">
        <SectionBlock
          title="¿Qué recibe la empresa?"
          description="Entregables claros para decidir con criterio y ejecutar con orden."
          items={content.deliverables}
        />
      </SectionWrapper>

      <SectionWrapper background="bg-slate-50">
        <InvestmentBlock />
      </SectionWrapper>

      <ContactSection />
    </>
  );
}
