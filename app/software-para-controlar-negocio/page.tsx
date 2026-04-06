import type { Metadata } from "next";

const WHATSAPP_URL =
  "https://wa.me/523312889584?text=Hola%2C%20quiero%20ordenar%20mi%20negocio%20y%20mejorar%20mi%20control%20de%20ventas%20y%20costos.%20%C2%BFPodemos%20revisar%20mi%20caso%3F";

export const metadata: Metadata = {
  title: "Software para controlar negocio | Recupera el control operativo",
  description:
    "Software para controlar tu negocio y ordenar la operación. Recupera claridad financiera y operativa sin grandes inversiones.",
  openGraph: {
    title: "Software para controlar negocio | Recupera el control operativo",
    description:
      "Ordena tu operación y recupera el control financiero con un sistema claro y sencillo.",
    url: "https://emphasys.mx/software-para-controlar-negocio",
    type: "article",
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "Software para controlar negocio | Recupera el control operativo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software para controlar negocio",
    description:
      "Ordena tu operación y recupera el control financiero con un sistema claro y sencillo.",
    images: ["/social-card.svg"],
  },
};

const CTA = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-8 py-3 text-sm font-semibold text-white shadow-md transition duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
  >
    Quiero ordenar mi negocio
  </a>
);

export default function SoftwareParaControlarNegocioPage() {
  return (
    <section className="bg-[#F7F9FB] text-slate-900">
      <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:px-0 lg:py-20 space-y-4">
        <h1
          className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          style={{ color: "var(--color-emphasys-blue)" }}
        >
          Tu negocio creció, pero ya no tienes control.
        </h1>
        <p className="text-lg leading-relaxed text-slate-600">
          No sabes exactamente cuánto ganas (o si ganas), dónde está tu dinero o
          en qué se está yendo. Es momento de ordenar tu operación y recuperar
          el control, sin grandes inversiones y de forma clara y sencilla.
        </p>
        <CTA />
      </div>
    </section>
  );
}
