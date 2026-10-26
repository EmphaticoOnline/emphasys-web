import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EvaluacionDiscreta from "@/components/perspectivas/EvaluacionDiscreta";
import JsonLd from "@/components/perspectivas/JsonLd";
import { author, formatNumber, perspectivePath, perspectives, readingMinutes } from "@/lib/perspectivas";

const title = "Perspectivas empresariales | Emphasys";
const description =
  "Reflexiones de Antonio Díaz sobre cómo funcionan las empresas, cómo se ordenan sus procesos y cuándo la tecnología realmente aporta.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/perspectivas" },
  openGraph: {
    title,
    description,
    url: "https://emphasys.mx/perspectivas",
    type: "website",
    images: [{ url: "/social-card.svg", width: 1200, height: 630, alt: "Perspectivas empresariales | Emphasys" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/social-card.svg"] },
};

const axes = ["Organización empresarial", "Procesos administrativos", "Modernización tecnológica"];

export default function PerspectivasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://emphasys.mx/perspectivas",
        url: "https://emphasys.mx/perspectivas",
        name: "Perspectivas empresariales",
        description,
        inLanguage: "es-MX",
        publisher: { "@type": "Organization", name: "Emphasys", url: "https://emphasys.mx" },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: perspectives.map((article) => ({
            "@type": "ListItem",
            position: article.number,
            url: `https://emphasys.mx${perspectivePath(article)}`,
            name: article.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://emphasys.mx/" },
          { "@type": "ListItem", position: 2, name: "Perspectivas empresariales", item: "https://emphasys.mx/perspectivas" },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden bg-[#f5f4ef] text-slate-900">
        <div className="grid-faint pointer-events-none absolute inset-0 opacity-80" />
        <div className="wrap relative py-14 lg:py-[72px]">
          <nav aria-label="Ruta" className="flex flex-wrap gap-2 text-[13px] text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--color-emphasys-blue)]">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[var(--color-emphasys-blue)]">Perspectivas empresariales</span>
          </nav>
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="eyebrow">Sección editorial · Emphasys</p>
              <h1 className="font-display mt-5 text-[42px] font-semibold leading-[1.03] tracking-tight text-[var(--color-emphasys-blue)] sm:text-6xl lg:text-[72px]">
                Perspectivas
                <br />
                empresariales
              </h1>
              <p className="mt-7 max-w-[600px] text-lg leading-relaxed text-slate-600 sm:text-xl">{description}</p>
            </div>
            <div className="border-t-2 border-[var(--color-emphasys-blue)] pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Tres ejes</p>
              <ul className="mt-4">
                {axes.map((axis) => (
                  <li key={axis} className="font-display border-b border-[var(--line)] py-3.5 text-[22px] text-[var(--color-emphasys-blue)]">
                    {axis}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-900">
        <div className="wrap py-14 lg:pb-20 lg:pt-[72px]">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="eyebrow">Índice · {perspectives.length} artículos</h2>
            <p className="text-sm text-[var(--muted)]">Por {author.name}</p>
          </div>
          <ol className="mt-7 border-b border-[var(--line)]">
            {perspectives.map((article) => {
              const href = perspectivePath(article);
              return (
                <li
                  key={article.slug}
                  className="grid gap-3 border-t border-[var(--line)] py-7 md:grid-cols-[72px_minmax(0,1fr)_180px] md:gap-8 md:py-10"
                >
                  <span className="font-display text-[28px] leading-none text-[var(--color-emphasys-green)] md:text-[40px]">
                    {formatNumber(article.number)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[25px] font-semibold leading-[1.18] tracking-tight md:text-[34px]">
                      <Link href={href} className="text-[var(--color-emphasys-blue)] hover:text-[var(--color-emphasys-green)]">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="font-display mt-3.5 max-w-[640px] text-[17px] italic leading-relaxed text-slate-600 md:text-[19px]">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2.5 md:flex-col md:items-start md:justify-start md:pt-1">
                    <span className="text-sm text-[var(--muted)]">{readingMinutes(article)} min de lectura</span>
                    <Link href={href} className="inline-flex min-h-11 items-center text-[15px] font-semibold text-[var(--color-emphasys-green)] hover:text-[var(--color-emphasys-blue)]">
                      Leer artículo →
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="bg-[#eceff4] text-slate-900">
        <div className="wrap grid items-center gap-8 py-14 md:grid-cols-2 md:gap-12 lg:py-16">
          <div className="flex items-center gap-5 md:gap-6">
            <Image
              src={author.portrait}
              alt={author.name}
              width={640}
              height={800}
              sizes="112px"
              className="h-[110px] w-[88px] flex-none bg-white object-cover md:h-[140px] md:w-[112px]"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Autor de la serie</p>
              <p className="font-display mt-2 text-[22px] font-semibold text-[var(--color-emphasys-blue)] md:text-[28px]">{author.name}</p>
              <p className="mt-1 text-sm text-slate-600 md:text-[15px]">{author.jobTitle}</p>
            </div>
          </div>
          <div className="space-y-3.5 text-base leading-relaxed text-slate-600 md:text-[17px]">
            {author.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f4ef]">
        <div className="wrap py-10 lg:py-12">
          <EvaluacionDiscreta variant="index" />
        </div>
      </section>
    </>
  );
}
