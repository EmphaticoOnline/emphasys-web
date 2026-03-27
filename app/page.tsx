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
      <ContactSection />
    </>
  );
}
