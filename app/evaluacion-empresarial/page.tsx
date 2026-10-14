import type { Metadata } from "next";
import EvaluacionEmpresarial from "@/components/evaluacion/EvaluacionEmpresarial";

export const metadata: Metadata = {
  title: "Evaluación Empresarial en 4 Minutos | Emphasys",
  description:
    "Responde ocho preguntas sobre el control, la rentabilidad y la operación de tu negocio y obtén una primera orientación. Es una evaluación orientativa, no un diagnóstico definitivo.",
  alternates: { canonical: "/evaluacion-empresarial" },
  openGraph: {
    title: "Evaluación Empresarial en 4 Minutos | Emphasys",
    description:
      "Una primera orientación sobre fortalezas y aspectos que conviene revisar. Sin registro y sin compromiso.",
    url: "https://emphasys.mx/evaluacion-empresarial",
    type: "website",
    images: [{ url: "/social-card.svg", width: 1200, height: 630, alt: "Evaluación Empresarial en 4 Minutos" }],
  },
};

export default function EvaluacionEmpresarialPage() {
  return <EvaluacionEmpresarial />;
}
