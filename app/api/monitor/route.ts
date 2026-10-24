import { NextResponse } from "next/server";
import { getMonitorAnalytics } from "@/lib/evaluation-analytics";
import { monitorAuthorized, monitorUnauthorized } from "@/lib/monitor-auth";
import { businessDateISO } from "@/lib/business-date";

export async function GET(request: Request) {
  if (!monitorAuthorized(request)) return monitorUnauthorized();
  const url = new URL(request.url);
  const from = url.searchParams.get("from") ?? businessDateISO();
  const to = url.searchParams.get("to") ?? from;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(from) || !/^\d{4}-\d{2}-\d{2}$/.test(to) || from > to) return NextResponse.json({ error: "Rango inválido." }, { status: 400 });
  try { return NextResponse.json(await getMonitorAnalytics(from, to), { headers: { "Cache-Control": "private, no-store" } }); }
  catch (error) { console.error("Monitor analytics error", error instanceof Error ? error.message : "unknown"); return NextResponse.json({ error: "No se pudo consultar el panel." }, { status: 503 }); }
}
