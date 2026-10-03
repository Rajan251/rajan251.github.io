import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Terminal, 
  Layers,
  Sparkles
} from 'lucide-react';
import { metricsData } from '../data/portfolioData';

export default function Metrics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const metricIcons = {
    "apps": <Layers className="w-5 h-5 text-devops-cyan" />,
    "deployment-speed": <Clock className="w-5 h-5 text-sky-400" />,
    "uptime": <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    "reliability": <TrendingUp className="w-5 h-5 text-emerald-400" />,
    "mttr": <Activity className="w-5 h-5 text-amber-400" />,
    "automation": <Zap className="w-5 h-5 text-devops-cyan" />,
    "vms": <Terminal className="w-5 h-5 text-violet-400" />
  };

  return (
    <section 
      id="metrics" 
      ref={sectionRef} 
      className="py-20 relative bg-devops-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MEASURABLE IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Numbers & Operational Results
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-xl">
            Verifiable metrics achieved through pipeline automation, auto-scaling AWS architecture, and centralized monitoring.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsData.map((item, idx) => (
            <div
              key={item.id}
              className={`glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group hover:border-devops-cyan/40 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-devops-cyan/20 via-devops-cyan to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-devops-card border border-white/10 group-hover:border-devops-cyan/30 transition-colors">
                  {metricIcons[item.id] || <Activity className="w-5 h-5 text-devops-cyan" />}
                </div>
                <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                  {item.badge}
                </span>
              </div>

              {/* Number Value */}
              <div className="mb-2">
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white group-hover:text-devops-cyan transition-colors">
                  {item.value}
                </span>
              </div>

              {/* Metric Label */}
              <h3 className="text-sm font-bold text-slate-200 mb-1.5 leading-snug">
                {item.label}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Verification Callout Tile */}
          <div 
            className={`glass-card rounded-2xl p-6 border border-devops-cyan/20 bg-devops-card/50 flex flex-col justify-between transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${metricsData.length * 75}ms` }}
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-devops-cyan mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>ZERO FICTION POLICY</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2">
                100% Resume-Backed Metrics
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                All performance metrics are directly derived from documented production deployments at DJT Corporation Investments & Reticen8 Technology.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <span className="text-[11px] font-mono text-slate-500">
                Verified: Rajan_Kumar.pdf
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
