import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';
import CyberBackground from './components/CyberBackground';
import { setSoundEnabled, playClick } from './utils/sound';

export default function App() {
  const [isSound, setIsSound] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Toggle cyber sound synthesizer
  const toggleSound = () => {
    const newState = !isSound;
    setIsSound(newState);
    setSoundEnabled(newState);
    if (newState) {
      playClick();
    }
  };

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-cyber-950 text-slate-100 font-sans selection:bg-neon-cyan/25 selection:text-neon-cyan overflow-x-hidden">
      
      {/* Ambient Cyber Canvas Backdrop */}
      <CyberBackground />

      {/* Persistent Cyberpunk Navigation Bar */}
      <Navbar
        isSound={isSound}
        toggleSound={toggleSound}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 00: Hero */}
        <Hero
          onDownloadResume={() => setIsResumeModalOpen(true)}
        />

        {/* Section 01: About & Dossier & Terminal */}
        <About />

        {/* Section 02: Skills & Tech Arsenal */}
        <Skills />

        {/* Section 03: Projects & Flagship Missions */}
        <Projects />

        {/* Section 04: Contact Terminal & Form */}
        <Contact />
      </main>

      {/* Cybernetic Footer */}
      <Footer />

      {/* Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        isSound={isSound}
        toggleSound={toggleSound}
        onDownloadResume={() => {
          setIsCommandPaletteOpen(false);
          setIsResumeModalOpen(true);
        }}
      />

      {/* Resume Dossier Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
}
