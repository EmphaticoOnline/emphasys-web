import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ResultsSection from "@/components/ResultsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ManifestSection from "@/components/ManifestSection";
import CommercialImpactSection from "@/components/CommercialImpactSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ArchitectureSection />
      <ManifestSection />
      <CommercialImpactSection />
      <ResultsSection />
      <ContactSection />
    </>
  );
}
