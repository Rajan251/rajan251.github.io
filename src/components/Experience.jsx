import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Server, 
  ExternalLink,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-devops-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-devops-cyan/10 border border-devops-cyan/30 text-xs font-mono text-devops-cyan mb-3">
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Production Roles
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            Documented timeline of production infrastructure engineering, deployment automation, and system administration.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-14">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-devops-bg border-2 border-devops-cyan group-hover:scale-125 group-hover:bg-devops-cyan transition-all shadow-glow-cyan" />

              {/* Time Period Tag for Desktop (Left Floating) */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                <span className="text-xs font-mono font-semibold text-devops-cyan block">
                  {exp.period.split('–')[0].trim()}
                </span>
                <span className="text-[11px] font-mono text-slate-400 block">
                  {exp.period.split('–')[1] ? exp.period.split('–')[1].trim() : ''}
                </span>
                <span className="mt-1 inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/5">
                  {exp.type}
                </span>
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 group-hover:border-devops-cyan/40 transition-all">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
                  <div>
                    <span className="md:hidden text-xs font-mono text-devops-cyan block mb-1">
                      {exp.period} · {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300 mt-1">
                      <span className="font-semibold text-devops-cyan">
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-devops-cyan/10 border border-devops-cyan/30 text-devops-cyan">
                      {idx === 0 ? 'Current Role' : 'Previous Role'}
                    </span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                  {exp.summary}
                </p>

                {/* Key Bullet Points / Documented Achievements */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-white/5">
                  <span className="block text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                    Technologies & Tooling Applied:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
