import Link from "next/link";

const highlights = ["Evaluación gratuita.", "Sin registro.", "Resultados inmediatos."];

const EvaluacionPromo = () => {
  return (
    <section className="bg-[#eceff4] text-slate-900" aria-labelledby="evaluacion-promo">
      <div className="wrap py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow">
              <span className="block sm:inline">Evaluación Empresarial</span>{" "}
              <span className="block sm:inline">en 4 minutos</span>
            </p>
            <h2
              id="evaluacion-promo"
              className="font-display mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl lg:text-[42px]"
            >
              ¿Qué tan bien conoces realmente tu empresa?
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Puedes tener un negocio que vende, crece y funciona todos los días… y aun así desconocer aspectos importantes que afectan su rentabilidad, organización y crecimiento.
              </p>
              <p>
                En solo cuatro minutos, nuestra Evaluación Empresarial te ayudará a identificar fortalezas, oportunidades de mejora y aspectos que merecen mayor atención.
              </p>
            </div>
            <Link href="/evaluacion-empresarial" className="btn-primary mt-10">
              Evaluar mi empresa
            </Link>
          </div>

          <ul className="border border-[rgba(29,47,104,0.10)] bg-white">
            {highlights.map((item) => (
              <li key={item} className="border-t border-[rgba(29,47,104,0.10)] px-6 py-6 first:border-t-0 sm:px-8">
                <p className="font-display text-2xl leading-snug text-[var(--color-emphasys-blue)]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EvaluacionPromo;
