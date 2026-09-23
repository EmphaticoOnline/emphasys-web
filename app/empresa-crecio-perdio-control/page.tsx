import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactSection from "@/components/ContactSection";
import OutgrownStructure from "@/components/visual/OutgrownStructure";

export const metadata: Metadata = {
  title: "Mi empresa creció, pero perdió el control | Emphasys",
  description:
    "Tu empresa vende más, tiene más clientes y más gente, pero también más errores, retrabajos y dependencia del dueño. Conoce las señales de que la estructura ya no alcanza.",
  alternates: {
    canonical: "/empresa-crecio-perdio-control",
  },
  keywords: [
    "mi empresa creció pero perdió el control",
    "empresa que creció y se desordenó",
    "señales de pérdida de control en la empresa",
    "más ventas y menos control",
    "dependencia del dueño",
    "empresa que creció más rápido que su estructura",
  ],
  openGraph: {
    title: "Mi empresa creció, pero perdió el control | Emphasys",
    description:
      "Tu empresa vende más, tiene más clientes y más gente, pero también más errores, retrabajos y dependencia del dueño. Conoce las señales de que la estructura ya no alcanza.",
    url: "https://emphasys.mx/empresa-crecio-perdio-control",
    type: "article",
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "Mi empresa creció, pero perdió el control | Emphasys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi empresa creció, pero perdió el control | Emphasys",
    description:
      "Tu empresa vende más, tiene más clientes y más gente, pero también más errores, retrabajos y dependencia del dueño. Conoce las señales de que la estructura ya no alcanza.",
    images: ["/social-card.svg"],
  },
};

const patterns = [
  {
    title: "Las decisiones empiezan a acumularse arriba.",
    body: "Una cotización, un descuento, un pago o un problema con un cliente siguen esperando al dueño. El equipo pregunta porque no tiene claro hasta dónde puede decidir. La operación avanza al ritmo de quien está arriba, no al de la empresa.",
  },
  {
    title: "La información deja de tener una sola versión.",
    body: "Preguntas cuánto se vendió, qué hay en almacén o qué se debe cobrar, y la respuesta cambia según quién conteste. Ventas, operaciones y administración llevan cada una su control. Nadie miente a propósito. Simplemente ya no existe una sola manera de registrar lo que pasa.",
  },
  {
    title: "Los problemas se corrigen, pero regresan.",
    body: "Se atiende el error de esta semana y, a las pocas semanas, aparece otra vez: con otra persona o con otro cliente. No es un incidente aislado. La forma de trabajar sigue permitiendo que ocurra.",
  },
  {
    title: "La coordinación empieza a depender de personas, mensajes y memoria.",
    body: "Lo que hay que hacer vive en una conversación, en un mensaje o en quien “sí sabe cómo se hace”. Si falta el dueño o esa persona, la operación se traba. El conocimiento está en gente, no en la forma de trabajar de la empresa.",
  },
  {
    title: "Crecer exige cada vez más esfuerzo para obtener el mismo control.",
    body: "La agenda está llena. El equipo no para. Las ventas pueden verse bien. Aun así cuesta más trabajo saber si el mes dejó dinero, dónde se fue el margen o qué se hizo dos veces. Hay más movimiento, pero no más control.",
  },
];

const chain = [
  {
    label: "Lo que se ve",
    text: "La cobranza se atrasa y parece un problema de cobro.",
  },
  {
    label: "Lo que está detrás",
    text: "El cliente no paga porque la factura no coincide con lo que recibió.",
  },
  {
    label: "Lo que lo multiplica",
    text: "El pedido cambió en una conversación, almacén no lo registró igual y cada área lleva su propio control.",
  },
];

const questions = [
  "Qué problemas son síntomas y cuáles están más atrás.",
  "Dónde se pierde tiempo o dinero, aunque el día se vea ocupado.",
  "Qué decisiones o tareas dependen demasiado de personas.",
  "Qué merece atención primero, porque al corregir una causa pueden empezar a resolverse varios problemas que hoy parecen independientes.",
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
    <div className="wrap py-16 lg:py-24">{children}</div>
  </section>
);

export default function EmpresaCrecioPerdioControlPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f5f4ef] text-slate-900">
        <div className="wrap relative pb-16 pt-16 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="eyebrow">Cuando crecer ya no se siente como control</p>
              <h1 className="font-display mt-5 max-w-[820px] text-[34px] font-semibold leading-[1.05] tracking-tight text-[var(--color-emphasys-blue)] sm:text-5xl">
                Mi empresa creció, pero perdió el control
              </h1>
              <p className="mt-6 max-w-[760px] text-lg leading-relaxed text-slate-600 sm:text-xl">
                Crecer no siempre significa estar mejor organizado. A veces la empresa avanza más
                rápido que sus procesos, responsabilidades e información.
              </p>
            </div>
            <OutgrownStructure />
          </div>
          <div className="mt-14 h-px w-full bg-slate-200" />
        </div>
      </section>

      <Section>
        <div className="max-w-[760px] space-y-4">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
            Crecer también puede generar desorden
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            <p>Crecer no es el problema. Más clientes, más ventas y más gente suelen ser justo lo que se estaba buscando.</p>
            <p>
              El problema aparece cuando la forma de trabajar se queda atrás. Los procesos siguen
              siendo los de cuando la empresa era más chica. Las responsabilidades no quedaron
              claras cuando entró gente nueva. La información sigue repartida en archivos, mensajes
              y la memoria de unas cuantas personas.
            </p>
            <p>
              Entonces la empresa vende más, pero también comete más errores, rehace trabajo y
              depende más del dueño para saber qué está pasando.
            </p>
          </div>
          <p className="text-lg font-medium leading-relaxed text-slate-800">
            No es que el equipo haya dejado de esforzarse. Es que la estructura con la que opera
            ya no alcanza para el tamaño que tiene el negocio.
          </p>
        </div>
      </Section>

      <Section id="senales" background="bg-[#eceff4]">
        <div className="max-w-[760px] space-y-4">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
            Lo que empieza a pasar cuando la empresa rebasa su estructura
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            No hace falta un nombre técnico para reconocerlo. Deja de ser un incidente de la
            semana y empieza a notarse en varias partes al mismo tiempo.
          </p>
        </div>

        <ol className="mt-10 max-w-[820px] divide-y divide-[rgba(29,47,104,0.10)] border-y border-[rgba(29,47,104,0.10)]">
          {patterns.map((pattern, index) => (
            <li key={pattern.title} className="grid gap-3 py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
              <span className="font-display text-lg text-[var(--color-emphasys-green)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold leading-snug text-[var(--color-emphasys-blue)]">
                  {pattern.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{pattern.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="max-w-[760px] space-y-4">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
            El problema visible puede no ser el problema de origen
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              Cobranza atrasada, inventario que no cuadra, ventas sin seguimiento o errores
              administrativos duelen porque se ven. Por eso es natural querer corregirlos primero.
            </p>
            <p>
              A veces son consecuencias. El desorden ya venía de antes: de un pedido que cambió
              sin quedar registrado, de una autorización que sólo una persona podía dar, o de
              tres áreas que no trabajan con la misma información.
            </p>
          </div>
        </div>

        <ol className="mt-10 grid max-w-[820px] gap-4 md:grid-cols-3">
          {chain.map((step, index) => (
            <li
              key={step.label}
              className="border border-[rgba(29,47,104,0.10)] bg-[#f5f4ef] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-[var(--color-emphasys-blue)]">
                {step.label}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-[760px] text-lg font-medium leading-relaxed text-slate-800">
          Corregir la factura de hoy no evita que mañana pase lo mismo. No se corrige primero lo
          más visible, sino aquello que multiplica el desorden.
        </p>
      </Section>

      <Section background="bg-[#eceff4]">
        <div className="max-w-[760px] space-y-4">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
            Por qué trabajar más deja de resolverlo
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              Durante un tiempo, el esfuerzo tapa el hueco. El dueño revisa al final del día.
              Alguien de confianza persigue los pendientes. El equipo se queda más tarde para
              corregir lo que salió mal.
            </p>
            <p>
              Eso puede sostener la operación. También puede hacer creer que el problema es de
              ritmo, cuando la empresa está pidiendo más de lo que su forma de trabajar puede
              cargar.
            </p>
            <p>
              Llega un punto en que trabajar más ya no ordena nada. Sólo alcanza para que el
              desorden no se note tanto. Las mismas personas resuelven las mismas urgencias, y el
              negocio sigue dependiendo de esa compensación.
            </p>
          </div>
          <p className="text-lg font-medium leading-relaxed text-slate-800">
            No se trata de que el empresario o el equipo estén fallando. Se trata de que el
            esfuerzo ya está ocupado en sostener una estructura que se quedó corta.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-[760px] space-y-4">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
            ¿Necesito gente, procesos, tecnología o todo junto?
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            <p>No existe una respuesta que sirva para todas las empresas.</p>
            <p>
              A una le hace falta dejar claro quién decide qué. A otra, corregir la manera en que
              un pedido pasa de ventas a operación. A otra, dejar de tener tres versiones de la
              misma información. Algunas necesitan automatizar una parte del trabajo. Otras
              necesitan acompañamiento para ordenar antes de tocar herramientas. Y muchas
              necesitan una combinación.
            </p>
            <p>Por eso conviene no empezar por la solución que suena más completa.</p>
          </div>
          <p className="text-lg font-medium leading-relaxed text-slate-800">
            Automatizar un proceso desordenado puede hacer más rápido el desorden.
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            Si cada área registra las cosas a su manera, una herramienta nueva puede terminar
            guardando más rápido la misma confusión.
          </p>
        </div>
      </Section>

      <Section background="bg-[#eceff4]">
        <div className="max-w-[760px] space-y-4">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
            Cómo empezar a recuperar el control
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Antes de elegir una solución, conviene entender qué está pasando de verdad.
          </p>
        </div>

        <ul className="mt-8 max-w-[760px] divide-y divide-[rgba(29,47,104,0.10)] border-y border-[rgba(29,47,104,0.10)]">
          {questions.map((question) => (
            <li key={question} className="py-4 text-base leading-relaxed text-slate-700 md:text-lg">
              {question}
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-[760px] text-lg leading-relaxed text-slate-600">
          Ese orden evita gastar en lo que se ve y dejar intacto lo que lo multiplica. No hace
          falta llegar con la respuesta. Hace falta poder contar qué está pasando.
        </p>
        <div className="mt-10">
          <a href="#contacto" className="btn-primary">
            Agendar una conversación
          </a>
        </div>
      </Section>

      <Section>
        <div className="max-w-[760px] space-y-4">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
            Primero investigar, después recomendar
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            En Emphasys llamamos Radiografía Empresarial al proceso con el que investigamos qué
            está frenando realmente a una empresa antes de recomendar tecnología, cambios de
            proceso o acompañamiento.
          </p>
          <p>
            <a
              href="/radiografia-empresarial"
              className="font-semibold text-[var(--color-emphasys-green)] underline decoration-[var(--color-emphasys-green)]/40 underline-offset-4 hover:decoration-[var(--color-emphasys-green)]"
            >
              Conoce cómo funciona la Radiografía Empresarial
            </a>
          </p>
        </div>
      </Section>

      <ContactSection />
    </>
  );
}
