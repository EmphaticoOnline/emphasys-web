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
      if (!res.ok) throw new Error(data?.error || "No se pudo enviar tu mensaje.");

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setTopic("");
      setMessage("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "No se pudo enviar tu mensaje.";
      setError(msg);
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="relative bg-white text-slate-900 scroll-mt-28 md:scroll-mt-32">
      <div id="contact-section" className="absolute -top-4 h-px w-px" aria-hidden="true" />
      <div className="mx-auto max-w-[900px] px-6 pt-16 pb-24 sm:px-10 lg:px-0">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--color-emphasys-blue)", opacity: 0.7 }}>
              Agenda una conversación
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--color-emphasys-blue)" }}>
              Conversemos sobre tu empresa.
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              No necesitas llegar con un diagnóstico ni saber qué solución necesitas. Cuéntanos qué está pasando, qué te preocupa y qué te gustaría cambiar. La primera conversación es para escuchar, entender tu contexto y determinar si tiene sentido profundizar.
            </p>
            <p className="text-base font-semibold leading-relaxed text-slate-800">
              Si vemos que podemos ayudarte, te explicaremos cuál creemos que debe ser el siguiente paso.
            </p>

            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <span className="font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>Email:</span>
                <a href="mailto:ventas@emphasys.mx" className="text-[var(--color-emphasys-green)] underline-offset-4 hover:underline">ventas@emphasys.mx</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold" style={{ color: "var(--color-emphasys-blue)" }}>Tel / WhatsApp:</span>
                <a href="https://wa.me/523311107328" className="text-[var(--color-emphasys-green)] underline-offset-4 hover:underline" target="_blank" rel="noreferrer">+52 33 1288 9584</a>
              </div>
              <p className="text-slate-500">Horario de respuesta: L-V 9:00–18:00 (Centro de México).</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-slate-800">Nombre completo*</label>
                <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[var(--color-emphasys-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-emphasys-green)] focus:ring-offset-1 focus:ring-offset-white" placeholder="Ej. Ana Torres" required />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-semibold text-slate-800">Email*</label>
                <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[var(--color-emphasys-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-emphasys-green)] focus:ring-offset-1 focus:ring-offset-white" placeholder="tu@empresa.com" required />
              </div>

              <div className="space-y-1">
                <label htmlFor="company" className="text-sm font-semibold text-slate-800">Empresa</label>
                <input id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[var(--color-emphasys-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-emphasys-green)] focus:ring-offset-1 focus:ring-offset-white" placeholder="Nombre de tu empresa" />
              </div>

              <div className="space-y-1">
                <label htmlFor="topic" className="text-sm font-semibold text-slate-800">Tema (opcional)</label>
                <input id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[var(--color-emphasys-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-emphasys-green)] focus:ring-offset-1 focus:ring-offset-white" placeholder="Cuéntanos brevemente qué te preocupa" />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-semibold text-slate-800">Mensaje*</label>
                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[var(--color-emphasys-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-emphasys-green)] focus:ring-offset-1 focus:ring-offset-white" placeholder="Cuéntanos brevemente tu contexto" required />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}
              {status === "success" && <p className="text-sm text-[var(--color-emphasys-green)]">Recibido. Te contactaremos en menos de 24h hábiles.</p>}

              <button type="submit" className="w-full rounded-full bg-[var(--color-emphasys-green)] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-emphasys-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60" disabled={status === "loading" || status === "success"}>
                {status === "loading" ? "Enviando..." : status === "success" ? "Enviado" : "Enviar mensaje"}
              </button>

              <p className="text-xs text-slate-500">Usaremos tu información solo para atender tu solicitud de contacto.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
