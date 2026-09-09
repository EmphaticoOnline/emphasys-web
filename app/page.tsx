import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ManifestSection from "@/components/ManifestSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ServiceLinks from "@/components/ServiceLinks";
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";

const purposeItems = ["Tranquilidad", "Capacidad de delegar", "Tiempo", "Libertad"];

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ManifestSection />
      <ArchitectureSection />
      <ServiceLinks />
      <ResultsSection />

      <section id="impacto" className="surface-navy scroll-mt-28 md:scroll-mt-32">
        <div className="wrap py-20 lg:py-28">
          <h2 className="font-display max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Recuperar el control cambia más que la operación
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            Una empresa bien administrada no solo genera mejores resultados. También genera tranquilidad, capacidad para delegar, tiempo y libertad.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {purposeItems.map((item) => (
              <p key={item} className="border-t border-white/20 pt-5 font-display text-2xl text-white">
                {item}
              </p>
            ))}
          </div>
          <p className="mt-12 max-w-3xl font-display text-xl leading-relaxed text-white sm:text-2xl">
            Emphasys existe para ayudar a que la empresa deje de dominar al empresario y vuelva a convertirse en el vehículo de sus objetivos.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
