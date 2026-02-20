import Image from "next/image";

const ResultsSection = () => {
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

  return (
  <section id="casos" className="bg-slate-100 text-slate-900 scroll-mt-28 md:scroll-mt-32">
  <div className="mx-auto max-w-[900px] px-6 pt-16 pb-24 sm:px-10 lg:px-0">
        <div className="space-y-4">
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--color-emphasys-blue)" }}
          >
            Impacto real en números reales
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            “Cuando la estructura es correcta, el crecimiento se refleja en resultados medibles.”
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {cases.map((item) => (
            <div
              key={item.company}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
            >
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
  );
};

export default ResultsSection;
