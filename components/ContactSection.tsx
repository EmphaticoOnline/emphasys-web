"use client";

import { FormEvent, useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("Deseo agendar una conversación sin compromiso");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (value: string) => /.+@.+\..+/.test(value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Por favor completa nombre, email y mensaje.");
      setStatus("error");
      return;
    }
    if (!validateEmail(email.trim())) {
      setError("Ingresa un email válido.");
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, topic, message }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "No se pudo enviar tu mensaje.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setTopic("");
      setMessage("");
    } catch (err: any) {
      setError(err?.message || "No se pudo enviar tu mensaje.");
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="bg-white text-slate-900 scroll-mt-28 md:scroll-mt-32">
      <div className="mx-auto max-w-[900px] px-6 pt-16 pb-24 sm:px-10 lg:px-0">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="space-y-4">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--color-emphasys-blue)", opacity: 0.7 }}
            >
              Agenda una conversación
            </p>
            <h2
              className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "var(--color-emphasys-blue)" }}
            >
              Cuéntanos tu reto y te respondemos en menos de 24h hábiles
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Esta primera conversación es un espacio para escucharte. Buscamos entender cómo está operando hoy tu empresa, qué te preocupa,
              qué está funcionando y qué no. Tomamos nota, hacemos preguntas y compartimos brevemente cómo trabajamos. A partir de ahí,
              proponemos un primer paso concreto que genere claridad y resultados.
            </p>

            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <span className="font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>
                  Email:
                </span>
                <a
                  href="mailto:ventas@emphasys.mx"
                  className="text-[var(--color-emphasys-green)] underline-offset-4 hover:underline"
                >
                  ventas@emphasys.mx
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>
                  Tel / WhatsApp:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/523312889584"
                    className="text-[var(--color-emphasys-green)] underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +52 33 1288 9584
                  </a>
                  <a
                    href="https://wa.me/523312889584"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition duration-150 hover:brightness-95"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Abrir WhatsApp"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 32 32"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M16 3C9.383 3 4 8.383 4 15c0 2.358.676 4.563 1.844 6.422L4 29l7.74-1.793A11.885 11.885 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3Zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-1.594 0-3.102-.375-4.445-1.039l-.316-.152-.348.08-4.1.95.92-3.08.105-.35-.199-.316A9.94 9.94 0 0 1 6 15c0-5.523 4.477-10 10-10Zm-5.16 5.02c-.129 0-.332.051-.504.258-.172.207-.66.645-.66 1.57 0 .926.676 1.82.77 1.945.094.125 1.3 2.086 3.172 2.84 1.566.625 1.887.5 2.227.47.34-.03 1.105-.453 1.262-.891.156-.438.156-.812.109-.891-.047-.078-.172-.125-.36-.219-.188-.094-1.117-.551-1.289-.613-.172-.063-.297-.094-.422.094-.125.188-.484.613-.594.738-.11.125-.219.141-.406.047-.188-.094-.793-.293-1.5-.936-.555-.495-.926-1.109-1.039-1.305-.11-.188-.012-.301.082-.395.086-.086.219-.238.328-.363.11-.125.141-.219.203-.36.062-.141.031-.266-.016-.375-.047-.109-.461-1.11-.637-1.527-.172-.411-.344-.36-.469-.367-.125-.008-.258-.008-.398-.008Z" />
                    </svg>
                  </a>
                </div>
              </div>
              <p className="text-slate-500">Horario de respuesta: L-V 9:00–18:00 (Centro de México).</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-slate-800">
                  Nombre completo*
                </label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[var(--color-emphasys-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-emphasys-green)] focus:ring-offset-1 focus:ring-offset-white"
                  placeholder="Ej. Ana Torres"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-semibold text-slate-800">
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[var(--color-emphasys-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-emphasys-green)] focus:ring-offset-1 focus:ring-offset-white"
                  placeholder="tu@empresa.com"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="company" className="text-sm font-semibold text-slate-800">
                  Empresa
                </label>
                <input
                  id="company"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[var(--color-emphasys-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-emphasys-green)] focus:ring-offset-1 focus:ring-offset-white"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="topic" className="text-sm font-semibold text-slate-800">
                  Tema (opcional)
                </label>
                <input
                  id="topic"
                  name="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[var(--color-emphasys-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-emphasys-green)] focus:ring-offset-1 focus:ring-offset-white"
                  placeholder="Estrategia, finanzas, operaciones..."
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-semibold text-slate-800">
                  Mensaje*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[var(--color-emphasys-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-emphasys-green)] focus:ring-offset-1 focus:ring-offset-white"
                  placeholder="Cuéntanos brevemente tu contexto y objetivo"
                  required
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}
              {status === "success" && (
                <p className="text-sm text-[var(--color-emphasys-green)]">
                  Recibido. Te contactaremos en menos de 24h hábiles.
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-[var(--color-emphasys-green)] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading"
                  ? "Enviando..."
                  : status === "success"
                  ? "Enviado"
                  : "Agendar conversación"}
              </button>

              <p className="text-xs text-slate-500">
                Usaremos tu información solo para atender tu solicitud de contacto.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
