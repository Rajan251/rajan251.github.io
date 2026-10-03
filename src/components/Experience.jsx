import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 border-t border-white/[0.06]">
      <div className="max-w-content mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100 tracking-tight">
            Experience
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Production infrastructure engineering and systems administration.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {experienceData.map((job, idx) => (
            <div
              key={job.company}
              className="minimal-card rounded-xl p-6 sm:p-8 space-y-6"
            >
              {/* Header: Company, Role, Date & Location */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/[0.06] pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-100">
                    {job.company}
                  </h3>
                  <span className="text-sm text-sky-400 font-medium font-mono">
                    {job.role}
                  </span>
                </div>

                <span className="text-xs font-mono text-neutral-400">
                  {job.period} · {job.location}
                </span>
              </div>

              {/* High-impact bullet points */}
              <ul className="space-y-2.5 text-sm text-neutral-300 leading-relaxed">
                {job.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-neutral-500 select-none mt-1 text-xs">―</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Small technology row */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-white/[0.04]">
                <span className="text-[11px] font-mono text-neutral-500 mr-2 uppercase tracking-wider">
                  Stack:
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
