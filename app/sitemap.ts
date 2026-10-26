import type { MetadataRoute } from "next";
import { perspectivePath, perspectives } from "@/lib/perspectivas";

const baseUrl = "https://emphasys.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/como-ordenar-empresa-en-crecimiento",
    "/empresa-crecio-perdio-control",
    "/software-para-controlar-negocio",
    "/arquitectura-comercial-integrada",
    "/automatizacion-ventas",
    "/control-de-costos",
    "/erp-a-la-medida",
    "/erp-para-pymes-mexico",
    "/radiografia-empresarial",
    "/principios-emphasys",
    "/aviso-de-privacidad",
    "/sistema-operativo-empresarial",
    "/perspectivas",
    ...perspectives.map(perspectivePath),
  ];

  return routes.map((path) => ({ url: `${baseUrl}${path}` }));
}
