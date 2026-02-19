import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StickyCTA from "@/components/StickyCTA";

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
  title: "Emphasys | Arquitectura empresarial para crecer con claridad",
  description:
    "Diseñamos la arquitectura empresarial que brinda claridad estratégica, control financiero y ejecución disciplinada para empresas en crecimiento.",
  keywords: [
    "arquitectura empresarial",
    "estrategia",
    "claridad financiera",
    "rentabilidad",
    "operaciones",
    "gobernanza",
    "Emphasys",
  ],
  authors: [{ name: "Emphasys" }],
  openGraph: {
    title: "Emphasys | Arquitectura empresarial para crecer con claridad",
    description:
      "Diseñamos la arquitectura empresarial que brinda claridad estratégica, control financiero y ejecución disciplinada para empresas en crecimiento.",
    siteName: "Emphasys",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "Emphasys | Arquitectura empresarial para crecer con claridad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emphasys | Arquitectura empresarial para crecer con claridad",
    description:
      "Diseñamos la arquitectura empresarial que brinda claridad estratégica, control financiero y ejecución disciplinada para empresas en crecimiento.",
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
          </div>
        </div>
      </body>
    </html>
  );
}
