import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { ResearchLab } from './components/ResearchLab';
import { HowIBuild } from './components/HowIBuild';
import { TechnologyStack } from './components/TechnologyStack';
import { IshizakiTechServices } from './components/IshizakiTechServices';
import { BuildLog } from './components/BuildLog';
import { EvidenceSection } from './components/EvidenceSection';
import { GitHubSection } from './components/GitHubSection';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0c12] text-zinc-100 flex flex-col selection:bg-amber-500/25 selection:text-amber-300">
      
      {/* Fixed Navigation Header */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Signature Hero with Digital Ecosystem Visualization */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* Brand Statement & Proof-of-Work Philosophy */}
        <BrandStatement />

        {/* About Johnson Bediako Ametsitsi */}
        <About />

        {/* Selected Work & Systems */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Research & Experiments (Lab Notebook) */}
        <ResearchLab />

        {/* How I Build (Engineering Thinking - 8 Stages) */}
        <HowIBuild />

        {/* Technology Stack with Honest Familiarity */}
        <TechnologyStack />

        {/* Ishizaki Tech Services */}
        <IshizakiTechServices onOpenContact={() => setIsContactOpen(true)} />

        {/* Build Log & Evolutionary Growth Map */}
        <BuildLog />

        {/* Featured Evidence */}
        <EvidenceSection />

        {/* Public GitHub Section */}
        <GitHubSection />

        {/* Contact System */}
        <ContactSection onOpenContactModal={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Modals */}
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
