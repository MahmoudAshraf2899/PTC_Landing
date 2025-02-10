import Hero from "@/components/Home/Hero";
import GuaranteeSection from "@/components/Home/GuaranteeSection";
import ProjectSection from "@/components/Home/ProjectsSection";
import InterestSection from "@/components/Home/InterestSection";
import AdSection from "@/components/Home/AdSection";

export default function Home() {
  return (
    <section className="pb-20">
      {/* Hero Section */}
      <Hero />
      {/* Guarantee Section */}
      <GuaranteeSection />
      {/* Project Section */}
      <ProjectSection />
      {/* Interest Section */}
      <InterestSection />
      {/* Ad Section */}
      <AdSection />
    </section>
  );
}
