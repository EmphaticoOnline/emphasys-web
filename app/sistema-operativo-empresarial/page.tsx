import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Sistema Operativo Empresarial | Emphasys",
  description:
    "Infraestructura digital diseñada sobre la Radiografía Empresarial 360° para conectar finanzas, operación y dirección con una sola arquitectura.",
  openGraph: {
    title: "Sistema Operativo Empresarial | Emphasys",
    description:
      "Infraestructura estratégica que se construye únicamente después de la Radiografía 360° para traducir la arquitectura empresarial en tecnología viva.",
    url: "https://emphasys.mx/sistema-operativo-empresarial",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Operativo Empresarial | Emphasys",
    description:
      "Del plano arquitectónico a la infraestructura digital: solo después de la Radiografía Empresarial 360°.",
  },
};

const invisibleIssues = [
  "Información crítica dispersa entre hojas de cálculo, chats y correos.",
  "Procesos que dependen de personas clave en lugar de estructuras repetibles.",
  "Finanzas sin visibilidad consolidada de rentabilidad y flujo real.",
  "Operación que reacciona tarde porque los datos no fluyen entre áreas.",
  "Decisiones guiadas por intuición más que por criterios validados.",
];

const flowSteps = [
  {
    title: "Radiografía",
    description: "Diagnóstico integral que revela cuellos de botella, riesgos y prioridades.",
  },
  {
    title: "Diseño de Arquitectura Operativa",
    description: "El plano que define cómo deben conectarse procesos, datos y responsables.",
  },
  {
    title: "Construcción del Sistema Operativo",
    description: "Infraestructura digital hecha a la medida de la arquitectura aprobada.",
  },
  {
    title: "Acompañamiento Ejecutivo",
    description: "Gobernanza continua para asegurar disciplina, adopción y ajustes finos.",
  },
];

const strategicBlocks = [
  {
    title: "Claridad Financiera",
    description:
      "Consolida indicadores de rentabilidad, flujo y capital de trabajo en un tablero confiable para dirección y finanzas.",
  },
  {
    title: "Integración Operativa",
    description:
      "Sincroniza inventarios, ventas, compras y abastecimiento bajo reglas compartidas que eliminan retrabajos.",
  },
  {
    title: "Dirección Ejecutiva",
    description:
      "Traduce la estrategia en gobierno operativo: roles claros, alertas oportunas y decisiones soportadas en evidencia.",
  },
];

