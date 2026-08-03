import type { MetadataRoute } from "next";

const baseUrl = "https://emphasys.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/como-ordenar-empresa-en-crecimiento",
    "/software-para-controlar-negocio",
    "/arquitectura-comercial-integrada",
    "/automatizacion-ventas",
    "/control-de-costos",
    "/erp-a-la-medida",
    "/erp-para-pymes-mexico",
    "/radiografia-empresarial",
    "/sistema-operativo-empresarial",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
