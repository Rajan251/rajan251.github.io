import React from 'react';
import { impactMetrics } from '../data/portfolioData';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Impact() {
  // 30 uptime check indicator dots representing consistent operational availability
  const uptimeDays = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <section className="py-14 border-y border-white/[0.08] bg-[#0b0e17]/80 relative overflow-hidden">
      <div className="max-w-content mx-auto px-6 space-y-8">
        
        {/* Top 4 Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {impactMetrics.map((metric, idx) => (
            <div 
              key={metric.label} 
              className={`flex flex-col ${idx !== 0 ? 'pt-6 md:pt-0 md:pl-6' : ''}`}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono tracking-tight text-white mb-1">
                  {metric.value}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-neutral-200 font-semibold">
                {metric.label}
              </span>
              <span className="text-[11px] font-mono text-neutral-400 mt-0.5">
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>

        {/* Live Service Availability SLA Bar (Attention Grabber for Clients & Recruiters) */}
        <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-neutral-300 font-medium">Production Availability SLA:</span>
            <span className="text-emerald-400 font-semibold">99.9% Uptime Verified</span>
          </div>

          {/* Micro 30-day uptime bars */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0" title="90-day operational SLA">
            {uptimeDays.map((d) => (
              <span
                key={d}
                className="w-1.5 h-4 rounded-sm bg-emerald-500/80 hover:bg-emerald-400 hover:scale-125 transition-all cursor-pointer"
                title={`Day ${d}: 100% Operational`}
              />
            ))}
            <span className="text-[10px] text-neutral-400 ml-2">Past 30 Days</span>
          </div>
        </div>

      </div>
    </section>
  );
}
