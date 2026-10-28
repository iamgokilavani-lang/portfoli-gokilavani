import React, { useState } from 'react';
import { 
  User, 
  Terminal as TerminalIcon, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Calendar, 
  MapPin, 
  CheckCircle,
  Briefcase,
  Sparkles,
  Send
} from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, TERMINAL_COMMANDS } from '../data/portfolioData';
import { playClick, playHover, playSuccess } from '../utils/sound';

export default function About() {
  const [activeTab, setActiveTab] = useState('dossier'); // 'dossier', 'experience', 'terminal'
  
  // Terminal state
  const [termHistory, setTermHistory] = useState([
    { type: 'output', text: 'AR-OS Terminal Kernel v4.18.9-cyber Initialized.\nType "help" to view available diagnostic commands.' }
  ]);
  const [termInput, setTermInput] = useState('');

  const handleCommand = (cmdText) => {
    const trimmed = (cmdText || termInput).trim().toLowerCase();
    if (!trimmed) return;

    playClick();

    if (trimmed === 'clear') {
      setTermHistory([]);
      setTermInput('');
      return;
    }

    const newHistory = [...termHistory, { type: 'input', text: `$ ${trimmed}` }];

    if (TERMINAL_COMMANDS[trimmed]) {
      newHistory.push({ type: 'output', text: TERMINAL_COMMANDS[trimmed] });
      playSuccess();
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`
      });
    }

    setTermHistory(newHistory);
    setTermInput('');
  };

  const corePillars = [
    {
      icon: Cpu,
      title: "Distributed Systems & Cloud",
      description: "Designing fault-tolerant, horizontally scalable microservice architectures using Go, Docker, Kubernetes, and AWS.",
      color: "neon-cyan",
      borderColor: "border-neon-cyan/40",
      shadow: "shadow-glow-cyan/20"
    },
    {
      icon: Layers,
      title: "Ultra-Fast Modern Web UI",
      description: "Crafting fluid, high-frame-rate user interfaces with React 19, TypeScript, Tailwind CSS, and WebSockets.",
      color: "neon-green",
      borderColor: "border-neon-green/40",
      shadow: "shadow-glow-green/20"
    },
    {
      icon: Zap,
      title: "Low Latency & High Concurrency",
      description: "Fine-tuning event loops, Redis distributed caching, Kafka event streaming, and sub-15ms API response benchmarks.",
      color: "neon-purple",
      borderColor: "border-neon-purple/40",
      shadow: "shadow-glow-purple/20"
    },
    {
      icon: ShieldCheck,
      title: "Zero-Trust DevSecOps",
      description: "Enforcing end-to-end security, automated GitHub Actions pipelines, cryptographic signoffs, and infrastructure as code.",
      color: "neon-pink",
      borderColor: "border-neon-pink/40",
      shadow: "shadow-glow-pink/20"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-cyber-950/60 border-t border-cyber-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyber-900 border border-cyber-700 font-mono text-xs text-neon-cyan uppercase tracking-widest mb-3">
            <User className="w-3.5 h-3.5" />
            <span>SECTION // 01</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            ABOUT <span className="text-neon-cyan neon-text-cyan">THE ARCHITECT</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl font-mono text-sm">
            Operational profile, engineering philosophy, battle-tested career milestones, and diagnostic terminal.
          </p>

          {/* Section Navigation Tabs */}
          <div className="mt-8 inline-flex p-1 rounded-lg bg-cyber-900 border border-cyber-700 font-mono text-xs">
            <button
              onClick={() => { playClick(); setActiveTab('dossier'); }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'dossier'
                  ? 'bg-neon-cyan text-cyber-950 font-bold shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              // DOSSIER & PILLARS
            </button>
            <button
              onClick={() => { playClick(); setActiveTab('experience'); }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'experience'
                  ? 'bg-neon-cyan text-cyber-950 font-bold shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              // WORK TIMELINE
            </button>
            <button
              onClick={() => { playClick(); setActiveTab('terminal'); }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'terminal'
                  ? 'bg-neon-cyan text-cyber-950 font-bold shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              // LIVE TERMINAL
            </button>
          </div>
        </div>

        {/* TAB 1: DOSSIER & PILLARS */}
        {activeTab === 'dossier' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Bio Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5 bg-cyber-900/60 p-6 sm:p-8 rounded-xl border border-cyber-700">
                <div className="flex items-center space-x-2 text-neon-green font-mono text-xs uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4" />
                  <span>MISSION STATEMENT & BACKGROUND</span>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white">
                  Bridging System Complexity with Elegant, Ultra-Responsive Frontends
                </h3>
                
                <p className="text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                  Over the past 7+ years, I have worked across the entire engineering stack—from architecting 
                  low-latency Go microservices and Kubernetes infrastructure handling tens of thousands of requests 
                  per second, to handcrafting immersive, reactive user interfaces with React, TypeScript, and modern CSS.
                </p>

                <p className="text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                  I believe exceptional software is defined not only by uptime and throughput, but by the tangible speed 
                  and tactile delight it offers to end-users. I treat performance bottlenecks as design flaws and treat 
                  clean code as a prerequisite for velocity.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cyber-800 font-mono text-xs">
                  <div>
                    <span className="text-slate-500 block">CALLSIGN:</span>
                    <span className="text-neon-cyan font-semibold">{PERSONAL_INFO.callsign}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">BASE STATION:</span>
                    <span className="text-slate-200">{PERSONAL_INFO.location}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">SECURITY CLEARANCE:</span>
                    <span className="text-neon-green">VERIFIED // ROOT</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">STATUS:</span>
                    <span className="text-neon-cyan">OPEN FOR OFFERS</span>
                  </div>
                </div>
              </div>

              {/* Quick Dossier Stats Panel */}
              <div className="lg:col-span-5 bg-cyber-900/80 p-6 sm:p-8 rounded-xl border border-neon-cyan/40 shadow-glow-cyan/20 space-y-6">
                <div className="flex items-center justify-between border-b border-cyber-700/60 pb-3 font-mono text-xs">
                  <span className="text-neon-cyan font-bold uppercase">&gt; CORE METRICS</span>
                  <span className="text-slate-400">STATUS: HEALTHY</span>
                </div>

                <div className="space-y-4 font-mono">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Architecture & Systems</span>
                      <span className="text-neon-cyan font-bold">96%</span>
                    </div>
                    <div className="w-full h-2 bg-cyber-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-neon-cyan to-teal-400 rounded-full w-[96%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Frontend UI/UX Craft</span>
                      <span className="text-neon-green font-bold">95%</span>
                    </div>
                    <div className="w-full h-2 bg-cyber-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-neon-green to-emerald-400 rounded-full w-[95%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Cloud & Distributed DevOps</span>
                      <span className="text-neon-purple font-bold">91%</span>
                    </div>
                    <div className="w-full h-2 bg-cyber-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-neon-purple to-pink-500 rounded-full w-[91%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Security & Zero-Trust</span>
                      <span className="text-neon-pink font-bold">93%</span>
                    </div>
                    <div className="w-full h-2 bg-cyber-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-neon-pink to-rose-400 rounded-full w-[93%]" />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-cyber-950 rounded border border-cyber-700/60 text-xs font-mono text-slate-300">
                  <span className="text-neon-green font-bold">PRO TIP:</span> Use keyboard shortcut <kbd className="bg-cyber-800 px-1 py-0.5 rounded text-neon-cyan">Ctrl + K</kbd> anywhere to launch the interactive command palette.
                </div>
              </div>

            </div>

            {/* 4 Architectural Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {corePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    onMouseEnter={playHover}
                    className={`bg-cyber-900/80 p-6 rounded-xl border ${pillar.borderColor} hover:${pillar.shadow} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-lg bg-cyber-950 border border-cyber-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 text-${pillar.color}`} />
                      </div>
                      <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-neon-cyan transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: WORK TIMELINE */}
        {activeTab === 'experience' && (
          <div id="experience" className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
            <div className="relative border-l-2 border-cyber-700/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={exp.company} className="relative group">
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cyber-950 border-2 border-neon-cyan flex items-center justify-center shadow-glow-cyan group-hover:scale-125 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan" />
                  </div>

                  {/* Card Container */}
                  <div className="bg-cyber-900/90 border border-cyber-700/80 hover:border-neon-cyan/50 p-6 sm:p-7 rounded-xl transition-all shadow-lg hover:shadow-glow-cyan/20">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="font-mono text-xs text-neon-green tracking-wider uppercase font-semibold">
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-display font-bold text-white mt-0.5 group-hover:text-neon-cyan transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center space-x-3 text-xs font-mono text-slate-400 mt-1">
                          <span className="text-neon-purple font-medium flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5" />
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-5">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Key Impacts & Deliverables:
                      </div>
                      {exp.achievements.map((ach) => (
                        <div key={ach} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-cyber-800 font-mono text-xs">
                      {exp.technologies.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-cyber-950 text-slate-300 border border-cyber-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: LIVE TERMINAL WIDGET */}
        {activeTab === 'terminal' && (
          <div className="max-w-3xl mx-auto animate-fadeIn">
            <div className="bg-cyber-950 border border-neon-cyan/50 rounded-xl shadow-glow-cyan overflow-hidden font-mono text-xs sm:text-sm">
              
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-cyber-900 border-b border-cyber-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-slate-300 text-xs">gokilavani@cyber-mainframe:~</span>
                </div>
                <span className="text-[11px] text-neon-cyan">BASH 5.2.15</span>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-6 min-h-[320px] max-h-[460px] overflow-y-auto space-y-3 bg-cyber-950/90 text-slate-200">
                {termHistory.map((line, i) => (
                  <div key={i} className="whitespace-pre-wrap leading-relaxed">
                    {line.type === 'input' && (
                      <span className="text-neon-cyan font-bold">{line.text}</span>
                    )}
                    {line.type === 'output' && (
                      <span className="text-slate-300">{line.text}</span>
                    )}
                    {line.type === 'error' && (
                      <span className="text-neon-pink font-semibold">{line.text}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Suggested Command Quick Pills */}
              <div className="px-4 py-2 bg-cyber-900/60 border-t border-cyber-800 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400">Quick run:</span>
                {['help', 'whoami', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleCommand(cmd)}
                    className="px-2 py-1 rounded bg-cyber-800 hover:bg-neon-cyan/20 hover:text-neon-cyan text-slate-300 transition-colors border border-cyber-700"
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Terminal Command Input Form */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommand();
                }}
                className="flex items-center px-4 py-3 bg-cyber-900 border-t border-cyber-800"
              >
                <span className="text-neon-green font-bold mr-2">&gt;</span>
                <input
                  type="text"
                  value={termInput}
                  onChange={(e) => setTermInput(e.target.value)}
                  placeholder="Type 'help', 'whoami', 'skills'..."
                  className="flex-1 bg-transparent text-slate-100 focus:outline-none font-mono"
                />
                <button
                  type="submit"
                  className="px-3 py-1 bg-neon-cyan text-cyber-950 font-bold rounded hover:brightness-110 flex items-center space-x-1"
                >
                  <span>EXEC</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
