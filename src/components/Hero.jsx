import React, { useState, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  ArrowRight, 
  FileDown, 
  Github, 
  Linkedin, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  Play
} from 'lucide-react';
import { personalInfo, terminalDemoCommands } from '../data/portfolioData';

export default function Hero() {
  const [activeCmdIdx, setActiveCmdIdx] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  // Auto cycle commands every 6 seconds unless user manually interacts
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCmdIdx((prev) => (prev + 1) % terminalDemoCommands.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const currentCommand = terminalDemoCommands[activeCmdIdx];

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(currentCommand.cmd);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-devops-grid"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-devops-cyan/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-2/3 right-10 w-[350px] h-[350px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-devops-surface/90 border border-devops-cyan/30 text-xs font-mono text-slate-200 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300">
                {personalInfo.status}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building Reliable Infrastructure,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-devops-cyan via-sky-400 to-emerald-400">
                Automating Delivery.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              {personalInfo.subtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-devops-cyan text-devops-dark font-bold text-sm tracking-wide hover:bg-cyan-300 transition-all shadow-lg shadow-devops-cyan/20 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Rajan_Kumar_DevOps_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-devops-surface/80 border border-white/15 text-slate-100 font-semibold text-sm hover:bg-white/10 hover:border-devops-cyan/50 transition-all backdrop-blur-sm"
              >
                <FileDown className="w-4 h-4 text-devops-cyan" />
                <span>Download Resume</span>
              </a>

              {/* Social Link Badges */}
              <div className="flex items-center gap-2.5 sm:ml-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-devops-card/80 border border-white/10 text-slate-300 hover:text-white hover:border-devops-cyan/40 hover:bg-devops-cyan/10 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-devops-card/80 border border-white/10 text-slate-300 hover:text-white hover:border-devops-cyan/40 hover:bg-devops-cyan/10 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick credentials strip */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-slate-400 border-t border-white/5">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-devops-cyan"></span>
                Location: Delhi, India
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                AWS & Kubernetes
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Jenkins CI/CD
              </span>
            </div>

          </div>

          {/* Right Column: Interactive DevOps Terminal */}
          <div className="lg:col-span-5">
            <div className="terminal-window rounded-xl overflow-hidden border border-white/15 shadow-2xl relative">
              
              {/* Terminal Window Header */}
              <div className="bg-[#0b101c] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-devops-cyan" />
                    rajan@devops-node:~
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCommand}
                    className="text-slate-400 hover:text-devops-cyan transition-colors text-xs p-1 rounded"
                    title="Copy Command"
                    aria-label="Copy Command"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Command Selector Buttons */}
              <div className="bg-[#0e1526] px-3 py-2 border-b border-white/5 flex gap-1.5 overflow-x-auto text-xs font-mono scrollbar-none">
                {terminalDemoCommands.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCmdIdx(idx)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                      activeCmdIdx === idx
                        ? 'bg-devops-cyan/20 text-devops-cyan border border-devops-cyan/40'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <Play className="w-2.5 h-2.5" />
                    <span>{item.cmd.split(' ')[0]} {item.cmd.split(' ')[1]}</span>
                  </button>
                ))}
              </div>

              {/* Terminal Screen Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] bg-[#070b14] min-h-[260px] flex flex-col justify-between">
                <div>
                  {/* Prompt Line */}
                  <div className="flex items-center text-slate-300 mb-2">
                    <span className="text-devops-cyan font-bold mr-2">rajan@cloud-prod:~$</span>
                    <span className="text-white font-medium break-all">{currentCommand.cmd}</span>
                    <span className="inline-block w-2 h-4 bg-devops-cyan ml-1 animate-blink"></span>
                  </div>

                  {/* Command Output */}
                  <div className="space-y-1 text-slate-300 font-mono text-xs pt-2">
                    {currentCommand.output.map((line, lIdx) => (
                      <div 
                        key={lIdx} 
                        className={`leading-relaxed ${
                          line.startsWith('NAMES') || line.startsWith('NAME') || line.startsWith('Terraform')
                            ? 'text-slate-400 font-semibold'
                            : line.includes('Running') || line.includes('Up') || line.includes('Plan:') || line.includes('done')
                            ? 'text-emerald-400'
                            : 'text-slate-300'
                        }`}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terminal Disclaimer Notice */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-devops-cyan/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Simulated DevOps command telemetry
                  </span>
                  <span>status: 200 OK</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
