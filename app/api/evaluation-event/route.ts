import { NextResponse } from "next/server";
import { EVENT_TYPES, recordEvaluationEvent, type ConsentState } from "@/lib/evaluation-analytics";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object" || !EVENT_TYPES.includes(body.eventType)) return NextResponse.json({ error: "Evento inválido." }, { status: 400 });
    const consentState: ConsentState = body.consentState === "granted" || body.consentState === "denied" ? body.consentState : "unknown";
    const result = await recordEvaluationEvent({ ...body, consentState });
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown";
    if (["analytics-consent-required", "invalid-identifier", "invalid-idempotency-key", "invalid-step", "metadata-too-large"].includes(message)) return NextResponse.json({ error: "Evento rechazado." }, { status: 400 });
    console.error("Evaluation analytics error", message);
    return NextResponse.json({ error: "No se pudo registrar el evento." }, { status: 503 });
  }
}
