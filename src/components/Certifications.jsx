import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-devops-surface/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-devops-cyan/10 border border-devops-cyan/30 text-xs font-mono text-devops-cyan mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Certifications
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-xl">
            Formal technical certifications validating containerization, cluster orchestration, and enterprise Linux administration.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-devops-cyan/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-devops-cyan/10 border border-devops-cyan/30 flex items-center justify-center text-devops-cyan">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    Verified Credential
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">
                  {cert.title}
                </h3>

                <span className="text-xs font-mono text-devops-cyan block mb-3">
                  Issuer: {cert.issuer}
                </span>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cert.focus}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Domain: DevOps / Systems</span>
                <span className="text-emerald-400">Completed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
