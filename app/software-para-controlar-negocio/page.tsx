import type { Metadata } from "next";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/523312889584?text=Hola%2C%20quiero%20ordenar%20mi%20negocio%20y%20mejorar%20mi%20control%20de%20ventas%20y%20costos.%20%C2%BFPodemos%20revisar%20mi%20caso%3F";

export const metadata: Metadata = {
  title: "Software para controlar negocios en crecimiento | ERP para pymes en expansión | Emphasys",
  description:
    "ERP para pymes que buscan crecer sin perder control. Recupera claridad operativa, mejora tu estructura y toma decisiones con información confiable.",
  alternates: {
    canonical: "/software-para-controlar-negocio",
  },
  openGraph: {
    title: "Software para controlar negocios en crecimiento | ERP para pymes en expansión | Emphasys",
    description:
      "ERP para pymes que buscan crecer sin perder control. Recupera claridad operativa, mejora tu estructura y toma decisiones con información confiable.",
    url: "https://emphasys.mx/software-para-controlar-negocio",
    type: "website",
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
    title: "Software para controlar negocios en crecimiento | ERP para pymes en expansión | Emphasys",
    description:
      "ERP para pymes que buscan crecer sin perder control. Recupera claridad operativa, mejora tu estructura y toma decisiones con información confiable.",
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

const signals = [
  "El dueño sigue resolviendo todo.",
  "La información vive entre Excel, WhatsApp y llamadas.",
  "Ventas, operación y administración trabajan desconectadas.",
  "Los errores empiezan a multiplicarse.",
  "Nadie sabe cuál número es el correcto.",
  "Hay más trabajo… pero no más claridad.",
  "El crecimiento empieza a sentirse más pesado que emocionante.",
];

const benefits = [
  {
    title: "Más claridad",
    description:
      "Entiendes qué está pasando en ventas, operación y finanzas sin depender de reportes dispersos.",
  },
  {
    title: "Más control",
    description:
      "Tus procesos dejan de depender de personas o seguimientos manuales para sostener la operación.",
  },
  {
    title: "Más trazabilidad",
    description:
      "Cada decisión y cada movimiento deja rastro para que puedas revisar, corregir y escalar con orden.",
  },
  {
    title: "Mejor decisión",
    description:
      "El negocio empieza a responder con información confiable, no con intuición o urgencias del día.",
  },
];

const cases = [
  {
    company: "Cristafilm",
    quote:
      "Emphasys se convirtió en un traje a la medida para nuestra operación. Pasamos del desorden a tener claridad financiera real, control sobre nuestro presupuesto y mejores prácticas comerciales que fortalecieron nuestra rentabilidad.",
    author: "Enrique Ramírez — Socio Fundador",
    logo: "/logos/logo-cristafilm.png",
  },
  {
    company: "Canteras Santa Lucía",
    quote:
      "Pasamos de no tener control claro de nuestros números a tomar decisiones con mayor seguridad. Mejoramos el cálculo de precios, protegimos nuestro margen y eso se reflejó en un impulso real en ventas. Acabamos de tener nuestro mejor año en ventas.",
    author: "Mónica V. Grajeda — Directora General",
    logo: "/logos/logo-santa-lucia.JPG",
  },
  {
    company: "Grupo Supplier",
    quote:
      "Crecimos de manera ordenada, eliminando cuellos de botella operativos y fortaleciendo la supervisión interna. Hoy tomamos decisiones estratégicas con información clara y una estructura que sostiene nuestro crecimiento.",
    author: "Diego Abad — Socio Fundador",
    logo: "/logos/logo-grupo-supplier.png",
  },
  {
    company: "Rúnika",
    quote:
      "Pasamos de operar por intuición a tomar decisiones con estructura y visión. El impacto no solo se ve en la organización, se ve en nuestras utilidades. El acompañamiento estratégico de Emphasys ha sido fundamental en nuestro crecimiento.",
    author: "Ramón Valadez — Director General",
    logo: "/logos/logo-runika.jpg",
  },
];

export default function SoftwareParaControlarNegocioPage() {
  return (
    <>
      <section className="relative bg-[#F7F9FB] text-slate-900">
        <div className="mx-auto max-w-[900px] px-6 pb-16 pt-20 sm:px-10 lg:px-0 lg:pb-20 lg:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.32em]" style={{ color: "var(--color-emphasys-blue)", opacity: 0.65 }}>
            ERP para pymes que buscan crecer sin perder control.
          </p>
          <h1
            className="mt-5 max-w-[820px] text-[32px] font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            Tu negocio está creciendo… pero el control se está perdiendo.
          </h1>
          <p className="mt-6 max-w-[790px] text-lg leading-relaxed text-slate-600 sm:text-xl">
            Cuando una empresa crece sin estructura, el desorden empieza a afectar ventas, operación y rentabilidad. Emphasys ayuda a recuperar control y claridad.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTA />
            <p className="max-w-[360px] text-sm leading-relaxed text-slate-500">
              Una conversación consultiva para entender dónde se está perdiendo la estructura y por dónde conviene empezar.
            </p>
          </div>
          <div className="mt-14 h-px w-full bg-slate-200" />
        </div>
      </section>

      <section className="bg-white text-slate-900">
        <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:px-0 lg:py-20">
          <div className="space-y-4">
            <h2 className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
              El problema no siempre se nota en las ventas.
              <br />
              Empieza a notarse en el desgaste.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {signals.map((signal) => (
              <div key={signal} className="rounded-2xl border border-slate-200 bg-[#F7F9FB] px-5 py-4 shadow-sm">
                <p className="text-base leading-relaxed text-slate-700">{signal}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-[760px] text-lg font-medium leading-relaxed text-slate-700">
            El problema no es el crecimiento.
            <br />
            El problema es crecer sin estructura.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:px-0 lg:py-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
              Tu empresa no necesita más esfuerzo.
              <br />
              Necesita estructura.
            </h2>
            <div className="max-w-[820px] space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Muchas empresas intentan resolver el desorden agregando más personas o más juntas.
              </p>
              <p>
                Pero cuando la operación no tiene estructura, el crecimiento empieza a generar más fricción, más desgaste y más dependencia del dueño.
              </p>
              <p>
                Antes de automatizar, necesitas claridad.
              </p>
              <p>
                Claridad sobre procesos, responsabilidades, información y decisiones.
              </p>
              <p>Ahí es donde entra Emphasys.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-900">
        <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:px-0 lg:py-20">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--color-emphasys-blue)", opacity: 0.65 }}>
              Una sola estructura para recuperar control sobre todo tu negocio
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
              Una sola estructura para recuperar control sobre todo tu negocio.
            </h2>
            <div className="max-w-[820px] space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Emphasys conecta ventas, operación, administración y finanzas sobre una sola fuente de información.
              </p>
              <p>
                En lugar de trabajar con sistemas aislados, procesos improvisados y datos dispersos, tu empresa empieza a operar con claridad, trazabilidad y control.
              </p>
              <p>
                Cada área deja de trabajar por separado.
              </p>
              <p>
                La información deja de depender de Excel, llamadas o seguimiento manual.
              </p>
              <p>Y el dueño deja de cargar con toda la operación.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Ventas y operación conectadas",
                desc: "El flujo comercial deja de romperse entre cotizaciones, pedidos, entregas y cobranza.",
              },
              {
                title: "Administración con visibilidad",
                desc: "Compras, gastos, inventario y seguimiento financiero viven dentro de la misma lógica operativa.",
              },
              {
                title: "Decisiones con contexto",
                desc: "Las áreas dejan de interpretar números distintos y empiezan a trabajar con una sola referencia.",
              },
              {
                title: "Menos dependencia del dueño",
                desc: "La empresa gana estructura para funcionar mejor sin que todo dependa de una sola persona.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#F7F9FB] p-6 shadow-sm">
                <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:px-0 lg:py-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
              Lo que cambia cuando recuperas estructura
            </h2>
            <p className="max-w-[760px] text-lg leading-relaxed text-slate-600">
              No hablamos de catálogo técnico. Hablamos de cómo se siente operar con claridad, menos fricción y mejores decisiones.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>
                  {benefit.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="casos" className="bg-white text-slate-900 scroll-mt-28 md:scroll-mt-32">
        <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:px-0 lg:py-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
              Impacto real en empresas reales
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Cuando la estructura es correcta, el crecimiento deja de sentirse caótico y empieza a volverse sostenible.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {cases.map((item) => (
              <div key={item.company} className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex flex-col space-y-3">
                  <Image
                    src={item.logo}
                    alt={item.company}
                    width={220}
                    height={64}
                    className="h-14 w-auto object-contain opacity-80"
                  />
                  <p className="text-sm font-semibold text-slate-900">{item.company}</p>
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate-700">{item.quote}</p>
                <p className="mt-4 text-sm text-slate-500">{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-[900px] px-6 py-16 text-center sm:px-10 lg:px-0 lg:py-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
              Conversemos sobre cómo recuperar el control de tu negocio.
            </h2>
            <p className="mx-auto max-w-[720px] text-lg leading-relaxed text-slate-600">
              Si tu empresa ya está creciendo y el desorden empieza a pesar más que ayudar, vale la pena revisar dónde está la pérdida de estructura y qué conviene ordenar primero.
            </p>
          </div>
          <div className="pt-6 flex justify-center">
            <CTA />
          </div>
          <p className="mt-4 text-sm font-medium text-slate-500">
            Sin compromisos. Solo una conversación clara.
          </p>
        </div>
      </section>
    </>
  );
}
