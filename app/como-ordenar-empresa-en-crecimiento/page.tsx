import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Cómo ordenar una empresa en crecimiento | Emphasys",
  description:
    "Tu empresa crece pero el control disminuye. Entiende por qué pasa y cuáles son los pasos para ordenar una empresa que creció más rápido que sus procesos.",
  alternates: {
    canonical: "/como-ordenar-empresa-en-crecimiento",
  },
  keywords: [
    "cómo ordenar una empresa en crecimiento",
    "empresa que creció sin control",
    "empresa desorganizada en crecimiento",
    "cómo recuperar el control de una empresa",
    "empresa que depende demasiado del dueño",
    "empresa que creció más rápido que sus procesos",
    "cómo estructurar una empresa en crecimiento",
  ],
  openGraph: {
    title: "Cómo ordenar una empresa en crecimiento | Emphasys",
    description:
      "Tu empresa crece pero el control disminuye. Entiende por qué pasa y cuáles son los pasos para ordenar una empresa que creció más rápido que sus procesos.",
    url: "https://emphasys.mx/como-ordenar-empresa-en-crecimiento",
    type: "article",
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "Cómo ordenar una empresa en crecimiento | Emphasys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo ordenar una empresa en crecimiento | Emphasys",
    description:
      "Tu empresa crece pero el control disminuye. Entiende por qué pasa y cuáles son los pasos para ordenar una empresa que creció más rápido que sus procesos.",
    images: ["/social-card.svg"],
  },
};

const signals = [
  {
    label: "Sigues siendo el cuello de botella.",
    description:
      "Casi todas las decisiones importantes —y muchas que no deberían serlo— pasan por ti. El negocio no avanza sin tu presencia o aprobación.",
  },
  {
    label: "Nadie sabe cuál número es el correcto.",
    description:
      "Cuando alguien pregunta cuánto se vendió o cuál es el margen real, cada área tiene una respuesta distinta. La información está fragmentada.",
  },
  {
    label: "Los datos viven en Excel, WhatsApp y correos.",
    description:
      "No existe un solo lugar donde ver qué está pasando. Cada persona guarda su versión de la realidad y la comparte cuando alguien la persigue.",
  },
  {
    label: "Las áreas trabajan desconectadas.",
    description:
      "Ventas promete algo que operaciones no sabe. Administración trabaja con información que no concilia con lo que registra el almacén.",
  },
  {
    label: "Los mismos errores se repiten.",
    description:
      "No son errores nuevos —son los mismos de siempre, con distintas personas. El proceso no tiene estructura para evitarlos.",
  },
  {
    label: "Tomar decisiones requiere perseguir información.",
    description:
      "Antes de decidir, hay que llamar a tres personas, revisar dos archivos y esperar respuesta. Y aún así, los datos pueden estar desactualizados.",
  },
  {
    label: "Hay más trabajo, pero no más claridad.",
    description:
      "El equipo trabaja. Tú trabajas. Todos trabajan. Pero al final del día es difícil decir con precisión qué avanzó y por qué.",
  },
];

const pillars = [
  {
    number: "01",
    title: "Diagnóstico real",
    body: "Antes de cambiar cualquier cosa, hace falta entender cómo opera realmente la empresa hoy. No cómo debería operar ni cómo el equipo cree que opera —cómo opera de verdad. Cómo fluye la información entre áreas, dónde se rompen los procesos, de qué o de quién depende cada decisión. Sin ese mapa, cualquier intervención corre el riesgo de atacar síntomas en lugar de causas.",
  },
  {
    number: "02",
    title: "Procesos con lógica clara",
    body: "Una vez que se entiende cómo opera la empresa, el siguiente paso es definir cómo debería operar. Eso significa establecer procesos que puedan repetirse con consistencia: quién hace qué, cuándo, con qué información y con qué criterio. Los procesos claros reducen los errores y reducen la dependencia del dueño. Cuando el proceso está bien definido, la empresa puede funcionar sin que el director intervenga en cada decisión operativa.",
  },
  {
    number: "03",
    title: "Información conectada entre áreas",
    body: "En una empresa sin estructura, la información está dispersa. Cada área tiene sus propios archivos, sus propios criterios y su propia versión de lo que está pasando. Ordenar una empresa implica crear condiciones para que esa información fluya de manera confiable: que ventas, operaciones y administración trabajen con los mismos datos, y que cuando alguien necesita tomar una decisión, pueda confiar en lo que tiene disponible.",
  },
  {
    number: "04",
    title: "Responsabilidades bien definidas",
    body: "Uno de los síntomas más frecuentes en empresas que crecieron rápido es que las responsabilidades no están bien delimitadas. Hay cosas que todos hacen y cosas que nadie hace. Definir responsabilidades es construir una organización que pueda funcionar con criterio propio, donde cada persona sabe qué se espera de ella y tiene la información necesaria para cumplirlo. Cuando eso ocurre, la empresa deja de depender de que el dueño lo resuelva todo.",
  },
];

