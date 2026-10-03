import React from 'react';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-2xl space-y-4">
          
          {/* Section Heading */}
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-100 tracking-tight">
            {aboutData.heading}
          </h2>

          {/* Short Bio Text */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            {aboutData.bio}
          </p>

          {/* Current Role Subline */}
          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Currently: DevOps Engineer @ DJT Corporation Investments</span>
          </div>

        </div>
      </div>
    </section>
  );
}
