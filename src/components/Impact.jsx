import React from 'react';
import { impactMetrics } from '../data/portfolioData';

export default function Impact() {
  return (
    <section className="py-12 border-y border-white/[0.06] bg-[#0c0e16]/50">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
          {impactMetrics.map((metric, idx) => (
            <div 
              key={metric.label} 
              className={`flex flex-col ${idx !== 0 ? 'pt-6 md:pt-0 md:pl-6' : ''}`}
            >
              <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-neutral-100 mb-1">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm text-neutral-400 font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
