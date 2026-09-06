import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0C0C0C]" style={{ overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
