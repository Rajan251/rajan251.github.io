import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 border-t border-white/[0.06]">
      <div className="max-w-content mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100 tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Production infrastructure engineering, automated delivery, and systems administration.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-10">
          {experienceData.map((job, idx) => (
            <div
              key={job.company}
              className="minimal-card rounded-xl p-6 sm:p-8 space-y-6 relative overflow-hidden group"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Header: Company, Role, Date & Location */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/[0.06] pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-100 group-hover:text-white transition-colors">
                      {job.company}
                    </h3>
                    {idx === 0 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        Current Role
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-sky-400 font-medium font-mono block mt-0.5">
                    {job.role}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{job.period}</span>
                  <span className="text-neutral-600">·</span>
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{job.location}</span>
                </div>
              </div>

              {/* High-impact bullet points */}
              <ul className="space-y-3 text-sm text-neutral-300 leading-relaxed font-normal">
                {job.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-400/80 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Small technology row */}
              <div className="pt-3 flex flex-wrap items-center gap-1.5 border-t border-white/[0.04]">
                <span className="text-[11px] font-mono text-neutral-500 mr-2 uppercase tracking-wider">
                  Tooling Applied:
                </span>
                {job.techRow.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
