"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import SiteMeasurement from "@/components/SiteMeasurement";

export default function AppFrame({ children }: { children: React.ReactNode }) {
  const isMonitor = usePathname() === "/monitor";
  return <div className="relative min-h-screen">
    {!isMonitor && <div className="fixed left-0 top-0 z-[60] h-full w-[8px]" style={{ backgroundColor: "var(--color-emphasys-blue)" }} />}
    <div className={isMonitor ? "" : "pl-[8px]"}>
      {!isMonitor && <Header />}
      <main className={isMonitor ? "" : "pt-24 md:pt-[114px]"}>{children}</main>
      {!isMonitor && <><Footer /><StickyCTA /><StickyWhatsApp /></>}
      <SiteMeasurement />
    </div>
  </div>;
}