const results = [
  {
    title: "El dueño puede soltar sin que todo se rompa.",
    description:
      "Las decisiones cotidianas se toman en el nivel correcto. El director puede enfocarse en la estrategia en lugar de resolver urgencias operativas.",
  },
  {
    title: "La información deja de ser un problema.",
    description:
      "Cuando alguien necesita saber cuánto se vendió o cuál es el margen real, la respuesta existe y es confiable. No hay que perseguirla.",
  },
  {
    title: "Las áreas dejan de trabajar en islas.",
    description:
      "Ventas sabe lo que operaciones puede cumplir. Administración trabaja con la misma información que el resto. Las fricciones disminuyen porque una lógica compartida las alinea.",
  },
  {
    title: "Los errores se vuelven excepciones, no rutina.",
    description:
      "Cuando los procesos tienen estructura, los mismos errores dejan de repetirse. Y cuando ocurren, se pueden identificar y corregir sin señalar personas.",
  },
];

const Section = ({
  id,
  background = "bg-white",
  children,
}: {
  id?: string;
  background?: string;
  children: ReactNode;
}) => (
  <section
    id={id}
    className={`${background} text-slate-900${id ? " scroll-mt-28 md:scroll-mt-32" : ""}`}
  >
    <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:px-0 lg:py-20">{children}</div>
  </section>
);

