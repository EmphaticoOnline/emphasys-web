import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";

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
}: {
  id?: string;
  title: string;
  children: ReactNode;
  background?: string;
}) => (
  <section id={id} className={`${background} text-slate-900 ${id ? "scroll-mt-28 md:scroll-mt-32" : ""}`}>
    <div className="wrap space-y-4 py-16 lg:py-24">
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const CTA = () => (
  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary">
    Agendar una conversación
  </a>
);

export default function ERPAlaMedidaPage() {
  return (
    <>
      <PageHero
        eyebrow="Automatizar"
        title="ERP a la medida para integrar ventas, seguimiento comercial, compras, inventario y finanzas"
        actions={<CTA />}
      >
        <p>
          Diseñamos e implementamos ERP a la medida a partir de una radiografía completa de tu operación. Conectamos ventas y seguimiento comercial (CRM), compras, inventario y finanzas en un solo lugar para que tu equipo trabaje con información compartida y tomes decisiones con datos confiables.
        </p>
        <p>
          Si primero quieres entender cuándo conviene dar este paso, consulta nuestra guía sobre{" "}
          <a className="font-semibold text-[var(--color-emphasys-green)] underline-offset-4 hover:underline" href="/erp-para-pymes-mexico">
            ERP para pymes en México
          </a>.
        </p>
      </PageHero>
      <div id="metodo" className="sr-only" aria-hidden="true" />

      <Section title="Problemas que resolvemos" background="bg-white" id="impacto">
        <ul className="mt-4 divide-y divide-[rgba(29,47,104,0.10)] border-y border-[rgba(29,47,104,0.10)]">
          {[
            "Datos dispersos en hojas de cálculo, correos y chats.",
            "Oportunidades y seguimientos comerciales que se pierden o dependen de la memoria del vendedor.",
            "Costos sin trazabilidad y márgenes que se diluyen.",
            "Ventas y compras sin sincronización con inventario.",
            "Reportes tardíos que impiden decisiones oportunas.",
          ].map((item) => (
            <li key={item} className="py-4 text-base leading-relaxed text-slate-700">{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Cómo lo hacemos" background="bg-[#eceff4]">
        <ol className="mt-2 space-y-5">
          {[
            "Radiografía Empresarial para entender procesos, riesgos y prioridades.",
            "Diseño de la arquitectura operativa, comercial y financiera que requiere la empresa.",
            "Implementación del ERP a la medida con CRM e integraciones necesarias según el alcance definido.",
            "Despliegue gradual, pruebas y acompañamiento para lograr adopción y resultados.",
          ].map((item, index) => (
            <li key={item} className="flex gap-4 text-base leading-relaxed text-slate-700">
              <span className="font-display text-[var(--color-emphasys-green)]">{String(index + 1).padStart(2, "0")}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <div className="pt-8">
          <CTA />
        </div>
      </Section>
    </>
  );
}
