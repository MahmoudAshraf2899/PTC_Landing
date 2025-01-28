import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Header/NavBar/NavBar";
import GuaranteeSection from "@/components/Home/GuaranteeSection";
import ProjectSection from "@/components/Home/ProjectsSection";
import InterestSection from "@/components/Home/InterestSection";

export default function Home() {
  return (
    <section>
      <div className="min-h-screen bg-cover bg-center">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />
        {/* Guarantee Section */}
        <GuaranteeSection />
        {/* Project Section */}
        <ProjectSection />
        {/* Interest Section */}
        <InterestSection />
      </div>
    </section>
  );
}