const CTAButton = ({
  href,
  children,
  offsetColor = "white",
}: {
  href: string;
  children: ReactNode;
  offsetColor?: string;
}) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-8 py-3 text-sm font-semibold text-white shadow-md transition duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-${offsetColor}`}
  >
    {children}
  </a>
);

export default function ComoOrdenarEmpresaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#F7F9FB] text-slate-900">
        <div className="mx-auto max-w-[900px] px-6 pb-16 pt-20 sm:px-10 lg:px-0 lg:pb-20 lg:pt-24">
          <p
            className="text-xs font-semibold uppercase tracking-[0.32em]"
            style={{ color: "var(--color-emphasys-blue)", opacity: 0.65 }}
          >
            Para dueños y directores de empresas en crecimiento
          </p>
          <h1
            className="mt-5 max-w-[820px] text-[32px] font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            Tu empresa está creciendo. ¿Por qué cada vez tienes menos control?
          </h1>
          <div className="mt-6 max-w-[760px] space-y-3 text-lg leading-relaxed text-slate-600 sm:text-xl">
            <p>Muchos empresarios creen que el crecimiento resolverá sus problemas.</p>
            <p>
              Pero cuando una empresa crece más rápido que sus procesos, ocurre exactamente lo
              contrario: hay más ventas, más actividad y más trabajo… pero también menos claridad
              y menos control.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="#senales"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-8 py-3 text-sm font-semibold text-white shadow-md transition duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F9FB]"
            >
              Descubre las señales
            </a>
          </div>
          <div className="mt-14 h-px w-full bg-slate-200" />
        </div>
      </section>

      {/* ── Sección 1: El crecimiento no siempre se siente como éxito ── */}
      <Section background="bg-white">
        <div className="space-y-4">
          <h2
            className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            El crecimiento no siempre se siente como éxito
          </h2>
          <div className="max-w-[820px] space-y-4 text-lg leading-relaxed text-slate-600">
            <p>Hay un momento en la vida de muchas empresas que nadie anticipa.</p>
            <p>
              Es el momento en que el negocio empieza a crecer —más clientes, más pedidos, más
              personas en el equipo— y sin embargo el director siente que, en lugar de tener más
              control, lo está perdiendo. Las ventas suben. El equipo crece. El negocio se mueve.
              Pero algo no encaja.
            </p>
            <p>
              Las decisiones se vuelven más lentas. Los errores empiezan a repetirse. El desgaste
              no disminuye con el tiempo. Y aparece una sensación difícil de explicar: hay más
              trabajo, pero menos claridad sobre qué está pasando realmente.
            </p>
            <p>
              Este fenómeno tiene una lógica. No es señal de fracaso ni de mala gestión. Es lo
              que le ocurre a cualquier empresa cuando su crecimiento supera a su estructura.
            </p>
          </div>
          <p className="max-w-[760px] text-lg font-medium leading-relaxed text-slate-800">
            Crecer es relativamente sencillo.
            <br />
            Ordenar el crecimiento es otro problema completamente distinto.
          </p>
        </div>
      </Section>

      {/* ── Sección 2: Las señales ── */}
      <Section id="senales" background="bg-slate-50">
        <div className="space-y-4">
          <h2
            className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            Las señales de que tu empresa creció más rápido que sus procesos
          </h2>
          <p className="max-w-[720px] text-lg leading-relaxed text-slate-600">
            No hace falta un diagnóstico formal para reconocer este momento. Las señales aparecen
            en el día a día, en las conversaciones cotidianas, en la operación de cada semana.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {signals.map((signal) => (
            <div
              key={signal.label}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm"
            >
              <p className="text-base font-semibold leading-snug text-slate-900">{signal.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{signal.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-[760px] text-lg font-medium leading-relaxed text-slate-700">
          Si reconoces más de tres de estas señales, no estás ante un problema de personas ni de
          esfuerzo.
          <br />
          Estás ante un problema de estructura.
        </p>
      </Section>

      {/* ── Sección 3: Por qué contratar más personas no resuelve el problema ── */}
      <Section background="bg-white">
        <div className="space-y-4">
          <h2
            className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            Por qué contratar más personas no resuelve el problema
          </h2>
          <div className="max-w-[820px] space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              La reacción más instintiva cuando la empresa se siente desbordada es contratar. Más
              vendedores. Un coordinador de operaciones. Un asistente para el dueño. Y durante un
              tiempo puede parecer que funciona.
            </p>
            <p>
              Pero si el problema es estructural —si los procesos están improvisados, la
              información está fragmentada y las responsabilidades no están bien delimitadas—
              agregar personas no resuelve nada. Solo amplifica lo que ya existe.
            </p>
            <p>
              Un vendedor más sobre un proceso comercial sin reglas claras genera más cotizaciones
              inconsistentes. Un coordinador de operaciones sin información confiable toma
              decisiones igual de costosas que antes. Un asistente al dueño sin estructura solo
              libera al director de tareas menores para que pueda atender más urgencias.
            </p>
            <p>
              La raíz no es la falta de gente. Tampoco es la falta de esfuerzo —en la mayoría de
              estas empresas el equipo trabaja con dedicación real.
            </p>
          </div>
          <p className="max-w-[760px] text-lg font-medium leading-relaxed text-slate-800">
            La raíz es que la empresa creció sin diseñar la estructura que ese crecimiento
            requería.
          </p>
          <div className="max-w-[820px] space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              Cada negocio empieza con procesos informales que funcionan cuando el equipo es
              pequeño y el dueño puede supervisarlo todo de cerca. Pero cuando el negocio escala,
              esos procesos informales no escalan con él. Lo que funcionaba con cinco personas no
              funciona con veinte. Lo que el dueño podía sostener solo empieza a requerir que la
              organización lo sostenga.
            </p>
            <p>Ese es el momento crítico. Y la mayoría de las empresas llegan a él sin haberlo anticipado.</p>
          </div>
        </div>
      </Section>

      {/* ── Sección 4: Cómo ordenar una empresa en crecimiento ── */}
      <Section background="bg-slate-50">
        <div className="space-y-4">
          <h2
            className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            Cómo ordenar una empresa en crecimiento
          </h2>
          <p className="max-w-[760px] text-lg leading-relaxed text-slate-600">
            Ordenar una empresa no es un evento. Es un proceso. Y como todo proceso, tiene pasos
            que conviene seguir en orden.
          </p>
          <p className="max-w-[760px] text-base leading-relaxed text-slate-600">
            No existe una fórmula universal —cada empresa tiene su historia, su sector y su forma
            particular de haber crecido. Pero hay cuatro elementos que siempre aparecen cuando una
            empresa logra recuperar el control.
          </p>
          <p className="max-w-[760px] text-base leading-relaxed text-slate-600">
            Cuando la complejidad ya exige conectar información y procesos entre áreas, también
            conviene entender{" "}
            <a
              href="/erp-para-pymes-mexico"
              className="font-semibold text-[var(--color-emphasys-green)] underline-offset-4 hover:underline"
            >
              cuándo una pyme necesita un ERP
            </a>
            .
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {pillar.number}
              </p>
              <h3
                className="mt-4 text-xl font-semibold leading-snug"
                style={{ color: "var(--color-emphasys-blue)" }}
              >
                {pillar.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Sección 5: Lo que cambia cuando una empresa recupera estructura ── */}
      <Section background="bg-white">
        <div className="space-y-4">
          <h2
            className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            Lo que cambia cuando una empresa recupera estructura
          </h2>
          <p className="max-w-[760px] text-lg leading-relaxed text-slate-600">
            Los cambios no son inmediatos. Pero cuando una empresa recupera estructura, las
            transformaciones que siguen son concretas y sostenidas.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {results.map((result) => (
            <div
              key={result.title}
              className="rounded-2xl border border-slate-200 bg-[#F7F9FB] p-6 shadow-sm"
            >
              <h3
                className="text-lg font-semibold leading-snug"
                style={{ color: "var(--color-emphasys-blue)" }}
              >
                {result.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{result.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-[760px] space-y-3">
          <p className="text-lg font-medium leading-relaxed text-slate-800">
            El crecimiento vuelve a sentirse como oportunidad.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            La empresa puede crecer sin que cada nueva venta, cada nuevo cliente o cada colaborador
            que se incorpora genere más desorden. El crecimiento empieza a tener base.
          </p>
        </div>
      </Section>

      {/* ── Sección 6: Por dónde empiezan las empresas que recuperan el control ── */}
      <Section background="bg-slate-50">
        <div className="space-y-4">
          <p
            className="text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--color-emphasys-blue)", opacity: 0.65 }}
          >
            Cómo trabaja Emphasys
          </p>
          <h2
            className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            Por dónde empiezan las empresas que recuperan el control
          </h2>
          <div className="max-w-[820px] space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              En Emphasys hemos acompañado a directores y dueños de empresas que estaban viviendo
              exactamente esta situación: negocios que habían crecido, que operaban con mucho
              esfuerzo, pero que habían perdido claridad sobre cómo funcionaban realmente.
            </p>
            <p>
              Lo primero que aprendimos es que el punto de partida casi nunca es implementar
              tecnología.
            </p>
          </div>
          <p className="max-w-[760px] text-lg font-medium leading-relaxed text-slate-800">
            El punto de partida es entender.
          </p>
          <div className="max-w-[820px] space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              Antes de proponer cualquier cambio —antes de hablar de sistemas, herramientas o
              automatizaciones— hace falta hacer una lectura real de cómo opera la empresa. Dónde
              están los cuellos de botella. Qué procesos dependen de personas clave. Cómo fluye la
              información entre áreas. Qué riesgos existen y cuáles ya están afectando la
              operación.
            </p>
            <p>
              A ese proceso lo llamamos{" "}
              <strong className="text-slate-800">Radiografía Empresarial</strong>.
            </p>
            <p>
              No es una auditoría. No es una consultoría genérica. Es un diagnóstico estructurado
              que se realiza en campo, con el equipo real, para entender cómo opera la empresa
              antes de proponer qué cambiar. El resultado es un documento claro que identifica qué
              está pasando, qué conviene priorizar y cuál es el primer paso viable para recuperar
              el control.
            </p>
            <p>
              Sin ese diagnóstico, cualquier intervención corre el riesgo de resolver los síntomas
              sin atender las causas.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <CTAButton href="/radiografia-empresarial" offsetColor="slate-50">
            Conoce cómo funciona la Radiografía Empresarial
          </CTAButton>
        </div>
      </Section>

      {/* ── Cierre ── */}
      <section className="bg-[var(--color-emphasys-blue)] text-white">
        <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:px-0 lg:py-20">
          <div className="space-y-4">
            <h2 className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Recuperar el control empieza por entender qué está pasando.
            </h2>
            <p className="max-w-[720px] text-lg leading-relaxed text-slate-200">
              Si tu empresa ya muestra señales de haber crecido más rápido que sus procesos, el
              primer paso no es contratar más personas ni implementar tecnología. Es entender con
              claridad dónde está la pérdida de estructura y por dónde conviene empezar.
            </p>
            <div className="pt-4">
              <a
                href="/radiografia-empresarial"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-8 py-3 text-sm font-semibold text-white shadow-md transition duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d2f68]"
              >
                Conoce cómo funciona la Radiografía Empresarial
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
