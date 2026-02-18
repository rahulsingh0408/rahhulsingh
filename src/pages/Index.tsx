import { useState, useEffect } from 'react';
import TerminalIntro from '../components/TerminalIntro';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true); // ✅ always show on load
  const [isNeonTheme, setIsNeonTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'neon';
    }
    return false;
  });

  // ✅ REMOVED the sessionStorage useEffect that was skipping the intro

  useEffect(() => {
    if (isNeonTheme) {
      document.documentElement.classList.add('neon-theme');
    } else {
      document.documentElement.classList.remove('neon-theme');
    }
    localStorage.setItem('theme', isNeonTheme ? 'neon' : 'dark');
  }, [isNeonTheme]);

  const handleIntroComplete = () => {
    setShowIntro(false); // ✅ no sessionStorage, so next reload shows intro again
  };

  const toggleTheme = () => {
    setIsNeonTheme((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-background">
      {showIntro && <TerminalIntro onComplete={handleIntroComplete} />}
      <div
        className={`transition-opacity duration-1000 ${
          showIntro ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Navbar isNeonTheme={isNeonTheme} onThemeToggle={toggleTheme} />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
