import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
};

const PageHero = ({ eyebrow, title, children, actions, visual }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-[#f5f4ef] text-slate-900">
      <div className="grid-faint pointer-events-none absolute inset-0 opacity-70" />
      <div className="wrap relative grid items-center gap-12 pb-16 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24 lg:pt-20">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="font-display mt-5 max-w-[820px] text-[34px] font-semibold leading-[1.08] tracking-tight text-[var(--color-emphasys-blue)] sm:text-5xl">
            {title}
          </h1>
          <div className="mt-6 max-w-[720px] space-y-4 text-lg leading-relaxed text-slate-600">{children}</div>
          {actions ? <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">{actions}</div> : null}
        </div>
        {visual ? <div className="hidden justify-end lg:flex">{visual}</div> : null}
      </div>
    </section>
  );
};

export default PageHero;
