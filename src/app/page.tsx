import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Header/NavBar/NavBar";
import GuaranteeSection from "@/components/Home/GuaranteeSection";
import ProjectSection from "@/components/Home/ProjectsSection";
import InterestSection from "@/components/Home/InterestSection";
import AdSection from "@/components/Home/AdSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <section>
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
      {/* Ad Section */}
      <AdSection />
      {/* Footer */}
      <Footer />
    </section>
  );
}
