import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { JourneySection } from './components/JourneySection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WritingSection } from './components/WritingSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { projects } from './data/portfolioData';
import { Project } from './types/portfolio';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);
  const [prefilledService, setPrefilledService] = useState<string | null>(null);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleServiceSelect = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111111] selection:bg-[#FF5722] selection:text-white flex flex-col font-sans">
      {/* Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <FounderSection />
        <ProjectsSection onOpenCaseStudy={(project) => setSelectedCaseStudy(project)} />
        <SkillsSection />
        <ServicesSection onSelectService={handleServiceSelect} />
        <JourneySection />
        <ProcessSection />
        <TestimonialsSection />
        <WritingSection />
        <PhilosophySection />
        <ContactSection prefilledService={prefilledService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Reader Overlay */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onSelectProject={(p) => setSelectedCaseStudy(p)}
          allProjects={projects}
        />
      )}

      {/* Quick Navigation Command Palette */}
      {commandPaletteOpen && (
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
          onSelectProject={(p) => setSelectedCaseStudy(p)}
        />
      )}
    </div>
  );
}
