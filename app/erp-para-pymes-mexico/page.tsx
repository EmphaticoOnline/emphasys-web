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
    title: "Nadie sabe cuál archivo tiene el dato correcto",
    description:
      "Ventas, almacén y administración trabajan con archivos distintos y cada junta empieza conciliando números.",
  },
  {
    title: "Ventas promete algo que inventario no tiene",
    description:
      "El problema se descubre después de cerrar: cuando toca comprar de urgencia, retrasar la entrega o explicar al cliente.",
  },
  {
    title: "Administración reconstruye el mes a mano",
    description:
      "Para conocer ventas, costos y pendientes debe pedir archivos, revisar chats y conciliar capturas.",
  },
  {
    title: "Tú sigues siendo el puente entre todas las áreas",
    description:
      "Compras, ventas, almacén y cobranza te buscan para resolver lo que el proceso no aclara.",
  },
  {
    title: "Compras compra sin conocer las existencias reales",
    description:
      "Un dato desactualizado termina en faltantes, compras innecesarias o dinero detenido en inventario.",
  },
  {
    title: "Cobranza no sabe qué ya se entregó",
    description:
      "Antes de cobrar debe confirmar con ventas, almacén y operación qué ocurrió con cada pedido.",
  },
];

const erpFoundations = [
  {
    title: "Una fuente común de información",
    description:
      "Un pedido, una salida y una factura conservan la misma historia, sin volver a capturarla.",
  },
  {
    title: "Procesos que continúan entre áreas",
    description:
      "La venta avanza a inventario, compra, entrega y cobranza sin perder contexto al cambiar de responsable.",
  },
  {
    title: "Reglas, responsables y trazabilidad",
    description:
      "Cada paso deja claro quién actúa, con qué información y qué ocurrió.",
  },
  {
    title: "Reportes que nacen de la operación",
    description:
      "Dirección consulta el trabajo diario, no un reporte reconstruido antes de cada junta.",
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
      "Cada cotización y pedido conserva lo prometido al cliente para que operación pueda responder.",
  },
  {
    title: "Compras y abastecimiento",
    description:
      "Compras ve existencias y compromisos antes de abastecer o reaccionar a una urgencia.",
  },
  {
    title: "Inventario y operación",
    description:
      "Entradas, salidas y disponibilidad conectan lo vendido con lo que realmente puede entregarse.",
  },
  {
    title: "Facturación y cobranza",
    description:
      "Administración sabe qué se acordó, qué se entregó, qué se facturó y qué falta cobrar.",
  },
  {
    title: "Finanzas y control de costos",
    description:
      "Los movimientos diarios muestran costos, compromisos y resultados sin reconstruir el mes.",
  },
  {
    title: "Reportes y dirección",
    description:
      "Dirección identifica desvíos y pendientes con los mismos datos que usan las áreas.",
  },
];

const objections = [
  {
    question: "“Somos demasiado pequeños”",
    answer:
      "No depende solo del número de empleados. Depende de cuántas áreas y movimientos debes coordinar manualmente.",
  },
  {
    question: "“Excel todavía funciona”",
    answer:
      "Sirve para analizar. Deja de alcanzar cuando cada área guarda su versión y una decisión exige conciliar archivos.",
  },
  {
    question: "“Un ERP es demasiado caro”",
    answer:
      "También cuestan las capturas repetidas, las compras equivocadas, los errores y las decisiones tomadas tarde.",
  },
  {
    question: "“Primero queremos crecer”",
    answer:
      "Más ventas sobre procesos frágiles significan más urgencias, más errores y más decisiones que terminan en tu escritorio.",
  },
  {
    question: "“El equipo no lo va a usar”",
    answer:
      "El equipo adopta mejor un sistema que responde a su trabajo real, aclara responsabilidades y llega con acompañamiento.",
  },
  {
    question: "“No queremos cambiar todo de golpe”",
    answer:
      "No hace falta. Se puede empezar donde hoy se pierde más control y avanzar por etapas.",
  },
];

