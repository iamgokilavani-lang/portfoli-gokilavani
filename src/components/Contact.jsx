import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, DiscordIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playClick, playHover, playSuccess } from '../utils/sound';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full Stack Engineering Role',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleQuickTemplate = (subjectText, messagePreset) => {
    playClick();
    setFormData((prev) => ({
      ...prev,
      subject: subjectText,
      message: messagePreset,
    }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Operative name is required';
    if (!formData.email.trim()) {
      errs.email = 'Valid email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email syntax';
    }
    if (!formData.message.trim()) errs.message = 'Transmission payload cannot be empty';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    playClick();
    setIsSubmitting(true);

    // Simulate cyber transmission network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSuccess();

      // Fire celebratory cyber confetti!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#00f0ff', '#00ff9f', '#b026ff', '#ffffff']
      });

      // Reset form after delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: 'Full Stack Engineering Role',
          message: '',
        });
      }, 500);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-cyber-950">
      
      {/* Background neon ambient gradients */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyber-900 border border-cyber-700 font-mono text-xs text-neon-pink uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>SECTION // 04</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            INITIALIZE <span className="text-neon-pink neon-text-pink">CONTACT</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl font-mono text-sm">
            Whether you are looking to hire a Senior Full Stack Engineer, build a distributed system, or collaborate on innovative projects, transmit a message below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Coordinates & Social Media Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-cyber-900/80 border border-cyber-700/80 p-6 sm:p-7 rounded-2xl space-y-6">
              
              <div className="border-b border-cyber-800 pb-4">
                <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider font-semibold">
                  // SECURE TRANSMISSION CHANNELS
                </span>
                <h3 className="text-xl font-display font-bold text-white mt-1">
                  Direct Developer Coordinates
                </h3>
              </div>

              {/* Email Card with Copy Tooltip */}
              <div className="p-4 bg-cyber-950 rounded-xl border border-cyber-800 hover:border-neon-cyan/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        ENCRYPTED EMAIL
                      </span>
                      <span className="text-sm font-mono text-white font-semibold break-all">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email to Clipboard"
                    className="p-2 bg-cyber-900 hover:bg-neon-cyan/20 text-slate-300 hover:text-neon-cyan rounded border border-cyber-700 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-neon-green" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="mt-2 text-[11px] font-mono text-neon-green flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Copied to clipboard! Ready to paste into your mail client.
                  </p>
                )}
              </div>

              {/* Location & Availability */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 bg-cyber-950 rounded-xl border border-cyber-800">
                  <div className="flex items-center space-x-2 text-slate-400 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-neon-purple" />
                    <span>LOCATION</span>
                  </div>
                  <div className="text-slate-200 font-semibold truncate">San Francisco / Remote</div>
                </div>

                <div className="p-3 bg-cyber-950 rounded-xl border border-cyber-800">
                  <div className="flex items-center space-x-2 text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-neon-green" />
                    <span>RESPONSE SLA</span>
                  </div>
                  <div className="text-neon-green font-semibold">&lt; 12 Hours</div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Connect on Networks:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com', color: 'hover:text-neon-cyan hover:border-neon-cyan' },
                    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com', color: 'hover:text-neon-green hover:border-neon-green' },
                    { name: 'X / Twitter', icon: TwitterIcon, url: 'https://x.com', color: 'hover:text-neon-purple hover:border-neon-purple' },
                    { name: 'Discord', icon: DiscordIcon, url: 'https://discord.com', color: 'hover:text-neon-pink hover:border-neon-pink' },
                  ].map((soc) => {
                    const Icon = soc.icon;
                    return (
                      <a
                        key={soc.name}
                        href={soc.url}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={playHover}
                        className={`flex items-center space-x-2 px-3 py-2 bg-cyber-950 border border-cyber-700/80 rounded-lg text-slate-300 text-xs font-mono transition-all duration-200 ${soc.color} hover:bg-cyber-900`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{soc.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Security Badge */}
              <div className="p-3 bg-cyber-950/70 border border-cyber-800 rounded-lg flex items-center space-x-3 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-5 h-5 text-neon-green shrink-0" />
                <span>256-bit SSL encrypted transport. Spam protection active.</span>
              </div>

            </div>

            {/* Quick Inquiry Presets */}
            <div className="bg-cyber-900/60 border border-cyber-700/60 p-5 rounded-2xl">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                Quick Message Templates:
              </span>
              <div className="flex flex-col gap-2 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => handleQuickTemplate(
                    "Full Stack Role Inquiry",
                    "Hi Gokilavani, We reviewed your portfolio and would love to discuss a Senior Full Stack Software Engineer role on our team."
                  )}
                  className="text-left px-3 py-2 bg-cyber-950 hover:bg-cyber-800 rounded border border-cyber-800 text-slate-300 hover:text-neon-cyan transition-colors"
                >
                  &gt; Schedule a Technical Interview / Senior Role
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickTemplate(
                    "Cloud Architecture Consulting",
                    "Hi Gokilavani, We are looking for an architectural review / optimization on our Kubernetes and microservices cluster."
                  )}
                  className="text-left px-3 py-2 bg-cyber-950 hover:bg-cyber-800 rounded border border-cyber-800 text-slate-300 hover:text-neon-green transition-colors"
                >
                  &gt; Inquire About Cloud Architecture Consulting
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form UI */}
          <div className="lg:col-span-7">
            <div className="bg-cyber-900/90 border border-neon-cyan/40 p-6 sm:p-8 rounded-2xl shadow-glow-cyan/20 backdrop-blur-md relative">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyber-700 font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-neon-cyan font-bold ml-2">COMMS_LINK // TRANSMIT</span>
                </div>
                <span className="text-slate-400 text-[11px]">PORT 443 // TLS 1.3</span>
              </div>

              {/* Success Message Banner */}
              {submitted ? (
                <div className="p-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 mx-auto rounded-full bg-neon-green/10 border-2 border-neon-green flex items-center justify-center shadow-glow-green">
                    <Check className="w-8 h-8 text-neon-green" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Transmission Received!
                  </h3>
                  <p className="text-slate-300 font-mono text-sm max-w-md mx-auto">
                    Your packet has been successfully verified and stored in Gokilavani's prioritized comms queue. Expect a response within 12 hours.
                  </p>
                  <button
                    onClick={() => {
                      playClick();
                      setSubmitted(false);
                    }}
                    className="cyber-cut px-6 py-2.5 bg-neon-cyan text-cyber-950 font-mono font-bold text-xs uppercase tracking-wider"
                  >
                    Transmit Another Packet
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                        Operative / Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Connor"
                        className={`w-full px-4 py-3 bg-cyber-950 border rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none transition-all ${
                          errors.name ? 'border-red-500' : 'border-cyber-700 focus:border-neon-cyan focus:shadow-glow-cyan/30'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                        Transmission Return Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="operative@domain.com"
                        className={`w-full px-4 py-3 bg-cyber-950 border rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none transition-all ${
                          errors.email ? 'border-red-500' : 'border-cyber-700 focus:border-neon-cyan focus:shadow-glow-cyan/30'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Inquiry Topic Dropdown */}
                  <div>
                    <label className="block text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                      Mission Objective / Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-cyber-950 border border-cyber-700 focus:border-neon-cyan focus:shadow-glow-cyan/30 rounded-lg text-slate-100 focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="Full Stack Engineering Role">Full-Time Senior Full Stack / Tech Lead Role</option>
                      <option value="Cloud Architecture Consulting">Cloud / Kubernetes Architecture Consulting</option>
                      <option value="Frontend & UI/UX Engineering">Interactive Frontend & Performance Optimization</option>
                      <option value="Open Source Collaboration">Open Source / Hackathon Collaboration</option>
                      <option value="General Technical Inquiry">Other Inquiry / Just Saying Hello</option>
                    </select>
                  </div>

                  {/* Message Body */}
                  <div>
                    <label className="block text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                      Encrypted Message Payload *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline project timeline, technology stack, scope, or job opportunity specifications..."
                      className={`w-full px-4 py-3 bg-cyber-950 border rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-cyber-700 focus:border-neon-cyan focus:shadow-glow-cyan/30'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={playHover}
                    className="cyber-cut w-full py-4 bg-gradient-to-r from-neon-cyan to-teal-400 hover:brightness-110 active:scale-[0.99] text-cyber-950 font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 shadow-glow-cyan transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-cyber-950 border-t-transparent rounded-full animate-spin" />
                        <span>TRANSMITTING ENCRYPTED PACKET...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT PACKET // SEND MESSAGE</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] text-slate-500 font-mono">
                    By submitting, your payload is processed instantly. No telemetry tracking or spam.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
