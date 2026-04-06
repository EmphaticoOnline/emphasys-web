import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ResultsSection from "@/components/ResultsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ManifestSection from "@/components/ManifestSection";
import CommercialImpactSection from "@/components/CommercialImpactSection";
import ContactSection from "@/components/ContactSection";
import ServiceLinks from "@/components/ServiceLinks";
import PlatformSection from "@/components/PlatformSection";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ArchitectureSection />
  <PlatformSection />
  <HowItWorks />
      <ManifestSection />
      <CommercialImpactSection />
  <ServiceLinks />
      <ResultsSection />
      <section className="bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-[900px] px-6 pt-16 pb-20 sm:px-10 lg:px-0">
          <div className="space-y-4">
            <h2
              className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "var(--color-emphasys-blue)" }}
            >
              Una forma diferente de implementar tecnología
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Sin licencias complicadas. Sin proyectos interminables. Un sistema que evoluciona contigo, con un esquema mensual claro y sostenible.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