const methodPhases = [
  {
    title: "Radiografía 360° (obligatoria)",
    description: "Trabajo en campo con dirección y áreas clave para entender realidad operativa antes de proponer tecnología.",
  },
  {
    title: "Diseño del modelo operativo",
    description: "Convertimos hallazgos en arquitecturas, flujos y gobernanza aprobada por el comité directivo.",
  },
  {
    title: "Configuración estructural",
    description: "Seleccionamos y configuramos las capas tecnológicas que materializan cada componente del modelo.",
  },
  {
    title: "Migración controlada",
    description: "Trasladamos datos y procesos de manera gradual, con ambientes de pruebas y validaciones cruzadas.",
  },
  {
    title: "Capacitación directiva",
    description: "La alta dirección recibe criterios de lectura, tableros y rutinas de seguimiento para gobernar el sistema.",
  },
  {
    title: "Seguimiento estratégico",
    description: "Monitoreamos indicadores, ajustamos automatizaciones y cuidamos la alineación con la arquitectura original.",
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
  <section className="relative bg-[#F5F7FA] text-slate-900">
    <div className="mx-auto max-w-[1100px] px-6 pt-24 pb-20 sm:px-10 lg:px-0 lg:pt-28 lg:pb-24">
      <p
        className="text-xs font-semibold uppercase tracking-[0.28em]"
        style={{ color: "var(--color-emphasys-blue)", opacity: 0.7 }}
      >
        Infraestructura estratégica
      </p>
      <h1
        className="mt-6 text-[34px] font-extrabold leading-tight tracking-tight md:text-5xl"
        style={{ color: "var(--color-emphasys-blue)" }}
      >
        <span className="block">"Toda empresa opera bajo un sistema.</span>
        <span className="block mt-2">La diferencia es si está diseñado... o improvisado."</span>
      </h1>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
        El Sistema Operativo Empresarial Emphasys es la infraestructura digital que materializa la arquitectura definida en la Radiografía 360°.
      </p>
      <div className="mt-10">
        <CTAButton />
      </div>
      <p className="mt-6 text-sm uppercase tracking-[0.26em] text-slate-500">
        Sin arquitectura previa no hay sistema.
      </p>
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
        El problema invisible
      </p>
      <h2
        className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        style={{ color: "var(--color-emphasys-blue)" }}
      >
        Muchas empresas crecen sin sistema.
      </h2>
      <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
        El crecimiento sostenido exige una base que ordene información, procesos y gobierno. Sin un sistema diseñado, la complejidad se oculta tras héroes operativos y hojas de cálculo.
      </p>
      <ul className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 md:text-lg">
        {invisibleIssues.map((issue) => (
          <li key={issue} className="flex gap-3">
            <span className="mt-2 h-[6px] w-[6px] rounded-full" style={{ backgroundColor: "var(--color-emphasys-blue)" }} />
            <span>{issue}</span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

const FocusShiftSection = () => (
  <Section background="bg-slate-50">
    <div className="space-y-8">
      <p
        className="text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: "var(--color-emphasys-blue)", opacity: 0.6 }}
      >
        Cambio de enfoque
      </p>
      <h2
        className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        style={{ color: "var(--color-emphasys-blue)" }}
      >
        Primero se diseña el modelo. Después se construye el sistema.
      </h2>
      <p className="max-w-4xl text-lg leading-relaxed text-slate-600">
        Este es el flujo estratégico que seguimos en cada intervención. No es una lista de tareas: es una metodología de arquitectura operativa.
      </p>
      <div className="grid gap-6 md:grid-cols-4">
        {flowSteps.map((step, index) => (
          <div
            key={step.title}
            className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(10,20,50,0.04)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>
              {step.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const DefinitionSection = () => (
  <Section>
    <div className="space-y-8">
      <p
        className="text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: "var(--color-emphasys-blue)", opacity: 0.6 }}
      >
        ¿Qué es el Sistema Operativo Empresarial?
      </p>
      <p className="max-w-4xl text-2xl font-semibold leading-normal text-slate-800">
        Una infraestructura digital que conecta finanzas, operación y dirección bajo una arquitectura coherente.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {strategicBlocks.map((block) => (
          <div key={block.title} className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>
              {block.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{block.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const InternalArchitectureSection = () => (
  <Section background="bg-[#F7F9FB]">
    <div className="space-y-6">
      <p
        className="text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: "var(--color-emphasys-blue)", opacity: 0.6 }}
      >
        Arquitectura interna
      </p>
      <h2
        className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        style={{ color: "var(--color-emphasys-blue)" }}
      >
        Un ecosistema estructural, no un catálogo de módulos.
      </h2>
      <div className="space-y-4 text-lg leading-relaxed text-slate-600">
        <p>
          Finanzas, inventarios y ventas se orquestan en un mismo plano de información. Cada movimiento impacta indicadores en tiempo real y
          respeta la secuencia definida en la arquitectura.
        </p>
        <p>
          Compras y abastecimiento se sincronizan con reglas de inventario, políticas de autorización y compromisos con proveedores.
          Los indicadores estratégicos se alimentan automáticamente desde la operación.
        </p>
        <p>
          Las automatizaciones se diseñan como capas de soporte: validan datos, liberan alertas y conectan la ejecución diaria con la dirección.
          Sin promesas de "todo en uno"; solo una infraestructura cohesionada.
        </p>
      </div>
    </div>
  </Section>
);

const MethodologySection = () => (
  <Section>
    <div className="space-y-8">
      <p
        className="text-xs font-semibold uppercase tracking-[0.3em]"
        style={{ color: "var(--color-emphasys-blue)", opacity: 0.6 }}
      >
        Metodología de construcción
      </p>
      <h2
        className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        style={{ color: "var(--color-emphasys-blue)" }}
      >
        Profundidad, no rapidez.
      </h2>
      <div className="space-y-6">
        {methodPhases.map((phase) => (
          <div key={phase.title} className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-emphasys-blue)" }}>
              {phase.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{phase.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const PolicySection = () => (
  <Section background="bg-[var(--color-emphasys-blue)]">
    <div className="space-y-4 text-white">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">Política institucional</p>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        Ningún Sistema Operativo se construye sin arquitectura previa.
      </h2>
      <p className="max-w-3xl text-lg leading-relaxed text-slate-100">
        La Radiografía Empresarial 360° es requisito estructural. No es opcional y no se omite. Solo así garantizamos que la infraestructura digital responde a un diseño sólido, aprobado por dirección y sustentado en evidencia.
      </p>
    </div>
  </Section>
);

const ClosingSection = () => (
  <Section background="bg-[#F4F5F7]">
    <div className="space-y-6">
      <p className="text-xl font-semibold text-slate-800 md:text-2xl">
        "El crecimiento no se improvisa. Se diseña. Y luego se construye."
      </p>
      <CTAButton />
    </div>
  </Section>
);

export default function SistemaOperativoEmpresarialPage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <FocusShiftSection />
      <DefinitionSection />
      <InternalArchitectureSection />
      <MethodologySection />
      <PolicySection />
      <ClosingSection />
      <ContactSection />
    </>
  );
}
