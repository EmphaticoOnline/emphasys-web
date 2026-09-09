import CaseCard, { type CaseItem } from "@/components/CaseCard";

const cases: CaseItem[] = [
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

const ResultsSection = () => {
  const [featured, santaLucia, supplier, runika] = cases;

  return (
    <section id="casos" className="scroll-mt-28 bg-white text-slate-900 md:scroll-mt-32">
      <div className="wrap py-20 lg:py-28">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Resultados</p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
            Impacto real en números reales
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            “Cuando la estructura es correcta, el crecimiento se refleja en resultados medibles.”
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured ? <CaseCard key={featured.company} item={featured} featured /> : null}
          {santaLucia ? <CaseCard key={santaLucia.company} item={santaLucia} /> : null}
          {supplier ? <CaseCard key={supplier.company} item={supplier} /> : null}
          {runika ? <CaseCard key={runika.company} item={runika} /> : null}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
