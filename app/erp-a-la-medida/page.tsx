import type { Metadata } from "next";
import type { ReactNode } from "react";

const WHATSAPP_URL =
  "https://wa.me/523311107328?text=Hola%2C%20quiero%20ordenar%20mi%20negocio%20y%20mejorar%20mi%20control%20de%20ventas%20y%20costos.%20%C2%BFPodemos%20revisar%20mi%20caso%3F";

export const metadata: Metadata = {
  title: "ERP a la medida | Ventas, CRM, compras, inventario y finanzas",
  description:
    "ERP a la medida para integrar ventas, seguimiento comercial CRM, compras, inventario y finanzas. Control, trazabilidad y automatización sobre una sola plataforma.",
  alternates: {
    canonical: "/erp-a-la-medida",
  },
  keywords: [
    "ERP a la medida",
    "software empresarial",
    "CRM",
    "seguimiento comercial",
    "automatización de ventas",
    "control de costos",
    "integración inventario finanzas",
  ],
  openGraph: {
    title: "ERP a la medida | Ventas, CRM, compras, inventario y finanzas",
    description:
      "Conectamos ventas, seguimiento comercial, compras, inventario y finanzas para operar con información confiable y una sola fuente de verdad.",
    url: "https://emphasys.mx/erp-a-la-medida",
    type: "article",
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "ERP a la medida | Ventas, CRM, compras, inventario y finanzas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP a la medida | Ventas, CRM, compras, inventario y finanzas",
    description:
      "ERP a la medida para integrar ventas, seguimiento comercial CRM, compras, inventario y finanzas.",
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
        title="ERP a la medida para integrar ventas, seguimiento comercial, compras, inventario y finanzas"
        background="bg-[#F7F9FB]"
        headingAs="h1"
      >
        <p className="text-lg leading-relaxed text-slate-600">
          Diseñamos e implementamos ERP a la medida a partir de una radiografía completa de tu operación. Conectamos ventas y seguimiento comercial (CRM), compras, inventario y finanzas en un solo lugar para que tu equipo trabaje con información compartida y tomes decisiones con datos confiables.
        </p>
        <p className="text-base leading-relaxed text-slate-600">
          Si primero quieres entender cuándo conviene dar este paso, consulta nuestra guía sobre{" "}
          <a className="font-semibold text-[var(--color-emphasys-green)] underline-offset-4 hover:underline" href="/erp-para-pymes-mexico">
            ERP para pymes en México
          </a>.
        </p>
        <CTA />
      </Section>

      <Section title="Problemas que resolvemos" background="bg-white" id="impacto" headingAs="h2">
        <ul className="mt-4 space-y-3 text-base leading-relaxed text-slate-700">
          <li>Datos dispersos en hojas de cálculo, correos y chats.</li>
          <li>Oportunidades y seguimientos comerciales que se pierden o dependen de la memoria del vendedor.</li>
          <li>Costos sin trazabilidad y márgenes que se diluyen.</li>
          <li>Ventas y compras sin sincronización con inventario.</li>
          <li>Reportes tardíos que impiden decisiones oportunas.</li>
        </ul>
      </Section>

      <Section title="Cómo lo hacemos" background="bg-slate-50" headingAs="h2">
        <ol className="mt-2 list-decimal space-y-3 pl-6 text-base leading-relaxed text-slate-700">
          <li>Radiografía Empresarial para entender procesos, riesgos y prioridades.</li>
          <li>Diseño de la arquitectura operativa, comercial y financiera que requiere la empresa.</li>
          <li>Implementación del ERP a la medida con CRM e integraciones necesarias según el alcance definido.</li>
          <li>Despliegue gradual, pruebas y acompañamiento para lograr adopción y resultados.</li>
        </ol>
        <div className="pt-6">
          <CTA />
        </div>
      </Section>
    </>
  );
}
