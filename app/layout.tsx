import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://emphasys.mx"),
  title: "ERP para pymes | Control y claridad en tu negocio | Emphasys",
  description:
    "Recupera el control de tu negocio con un ERP para pymes que se adapta a ti. Elimina desorden, potencia tus ventas y toma decisiones con claridad.",
  verification: {
    google: "aCeNCftTa0cNDUs2L9jCCOChfwVehgyDFm2o_EpR1rs",
  },
  keywords: [
    "ERP a la medida",
    "software empresarial",
    "automatización de ventas",
    "control de costos",
    "arquitectura empresarial",
    "sistema operativo de negocios",
    "integración ventas finanzas",
  ],
  authors: [{ name: "Emphasys" }],
  openGraph: {
    title: "Emphasys | ERP a la medida y software empresarial para controlar costos",
    description:
      "Implementamos software empresarial que integra ventas, compras y finanzas. Controla costos, automatiza ventas y toma decisiones con claridad.",
    siteName: "Emphasys",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "Emphasys | ERP a la medida y software empresarial para controlar costos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emphasys | ERP a la medida y software empresarial",
    description:
      "Software empresarial que integra ventas, compras y finanzas. Controla costos y automatiza ventas con claridad estratégica.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative min-h-screen">
          <div
            className="fixed left-0 top-0 h-full w-[10px]"
            style={{ backgroundColor: "var(--color-emphasys-blue)" }}
          />
          <div className="pl-[10px]">
            <Header />
            <main className="pt-24">
              {children}
            </main>
            <StickyCTA />
            <StickyWhatsApp />
          </div>
        </div>
      </body>
    </html>
  );
}
