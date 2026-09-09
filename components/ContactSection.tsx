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
    <section id="contacto" className="relative scroll-mt-28 bg-[#eceff4] text-slate-900 md:scroll-mt-32">
      <div id="contact-section" className="absolute -top-4 h-px w-px" aria-hidden="true" />
      <div className="wrap py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Agenda una conversación</p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-emphasys-blue)] sm:text-4xl">
              Conversemos sobre tu empresa.
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              No necesitas llegar con un diagnóstico ni saber qué solución necesitas. Cuéntanos qué está pasando, qué te preocupa y qué te gustaría cambiar. La primera conversación es para escuchar, entender tu contexto y determinar si tiene sentido profundizar.
            </p>
            <p className="text-base font-semibold leading-relaxed text-slate-800">
              Si vemos que podemos ayudarte, te explicaremos cuál creemos que debe ser el siguiente paso.
            </p>

            <div className="space-y-2 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[var(--color-emphasys-blue)]">Email:</span>
                <a href="mailto:ventas@emphasys.mx" className="text-[var(--color-emphasys-green)] underline-offset-4 hover:underline">
                  ventas@emphasys.mx
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[var(--color-emphasys-blue)]">Tel / WhatsApp:</span>
                <a href="https://wa.me/523312889584" className="text-[var(--color-emphasys-green)] underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
                  +52 33 1288 9584
                </a>
              </div>
              <p className="text-slate-500">Horario de respuesta: L-V 9:00–18:00 (Centro de México).</p>
            </div>
          </div>

          <div className="border border-[rgba(29,47,104,0.10)] bg-white p-6 shadow-[0_20px_50px_rgba(18,26,61,0.06)] sm:p-8">
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-slate-800">Nombre completo*</label>
                <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="input-field" placeholder="Ej. Ana Torres" required />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-semibold text-slate-800">Email*</label>
                <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" placeholder="tu@empresa.com" required />
              </div>

              <div className="space-y-1">
                <label htmlFor="company" className="text-sm font-semibold text-slate-800">Empresa</label>
                <input id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} className="input-field" placeholder="Nombre de tu empresa" />
              </div>

              <div className="space-y-1">
                <label htmlFor="topic" className="text-sm font-semibold text-slate-800">Tema (opcional)</label>
                <input id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className="input-field" placeholder="Cuéntanos brevemente qué te preocupa" />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-semibold text-slate-800">Mensaje*</label>
                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="input-field" placeholder="Cuéntanos brevemente tu contexto" required />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}
              {status === "success" && <p className="text-sm text-[var(--color-emphasys-green)]">Recibido. Te contactaremos en menos de 24h hábiles.</p>}

              <button type="submit" className="btn-primary w-full" disabled={status === "loading" || status === "success"}>
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
