import React, { useState } from 'react';
import { 
  Cpu, 
  Code2, 
  FileCode, 
  Palette, 
  Radio, 
  Layers, 
  Server, 
  Terminal, 
  Network, 
  ShieldCheck, 
  Box, 
  Cloud, 
  GitBranch, 
  FileJson, 
  Database, 
  Zap, 
  Activity, 
  HardDrive,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES, SKILLS } from '../data/portfolioData';
import { playClick, playHover } from '../utils/sound';

// Icon mapper helper
const iconMap = {
  Code2,
  FileCode,
  Palette,
  Radio,
  Layers,
  Server,
  Cpu,
  Terminal,
  Network,
  ShieldCheck,
  Box,
  Cloud,
  GitBranch,
  FileJson,
  Database,
  Zap,
  Activity,
  HardDrive,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-cyber-950">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyber-900 border border-cyber-700 font-mono text-xs text-neon-green uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>SECTION // 02</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            TECHNICAL <span className="text-neon-green neon-text-green">ARSENAL</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl font-mono text-sm">
            Battle-tested technologies, architectural patterns, and engineering frameworks utilized across enterprise-grade production software.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 font-mono text-xs">
            {SKILL_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playClick();
                    setSelectedCategory(cat.id);
                  }}
                  onMouseEnter={playHover}
                  className={`px-4 py-2 rounded-lg transition-all border ${
                    isSelected
                      ? 'bg-neon-green text-cyber-950 font-bold border-neon-green shadow-glow-green'
                      : 'bg-cyber-900/80 text-slate-400 border-cyber-700 hover:text-white hover:border-slate-500'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Cpu;
            
            // Color variations based on level
            const isHigh = skill.level >= 94;
            const accentClass = isHigh ? 'text-neon-green' : 'text-neon-cyan';
            const barGradient = isHigh
              ? 'from-neon-green via-teal-400 to-neon-cyan'
              : 'from-neon-cyan via-blue-500 to-neon-purple';

            return (
              <div
                key={skill.name}
                onMouseEnter={playHover}
                className="bg-cyber-900/70 border border-cyber-700/80 hover:border-neon-cyan/50 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-cyan/20 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Level Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-cyber-950 border border-cyber-700 flex items-center justify-center group-hover:border-neon-cyan group-hover:shadow-glow-cyan/40 transition-all">
                        <IconComponent className={`w-5 h-5 ${accentClass} group-hover:scale-110 transition-transform`} />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-base text-white group-hover:text-neon-cyan transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neon-purple font-semibold">
                          {skill.tag}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xs font-bold text-slate-300">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed mb-4 font-sans">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="pt-2">
                  <div className="w-full h-1.5 bg-cyber-950 rounded-full overflow-hidden border border-cyber-800">
                    <div 
                      className={`h-full bg-gradient-to-r ${barGradient} rounded-full transition-all duration-700`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Competency Highlights Summary Box */}
        <div className="mt-16 bg-cyber-900/50 border border-cyber-700/80 p-6 sm:p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg text-neon-cyan">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-base">Production Ready</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Every tool in this stack is backed by real-world commercial experience, production deployments, and automated testing.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-neon-green/10 border border-neon-green/30 rounded-lg text-neon-green">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-base">Modern React 19 Ecosystem</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Proficient with modern features including Server Components, Actions, optimistic UI state, and lightweight state graphs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-neon-purple/10 border border-neon-purple/30 rounded-lg text-neon-purple">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-base">Cloud Scalability</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Experience handling Kubernetes multi-pod autoscaling, CI/CD pipeline automation, and multi-region failover.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
