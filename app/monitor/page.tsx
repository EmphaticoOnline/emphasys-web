import type { Metadata } from "next";
import { getMonitorAnalytics } from "@/lib/evaluation-analytics";
import { monitorDateRange } from "@/lib/business-date";

export const metadata: Metadata = {
  title: "Monitor privado | Emphasys",
  robots: { index: false, follow: false, nocache: true },
  icons: { apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  appleWebApp: { capable: true, title: "Monitor Emphasys", statusBarStyle: "default" },
};

const n = (value: number) => new Intl.NumberFormat("es-MX").format(value);
const pct = (a: number, b: number) => b ? `${Math.round(a / b * 100)}%` : "—";

export default async function MonitorPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams; const preset = typeof params.preset === "string" ? params.preset : "today"; const defaults = monitorDateRange(preset); const from = typeof params.from === "string" ? params.from : defaults.from; const to = typeof params.to === "string" ? params.to : defaults.to; const data = await getMonitorAnalytics(from, to); const max = Math.max(...data.daily.map((day) => day.visits + day.pageViews), 1);
  return <div className="monitor-shell"><header className="monitor-header"><div><p className="monitor-kicker">Emphasys · monitor privado</p><h1>Actividad comercial</h1><p className="monitor-subtitle">Lectura operativa de la medición agregada del sitio.</p></div><span className="monitor-lock">Servidor protegido</span></header>
    <main className="monitor-main"><nav className="monitor-filters" aria-label="Rango de fechas">{[["today","Hoy"],["yesterday","Ayer"],["7d","7 días"],["30d","30 días"]].map(([key,label]) => <a className={preset === key && !params.from ? "active" : ""} href={`/monitor?preset=${key}`} key={key}>{label}</a>)}<form><label>Desde<input type="date" name="from" defaultValue={from}/></label><label>Hasta<input type="date" name="to" defaultValue={to}/></label><button type="submit">Aplicar</button></form></nav>
      <div className="monitor-note">Visitas = eventos agregados. No se calculan visitantes únicos: este modelo no identifica visitantes. Contactos efectivos = formularios enviados; los clics se muestran como intención separada.</div>
      <section className="monitor-cards"><article><span>Páginas vistas</span><strong>{n(data.totals.pageViews)}</strong><small>Sólo páginas públicas</small></article><article><span>Visitas a la evaluación</span><strong>{n(data.totals.visits)}</strong><small>Contador agregado · únicos: no disponible</small></article><article><span>Evaluaciones</span><strong>{n(data.totals.starts)} <em>→ {n(data.totals.completed)}</em></strong><small>Iniciadas → completadas · {pct(data.totals.completed, data.totals.starts)} conversión</small></article><article><span>Contactos</span><strong>{n(data.totals.contacts)}</strong><small>Formularios enviados · intentos: {n(data.totals.contactIntents)}</small></article></section>
      <section className="monitor-grid"><article className="monitor-panel chart-panel"><div className="panel-heading"><div><p className="monitor-kicker">Ritmo diario</p><h2>Actividad</h2></div><span>{from} — {to}</span></div><div className="bars" aria-label="Gráfica de actividad diaria">{data.daily.map((day) => <div className="bar-column" key={day.day} title={`${day.day}: ${n(day.visits)} visitas, ${n(day.pageViews)} páginas`}><div className="bar-stack"><i style={{ height: `${Math.max(day.visits / max * 100, day.visits ? 4 : 0)}%` }} /><b style={{ height: `${Math.max(day.pageViews / max * 100, day.pageViews ? 4 : 0)}%` }} /></div><small>{day.day.slice(5)}</small></div>)}</div><div className="legend"><span><i/> Visitas</span><span><b/> Páginas vistas</span></div></article><article className="monitor-panel"><div className="panel-heading"><div><p className="monitor-kicker">Alcance</p><h2>Páginas más visitadas</h2></div></div><ol className="rank-list">{data.topPages.length ? data.topPages.map((page) => <li key={page.path}><span>{page.path}</span><strong>{n(page.views)}</strong></li>) : <li className="empty">Sin datos en este periodo</li>}</ol></article></section>
      <section className="monitor-panel"><div className="panel-heading"><div><p className="monitor-kicker">Señales</p><h2>Desglose comercial</h2></div></div><div className="event-list">{data.events.map((event) => <div key={event.label}><span><i className={event.kind}/>{event.label}</span><strong>{n(event.value)}</strong></div>)}<div><span><i className="contact"/>Contactos efectivos (formularios)</span><strong>{n(data.totals.contacts)}</strong></div><div><span><i className="intent"/>Intentos de contacto (WhatsApp, teléfono, email)</span><strong>{n(data.totals.contactIntents)}</strong></div></div></section>
    </main></div>;
}