const implementationSteps = [
  {
    number: "01",
    title: "Diagnóstico de la operación",
    description:
      "Seguimos la información entre áreas para encontrar rupturas, dobles capturas y decisiones que todavía dependen de ti.",
  },
  {
    number: "02",
    title: "Diseño de procesos, reglas y prioridades",
    description:
      "Definimos qué debe saber cada área, quién decide y por dónde conviene empezar.",
  },
  {
    number: "03",
    title: "Configuración e integración",
    description:
      "Llevamos esos flujos y reglas al sistema que usará el equipo.",
  },
  {
    number: "04",
    title: "Implementación gradual y validación",
    description:
      "Avanzamos por prioridades y comprobamos que la información funcione en el trabajo diario.",
  },
  {
    number: "05",
    title: "Capacitación y acompañamiento",
    description:
      "Acompañamos al equipo durante la adopción y ajustamos lo que la operación revele.",
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
            Para dueños que todavía conectan toda la empresa
          </p>
          <h1
            className="mt-5 max-w-[840px] text-[32px] font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            ERP para pymes en México: deja de ser el puente entre todas tus áreas
          </h1>
          <p className="mt-6 max-w-[820px] text-lg leading-relaxed text-slate-600 sm:text-xl">
            Ventas promete lo que inventario no tiene. Compras no conoce las existencias reales.
            Cobranza pregunta qué ya se entregó. Y tú terminas aclarando todo. Un ERP conecta esa
            operación para que las áreas trabajen con la misma información.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-8 py-3 text-sm font-semibold text-white shadow-md transition duration-200 ease-out hover:-translate-y-0.5 hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2"
            >
              Hablemos de lo que está pasando
            </a>
            <a
              href="#que-es-un-erp"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-[var(--color-emphasys-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-emphasys-green)] hover:text-[var(--color-emphasys-green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2"
            >
              Ver cómo se conectan las áreas
            </a>
          </div>
          <p className="mt-5 max-w-[650px] text-sm leading-relaxed text-slate-500">
            Sin demostraciones genéricas. Primero entendemos tu operación.
          </p>
          <div className="mt-14 h-px w-full bg-slate-200" />
        </div>
      </section>

      <Section background="bg-white">
        <h2 className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          ¿Cuándo empieza una pyme a necesitar un ERP?
        </h2>
        <p className="mt-4 max-w-[780px] text-lg leading-relaxed text-slate-600">
          El punto de quiebre llega cuando coordinar ventas, entregas, compras y cobros exige más
          llamadas, archivos y decisiones tuyas.
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
          Si reconoces varias señales, no falta esfuerzo. Falta una estructura que conecte el trabajo.
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
          Es el sistema que conecta lo vendido, comprado, entregado, facturado y cobrado sin perder la historia entre áreas.
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
          Estas herramientas ayudaron a crecer. El problema aparece cuando intentan coordinar una operación que ya cruza varias áreas.
        </p>
        <div className="mt-10 space-y-5">
          <article className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>Excel analiza; no coordina el trabajo entre áreas</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">Cuando almacén actualiza un archivo y ventas consulta otro, el error llega hasta la promesa al cliente.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>WhatsApp conversa; no conserva el proceso</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">Un cambio acordado en un chat puede no llegar al pedido, la entrega o la cobranza.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>Un sistema por área todavía puede dejarte en medio</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">Si no comparten datos, alguien debe conciliar ventas, inventario y administración. Casi siempre eres tú.</p>
          </article>
        </div>
      </Section>

      <Section background="bg-slate-50">
        <h2 className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          Qué cambia cuando toda la empresa trabaja con la misma información
        </h2>
        <p className="mt-4 max-w-[800px] text-lg leading-relaxed text-slate-600">
          El cambio ocurre cuando un pedido conserva su historia al pasar de ventas al cobro.
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
            <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>Cada área sabe qué ocurrió antes</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">Ventas ve disponibilidad; compras ve compromisos; cobranza ve entregas. Nadie empieza de cero.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>La dirección deja de reconstruir la historia</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">Pendientes, costos y resultados dejan de depender de un archivo preparado para la junta.</p>
          </div>
        </div>
      </Section>

      <Section background="bg-white">
        <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          Las áreas que puede conectar una estructura ERP
        </h2>
        <p className="mt-4 max-w-[780px] text-lg leading-relaxed text-slate-600">
          No todas las empresas necesitan lo mismo. Todas necesitan que la información continúe entre áreas.
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
        <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--color-emphasys-blue)", opacity: 0.65 }}>Sin cambiar todo de golpe</p>
        <h2 className="mt-4 max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          Un ERP para una pyme no debería imponer más complejidad
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            ["Empezar donde hoy pierdes más control", "Puede ser una promesa sin inventario, una compra innecesaria o una entrega que cobranza no ve."],
            ["Avanzar por prioridades", "No hace falta intervenir toda la empresa al mismo tiempo."],
            ["Respetar las reglas de tu operación", "Los procesos particulares conviven dentro de una misma estructura."],
            ["Acompañar al equipo", "La adopción se trabaja en la operación diaria, no termina al entregar el sistema."],
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
          Antes de hablar de módulos, seguimos un pedido real: quién lo captura, quién lo promete, quién lo entrega y quién lo cobra.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            ["Entendemos la operación real", "Seguimos cómo se vende, compra, entrega y cobra; no cómo dice el manual que debería ocurrir."],
            ["Ponemos orden antes de automatizar", "Aclaramos responsables y reglas para no acelerar el mismo desorden."],
            ["Conectamos áreas, no pantallas", "El dato acompaña el trabajo de ventas a operación, administración y finanzas."],
            ["Empezamos por lo que más pesa", "Priorizamos los procesos que hoy provocan errores, urgencias o decisiones a ciegas."],
            ["Acompañamos la adopción", "Seguimos presentes mientras el equipo convierte el sistema en su forma diaria de trabajar."],
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
          Primero entendemos el trabajo. Después construimos el sistema que lo conecta.
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
          Si tu operación tiene reglas particulares, conoce nuestro enfoque de{" "}
          <a href="/erp-a-la-medida" className="font-semibold text-[var(--color-emphasys-green)] underline-offset-4 hover:underline">ERP a la medida</a>.
        </p>
      </Section>

      <Section background="bg-white">
        <h2 className="max-w-[820px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
          Empresas que recuperaron claridad y estructura
        </h2>
        <p className="mt-4 max-w-[780px] text-base leading-relaxed text-slate-600">
          Estos resultados reflejan el trabajo completo de Emphasys: estructura, procesos, tecnología y acompañamiento.
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
            Cuéntanos dónde se rompe hoy la operación. Empecemos por ahí.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#contacto" className="inline-flex items-center justify-center rounded-full bg-[var(--color-emphasys-green)] px-8 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:brightness-90">Conversemos sobre tu operación</a>
            <a href="/radiografia-empresarial" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-[var(--color-emphasys-blue)] transition duration-200 hover:border-[var(--color-emphasys-green)] hover:text-[var(--color-emphasys-green)]">Ver cómo empezamos</a>
          </div>
        </div>
      </Section>

      <ContactSection />
    </>
  );
}
