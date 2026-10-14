import { NextResponse } from "next/server";
import { Resend } from "resend";
import { handleEvaluationCopyRequest } from "@/lib/evaluacion-correo";

const clientIp = (req: Request) => {
  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const candidate = forwarded || req.headers.get("x-real-ip")?.trim() || "desconocido";
  return candidate.replace(/[^\w.:-]/g, "").slice(0, 64) || "desconocido";
};

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "No pudimos preparar la copia con estos datos." }, { status: 400 });
  }

  const result = await handleEvaluationCopyRequest(payload, {
    ip: clientIp(req),
    mailer: async (message) => {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) throw new Error("missing-key");
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: "Emphasys <no-reply@emphasys.mx>",
        to: message.to,
        replyTo: "ventas@emphasys.mx",
        subject: message.subject,
        text: message.text,
        html: message.html,
      });
      if (error) {
        const safeMessage = error.message
          .replace(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/g, "[redacted-email]")
          .replace(/re_[A-Za-z0-9_-]+/g, "[redacted-secret]");
        console.error("Error de Resend enviando copia de evaluación", {
          code: error.name,
          type: error.constructor?.name || "unknown",
          message: safeMessage,
        });
        throw new Error("resend");
      }
    },
  });

  return NextResponse.json(result.body, { status: result.status });
}
