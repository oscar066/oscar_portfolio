import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ArticlesSection from "./components/ArticlesSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Articles Section */}
      <ArticlesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
