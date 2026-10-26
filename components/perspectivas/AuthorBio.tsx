import Image from "next/image";
import Link from "next/link";
import { author, PERSPECTIVES_PATH } from "@/lib/perspectivas";

const AuthorBio = () => {
  return (
    <section aria-labelledby="sobre-el-autor" className="mt-16 border-t-2 border-[var(--color-emphasys-blue)] pt-8">
      <p id="sobre-el-autor" className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
        Sobre el autor
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-10">
        <Image
          src={author.portrait}
          alt={`${author.name}, ${author.jobTitle.toLowerCase()}`}
          width={640}
          height={800}
          sizes="(min-width: 640px) 200px, 240px"
          className="aspect-[4/5] w-full max-w-[240px] bg-[var(--mist)] object-cover sm:w-[200px]"
        />
        <div>
          <p className="font-display text-3xl font-semibold leading-tight text-[var(--color-emphasys-blue)]">{author.name}</p>
          <p className="mt-1.5 text-[15px] font-medium text-[var(--color-emphasys-green)]">{author.jobTitle}</p>
          <div className="mt-4 space-y-3.5 text-base leading-relaxed text-slate-600 sm:text-[17px]">
            {author.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href={PERSPECTIVES_PATH}
            className="mt-4 inline-flex min-h-11 items-center text-[15px] font-semibold text-[var(--color-emphasys-green)] hover:text-[var(--color-emphasys-blue)]"
          >
            Todas las perspectivas →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
