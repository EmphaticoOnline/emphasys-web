import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "ERP para pymes en México: control e información conectada | Emphasys",
  description:
    "Conoce cuándo tu pyme necesita un ERP y cómo conectar ventas, compras, inventario, cobranza y finanzas sin imponer una operación rígida.",
  alternates: {
    canonical: "/erp-para-pymes-mexico",
  },
  keywords: [
    "ERP para pymes México",
    "ERP para pymes en México",
    "software ERP para pymes",
    "sistema ERP para pequeñas empresas",
    "ERP para empresa en crecimiento",
    "sistema empresarial para pymes",
    "ERP adaptable para pymes",
    "ERP para ventas compras e inventario",
  ],
  openGraph: {
    title: "ERP para pymes en México | Emphasys",
    description:
      "Una estructura compartida para conectar áreas, reducir retrabajos y dirigir tu empresa con información confiable.",
    url: "https://emphasys.mx/erp-para-pymes-mexico",
    type: "website",
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "ERP para pymes en México | Emphasys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP para pymes en México | Emphasys",
    description:
      "Una estructura compartida para conectar áreas, reducir retrabajos y dirigir tu empresa con información confiable.",
    images: ["/social-card.svg"],
  },
};

const signals = [
  {
    title: "La información está repartida",
    description:
      "Los datos viven entre Excel, WhatsApp, correos y sistemas que no comparten la misma versión de la operación.",
  },
  {
    title: "Las áreas hacen promesas desconectadas",
    description:
      "Ventas, compras, inventario y administración avanzan sin conocer a tiempo los compromisos de las demás áreas.",
  },
  {
    title: "Cerrar el mes exige reconstruir lo ocurrido",
    description:
      "Para entender ventas, costos, pendientes o margen hay que conciliar archivos y perseguir información.",
  },
  {
    title: "El dueño sigue conectando toda la empresa",
    description:
      "Las decisiones y excepciones dependen de una persona porque el proceso no contiene reglas ni contexto suficientes.",
  },
  {
    title: "Los errores se convierten en retrabajo",
    description:
      "Capturas repetidas, datos desactualizados y seguimientos manuales consumen tiempo y generan fricción entre áreas.",
  },
  {
    title: "Hay actividad, pero no una visión compartida",
    description:
      "Cada equipo trabaja, aunque dirección todavía necesita reunir varias versiones antes de tomar una decisión.",
  },
];

const erpFoundations = [
  {
    title: "Una fuente común de información",
    description:
      "Los movimientos relevantes se registran dentro de una lógica compartida, en lugar de reconstruirse desde archivos separados.",
  },
  {
    title: "Procesos que continúan entre áreas",
    description:
      "Una venta puede avanzar hacia inventario, compra, entrega, facturación y cobranza sin romper el contexto en cada cambio de responsable.",
  },
  {
    title: "Reglas, responsables y trazabilidad",
    description:
      "Cada paso tiene información, responsables y criterios visibles para reducir dependencias y aclarar qué ocurrió.",
  },
  {
    title: "Reportes que nacen de la operación",
    description:
      "La dirección consulta información que proviene del trabajo diario, no de una reconstrucción tardía hecha para cada reunión.",
  },
];

const flow = [
  "Oportunidad",
  "Cotización",
  "Pedido",
  "Inventario o compra",
  "Entrega",
  "Facturación",
  "Cobranza",
  "Resultado financiero",
];

const connectedAreas = [
  {
    title: "Ventas y CRM",
    description:
      "Oportunidades, cotizaciones y pedidos conservan el contexto comercial necesario para que la operación pueda responder.",
  },
  {
    title: "Compras y abastecimiento",
    description:
      "Las necesidades de compra pueden responder a compromisos, prioridades y existencias visibles, no solo a solicitudes aisladas.",
  },
  {
    title: "Inventario y operación",
    description:
      "Entradas, salidas y disponibilidad forman parte del mismo flujo que conecta lo vendido con lo que puede entregarse.",
  },
  {
    title: "Facturación y cobranza",
    description:
      "La administración conserva relación entre lo acordado, lo entregado, lo facturado y lo que sigue pendiente de cobro.",
  },
  {
    title: "Finanzas y control de costos",
    description:
      "Los movimientos operativos alimentan una lectura más clara de costos, compromisos y resultados para decidir con contexto.",
  },
  {
    title: "Reportes y dirección",
    description:
      "La dirección trabaja con una referencia compartida para identificar desvíos, prioridades y decisiones pendientes.",
  },
];

