import React from 'react';
import { techStackCategories, secondarySkills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 border-t border-white/[0.06]">
      <div className="max-w-content mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100 tracking-tight">
            Tech Stack
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Core technologies and tooling utilized in production environments.
          </p>
        </div>

        {/* 5 Compact Categories */}
        <div className="minimal-card rounded-xl divide-y divide-white/[0.06] overflow-hidden mb-6">
          {techStackCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/[0.015] transition-colors"
            >
              <div className="w-36 shrink-0">
                <span className="text-sm font-semibold text-neutral-200">
                  {cat.category}
                </span>
              </div>

              <div className="text-xs sm:text-sm font-mono text-neutral-400 leading-relaxed sm:text-right">
                {cat.skills.join(' · ')}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Secondary Skills Row */}
        <div className="px-2 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500">
          <span className="uppercase tracking-wider">Additional:</span>
          <span className="text-neutral-400">
            {secondarySkills.join(' · ')}
          </span>
        </div>

      </div>
    </section>
  );
}
