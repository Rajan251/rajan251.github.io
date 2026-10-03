import React from 'react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="py-20 md:py-24 border-t border-white/[0.06]">
      <div className="max-w-content mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Education Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-neutral-100 tracking-tight">
              Education
            </h3>

            <div className="space-y-4">
              {educationData.map((item) => (
                <div 
                  key={item.degree}
                  className="minimal-card rounded-lg p-4 space-y-1"
                >
                  <h4 className="text-sm font-semibold text-neutral-200">
                    {item.degree}
                  </h4>
                  <div className="text-xs font-mono text-neutral-400 flex items-center justify-between">
                    <span>{item.school}</span>
                    <span>{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-neutral-100 tracking-tight">
              Certifications
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div 
                  key={cert.title}
                  className="minimal-card rounded-lg p-4 space-y-1"
                >
                  <h4 className="text-sm font-semibold text-neutral-200">
                    {cert.title}
                  </h4>
                  <div className="text-xs font-mono text-neutral-400">
                    {cert.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