const objections = [
  {
    question: "“Somos demasiado pequeños”",
    answer:
      "La necesidad no depende solamente del número de empleados. También depende de cuántas áreas participan, cuántas transacciones ocurren y cuánto control manual exige la operación.",
  },
  {
    question: "“Excel todavía funciona”",
    answer:
      "Excel sigue siendo útil para analizar. El problema aparece cuando debe sostener procesos compartidos, autorizaciones, trazabilidad y múltiples versiones de la misma información.",
  },
  {
    question: "“Un ERP es demasiado caro”",
    answer:
      "La evaluación también debe considerar el costo operativo de repetir capturas, corregir errores, perseguir datos y tomar decisiones con información tardía.",
  },
  {
    question: "“Primero queremos crecer”",
    answer:
      "Crecer sobre procesos frágiles multiplica la fricción existente. La estructura permite que nuevas ventas y personas no generen el mismo nivel de desorden.",
  },
  {
    question: "“El equipo no lo va a usar”",
    answer:
      "La adopción depende de que el sistema responda al proceso real, de que las responsabilidades sean claras y de que exista acompañamiento durante el cambio.",
  },
  {
    question: "“No queremos cambiar todo de golpe”",
    answer:
      "No es necesario intervenir toda la empresa al mismo tiempo. Las prioridades pueden definirse según el riesgo y el impacto operativo de cada proceso.",
  },
];

