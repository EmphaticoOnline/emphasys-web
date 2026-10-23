"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackSiteAggregateEvent } from "@/lib/analytics";

const SiteMeasurement = () => {
  const pathname = usePathname();

  useEffect(() => {
    trackSiteAggregateEvent("page_view", pathname || "/");
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (/^(https?:\/\/)?(www\.)?wa\.me\//i.test(href) || href.includes("whatsapp.com")) trackSiteAggregateEvent("whatsapp_click", pathname || "/");
      else if (href.startsWith("tel:")) trackSiteAggregateEvent("phone_click", pathname || "/");
      else if (href.startsWith("mailto:")) trackSiteAggregateEvent("email_click", pathname || "/");
      else if (href === "/evaluacion-empresarial" || href.startsWith("/evaluacion-empresarial?")) trackSiteAggregateEvent("evaluation_cta_click", pathname || "/");
      else if (href === "/radiografia-empresarial" || href.startsWith("/radiografia-empresarial?")) trackSiteAggregateEvent("radiografia_click", pathname || "/");
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  return null;
};

export default SiteMeasurement;
