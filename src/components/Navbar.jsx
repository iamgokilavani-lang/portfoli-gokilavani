import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Terminal, 
  Volume2, 
  VolumeX, 
  Search, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { playClick, playHover } from '../utils/sound';

export default function Navbar({ isSound, toggleSound, onOpenCommandPalette }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: '// HOME' },
    { id: 'about', label: '// ABOUT' },
    { id: 'skills', label: '// SKILLS' },
    { id: 'projects', label: '// PROJECTS' },
    { id: 'experience', label: '// EXPERIENCE' },
    { id: 'contact', label: '// CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['contact', 'experience', 'projects', 'skills', 'about', 'home'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-950/85 backdrop-blur-md border-b border-cyber-700/60 shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Callsign */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded bg-cyber-900 border border-neon-cyan/50 flex items-center justify-center group-hover:border-neon-cyan group-hover:shadow-glow-cyan transition-all">
              <Terminal className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-slate-100 group-hover:text-neon-cyan transition-colors flex items-center gap-1.5">
                GOKILAVANI
                <span className="inline-block w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-neon-cyan/70 tracking-widest uppercase">
                CYBER // ARCHITECT
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  onMouseEnter={playHover}
                  className={`px-3 py-1.5 rounded relative transition-all duration-200 ${
                    isActive
                      ? 'text-neon-cyan bg-neon-cyan/10 border-b-2 border-neon-cyan shadow-inner-glow'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-cyber-800/40'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -top-1 right-1 w-1 h-1 rounded-full bg-neon-cyan animate-ping" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Quick Command Palette Launcher */}
            <button
              onClick={() => { playClick(); onOpenCommandPalette(); }}
              onMouseEnter={playHover}
              title="Command Palette (Ctrl + K)"
              className="flex items-center space-x-1.5 px-2.5 py-1.5 text-xs font-mono text-slate-400 bg-cyber-900 border border-cyber-700 hover:border-neon-cyan hover:text-neon-cyan rounded transition-all"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Cmd</span>
              <kbd className="text-[10px] bg-cyber-800 px-1 py-0.5 rounded text-slate-300">⌘K</kbd>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={() => { playClick(); toggleSound(); }}
              onMouseEnter={playHover}
              title={isSound ? "Mute Cyber FX" : "Enable Cyber FX"}
              className={`p-2 rounded border transition-all ${
                isSound 
                  ? 'border-neon-green/60 text-neon-green bg-neon-green/10 shadow-glow-green' 
                  : 'border-cyber-700 text-slate-400 hover:text-slate-200 bg-cyber-900'
              }`}
            >
              {isSound ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Contact CTA */}
            <button
              onClick={() => scrollTo('contact')}
              onMouseEnter={playHover}
              className="cyber-cut px-4 py-1.5 text-xs font-mono font-semibold uppercase bg-neon-cyan/15 text-neon-cyan border border-neon-cyan hover:bg-neon-cyan hover:text-cyber-950 hover:shadow-glow-cyan transition-all"
            >
              Initialize Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => { playClick(); toggleSound(); }}
              className={`p-2 rounded border text-xs ${
                isSound ? 'border-neon-green text-neon-green' : 'border-cyber-700 text-slate-400'
              }`}
            >
              {isSound ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 text-slate-300 hover:text-neon-cyan bg-cyber-900 border border-cyber-700 rounded focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-cyber-950/95 border-b border-cyber-700/80 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 font-mono animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded text-sm transition-all ${
                  isActive
                    ? 'bg-neon-cyan/15 text-neon-cyan border-l-4 border-neon-cyan'
                    : 'text-slate-300 hover:bg-cyber-800/60'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </button>
            );
          })}
          <div className="pt-2 border-t border-cyber-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 bg-cyber-900 border border-cyber-700 text-slate-300 rounded text-xs"
            >
              <Search className="w-4 h-4 text-neon-cyan" />
              <span>Launch Command Palette (⌘K)</span>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="cyber-cut w-full py-3 bg-neon-cyan text-cyber-950 font-bold text-xs uppercase tracking-wider shadow-glow-cyan text-center"
            >
              Initialize Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
