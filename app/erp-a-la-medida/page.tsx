import type { Metadata } from "next";
import type { ReactNode } from "react";

const WHATSAPP_URL =
  "https://wa.me/523312889584?text=Hola%2C%20quiero%20ordenar%20mi%20negocio%20y%20mejorar%20mi%20control%20de%20ventas%20y%20costos.%20%C2%BFPodemos%20revisar%20mi%20caso%3F";

export const metadata: Metadata = {
  title: "ERP a la medida | Software empresarial que integra ventas y finanzas",
  description:
    "ERP a la medida para integrar ventas, compras y finanzas. Control de costos, trazabilidad y automatización de procesos críticos sin perder margen.",
  keywords: [
    "ERP a la medida",
    "software empresarial",
    "automatización de ventas",
    "control de costos",
    "integración inventario finanzas",
  ],
  openGraph: {
    title: "ERP a la medida | Software empresarial que integra ventas y finanzas",
    description:
      "Implementamos ERP a la medida para conectar ventas, compras y finanzas. Controla costos y automatiza procesos con claridad.",
    url: "https://emphasys.mx/erp-a-la-medida",
    type: "article",
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "ERP a la medida | Software empresarial que integra ventas y finanzas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP a la medida | Software empresarial",
    description:
      "ERP a la medida para integrar ventas, compras y finanzas. Control de costos y automatización con claridad.",
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

export default function ERPAlaMedidaPage() {
  return (
    <>
      <Section
        id="metodo"
        title="ERP a la medida para integrar ventas, compras y finanzas"
        background="bg-[#F7F9FB]"
        headingAs="h1"
      >
        <p className="text-lg leading-relaxed text-slate-600">
          Diseñamos e implementamos ERP a la medida a partir de una radiografía completa de tu operación. Conectamos ventas, compras,
          inventario y finanzas en un solo lugar para que tomes decisiones con datos confiables.
        </p>
        <CTA />
      </Section>

  <Section title="Problemas que resolvemos" background="bg-white" id="impacto" headingAs="h2">
        <ul className="mt-4 space-y-3 text-base leading-relaxed text-slate-700">
          <li>Datos dispersos en hojas de cálculo, correos y chats.</li>
          <li>Costos sin trazabilidad y márgenes que se diluyen.</li>
          <li>Ventas y compras sin sincronización con inventario.</li>
          <li>Reportes tardíos que impiden decisiones oportunas.</li>
        </ul>
      </Section>

  <Section title="Cómo lo hacemos" background="bg-slate-50" headingAs="h2">
        <ol className="mt-2 list-decimal space-y-3 pl-6 text-base leading-relaxed text-slate-700">
          <li>Radiografía 360° para entender procesos, riesgos y prioridades.</li>
          <li>Diseño de arquitectura operativa y financiera aprobada por dirección.</li>
          <li>Implementación del ERP a la medida con integraciones necesarias.</li>
          <li>Despliegue gradual, pruebas y acompañamiento ejecutivo.</li>
        </ol>
        <div className="pt-6">
          <CTA />
        </div>
      </Section>
    </>
  );
}
