import React from 'react';
import { servicesData } from '../data/portfolioData';
import { Check, ArrowRight, Sparkles, Zap, MessageSquare } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24 border-t border-white/[0.06] bg-[#0a0d15]/50">
      <div className="max-w-content mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>SOLUTIONS & FREELANCE CAPABILITIES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-100 tracking-tight">
            How I Can Help Your Team
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Practical infrastructure engineering for full-time engineering teams and high-impact freelance consulting projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="minimal-card rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-sky-400 font-semibold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                    SERVICE {svc.number}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">
                    Production Grade
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-100 group-hover:text-sky-300 transition-colors">
                  {svc.title}
                </h3>

                <p className="text-xs text-neutral-400 font-medium font-mono leading-relaxed text-sky-400/80">
                  {svc.tagline}
                </p>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {svc.description}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                  Key Deliverables:
                </span>
                {svc.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}

          {/* Quick Inquiry Callout Tile */}
          <div className="featured-card rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Fast Turnaround</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Need a Custom Cloud Solution?
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Whether you need a complete CI/CD overhaul, Kubernetes cluster deployment, or automated disaster recovery, I'm available for both freelance contracts and full-time hiring.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.1] relative z-10">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-sky-500 text-neutral-950 font-bold text-xs hover:bg-sky-400 transition-all shadow-md shadow-sky-500/20"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Request Project Consultation</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
