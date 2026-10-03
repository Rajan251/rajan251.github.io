import React, { useState } from 'react';
import { Mail, ArrowUpRight, ArrowDownToLine, Copy, Check, Briefcase, Zap, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#0c0e15]/70 relative overflow-hidden">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/[0.06] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-content mx-auto px-6 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Main Heading */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-sky-400 tracking-wider uppercase">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight">
              Let's build reliable infrastructure.
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 font-normal">
              Open to DevOps and Cloud Engineering opportunities.
            </p>
          </div>

          {/* Dual Opportunity Callout (Recruiters & Freelance Clients) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1.5 hover:border-sky-500/30 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Full-Time Employment</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                DevOps Engineer, Cloud Engineer, or Infrastructure specialist roles across India or remote.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1.5 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>Freelance Consulting</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                CI/CD setup, AWS cloud migration, Dockerization, K8s configuration, and Grafana monitoring.
              </p>
            </div>
          </div>

          {/* Email Display with Copy Helper */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/40 border border-white/[0.1]">
              <Mail className="w-4 h-4 text-sky-400" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-mono text-sm sm:text-base text-neutral-200 hover:text-sky-300 transition-colors"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1 rounded text-neutral-400 hover:text-white transition-colors ml-1"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Response &lt; 24h</span>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}?subject=Opportunity%20Discussion%20with%20Rajan%20Kumar`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neutral-100 text-neutral-950 text-xs font-bold hover:bg-white hover:shadow-lg hover:shadow-white/10 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Me</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-xs font-medium hover:bg-white/[0.08] hover:text-white hover:border-white/[0.16] transition-all"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-xs font-medium hover:bg-white/[0.08] hover:text-white hover:border-white/[0.16] transition-all"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Rajan_Kumar_DevOps_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-xs font-medium hover:bg-white/[0.08] hover:text-white hover:border-white/[0.16] transition-all"
            >
              <ArrowDownToLine className="w-3.5 h-3.5 text-neutral-400" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
