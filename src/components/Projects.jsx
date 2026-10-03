import React, { useState } from 'react';
import { 
  GitBranch, 
  Boxes, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  ExternalLink, 
  Cpu, 
  Terminal, 
  CheckCircle,
  Eye,
  Workflow,
  Network,
  Server
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeArchModal, setActiveArchModal] = useState(null);

  return (
    <section id="projects" className="py-24 relative bg-devops-surface/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-devops-cyan/10 border border-devops-cyan/30 text-xs font-mono text-devops-cyan mb-3">
            <span>FEATURED IMPLEMENTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            DevOps & Cloud Projects
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            Production-grade pipeline engineering and Kubernetes cluster architectures built for performance, security, and automated delivery.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Project 1: Multi-Environment CI/CD Pipeline */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-devops-cyan/40 transition-all flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {projectsData[0].category}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  40% Size Reduction
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {projectsData[0].title}
              </h3>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {projectsData[0].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded text-xs font-mono bg-white/5 border border-white/10 text-devops-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {projectsData[0].description}
              </p>

              {/* Key Highlights Metrics */}
              <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-devops-card/90 border border-white/5 mb-6">
                {projectsData[0].keyMetrics.map((km, i) => (
                  <div key={i} className="text-center">
                    <span className="block text-base font-bold font-mono text-white">
                      {km.value}
                    </span>
                    <span className="block text-[10px] text-slate-400 font-mono leading-tight mt-0.5">
                      {km.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Visual Pipeline Flow Snapshot */}
              <div className="p-4 rounded-xl bg-devops-dark/80 border border-white/10 mb-6">
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-devops-cyan" />
                  Pipeline Topology Flow
                </span>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 overflow-x-auto pb-1 gap-2">
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/10 whitespace-nowrap text-sky-400">Dev</span>
                  <span className="text-slate-500">→</span>
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/10 whitespace-nowrap text-white">GitHub</span>
                  <span className="text-slate-500">→</span>
                  <span className="px-2 py-1 rounded bg-devops-cyan/10 border border-devops-cyan/30 text-devops-cyan whitespace-nowrap">Jenkins</span>
                  <span className="text-slate-500">→</span>
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/10 whitespace-nowrap text-amber-400">SonarQube</span>
                  <span className="text-slate-500">→</span>
                  <span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 whitespace-nowrap">Deploy</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setActiveArchModal('cicd')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-devops-cyan text-devops-dark font-bold text-xs hover:bg-cyan-300 transition-all shadow-sm"
              >
                <Eye className="w-4 h-4" />
                <span>View Full Architecture</span>
              </button>
              <span className="text-xs font-mono text-slate-500">
                Multi-Branch Pipeline
              </span>
            </div>
          </div>

          {/* Project 2: Kubernetes Cluster Deployment */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-devops-cyan/40 transition-all flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  {projectsData[1].category}
                </span>
                <span className="text-xs font-mono text-devops-cyan flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-devops-cyan animate-pulse"></span>
                  Microservices Ready
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {projectsData[1].title}
              </h3>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {projectsData[1].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded text-xs font-mono bg-white/5 border border-white/10 text-devops-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {projectsData[1].description}
              </p>

              {/* Key Highlights Metrics */}
              <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-devops-card/90 border border-white/5 mb-6">
                {projectsData[1].keyMetrics.map((km, i) => (
                  <div key={i} className="text-center">
                    <span className="block text-xs sm:text-sm font-bold font-mono text-white leading-tight">
                      {km.value}
                    </span>
                    <span className="block text-[10px] text-slate-400 font-mono leading-tight mt-1">
                      {km.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Visual Kubernetes Topology Snapshot */}
              <div className="p-4 rounded-xl bg-devops-dark/80 border border-white/10 mb-6">
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Network className="w-3.5 h-3.5 text-devops-cyan" />
                  Cluster Layer Components
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded bg-white/5 border border-white/5 text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                    <span>Ingress Controller</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5 text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>HPA Dynamic Scaling</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5 text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Helm Releases</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5 text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>Persistent Volumes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setActiveArchModal('k8s')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-devops-cyan text-devops-dark font-bold text-xs hover:bg-cyan-300 transition-all shadow-sm"
              >
                <Eye className="w-4 h-4" />
                <span>View Cluster Architecture</span>
              </button>
              <span className="text-xs font-mono text-slate-500">
                Helm & HPA Setup
              </span>
            </div>
          </div>

        </div>

        {/* Modal / Architecture Inspector Drawer */}
        {activeArchModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-3xl glass-panel bg-devops-surface p-6 sm:p-8 rounded-2xl border border-devops-cyan/40 shadow-2xl overflow-y-auto max-h-[90vh]">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono text-devops-cyan uppercase tracking-wider block">
                    Architecture Blueprint
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {activeArchModal === 'cicd' ? projectsData[0].title : projectsData[1].title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveArchModal(null)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 text-xs font-mono"
                >
                  Close [ESC]
                </button>
              </div>

              {/* Modal Content: Project 1 CI/CD Details */}
              {activeArchModal === 'cicd' && (
                <div className="space-y-6">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    The pipeline is triggered automatically via GitHub webhooks on commit. Jenkins coordinates the build stages inside isolated Docker containers, executes SonarQube quality gates, and generates lean production container images using multi-stage builds.
                  </p>

                  <div className="bg-devops-dark p-5 rounded-xl border border-white/10 space-y-3 font-mono text-xs">
                    <span className="text-slate-400 block font-semibold mb-2">
                      Full Pipeline Execution Sequence:
                    </span>
                    {projectsData[0].architectureSteps.map((step) => (
                      <div key={step.step} className="flex items-start gap-3 p-2.5 rounded bg-white/5 border border-white/5">
                        <span className="w-5 h-5 rounded-full bg-devops-cyan/20 text-devops-cyan flex items-center justify-center font-bold shrink-0">
                          {step.step}
                        </span>
                        <div>
                          <span className="text-white font-bold block">{step.title}</span>
                          <span className="text-slate-400 text-[11px]">{step.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Production Result: Multi-stage Docker builds achieved a 40% reduction in image size and 50% faster deployments across all target environments.</span>
                  </div>
                </div>
              )}

              {/* Modal Content: Project 2 K8s Details */}
              {activeArchModal === 'k8s' && (
                <div className="space-y-6">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Multi-node Kubernetes cluster configured for high-density containerized microservices. Ingress controller handles TLS and routing, while the Horizontal Pod Autoscaler monitors real-time CPU/memory utilization to dynamically scale workloads.
                  </p>

                  <div className="bg-devops-dark p-5 rounded-xl border border-white/10 space-y-3 font-mono text-xs">
                    <span className="text-slate-400 block font-semibold mb-2">
                      Kubernetes Infrastructure Stack:
                    </span>
                    {projectsData[1].architectureComponents.map((comp, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-2.5 rounded bg-white/5 border border-white/5">
                        <Server className="w-4 h-4 text-devops-cyan shrink-0 mt-0.5" />
                        <div>
                          <span className="text-white font-bold block">{comp.name}</span>
                          <span className="text-slate-400 text-[11px]">{comp.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-devops-cyan/10 border border-devops-cyan/20 text-xs text-devops-cyan flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Deployment Pattern: Declarative Helm charts automate rolling updates with zero downtime and instant rollbacks on version tags.</span>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
