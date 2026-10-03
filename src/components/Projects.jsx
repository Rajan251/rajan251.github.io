import React from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 border-t border-white/[0.06]">
      <div className="max-w-content mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100 tracking-tight">
            Selected Projects
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Pipeline automation and container orchestration architectures.
          </p>
        </div>

        {/* Horizontal Project Cards */}
        <div className="space-y-8">
          {projectsData.map((project) => (
            <div
              key={project.title}
              className="minimal-card rounded-xl p-6 sm:p-8 space-y-5"
            >
              {/* Header: Number, Title, Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-neutral-500 font-semibold">
                    {project.number}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-100">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {project.tag && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-400 border border-white/[0.08]">
                      {project.tag}
                    </span>
                  )}
                  {project.highlight && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {project.highlight}
                    </span>
                  )}
                </div>
              </div>

              {/* Technologies Row */}
              <div className="text-xs font-mono text-neutral-400 tracking-wide">
                {project.technologies.join(' · ')}
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {/* Clean Horizontal Architecture Visual */}
              <div className="pt-3 border-t border-white/[0.06]">
                <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-2.5">
                  Flow:
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  {project.flow.map((step, sIdx) => (
                    <React.Fragment key={step}>
                      <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-neutral-200">
                        {step}
                      </span>
                      {sIdx < project.flow.length - 1 && (
                        <span className="text-neutral-500 text-xs">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
