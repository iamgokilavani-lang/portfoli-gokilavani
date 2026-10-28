import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  Mail, 
  MapPin, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, SKILLS } from '../data/portfolioData';
import { playClick } from '../utils/sound';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    playClick();
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cyber-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl bg-cyber-900 border border-neon-cyan/50 rounded-2xl shadow-glow-cyan overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-cyber-950 border-b border-cyber-700 font-mono text-xs">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-neon-cyan" />
            <span className="text-neon-cyan font-bold uppercase tracking-wider">
              DOSSIER // GOKILAVANI_RESUME.PDF
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-cyber-900 border border-cyber-700 hover:border-neon-cyan text-slate-300 hover:text-neon-cyan rounded flex items-center space-x-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => { playClick(); onClose(); }}
              className="text-slate-400 hover:text-neon-pink p-1 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable / Viewable Resume Content Area */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-200 font-sans space-y-8 select-text">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-display font-extrabold text-white tracking-tight">
                GOKILAVANI
              </h1>
              <p className="text-neon-cyan font-mono text-sm mt-1">
                Senior Full Stack & Distributed Cloud Systems Engineer
              </p>
            </div>
            
            <div className="font-mono text-xs text-slate-400 space-y-1 sm:text-right">
              <div>{PERSONAL_INFO.email}</div>
              <div>{PERSONAL_INFO.location}</div>
              <div className="text-neon-green">Security Clearance: Verified Root</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-neon-purple font-bold mb-2">
              // EXECUTIVE SUMMARY
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Results-driven Senior Full Stack Engineer with 7+ years of experience engineering high-throughput distributed backends, 
              scalable React 19 micro-frontends, and cloud-native Kubernetes architectures. Proven track record of reducing API latency by 85%, 
              scaling applications to millions of daily requests, and leading cross-functional teams to deliver mission-critical software.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neon-cyan font-bold">
              // PROFESSIONAL EXPERIENCE
            </h2>

            {WORK_EXPERIENCE.map((exp) => (
              <div key={exp.company} className="space-y-2 border-l-2 border-slate-800 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-bold text-white text-base">{exp.role}</span>
                  <span className="font-mono text-xs text-neon-green">{exp.period}</span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  {exp.company} — {exp.location}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-1 pt-1">
                  {exp.achievements.map((ach) => (
                    <li key={ach} className="text-xs text-slate-300 flex items-start space-x-1.5">
                      <span className="text-neon-cyan font-bold">&gt;</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Technical Competencies */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-neon-green font-bold mb-3">
              // CORE TECHNICAL PROFICIENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-cyber-900 rounded border border-cyber-800">
                <span className="text-neon-cyan font-bold block mb-1">Frontend:</span>
                <span className="text-slate-300">React 19, TypeScript, Next.js, Tailwind CSS, WebSockets, Canvas, Redux/Zustand</span>
              </div>
              <div className="p-3 bg-cyber-900 rounded border border-cyber-800">
                <span className="text-neon-green font-bold block mb-1">Backend & Systems:</span>
                <span className="text-slate-300">Node.js, Go (Golang), Python FastAPI, gRPC, REST, Zero-Trust Auth</span>
              </div>
              <div className="p-3 bg-cyber-900 rounded border border-cyber-800">
                <span className="text-neon-purple font-bold block mb-1">Cloud & Infrastructure:</span>
                <span className="text-slate-300">Docker, Kubernetes, AWS (ECS, Lambda, RDS), Terraform, GitHub Actions CI/CD</span>
              </div>
              <div className="p-3 bg-cyber-900 rounded border border-cyber-800">
                <span className="text-neon-pink font-bold block mb-1">Databases & Streaming:</span>
                <span className="text-slate-300">PostgreSQL, Redis, Apache Kafka, MongoDB, Vector DBs, TimescaleDB</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Close */}
        <div className="px-6 py-3 bg-cyber-950 border-t border-cyber-700 flex justify-between items-center font-mono text-xs">
          <span className="text-slate-500">FORMAT: DIGITAL_DOSSIER_A4</span>
          <button
            onClick={handlePrint}
            className="cyber-cut-sm px-4 py-2 bg-neon-cyan text-cyber-950 font-bold uppercase tracking-wider flex items-center space-x-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download / Print Dossier</span>
          </button>
        </div>

      </div>
    </div>
  );
}
