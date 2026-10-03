import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-devops-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-devops-cyan/10 border border-devops-cyan/30 text-xs font-mono text-devops-cyan mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Foundations
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-xl">
            Formal technical education in Computer Science and Engineering, covering systems architecture, operating systems, and distributed algorithms.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-devops-cyan/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-devops-card border border-white/10 flex items-center justify-center text-devops-cyan">
                    <GraduationCap className="w-5 h-5 text-devops-cyan" />
                  </div>
                  <span className="text-xs font-mono text-devops-cyan px-2.5 py-1 rounded-lg bg-devops-cyan/10 border border-devops-cyan/20">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">
                  {edu.degree}
                </h3>

                <span className="text-sm font-semibold text-slate-200 block mb-1">
                  {edu.institution}
                </span>

                <span className="flex items-center gap-1 text-xs font-mono text-slate-400 mb-4">
                  <MapPin className="w-3 h-3 text-devops-cyan" />
                  {edu.location}
                </span>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {edu.focus}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Computer Science Faculty</span>
                <span className="text-slate-400">Completed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
