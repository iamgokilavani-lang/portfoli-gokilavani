import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Terminal, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Globe, 
  Database,
  Layers,
  ChevronDown
} from 'lucide-react';
import { PERSONAL_INFO, SYSTEM_METRICS } from '../data/portfolioData';
import { playClick, playHover } from '../utils/sound';

export default function Hero({ onDownloadResume }) {
  const roles = [
    "Senior Full Stack Engineer",
    "Distributed Cloud Architect",
    "Micro-Frontend Craftsman",
    "Real-Time Systems Specialist"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Dynamic typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(50);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const scrollToSection = (id) => {
    playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Chip */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded bg-cyber-900/90 border border-neon-cyan/40 shadow-glow-cyan/20">
              <span className="w-2.5 h-2.5 rounded-full bg-neon-green animate-ping" />
              <span className="font-mono text-xs uppercase tracking-wider text-neon-green font-semibold">
                SYSTEM: ONLINE // AVAILABLE FOR HIRE
              </span>
            </div>

            {/* Main Greeting & Heading */}
            <div className="space-y-2">
              <p className="font-mono text-sm tracking-widest text-neon-cyan/80 uppercase">
                Hello, Operator. I am
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                GOKILA<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-teal-300 to-neon-purple neon-text-cyan">VANI</span>
              </h1>
              
              {/* Typewriter Role Header */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="font-mono text-xl sm:text-2xl text-slate-300">
                  &gt; <span className="text-neon-cyan font-semibold">{displayText}</span>
                  <span className="inline-block w-2.5 h-6 bg-neon-cyan ml-1 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
              Specializing in architecting high-concurrency cloud distributed backends, 
              scalable <span className="text-neon-cyan font-medium">React 19 & Next.js</span> micro-frontends, 
              and microsecond-latency data streaming pipelines with uncompromising aesthetic precision.
            </p>

            {/* Quick Tech Badge Strip */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {['React 19', 'TypeScript', 'Node.js', 'Go', 'Kubernetes', 'AWS', 'Tailwind'].map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 rounded bg-cyber-900 border border-cyber-700/80 text-slate-300 hover:border-neon-cyan/60 hover:text-neon-cyan transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA: Explore Missions */}
              <button
                onClick={() => scrollToSection('projects')}
                onMouseEnter={playHover}
                className="cyber-cut px-6 py-3.5 bg-gradient-to-r from-neon-cyan to-teal-400 text-cyber-950 font-display font-bold text-base tracking-wider uppercase flex items-center space-x-2 shadow-glow-cyan hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Explore Missions</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Secondary CTA: Download Dossier / Resume */}
              <button
                onClick={() => {
                  playClick();
                  onDownloadResume();
                }}
                onMouseEnter={playHover}
                className="cyber-cut px-5 py-3.5 bg-cyber-900/90 text-slate-200 border border-cyber-600 hover:border-neon-purple hover:text-neon-purple hover:shadow-glow-purple font-mono text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-neon-purple" />
                <span>Download Dossier [CV]</span>
              </button>

              {/* Tertiary CTA: Contact */}
              <button
                onClick={() => scrollToSection('contact')}
                onMouseEnter={playHover}
                className="px-4 py-3.5 text-slate-400 hover:text-neon-cyan font-mono text-xs underline underline-offset-4 decoration-neon-cyan/40 hover:decoration-neon-cyan transition-colors"
              >
                // Initialize Contact
              </button>
            </div>

          </div>

          {/* Right Column: Cyberpunk Avatar & Floating Hologram Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Cyber Aura Glow behind avatar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 via-neon-purple/20 to-transparent blur-3xl rounded-full transform -translate-y-4 scale-90 pointer-events-none" />

            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Main Avatar Card Frame */}
              <div className="relative rounded-2xl bg-cyber-900/90 border border-neon-cyan/50 p-2 sm:p-3 shadow-glow-cyan/30 backdrop-blur-sm group">
                
                {/* Tech Terminal Header bar */}
                <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-cyber-950/80 rounded border border-cyber-700/60 font-mono text-[11px] text-slate-400">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-neon-cyan font-semibold ml-1">ID: GOKILA_V1</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">AUTH: ROOT</span>
                </div>

                {/* Avatar Image with Scanlines and Cyber Chamfers */}
                <div className="relative overflow-hidden rounded-xl border border-cyber-700 aspect-square group">
                  <img
                    src="/avatar.jpg"
                    alt="Gokilavani - Senior Full Stack Engineer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Subtle futuristic scanline effect overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent opacity-40 animate-scanline" />

                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-neon-cyan" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-neon-cyan" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-neon-cyan" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-neon-cyan" />

                  {/* Bottom live stats tag */}
                  <div className="absolute bottom-3 left-3 right-3 bg-cyber-950/85 backdrop-blur-md border border-neon-green/40 p-2.5 rounded flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4 text-neon-green animate-pulse" />
                      <span className="text-slate-200">SYSTEM HEALTH</span>
                    </div>
                    <span className="text-neon-green font-bold">100% NOMINAL</span>
                  </div>
                </div>

                {/* Floating Experience Chip Top-Right */}
                <div className="absolute -top-4 -right-4 bg-cyber-900 border border-neon-purple p-3 rounded-lg shadow-glow-purple flex items-center space-x-3 backdrop-blur-md animate-float">
                  <div className="p-2 bg-neon-purple/20 rounded">
                    <ShieldCheck className="w-5 h-5 text-neon-purple" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">EXPERIENCE</div>
                    <div className="text-sm font-display font-bold text-white">7+ YEARS</div>
                  </div>
                </div>

                {/* Floating Uptime SLA Chip Bottom-Left */}
                <div className="absolute -bottom-4 -left-4 bg-cyber-900 border border-neon-cyan p-3 rounded-lg shadow-glow-cyan flex items-center space-x-3 backdrop-blur-md">
                  <div className="p-2 bg-neon-cyan/20 rounded">
                    <CheckCircle2 className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">UPTIME SLA</div>
                    <div className="text-sm font-display font-bold text-neon-cyan">99.99%</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Live System Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-cyber-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SYSTEM_METRICS.map((metric, i) => (
              <div 
                key={metric.label}
                onMouseEnter={playHover}
                className="bg-cyber-900/60 border border-cyber-700/60 hover:border-neon-cyan/50 p-4 rounded-lg transition-all group hover:bg-cyber-850 hover:shadow-glow-cyan/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{metric.label}</span>
                  <span className="text-[10px] font-mono text-neon-cyan/80">0{i+1}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white mt-1 group-hover:text-neon-cyan transition-colors">
                  {metric.value}
                </div>
                <p className="text-xs font-mono text-slate-400 mt-0.5">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            onMouseEnter={playHover}
            className="flex flex-col items-center text-slate-400 hover:text-neon-cyan transition-colors font-mono text-xs group"
          >
            <span className="mb-1 tracking-widest uppercase">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-neon-cyan" />
          </button>
        </div>

      </div>
    </section>
  );
}
