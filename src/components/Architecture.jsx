import React, { useState } from 'react';
import { 
  GitBranch, 
  Cpu, 
  ShieldCheck, 
  Boxes, 
  Cloud, 
  Network, 
  Server, 
  Database, 
  Activity, 
  Eye, 
  Radio, 
  Layers,
  ArrowDown,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';
import { devopsArchitectureData } from '../data/portfolioData';

export default function Architecture() {
  const [activeLayer, setActiveLayer] = useState('all');
  const [selectedNode, setSelectedNode] = useState('alb');

  const nodes = [
    {
      id: 'developer',
      name: 'Developer',
      category: 'source',
      layer: 'delivery',
      icon: <GitBranch className="w-5 h-5 text-sky-400" />,
      tag: 'Source Commit',
      details: 'Feature development on local workstation with pre-commit hooks and feature branch isolation.',
      role: 'Code authoring & push trigger'
    },
    {
      id: 'github',
      name: 'GitHub',
      category: 'source',
      layer: 'delivery',
      icon: <GitBranch className="w-5 h-5 text-slate-200" />,
      tag: 'Version Control',
      details: 'Multi-branch repository with branch protection, PR reviews, and automated webhook triggers sent to Jenkins.',
      role: 'Webhook event trigger'
    },
    {
      id: 'jenkins',
      name: 'Jenkins CI',
      category: 'ci',
      layer: 'delivery',
      icon: <Cpu className="w-5 h-5 text-devops-cyan" />,
      tag: 'CI Orchestration',
      details: 'Multi-branch pipeline coordinating build stages, container agents, automated test suites, and deployment triggers.',
      role: 'Automated CI/CD pipeline'
    },
    {
      id: 'sonarqube',
      name: 'SonarQube',
      category: 'security',
      layer: 'delivery',
      icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
      tag: 'DevSecOps',
      details: 'Automated static application security testing (SAST), code smell detection, and strict quality gate enforcement.',
      role: 'Security scanning & quality gates'
    },
    {
      id: 'docker',
      name: 'Docker Registry',
      category: 'container',
      layer: 'delivery',
      icon: <Boxes className="w-5 h-5 text-sky-400" />,
      tag: 'Multi-Stage Build',
      details: 'Multi-stage Docker builds reducing image size by 40%. Immutably tagged and pushed to container registry.',
      role: 'Optimized container images'
    },
    {
      id: 'aws',
      name: 'AWS Cloud VPC',
      category: 'cloud',
      layer: 'infra',
      icon: <Cloud className="w-5 h-5 text-amber-400" />,
      tag: 'Cloud Perimeter',
      details: 'Isolated VPC with public and private subnets, security groups, route tables, and NAT gateways for hardened isolation.',
      role: 'Secure cloud perimeter'
    },
    {
      id: 'alb',
      name: 'Load Balancer (ALB)',
      category: 'cloud',
      layer: 'infra',
      icon: <Network className="w-5 h-5 text-emerald-400" />,
      tag: 'Traffic Routing',
      details: 'Application Load Balancer terminating SSL/TLS certificates, performing health checks, and balancing incoming requests.',
      role: 'SSL offloading & health checks'
    },
    {
      id: 'app',
      name: 'Application Cluster',
      category: 'cloud',
      layer: 'infra',
      icon: <Server className="w-5 h-5 text-devops-cyan" />,
      tag: 'Auto Scaling / K8s',
      details: 'Auto-scaling EC2 instances and containerized microservices dynamically expanding based on CPU/memory workload metrics.',
      role: 'High-availability execution'
    },
    {
      id: 'db',
      name: 'Databases (RDS / Mongo)',
      category: 'data',
      layer: 'infra',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      tag: 'Data Persistence',
      details: 'Managed relational and NoSQL databases with automated backup routines, 100% backup success rate, and rollback support.',
      role: 'Zero-downtime database'
    }
  ];

  const observabilityNodes = [
    {
      name: 'Prometheus',
      focus: 'Metrics Collection',
      desc: 'Scrapes time-series metrics from nodes, containers, and services to trigger threshold alerts.',
      icon: <Activity className="w-4 h-4 text-violet-400" />
    },
    {
      name: 'Grafana',
      focus: 'Visual Dashboards',
      desc: 'Central visualization of infrastructure latency, CPU/memory saturation, and active traffic trends.',
      icon: <Eye className="w-4 h-4 text-devops-cyan" />
    },
    {
      name: 'Loki',
      focus: 'Log Aggregation',
      desc: 'Centralized indexing and querying of container logs across services without heavy overhead.',
      icon: <Layers className="w-4 h-4 text-emerald-400" />
    },
    {
      name: 'AWS CloudWatch',
      focus: 'AWS Monitoring',
      desc: 'Native metric alarms for EC2, ALB target response times, VPC network flow, and billing.',
      icon: <Cloud className="w-4 h-4 text-amber-400" />
    },
    {
      name: 'New Relic APM',
      focus: 'Application & DB APM',
      desc: 'Deep transaction tracing, query profiling, and database bottleneck analysis (reduced query times by 40%).',
      icon: <Radio className="w-4 h-4 text-sky-400" />
    }
  ];

  const currentNode = nodes.find((n) => n.id === selectedNode) || nodes[6];

  return (
    <section id="architecture" className="py-24 relative bg-devops-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-devops-cyan/10 border border-devops-cyan/30 text-xs font-mono text-devops-cyan mb-3">
            <span>SYSTEM DESIGN BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Think About Infrastructure
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            A production-proven architectural model bridging code integration, hardened AWS cloud deployment, and real-time observability telemetry.
          </p>
        </div>

        {/* Interactive Architecture Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Visual Topology Flow (Left 8 cols) */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative">
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-devops-cyan animate-pulse"></span>
                <h3 className="text-base font-bold text-white font-mono">
                  Primary Delivery & Infrastructure Flow
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400 hidden sm:block">
                Click any component to inspect
              </span>
            </div>

            {/* Vertical / Responsive Node Flow */}
            <div className="space-y-3">
              {nodes.map((node, idx) => {
                const isSelected = selectedNode === node.id;
                return (
                  <div key={node.id} className="relative">
                    <button
                      onClick={() => setSelectedNode(node.id)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-devops-card border-devops-cyan text-white shadow-glow-cyan'
                          : 'bg-devops-card/60 border-white/10 text-slate-300 hover:border-devops-cyan/40 hover:bg-devops-card'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-devops-dark border ${
                          isSelected ? 'border-devops-cyan text-devops-cyan' : 'border-white/10'
                        }`}>
                          {node.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white">{node.name}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400">
                              {node.tag}
                            </span>
                          </div>
                          <span className="text-xs text-slate-400 font-mono block mt-0.5">
                            {node.role}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono px-2 py-1 rounded ${
                          isSelected ? 'bg-devops-cyan/20 text-devops-cyan' : 'text-slate-500'
                        }`}>
                          Step 0{idx + 1}
                        </span>
                      </div>
                    </button>

                    {/* Down connector arrow */}
                    {idx < nodes.length - 1 && (
                      <div className="flex justify-center py-1 text-devops-cyan/40">
                        <ArrowDown className="w-3.5 h-3.5 animate-pulse" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Node Inspector & Observability Matrix (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Active Component Inspector */}
            <div className="glass-card p-6 rounded-2xl border border-devops-cyan/40 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-xs font-mono text-devops-cyan uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  Node Inspector
                </span>
                <span className="text-[11px] font-mono text-emerald-400">STATUS: HEALTHY</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-devops-card border border-devops-cyan/30">
                  {currentNode.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight">
                    {currentNode.name}
                  </h4>
                  <span className="text-xs font-mono text-devops-cyan">
                    {currentNode.tag}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {currentNode.details}
              </p>

              <div className="p-3 rounded-xl bg-devops-dark border border-white/5 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Architecture Layer:</span>
                  <span className="text-white capitalize">{currentNode.category}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Failure Safeguard:</span>
                  <span className="text-emerald-400">Automated Rollback / Health Check</span>
                </div>
              </div>
            </div>

            {/* Observability Telemetry Matrix */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <Activity className="w-4 h-4 text-violet-400" />
                <h4 className="text-sm font-bold text-white font-mono">
                  Integrated Observability Layer
                </h4>
              </div>

              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Centralized telemetry stack ensuring proactive alerting, 30% lower MTTR, and sub-second performance isolation.
              </p>

              <div className="space-y-3">
                {observabilityNodes.map((obs, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-xl bg-devops-card/80 border border-white/5 hover:border-devops-cyan/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 font-bold text-xs text-white">
                        {obs.icon}
                        <span>{obs.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-white/5">
                        {obs.focus}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {obs.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
