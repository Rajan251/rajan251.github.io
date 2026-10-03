import React from 'react';
import { projectsData } from '../data/portfolioData';
import { CheckCircle2, ArrowRight, Layers, Workflow, ExternalLink } from 'lucide-react';

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
            Production-grade pipeline engineering and container orchestration architectures.
          </p>
        </div>

        {/* Horizontal Project Cards */}
        <div className="space-y-8">
          {projectsData.map((project) => (
            <div
              key={project.title}
              className="minimal-card rounded-xl p-6 sm:p-8 space-y-6 relative overflow-hidden group"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Header: Number, Title, Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-sky-400 font-bold">
                    {project.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {project.tag && (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] text-neutral-400 border border-white/[0.08]">
                      {project.tag}
                    </span>
                  )}
                  {project.highlight && (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                      {project.highlight}
                    </span>
                  )}
                </div>
              </div>

              {/* Technologies Row */}
              <div className="flex flex-wrap gap-1.5 text-xs font-mono text-neutral-300">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl font-normal">
                {project.description}
              </p>

              {/* Key Telemetry Specs Grid */}
              {project.telemetry && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-lg bg-black/40 border border-white/[0.05] text-xs font-mono">
                  {Object.entries(project.telemetry).map(([key, val]) => (
                    <div key={key}>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="text-neutral-200 font-semibold text-xs mt-0.5 block truncate">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Clean Horizontal Architecture Visual */}
              <div className="pt-2 border-t border-white/[0.06]">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-sky-400" />
                  Execution Flow Topology:
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  {project.flow.map((step, sIdx) => (
                    <React.Fragment key={step}>
                      <span className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-neutral-200 hover:border-sky-500/40 hover:text-sky-300 transition-colors">
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
