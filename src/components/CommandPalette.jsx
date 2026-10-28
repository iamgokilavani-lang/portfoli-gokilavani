import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Terminal, 
  User, 
  Cpu, 
  FolderGit2, 
  Mail, 
  Briefcase, 
  ExternalLink, 
  Volume2, 
  VolumeX, 
  X,
  FileDown
} from 'lucide-react';
import { playClick } from '../utils/sound';

export default function CommandPalette({ isOpen, onClose, isSound, toggleSound, onDownloadResume }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = [
    { id: 'home', title: 'Navigate to Home / Hero', icon: Terminal, action: () => scrollTo('home'), category: 'Navigation' },
    { id: 'about', title: 'Navigate to About & Dossier', icon: User, action: () => scrollTo('about'), category: 'Navigation' },
    { id: 'skills', title: 'Navigate to Skills & Tech Stack', icon: Cpu, action: () => scrollTo('skills'), category: 'Navigation' },
    { id: 'projects', title: 'Navigate to Flagship Projects', icon: FolderGit2, action: () => scrollTo('projects'), category: 'Navigation' },
    { id: 'experience', title: 'Navigate to Work Experience', icon: Briefcase, action: () => scrollTo('experience'), category: 'Navigation' },
    { id: 'contact', title: 'Navigate to Contact Terminal', icon: Mail, action: () => scrollTo('contact'), category: 'Navigation' },
    { id: 'resume', title: 'Download Resume / Dossier', icon: FileDown, action: onDownloadResume, category: 'Actions' },
    { id: 'sound', title: isSound ? 'Mute Cyber Audio FX' : 'Enable Cyber Audio FX', icon: isSound ? VolumeX : Volume2, action: toggleSound, category: 'Settings' },
    { id: 'github', title: 'Open GitHub Profile', icon: ExternalLink, action: () => window.open('https://github.com', '_blank'), category: 'External' },
    { id: 'linkedin', title: 'Open LinkedIn Profile', icon: ExternalLink, action: () => window.open('https://linkedin.com', '_blank'), category: 'External' },
  ];

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          playClick();
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-cyber-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-xl bg-cyber-900 border border-neon-cyan/40 shadow-glow-cyan rounded-lg overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Input */}
        <div className="flex items-center px-4 py-3 border-b border-cyber-700/60 bg-cyber-950/80">
          <Terminal className="w-5 h-5 text-neon-cyan mr-3" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section... (e.g. projects, resume)"
            className="flex-1 bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-mono"
          />
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-neon-pink transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-cyber-800/40">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-sm font-mono text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSel = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    playClick();
                    item.action();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded cursor-pointer text-sm font-mono transition-all ${
                    isSel 
                      ? 'bg-neon-cyan/15 text-neon-cyan border-l-2 border-neon-cyan pl-2.5' 
                      : 'text-slate-300 hover:bg-cyber-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-4 h-4 ${isSel ? 'text-neon-cyan' : 'text-slate-400'}`} />
                    <span>{item.title}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 bg-cyber-800 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-cyber-700/40 bg-cyber-950/60 text-[11px] text-slate-400 flex items-center justify-between font-mono">
          <span>Navigate with <kbd className="px-1.5 py-0.5 bg-cyber-800 text-neon-cyan rounded">↑</kbd> <kbd className="px-1.5 py-0.5 bg-cyber-800 text-neon-cyan rounded">↓</kbd></span>
          <span>Select <kbd className="px-1.5 py-0.5 bg-cyber-800 text-neon-cyan rounded">↵ Enter</kbd></span>
          <span>Close <kbd className="px-1.5 py-0.5 bg-cyber-800 text-slate-300 rounded">ESC</kbd></span>
        </div>
      </div>
    </div>
  );
}
