import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ManifestSection from "@/components/ManifestSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ServiceLinks from "@/components/ServiceLinks";
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ManifestSection />
      <ArchitectureSection />
      <ServiceLinks />
      <ResultsSection />

      <section id="impacto" className="bg-slate-50 text-slate-900 scroll-mt-28 md:scroll-mt-32">
        <div className="mx-auto max-w-[900px] px-6 pt-16 pb-20 sm:px-10 lg:px-0">
          <div className="space-y-5">
            <h2
              className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "var(--color-emphasys-blue)" }}
            >
              Recuperar el control cambia más que la operación
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Una empresa bien administrada no solo genera mejores resultados. También genera tranquilidad, capacidad para delegar, tiempo y libertad.
            </p>
            <p className="text-lg font-semibold leading-relaxed text-slate-900">
              Emphasys existe para ayudar a que la empresa deje de dominar al empresario y vuelva a convertirse en el vehículo de sus objetivos.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
