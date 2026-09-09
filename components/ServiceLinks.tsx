import Link from "next/link";

const ServiceLinks = () => {
  return (
    <section className="bg-[#f5f4ef] text-slate-900">
      <div className="wrap py-20 lg:py-28">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Después de entender</p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
            Después de entender el problema, definimos la intervención adecuada
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            No todas las empresas necesitan lo mismo. La recomendación surge de lo que realmente está ocurriendo en el negocio, no de un catálogo de soluciones.
          </p>
        </div>

        <Link
          href="/radiografia-empresarial"
          className="group mt-12 block overflow-hidden border border-[rgba(29,47,104,0.12)] bg-white p-8 shadow-[0_18px_40px_rgba(18,26,61,0.05)] transition duration-200 hover:-translate-y-0.5 sm:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-emphasys-green)]">Método</p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-[var(--color-emphasys-blue)] group-hover:text-[var(--color-emphasys-green)]">
            Radiografía Empresarial
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            Un análisis estructurado para entender qué está frenando a la empresa, qué merece atención primero y qué tipo de intervención puede generar mayor valor.
          </p>
          <span className="mt-5 inline-flex text-sm font-semibold text-[var(--color-emphasys-green)]">Conocer más →</span>
        </Link>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link
            href="/erp-a-la-medida"
            className="group border border-[rgba(29,47,104,0.10)] bg-white/70 p-7 transition duration-200 hover:border-[rgba(0,98,97,0.35)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Posible intervención</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-[var(--color-emphasys-blue)] group-hover:text-[var(--color-emphasys-green)]">
              Automatizar
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Cuando el reto requiere conectar información, reducir captura duplicada, establecer controles y sostener mejor la operación mediante tecnología.
            </p>
            <span className="mt-4 inline-flex text-sm font-semibold text-[var(--color-emphasys-green)]">Conocer más</span>
          </Link>

          <Link
            href="/#contacto"
            className="group border border-[rgba(29,47,104,0.10)] bg-white/70 p-7 transition duration-200 hover:border-[rgba(0,98,97,0.35)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Posible intervención</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-[var(--color-emphasys-blue)] group-hover:text-[var(--color-emphasys-green)]">
              Transformar
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Cuando el reto exige cambios más profundos en procesos, responsabilidades, coordinación, adopción y forma de operar.
            </p>
            <span className="mt-4 inline-flex text-sm font-semibold text-[var(--color-emphasys-green)]">Conocer más</span>
          </Link>
        </div>

        <p className="mt-10 font-display text-xl font-semibold leading-relaxed text-[var(--color-emphasys-blue)]">
          La solución no se decide antes de entender el problema.
        </p>
      </div>
    </section>
  );
};

export default ServiceLinks;
