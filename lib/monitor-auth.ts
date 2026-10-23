import { NextResponse } from "next/server";

export const monitorCredentialsConfigured = () => Boolean(process.env.MONITOR_USERNAME && process.env.MONITOR_PASSWORD);

export const monitorAuthorized = (request: Request) => {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ") || !monitorCredentialsConfigured()) return false;
  try {
    const decoded = atob(header.slice(6));
    const separator = decoded.indexOf(":");
    return separator > 0 && decoded.slice(0, separator) === process.env.MONITOR_USERNAME && decoded.slice(separator + 1) === process.env.MONITOR_PASSWORD;
  } catch { return false; }
};

export const monitorUnauthorized = () => NextResponse.json({ error: "Autenticación requerida." }, { status: 401, headers: { "WWW-Authenticate": 'Basic realm="Emphasys monitor", charset="UTF-8"', "Cache-Control": "no-store" } });
