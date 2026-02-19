import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, company, topic, message } = data || {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Falta configurar RESEND_API_KEY." }, { status: 500 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "ventas@emphasys.mx";
    const subject = `Nuevo contacto: ${name}${topic ? ` | ${topic}` : ""}`;

    await resend.emails.send({
      from: "Emphasys <no-reply@emphasys.mx>",
      to: toEmail,
      replyTo: email,
      subject,
      text: `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company || "(no indicado)"}\nTema: ${topic || "(no indicado)"}\n\nMensaje:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando contacto", error);
    return NextResponse.json({ error: "No se pudo enviar el mensaje. Inténtalo más tarde." }, { status: 500 });
  }
}
