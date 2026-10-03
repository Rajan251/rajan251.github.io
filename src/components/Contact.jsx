import React, { useState } from 'react';
import { Mail, ArrowUpRight, ArrowDownToLine, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#0c0e15]/40">
      <div className="max-w-content mx-auto px-6 text-center">
        
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight">
            Let's build reliable infrastructure.
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-neutral-400 font-normal">
            Open to DevOps and Cloud Engineering opportunities.
          </p>

          {/* Email Display with Copy Helper */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-sm sm:text-base text-neutral-200 hover:text-sky-400 transition-colors border-b border-white/[0.15] hover:border-sky-400 pb-0.5"
            >
              {personalInfo.email}
            </a>

            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded-md text-neutral-400 hover:text-white bg-white/[0.04] border border-white/[0.08] transition-colors"
              title="Copy Email"
              aria-label="Copy Email"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Buttons Row */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neutral-100 text-neutral-950 text-xs font-semibold hover:bg-white transition-colors"
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
