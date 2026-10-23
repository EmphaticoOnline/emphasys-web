import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { monitorAuthorized, monitorUnauthorized } from "@/lib/monitor-auth";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/monitor" || pathname.startsWith("/monitor/") || pathname === "/api/monitor" || pathname.startsWith("/api/monitor/")) {
    if (!monitorAuthorized(request)) return monitorUnauthorized();
  }

  if (pathname === "/index.html") {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  if (pathname === "/por-que-emphasys/index.html") {
    return NextResponse.redirect(
      new URL("/principios-emphasys", request.url),
      301,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/index.html", "/por-que-emphasys/index.html", "/monitor/:path*", "/api/monitor/:path*"],
};
