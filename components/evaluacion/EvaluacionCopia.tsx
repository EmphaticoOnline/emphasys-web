"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { type Answer } from "@/lib/evaluacion-empresarial";
import { isEvaluationEmail } from "@/lib/evaluacion-correo";

type EvaluacionCopiaProps = {
  answers: Answer[];
};

const EvaluacionCopia = ({ answers }: EvaluacionCopiaProps) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const recipient = email.trim().toLowerCase();
    if (!isEvaluationEmail(recipient)) {
      setError("Ingresa un correo válido.");
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");
      setError(null);
      const response = await fetch("/api/evaluacion-empresarial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, email: recipient }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data?.error || "No se pudo enviar la copia. Inténtalo más tarde.");
      setStatus("sent");
    } catch (cause: unknown) {
      setError(cause instanceof Error ? cause.message : "No se pudo enviar la copia. Inténtalo más tarde.");
      setStatus("error");
    }
  };

  return (
    <section className="mt-10 border border-[rgba(29,47,104,0.10)] bg-white p-6 sm:p-8" aria-labelledby="copia-resultados">
      <h2 id="copia-resultados" className="font-display text-2xl font-semibold tracking-tight text-[var(--color-emphasys-blue)] sm:text-3xl">
        ¿Quieres recibir una copia de tus resultados en tu correo?
      </h2>
      {status === "sent" ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600" role="status">
          Enviamos la copia a tu correo.
        </p>
      ) : open ? (
        <form className="mt-6 max-w-xl space-y-5" onSubmit={handleSubmit} noValidate>
          <label className="block text-sm font-semibold text-[var(--color-emphasys-blue)]" htmlFor="copia-correo">
            Correo electrónico
            <input
              id="copia-correo"
              className="input-field mt-2"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <p className="text-xs leading-relaxed text-slate-500">
            <Link href="/aviso-de-privacidad" className="text-[var(--color-emphasys-blue)] underline-offset-4 hover:underline">
              Aviso de privacidad
            </Link>
          </p>
          {error ? (
            <p className="text-sm text-[#8a3d3d]" role="alert">
              {error}
            </p>
          ) : null}
          <button type="submit" className="btn-primary disabled:pointer-events-none disabled:opacity-40" disabled={status === "sending"}>
            {status === "sending" ? "Enviando…" : "Enviar copia"}
          </button>
        </form>
      ) : (
        <button type="button" className="btn-ghost mt-6" onClick={() => setOpen(true)}>
          Recibir copia
        </button>
      )}
    </section>
  );
};

export default EvaluacionCopia;
