import React from 'react';
import { architectureData } from '../data/portfolioData';

export default function Architecture() {
  const steps = [
    { title: "Developer", labels: ["Local", "Commit"] },
    { title: "Git", labels: ["GitHub", "Webhooks"] },
    { title: "CI/CD", labels: ["Jenkins", "SonarQube"] },
    { title: "Docker", labels: ["Multi-Stage", "Registry"] },
    { title: "AWS", labels: ["EC2", "ALB", "VPC"] },
    { title: "Monitoring", labels: ["Prometheus", "Grafana", "CloudWatch"] }
  ];

  return (
    <section id="architecture" className="py-20 md:py-24 border-t border-white/[0.06]">
      <div className="max-w-content mx-auto px-6">
        
        {/* Section Heading & Single Sentence */}
        <div className="max-w-2xl mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100 tracking-tight">
            {architectureData.heading}
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            "{architectureData.sentence}"
          </p>
        </div>

        {/* Elegant Horizontal Flow Visual */}
        <div className="minimal-card rounded-xl p-6 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            {steps.map((step, idx) => (
              <div 
                key={step.title}
                className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-neutral-500">
                      0{idx + 1}
                    </span>
                    {idx < steps.length - 1 && (
                      <span className="hidden lg:block text-neutral-600 text-xs">→</span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-neutral-100 mb-1">
                    {step.title}
                  </h3>
                </div>

                <div className="space-y-1">
                  {step.labels.map((lbl) => (
                    <span 
                      key={lbl}
                      className="block text-[11px] font-mono text-neutral-400"
                    >
                      {lbl}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Understated footnote */}
          <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>Automated deployment pipeline & production telemetry</span>
            <span>Zero manual gates</span>
          </div>
        </div>

      </div>
    </section>
  );
}
