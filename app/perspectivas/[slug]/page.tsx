import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleToc from "@/components/perspectivas/ArticleToc";
import AuthorBio from "@/components/perspectivas/AuthorBio";
import EvaluacionDiscreta from "@/components/perspectivas/EvaluacionDiscreta";
import JsonLd from "@/components/perspectivas/JsonLd";
import {
  author,
  formatNumber,
  getNeighbors,
  getPerspective,
  getSections,
  PERSPECTIVES_PATH,
  perspectivePath,
  perspectives,
  readingMinutes,
} from "@/lib/perspectivas";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
const editorialDate = "Octubre de 2026";

export function generateStaticParams() {
  return perspectives.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getPerspective((await params).slug);
  if (!article) return {};
  const title = `${article.title} | Emphasys`;
  const url = `https://emphasys.mx${perspectivePath(article)}`;
  return {
    title,
    description: article.excerpt,
    alternates: { canonical: perspectivePath(article) },
    authors: [{ name: author.name }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
      authors: [author.name],
      section: "Perspectivas empresariales",
      images: [{ url: "/social-card.svg", width: 1200, height: 630, alt: article.title }],
    },
    twitter: { card: "summary_large_image", title: article.title, description: article.excerpt, images: ["/social-card.svg"] },
  };
}

export default async function PerspectivaPage({ params }: PageProps) {
  const article = getPerspective((await params).slug);
  if (!article) notFound();

  const sections = getSections(article);
  const minutes = readingMinutes(article);
  const { previous, next } = getNeighbors(article);
  const url = `https://emphasys.mx${perspectivePath(article)}`;
  const number = formatNumber(article.number);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#articulo`,
        headline: article.title,
        description: article.excerpt,
        url,
        mainEntityOfPage: url,
        inLanguage: "es-MX",
        timeRequired: `PT${minutes}M`,
        articleSection: "Perspectivas empresariales",
        image: `https://emphasys.mx${author.portrait}`,
        author: {
          "@type": "Person",
          name: author.name,
          jobTitle: author.jobTitle,
          image: `https://emphasys.mx${author.portrait}`,
          worksFor: { "@type": "Organization", name: "Emphasys Soluciones", url: "https://emphasys.mx" },
        },
        publisher: {
          "@type": "Organization",
          name: "Emphasys",
          url: "https://emphasys.mx",
          logo: { "@type": "ImageObject", url: "https://emphasys.mx/logos/logo-emphasys.png" },
        },
        isPartOf: { "@type": "CollectionPage", "@id": "https://emphasys.mx/perspectivas", name: "Perspectivas empresariales" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://emphasys.mx/" },
          { "@type": "ListItem", position: 2, name: "Perspectivas empresariales", item: "https://emphasys.mx/perspectivas" },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <article data-reading-article>
        <header className="relative overflow-hidden bg-[#f5f4ef] text-slate-900">
          <div className="grid-faint pointer-events-none absolute inset-0 opacity-80" />
          <div className="wrap relative py-12 lg:py-14">
            <nav aria-label="Ruta" className="flex flex-wrap gap-2 text-[13px] text-[var(--muted)]">
              <Link href="/" className="hover:text-[var(--color-emphasys-blue)]">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link href={PERSPECTIVES_PATH} className="hover:text-[var(--color-emphasys-blue)]">Perspectivas empresariales</Link>
              <span aria-hidden="true">/</span>
              <span className="font-medium text-[var(--color-emphasys-blue)]">Artículo {number}</span>
            </nav>
            <p className="eyebrow mt-10">Perspectivas empresariales · {number} de {formatNumber(perspectives.length)}</p>
            <h1 className="font-display mt-5 max-w-[900px] text-[34px] font-semibold leading-[1.1] tracking-tight text-[var(--color-emphasys-blue)] [text-wrap:balance] sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
              {article.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[rgba(29,47,104,0.16)] pt-5">
              <div className="flex items-center gap-3">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={320}
                  height={320}
                  sizes="52px"
                  className="h-[52px] w-[52px] rounded-full bg-[var(--mist)] object-cover ring-1 ring-[var(--line)]"
                />
                <div>
                  <p className="text-[15px] font-semibold text-[var(--color-emphasys-blue)]">{author.name}</p>
                  <p className="mt-0.5 text-[13px] text-[var(--muted)]">{author.jobTitle}</p>
                </div>
              </div>
              <p className="text-sm text-[var(--muted)]">{minutes} min de lectura</p>
              <p className="text-sm text-[var(--muted)]">{editorialDate}</p>
            </div>
          </div>
        </header>

        <div className="bg-white">
          <div className="wrap grid gap-7 pb-20 pt-12 lg:grid-cols-[200px_minmax(0,680px)] lg:gap-[72px] lg:pt-[72px]">
            <aside aria-label="Contenido del artículo" className="hidden lg:block">
              <ArticleToc sections={sections} />
            </aside>

            <div className="min-w-0">
              <div className="perspective-prose">
                {article.blocks.map((block, index) => {
                  if (block.type === "heading") {
                    return (
                      <h2 key={block.id} id={block.id}>
                        {block.text}
                      </h2>
                    );
                  }
                  return (
                    <p
                      key={index}
                      className={block.type === "key" ? "perspective-key" : undefined}
                      dangerouslySetInnerHTML={{ __html: block.html }}
                    />
                  );
                })}
              </div>

              <AuthorBio />
              <EvaluacionDiscreta />
            </div>
          </div>
        </div>
      </article>

      <nav aria-label="Más perspectivas" className="bg-[#eceff4] text-slate-900">
        <div className="wrap pb-20 pt-14 lg:pt-[72px]">
          <p className="eyebrow">Continúa la serie</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-6">
            <Link
              href={previous ? perspectivePath(previous) : PERSPECTIVES_PATH}
              className="block border border-[rgba(29,47,104,0.10)] bg-white px-6 py-6 text-[var(--color-emphasys-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(0,98,97,0.35)] md:px-8 md:py-7"
            >
              <span className="block text-[13px] font-semibold text-[var(--muted)]">
                {previous ? `← Anterior · ${formatNumber(previous.number)}` : "← Índice"}
              </span>
              <span className="font-display mt-3 block text-[21px] font-semibold leading-tight md:text-2xl">
                {previous ? previous.title : "Perspectivas empresariales"}
              </span>
            </Link>
            <Link
              href={next ? perspectivePath(next) : PERSPECTIVES_PATH}
              className="block border border-[rgba(29,47,104,0.10)] bg-white px-6 py-6 text-[var(--color-emphasys-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(0,98,97,0.35)] md:px-8 md:py-7 md:text-right"
            >
              <span className="block text-[13px] font-semibold text-[var(--muted)]">
                {next ? `Siguiente · ${formatNumber(next.number)} →` : "Volver al índice →"}
              </span>
              <span className="font-display mt-3 block text-[21px] font-semibold leading-tight md:text-2xl">
                {next ? next.title : "Perspectivas empresariales"}
              </span>
            </Link>
          </div>

          <p className="mt-14 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Las cuatro perspectivas</p>
          <ol className="mt-4 border-t border-[var(--line)]">
            {perspectives.map((item) => {
              const current = item.slug === article.slug;
              return (
                <li
                  key={item.slug}
                  className="grid grid-cols-[36px_minmax(0,1fr)] items-baseline gap-x-4 gap-y-1 border-b border-[var(--line)] py-[18px] md:grid-cols-[48px_minmax(0,1fr)_auto]"
                >
                  <span className="font-display text-xl text-[var(--color-emphasys-green)]">{formatNumber(item.number)}</span>
                  <Link
                    href={perspectivePath(item)}
                    aria-current={current ? "page" : undefined}
                    className="font-display text-xl leading-snug text-[var(--color-emphasys-blue)] hover:text-[var(--color-emphasys-green)]"
                  >
                    {item.title}
                  </Link>
                  <span
                    className={`col-start-2 text-[13px] font-semibold md:col-start-auto ${current ? "text-[var(--color-emphasys-green)]" : "text-[var(--muted)]"}`}
                  >
                    {current ? "Estás leyendo" : `${readingMinutes(item)} min`}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
