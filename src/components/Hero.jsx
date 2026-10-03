import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  GitBranch, 
  Cpu, 
  Boxes, 
  Cloud, 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [activeStep, setActiveStep] = useState(1);

  const flowNodes = [
    { 
      id: 0,
      title: "Git", 
      label: "GitHub", 
      icon: <GitBranch className="w-3.5 h-3.5 text-neutral-300" />,
      detail: "Feature commits trigger Jenkins multi-branch webhooks with branch protection & PR review gates."
    },
    { 
      id: 1,
      title: "CI/CD", 
      label: "Jenkins · SonarQube", 
      icon: <Cpu className="w-3.5 h-3.5 text-sky-400" />,
      detail: "Automated test suites & SonarQube security gates execute in isolated containerized build agents."
    },
    { 
      id: 2,
      title: "Containers", 
      label: "Docker · K8s", 
      icon: <Boxes className="w-3.5 h-3.5 text-emerald-400" />,
      detail: "Multi-stage Docker builds reduce image size by 40% with immutable tags pushed to registry."
    },
    { 
      id: 3,
      title: "Cloud", 
      label: "AWS (ALB + ASG)", 
      icon: <Cloud className="w-3.5 h-3.5 text-sky-400" />,
      detail: "Traffic routed via ALB to auto-scaling EC2 instances inside secure VPC subnets with 99.9% uptime."
    },
    { 
      id: 4,
      title: "Observability", 
      label: "Prometheus · Grafana", 
      icon: <Activity className="w-3.5 h-3.5 text-violet-400" />,
      detail: "Real-time metrics, centralized Loki log streams, and New Relic APM cutting MTTR by 30%."
    },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-minimal-grid">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/[0.07] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/[0.04] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-content mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Bio & Dual CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Label & Availability Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono tracking-wider uppercase text-neutral-400">
                {personalInfo.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for Hire & Freelance</span>
              </span>
            </div>

            {/* Large Headline with Understated Glow */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-neutral-100 tracking-tight leading-[1.14]">
              I build and automate{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-emerald-400">
                reliable infrastructure.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl font-normal">
              {personalInfo.subtitle}
            </p>

            {/* Core Tech Stack Row */}
            <div className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wide pt-1 flex flex-wrap items-center gap-2">
              <span className="text-neutral-500">Core:</span>
              {personalInfo.coreStack.map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-xs">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons: For Recruiters & Freelance Clients */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-neutral-100 text-neutral-900 text-xs font-semibold hover:bg-white hover:shadow-lg hover:shadow-white/10 transition-all"
              >
                <span>View Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-medium hover:bg-sky-500/20 transition-all"
              >
                <Zap className="w-3.5 h-3.5 text-sky-400" />
                <span>Freelance Services</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-xs font-medium hover:bg-white/[0.08] hover:text-white transition-all"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Infrastructure & Pipeline Visual */}
          <div className="lg:col-span-5">
            <div className="minimal-card rounded-xl p-5 sm:p-6 space-y-5 border border-white/[0.1] shadow-2xl bg-[#0e121c]/90">
              
              {/* Header with Simulated Latency */}
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-wider pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-neutral-300 font-semibold">Active Production Topology</span>
                </div>
                <span className="text-sky-400">AWS ap-south-1</span>
              </div>

              {/* Interactive Flow Nodes */}
              <div className="space-y-2">
                {flowNodes.map((node) => {
                  const isSelected = activeStep === node.id;
                  return (
                    <div 
                      key={node.title} 
                      onClick={() => setActiveStep(node.id)}
                      className={`cursor-pointer flex items-center justify-between p-2.5 rounded-lg border transition-all ${
                        isSelected 
                          ? 'bg-sky-500/10 border-sky-500/40 text-white shadow-sm shadow-sky-500/10' 
                          : 'bg-white/[0.02] border-white/[0.06] text-neutral-300 hover:border-white/[0.16] hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`p-1.5 rounded ${isSelected ? 'bg-sky-500/20' : 'bg-white/[0.04]'}`}>
                          {node.icon}
                        </div>
                        <span className="text-xs font-medium">
                          {node.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-neutral-400">
                          {node.label}
                        </span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Live Inspector Panel */}
              <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06] space-y-1.5 font-mono">
                <div className="flex items-center justify-between text-[10px] text-neutral-500 uppercase">
                  <span>Component Telemetry</span>
                  <span className="text-emerald-400">Status: Verified</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  {flowNodes[activeStep].detail}
                </p>
              </div>

              {/* Live Telemetry Strip */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Uptime: 99.9%
                </span>
                <span>Deploy: -60% MTTR: -30%</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
