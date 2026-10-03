import React from 'react';
import { ArrowRight, ArrowUpRight, GitBranch, Cpu, Boxes, Cloud, Activity } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const flowNodes = [
    { title: "Git", label: "GitHub", icon: <GitBranch className="w-3.5 h-3.5 text-neutral-400" /> },
    { title: "CI/CD", label: "Jenkins", icon: <Cpu className="w-3.5 h-3.5 text-sky-400" /> },
    { title: "Containers", label: "Docker · K8s", icon: <Boxes className="w-3.5 h-3.5 text-neutral-300" /> },
    { title: "Cloud", label: "AWS", icon: <Cloud className="w-3.5 h-3.5 text-sky-400" /> },
    { title: "Monitoring", label: "Prometheus", icon: <Activity className="w-3.5 h-3.5 text-emerald-400" /> },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-minimal-grid">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Label */}
            <div className="inline-flex items-center text-xs font-mono tracking-wider uppercase text-neutral-400">
              <span>{personalInfo.badge}</span>
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-neutral-100 tracking-tight leading-[1.15]">
              {personalInfo.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl">
              {personalInfo.subtitle}
            </p>

            {/* Small Supporting Tech Line */}
            <div className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wide pt-1">
              <span>{personalInfo.coreStack.join(' · ')}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-neutral-100 text-neutral-900 text-xs font-semibold hover:bg-white transition-colors"
              >
                <span>View Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
            </div>

          </div>

          {/* Right Column: Subtle Technical Visual (Infrastructure Flow) */}
          <div className="lg:col-span-5">
            <div className="minimal-card rounded-xl p-5 sm:p-6 space-y-6">
              
              {/* Card Header Label */}
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase tracking-wider pb-3 border-b border-white/[0.06]">
                <span>Pipeline Architecture Flow</span>
                <span className="text-neutral-600">v2.4.0</span>
              </div>

              {/* Minimal Infrastructure Flow */}
              <div className="space-y-2.5">
                {flowNodes.map((node, idx) => (
                  <div key={node.title} className="relative">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded bg-white/[0.04]">
                          {node.icon}
                        </div>
                        <span className="text-xs font-medium text-neutral-200">
                          {node.title}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono text-neutral-400">
                        {node.label}
                      </span>
                    </div>

                    {/* Connecting line between nodes */}
                    {idx < flowNodes.length - 1 && (
                      <div className="h-2 w-[1px] bg-white/[0.1] ml-6 my-0.5" />
                    )}
                  </div>
                ))}
              </div>

              {/* Open to opportunities status */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs text-neutral-400">
                    {personalInfo.status}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