const implementationSteps = [
  {
    number: "01",
    title: "Diagnóstico de la operación",
    description:
      "Entendemos cómo fluye hoy la información, dónde se rompen los procesos y qué decisiones siguen dependiendo de seguimiento manual.",
  },
  {
    number: "02",
    title: "Diseño de procesos, reglas y prioridades",
    description:
      "Definimos cómo deben conectarse las áreas, qué información necesita cada etapa y por dónde conviene comenzar.",
  },
  {
    number: "03",
    title: "Configuración e integración",
    description:
      "Construimos la estructura tecnológica que materializa los flujos y criterios definidos para la operación.",
  },
  {
    number: "04",
    title: "Implementación gradual y validación",
    description:
      "Ponemos en marcha los procesos por prioridades, revisando que la información y las responsabilidades funcionen en la práctica.",
  },
  {
    number: "05",
    title: "Capacitación y acompañamiento",
    description:
      "Acompañamos al equipo para adoptar la nueva forma de trabajar y ajustar la estructura conforme evoluciona la empresa.",
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
    company: "Grupo Supplier",
    quote:
      "Crecimos de manera ordenada, eliminando cuellos de botella operativos y fortaleciendo la supervisión interna. Hoy tomamos decisiones estratégicas con información clara y una estructura que sostiene nuestro crecimiento.",
    author: "Diego Abad — Socio Fundador",
    logo: "/logos/logo-grupo-supplier.png",
  },
  {
    company: "Canteras Santa Lucía",
    quote:
      "Pasamos de no tener control claro de nuestros números a tomar decisiones con mayor seguridad. Mejoramos el cálculo de precios, protegimos nuestro margen y eso se reflejó en un impulso real en ventas. Acabamos de tener nuestro mejor año en ventas.",
    author: "Mónica V. Grajeda — Directora General",
    logo: "/logos/logo-santa-lucia.JPG",
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
    <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 lg:px-0 lg:py-20">
      {children}
    </div>
  </section>
);

export default function ERPParaPymesMexicoPage() {
  return (
    <>
      <section className="relative bg-[#F7F9FB] text-slate-900">
        <div className="mx-auto max-w-[900px] px-6 pb-16 pt-20 sm:px-10 lg:px-0 lg:pb-20 lg:pt-24">
          <p
            className="text-xs font-semibold uppercase tracking-[0.32em]"
            style={{ color: "var(--color-emphasys-blue)", opacity: 0.65 }}
          >
            Para empresas que crecieron más rápido que sus procesos
          </p>
          <h1
            className="mt-5 max-w-[840px] text-[32px] font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            ERP para pymes en México: una sola estructura para recuperar el control
          </h1>
          <p className="mt-6 max-w-[820px] text-lg leading-relaxed text-slate-600 sm:text-xl">
            Un ERP no es solamente un programa. Es la estructura que permite que ventas, compras,
            inventario, cobranza, finanzas y administración trabajen con la misma información.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-8 py-3 text-sm font-semibold text-white shadow-md transition duration-200 ease-out hover:-translate-y-0.5 hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2"
            >
              Revisar si mi empresa necesita un ERP
            </a>
            <a
              href="#que-es-un-erp"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-[var(--color-emphasys-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-emphasys-green)] hover:text-[var(--color-emphasys-green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2"
            >
              Entender cómo funciona un ERP
            </a>
          </div>
          <p className="mt-5 max-w-[650px] text-sm leading-relaxed text-slate-500">
            Una conversación para entender tu operación y definir un primer paso concreto.
          </p>
          <div className="mt-14 h-px w-full bg-slate-200" />
        </div>
      </section>

      <Section background="bg-white">
        <h2 className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          ¿Cuándo empieza una pyme a necesitar un ERP?
        </h2>
        <p className="mt-4 max-w-[780px] text-lg leading-relaxed text-slate-600">
          No existe un tamaño exacto. El punto de quiebre llega cuando coordinar la empresa exige
          demasiado seguimiento manual y las herramientas aisladas ya no pueden sostener la complejidad.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {signals.map((signal) => (
            <article key={signal.title} className="rounded-2xl border border-slate-200 bg-[#F7F9FB] p-6 shadow-sm">
              <h3 className="text-lg font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>{signal.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{signal.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-[760px] text-lg font-medium leading-relaxed text-slate-800">
          Cuando varias de estas señales aparecen juntas, el problema ya no está en una sola herramienta.
          Está en la falta de una estructura compartida.
        </p>
      </Section>

      <Section id="que-es-un-erp" background="bg-slate-50">
        <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--color-emphasys-blue)", opacity: 0.65 }}>
          Más que software
        </p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          ¿Qué es realmente un ERP?
        </h2>
        <p className="mt-5 max-w-[820px] text-xl font-medium leading-relaxed text-slate-800">
          Es el sistema que registra y conecta los movimientos principales de la empresa bajo reglas
          e información compartidas.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {erpFoundations.map((foundation) => (
            <article key={foundation.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>{foundation.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{foundation.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="bg-white">
        <h2 className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          Lo que Excel, WhatsApp y los sistemas aislados ya no pueden sostener
        </h2>
        <p className="mt-4 max-w-[800px] text-lg leading-relaxed text-slate-600">
          Estas herramientas no son el enemigo. Ayudaron a la empresa a llegar hasta aquí. El problema
          aparece cuando deben coordinar una operación que ya necesita continuidad entre áreas.
        </p>
        <div className="mt-10 space-y-5">
          <article className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>Excel ayuda a analizar, pero no gobierna un proceso entre áreas</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">Puede calcular y organizar datos, pero no evita versiones duplicadas ni define quién debe actuar ante cada movimiento.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>WhatsApp agiliza conversaciones, pero no crea trazabilidad operativa</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">Una decisión puede quedar en un chat sin integrarse al pedido, al inventario, a la entrega o a la cobranza.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>Un sistema por área puede digitalizar tareas y aun así fragmentar la empresa</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">Si los sistemas no comparten información y reglas, las personas siguen conciliando manualmente lo que cada área registra.</p>
          </article>
        </div>
      </Section>

      <Section background="bg-slate-50">
        <h2 className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          Qué cambia cuando toda la empresa trabaja con la misma información
        </h2>
        <p className="mt-4 max-w-[800px] text-lg leading-relaxed text-slate-600">
          El valor no está en acumular módulos. Está en conservar el contexto mientras el trabajo avanza de un área a otra.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Flujo operativo conectado">
          {flow.map((step, index) => (
            <div key={step} className="relative rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-semibold text-[var(--color-emphasys-blue)]">{step}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>La operación puede responder con contexto</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">Ventas entiende qué puede prometer; compras conoce qué debe abastecer; inventario refleja movimientos y administración conserva la continuidad del pedido al cobro.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>La dirección deja de reconstruir la historia</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">La información operativa alimenta una visión común para revisar pendientes, costos y resultados con mayor claridad.</p>
          </div>
        </div>
      </Section>

      <Section background="bg-white">
        <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          Las áreas que puede conectar una estructura ERP
        </h2>
        <p className="mt-4 max-w-[780px] text-lg leading-relaxed text-slate-600">
          Cada empresa necesita una combinación distinta. Lo importante es que las áreas compartan la lógica de la operación.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {connectedAreas.map((area) => (
            <article key={area.title} className="rounded-2xl border border-slate-200 bg-[#F7F9FB] p-6 shadow-sm">
              <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>{area.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{area.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="bg-slate-50">
        <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--color-emphasys-blue)", opacity: 0.65 }}>Una implementación proporcionada</p>
        <h2 className="mt-4 max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          Un ERP para una pyme no debería imponer más complejidad
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            ["Empezar por los procesos que generan más riesgo", "La prioridad se define por los puntos donde hoy se pierde información, control o continuidad."],
            ["Implementar por prioridades y etapas", "La empresa puede avanzar sin intentar transformar toda su operación al mismo tiempo."],
            ["Adaptar reglas sin perder una estructura común", "Los procesos particulares se contemplan dentro de una lógica compartida entre áreas."],
            ["Acompañar al equipo durante la adopción", "La nueva estructura necesita claridad, práctica y seguimiento para convertirse en la forma cotidiana de trabajar."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="bg-white">
        <h2 className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          Las dudas más comunes antes de implementar un ERP
        </h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6 shadow-sm sm:px-8">
          {objections.map((item) => (
            <article key={item.question} className="py-6">
              <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>{item.question}</h3>
              <p className="mt-3 max-w-[760px] text-base leading-relaxed text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="bg-[var(--color-emphasys-blue)]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white opacity-70">El enfoque Emphasys</p>
        <h2 className="mt-4 max-w-[820px] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          Qué hace diferente a Emphasys
        </h2>
        <p className="mt-5 max-w-[780px] text-lg leading-relaxed text-slate-100">
          No empezamos con una lista de módulos. Empezamos por entender cómo opera realmente la empresa y qué estructura necesita para recuperar control.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            ["Entendemos la operación real", "Observamos cómo fluye la información, dónde aparecen las fricciones y de qué dependen las decisiones."],
            ["Diseñamos antes de automatizar", "Definimos procesos, responsables y reglas para evitar que la tecnología solo acelere el desorden."],
            ["Conectamos áreas, no solamente pantallas", "La implementación busca continuidad entre ventas, operación, administración y finanzas."],
            ["Avanzamos según prioridades reales", "La estructura puede crecer con la empresa a partir de los procesos que hoy necesitan más control."],
            ["Acompañamos la adopción", "El trabajo continúa durante la puesta en marcha para que el sistema se convierta en una forma útil de operar."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-white/20 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-100">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="bg-slate-50">
        <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          Cómo se implementa
        </h2>
        <p className="mt-4 max-w-[760px] text-lg leading-relaxed text-slate-600">
          La tecnología llega después de entender y diseñar la estructura que debe sostener.
        </p>
        <div className="mt-10 space-y-5">
          {implementationSteps.map((step) => (
            <article key={step.number} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[70px_1fr]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">{step.number}</p>
              <div>
                <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-base leading-relaxed text-slate-600">
          Si tu operación requiere reglas o flujos particulares, conoce nuestro enfoque de{" "}
          <a href="/erp-a-la-medida" className="font-semibold text-[var(--color-emphasys-green)] underline-offset-4 hover:underline">ERP a la medida</a>.
        </p>
      </Section>

      <Section background="bg-white">
        <h2 className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          Empresas que recuperaron claridad y estructura
        </h2>
        <p className="mt-4 max-w-[780px] text-base leading-relaxed text-slate-600">
          Estos testimonios reflejan el trabajo integral de Emphasys sobre estructura, procesos y acompañamiento; no resultados atribuibles exclusivamente a un ERP.
        </p>
        <div className="mt-10 grid gap-7 md:grid-cols-2">
          {cases.map((item) => (
            <article key={item.company} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <Image src={item.logo} alt={item.company} width={220} height={64} className="h-14 w-auto object-contain opacity-80" />
              <p className="mt-3 text-sm font-semibold text-slate-900">{item.company}</p>
              <p className="mt-4 text-base leading-relaxed text-slate-700">{item.quote}</p>
              <p className="mt-4 text-sm text-slate-500">{item.author}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="bg-slate-50">
        <div className="text-center">
          <h2 className="mx-auto max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
            El primer paso no es elegir módulos. Es entender qué necesita tu operación.
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-lg leading-relaxed text-slate-600">
            Revisemos dónde se está perdiendo el control y qué proceso conviene ordenar primero.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#contacto" className="inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-8 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:brightness-90">Solicitar una evaluación inicial</a>
            <a href="/radiografia-empresarial" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-[var(--color-emphasys-blue)] transition duration-200 hover:border-[var(--color-emphasys-green)] hover:text-[var(--color-emphasys-green)]">Conocer la Radiografía Empresarial</a>
          </div>
        </div>
      </Section>

      <ContactSection />
    </>
  );
}
