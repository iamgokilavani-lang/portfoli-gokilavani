import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  FolderGit2, 
  Cpu, 
  CheckCircle2, 
  Activity, 
  Sparkles,
  Server,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { playClick } from '../utils/sound';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cyber-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-cyber-900 border border-neon-cyan/50 rounded-2xl shadow-glow-cyan overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-cyber-950/90 border-b border-cyber-700/80 font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-neon-cyan font-bold uppercase tracking-wider">
              MISSION DOSSIER // {project.id.toUpperCase()}
            </span>
          </div>
          <button
            onClick={() => { playClick(); onClose(); }}
            className="text-slate-400 hover:text-neon-pink p-1 rounded hover:bg-cyber-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Header */}
        <div className="relative aspect-video max-h-72 w-full overflow-hidden border-b border-cyber-700">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-900 via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="px-2.5 py-1 rounded bg-neon-cyan text-cyber-950 font-bold font-mono text-[11px] uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mt-2">
                {project.title}
              </h3>
            </div>
            <span className="font-mono text-xs text-neon-green bg-cyber-950/80 px-3 py-1 rounded border border-neon-green/40">
              STATUS: {project.status}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Overview */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-neon-cyan mb-2">
              System Overview & Architecture
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-cyber-950 rounded-xl border border-cyber-700 font-mono text-center">
            {Object.entries(project.stats).map(([k, v]) => (
              <div key={k}>
                <div className="text-[11px] text-slate-400 uppercase">{k.replace(/([A-Z])/g, ' $1')}</div>
                <div className="text-base sm:text-lg font-bold text-neon-green mt-0.5">{v}</div>
              </div>
            ))}
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-cyber-950/80 rounded-xl border border-red-500/20">
              <span className="text-xs font-mono text-neon-pink uppercase tracking-wider font-bold block mb-1">
                The Engineering Challenge
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.architecture.problem}
              </p>
            </div>

            <div className="p-4 bg-cyber-950/80 rounded-xl border border-neon-cyan/20">
              <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider font-bold block mb-1">
                The Technical Solution
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.architecture.solution}
              </p>
            </div>
          </div>

          {/* Key Architecture Highlights */}
          <div className="space-y-2">
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Architectural Highlights:
            </h5>
            {project.architecture.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technology Stack Used:
            </h5>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded bg-cyber-800 text-neon-cyan border border-cyber-700">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 bg-cyber-950/90 border-t border-cyber-700 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center space-x-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-cyber-900 border border-cyber-700 hover:border-slate-400 rounded text-slate-300 flex items-center space-x-1.5 transition-colors"
            >
              <FolderGit2 className="w-4 h-4 text-slate-400" />
              <span>Source Repository</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="cyber-cut-sm px-4 py-2 bg-neon-cyan text-cyber-950 font-bold uppercase hover:brightness-110 flex items-center space-x-1.5 shadow-glow-cyan transition-all"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={() => { playClick(); onClose(); }}
            className="text-slate-400 hover:text-white"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
