import Link from "next/link";

type EvaluacionDiscretaProps = {
  variant?: "article" | "index";
};

const EvaluacionDiscreta = ({ variant = "article" }: EvaluacionDiscretaProps) => {
  if (variant === "index") {
    return (
      <Link
        href="/evaluacion-empresarial"
        className="flex flex-wrap items-center justify-between gap-4 border-y border-[rgba(29,47,104,0.20)] py-6 text-[var(--color-emphasys-blue)]"
      >
        <span className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-emphasys-green)]">
            Evaluación Empresarial en 4 minutos
          </span>
          <span className="font-display text-2xl leading-snug">¿Qué tan bien conoces realmente tu empresa?</span>
        </span>
        <span className="text-[15px] font-semibold text-[var(--color-emphasys-green)]">Evaluar mi empresa →</span>
      </Link>
    );
  }

  return (
    <Link
      href="/evaluacion-empresarial"
      className="mt-12 flex flex-wrap items-center justify-between gap-4 border-y border-[var(--line)] py-5 text-[var(--color-emphasys-blue)]"
    >
      <span className="flex flex-col gap-1">
        <span className="text-[15px] font-semibold">Evaluación Empresarial en 4 minutos</span>
        <span className="text-sm text-[var(--muted)]">Evaluación gratuita. Sin registro. Resultados inmediatos.</span>
      </span>
      <span className="text-[15px] font-semibold text-[var(--color-emphasys-green)]">Evaluar mi empresa →</span>
    </Link>
  );
};

export default EvaluacionDiscreta;
