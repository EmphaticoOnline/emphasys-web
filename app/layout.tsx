import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emphasys.mx"),
  alternates: {
    canonical: "/",
  },
  title: "ERP para pymes | Control y claridad en tu negocio | Emphasys",
  description:
    "ERP para pymes, software empresarial, CRM y control de costos. Emphasys ayuda a recuperar el control del negocio y recomienda tecnología sólo cuando realmente aporta.",
  verification: {
    google: "aCeNCftTa0cNDUs2L9jCCOChfwVehgyDFm2o_EpR1rs",
  },
  keywords: [
    "ERP para pymes",
    "ERP a la medida",
    "software empresarial",
    "CRM",
    "automatización de ventas",
    "control de costos",
    "control de inventarios",
    "software para empresas",
  ],
  authors: [{ name: "Emphasys" }],
  openGraph: {
    title: "Emphasys | ERP para pymes y software empresarial",
    description:
      "ERP para pymes, CRM y software empresarial para ventas, compras, inventario y costos. Primero entendemos el negocio; después recomendamos cómo recuperar control.",
    siteName: "Emphasys",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "Emphasys | ERP para pymes, software empresarial y control de costos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emphasys | ERP para pymes y software empresarial",
    description:
      "ERP para pymes, CRM y software empresarial. Recuperar control empieza por entender el negocio, no por instalar un sistema.",
    images: ["/social-card.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased`}>
        <div className="relative min-h-screen">
          <div
            className="fixed left-0 top-0 z-[60] h-full w-[8px]"
            style={{ backgroundColor: "var(--color-emphasys-blue)" }}
          />
          <div className="pl-[8px]">
            <Header />
            <main className="pt-24">{children}</main>
            <Footer />
            <StickyCTA />
            <StickyWhatsApp />
          </div>
        </div>
      </body>
    </html>
  );
}
