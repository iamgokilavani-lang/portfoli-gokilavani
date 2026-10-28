import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Terminal, 
  Heart,
  Activity,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, DiscordIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playClick, playHover } from '../utils/sound';

export default function Footer() {
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().split(' ').slice(4, 5)[0] + ' UTC');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-cyber-950 border-t border-cyber-800/80 pt-16 pb-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-cyber-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-cyber-900 border border-neon-cyan/50 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-neon-cyan" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wider">
                GOKILAVANI
              </span>
            </div>
            
            <p className="text-slate-400 font-sans text-xs leading-relaxed max-w-sm">
              Senior Full Stack & Systems Engineer specializing in distributed architectures, React 19 web applications, and cybernetic digital design.
            </p>

            <div className="inline-flex items-center space-x-2 text-[11px] text-neon-green bg-neon-green/5 border border-neon-green/30 px-2.5 py-1 rounded">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>MAIN_GRID: OPERATIONAL // 99.99% SLA</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-slate-300 font-bold uppercase tracking-wider block">
              // SECTOR MAP
            </span>
            <ul className="space-y-2 text-slate-400">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((sec) => (
                <li key={sec}>
                  <a
                    href={`#${sec.toLowerCase()}`}
                    onMouseEnter={playHover}
                    className="hover:text-neon-cyan transition-colors"
                  >
                    &gt; {sec}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Coordinates & UTC */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-slate-300 font-bold uppercase tracking-wider block">
              // TELEMETRY & TIME
            </span>

            <div className="p-4 bg-cyber-900/60 rounded-xl border border-cyber-800 space-y-2">
              <div className="flex justify-between items-center text-slate-400">
                <span>SYSTEM CLOCK:</span>
                <span className="text-neon-cyan font-bold">{utcTime || '12:00:00 UTC'}</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>ENCRYPTION:</span>
                <span className="text-neon-green">AES-256-GCM</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>PING LATENCY:</span>
                <span className="text-neon-purple font-bold">12ms (EDGE)</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              {[
                { icon: GithubIcon, url: 'https://github.com', label: 'GitHub' },
                { icon: LinkedinIcon, url: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: TwitterIcon, url: 'https://x.com', label: 'Twitter' },
                { icon: DiscordIcon, url: 'https://discord.com', label: 'Discord' },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={playHover}
                    className="w-9 h-9 rounded-lg bg-cyber-900 border border-cyber-700 flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan hover:shadow-glow-cyan/50 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <div>
            © {new Date().getFullYear()} Gokilavani. All systems nominal. Distributed under MIT License.
          </div>

          <div className="flex items-center space-x-4">
            <span>Built with React 19 + Tailwind CSS v3 + Vite</span>
            <button
              onClick={scrollToTop}
              onMouseEnter={playHover}
              className="p-2 rounded bg-cyber-900 border border-cyber-700 hover:border-neon-cyan hover:text-neon-cyan transition-colors"
              title="Return to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
