import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Activity, 
  ArrowUpRight, 
  Cpu, 
  Sparkles,
  Info
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { playClick, playHover } from '../utils/sound';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Missions' },
    { id: 'ai', label: 'AI & Cloud' },
    { id: 'security', label: 'Cybersecurity' },
    { id: 'fintech', label: 'FinTech / Trading' },
    { id: 'devops', label: 'DevOps / Mesh' },
  ];

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-cyber-950/80 border-t border-cyber-800/80">
      
      {/* Background neon ambient aura */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyber-900 border border-cyber-700 font-mono text-xs text-neon-cyan uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>SECTION // 03</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            FLAGSHIP <span className="text-neon-cyan neon-text-cyan">MISSIONS</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl font-mono text-sm">
            High-performance applications, cloud platforms, and distributed microservices built for scalability, zero-downtime, and microsecond latency.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 font-mono text-xs">
            {categories.map((c) => {
              const isSelected = filter === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    playClick();
                    setFilter(c.id);
                  }}
                  onMouseEnter={playHover}
                  className={`px-4 py-2 rounded-lg transition-all border ${
                    isSelected
                      ? 'bg-neon-cyan text-cyber-950 font-bold border-neon-cyan shadow-glow-cyan'
                      : 'bg-cyber-900/80 text-slate-400 border-cyber-700 hover:text-white hover:border-slate-500'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-cyber-900/90 border border-cyber-700/80 hover:border-neon-cyan/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-glow-cyan/25 flex flex-col group"
            >
              {/* Project Image Banner */}
              <div 
                className="relative aspect-video overflow-hidden cursor-pointer bg-cyber-950"
                onClick={() => {
                  playClick();
                  setSelectedProject(project);
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-900 via-transparent to-transparent opacity-60" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-cyber-950/90 text-neon-cyan border border-neon-cyan/40 font-mono text-[11px] font-bold tracking-wider uppercase backdrop-blur-md">
                    {project.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-neon-green/10 text-neon-green border border-neon-green/40 font-mono text-[10px] font-bold tracking-wider uppercase backdrop-blur-md">
                    {project.status}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-cyber-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                  <span className="cyber-cut-sm px-4 py-2 bg-neon-cyan text-cyber-950 font-bold font-mono text-xs uppercase shadow-glow-cyan flex items-center gap-1.5">
                    <Info className="w-4 h-4" />
                    Inspect Architecture
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-neon-purple font-semibold">
                      {project.categoryLabel}
                    </span>
                    <button
                      onClick={() => {
                        playClick();
                        setSelectedProject(project);
                      }}
                      className="text-xs font-mono text-neon-cyan hover:underline flex items-center gap-1"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h3 
                    onClick={() => {
                      playClick();
                      setSelectedProject(project);
                    }}
                    className="text-xl sm:text-2xl font-display font-bold text-white mt-1 group-hover:text-neon-cyan transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2.5">
                    {project.summary}
                  </p>
                </div>

                {/* Real-Time Telemetry Stats Row */}
                <div className="grid grid-cols-3 gap-2 py-3 px-4 bg-cyber-950/80 rounded-xl border border-cyber-800 font-mono text-center">
                  {Object.entries(project.stats).map(([k, v]) => (
                    <div key={k}>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider truncate">
                        {k.replace(/([A-Z])/g, ' $1')}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-neon-green mt-0.5 truncate">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-cyber-950 text-slate-300 border border-cyber-700/80 hover:border-neon-cyan/40 hover:text-neon-cyan transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-cyber-800/80 flex items-center justify-between font-mono text-xs">
                  <button
                    onClick={() => {
                      playClick();
                      setSelectedProject(project);
                    }}
                    onMouseEnter={playHover}
                    className="text-slate-300 hover:text-neon-cyan flex items-center gap-1.5 transition-colors"
                  >
                    <Info className="w-4 h-4 text-neon-cyan" />
                    <span>View Architecture</span>
                  </button>

                  <div className="flex items-center space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={playHover}
                      className="text-slate-400 hover:text-white p-1 transition-colors"
                      title="GitHub Repository"
                    >
                      <FolderGit2 className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={playHover}
                      className="cyber-cut-sm px-3 py-1.5 bg-neon-cyan/15 text-neon-cyan border border-neon-cyan hover:bg-neon-cyan hover:text-cyber-950 font-bold transition-all flex items-center gap-1"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Architecture Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}
