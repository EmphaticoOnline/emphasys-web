import { NextResponse } from "next/server";
import { AGGREGATE_EVENT_TYPES, recordAggregateEvent } from "@/lib/evaluation-analytics";

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");
    if (origin && host && new URL(origin).host !== host) return NextResponse.json({ error: "Origen no permitido." }, { status: 403 });
    const body = await request.json();
    if (!body || typeof body !== "object" || !AGGREGATE_EVENT_TYPES.includes(body.eventType)) return NextResponse.json({ error: "Evento inválido." }, { status: 400 });
    if (body.website) return NextResponse.json({ error: "Evento rechazado." }, { status: 400 });
    const result = await recordAggregateEvent({ eventType: body.eventType, stepNumber: body.stepNumber, idempotencyKey: body.idempotencyKey });
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown";
    if (["invalid-aggregate-event", "invalid-step", "aggregate-rate-limit"].includes(message)) return NextResponse.json({ error: "Evento rechazado." }, { status: 400 });
    console.error("Evaluation aggregate analytics error", message);
    return NextResponse.json({ error: "No se pudo registrar el evento." }, { status: 503 });
  }
}
