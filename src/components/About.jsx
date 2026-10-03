import React from 'react';
import { 
  Building2, 
  Server, 
  ShoppingCart, 
  Cloud, 
  Workflow, 
  ShieldAlert, 
  Activity, 
  CheckCircle,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  const domainIcons = {
    "NBFC Banking Platforms": <Building2 className="w-5 h-5 text-devops-cyan" />,
    "Enterprise Internal Systems": <Server className="w-5 h-5 text-sky-400" />,
    "E-Commerce Applications": <ShoppingCart className="w-5 h-5 text-emerald-400" />,
    "Hybrid Cloud & On-Premises": <Cloud className="w-5 h-5 text-violet-400" />
  };

  const pillarIcons = [
    <Workflow className="w-5 h-5 text-devops-cyan" />,
    <CheckCircle className="w-5 h-5 text-emerald-400" />,
    <Activity className="w-5 h-5 text-violet-400" />,
    <ShieldAlert className="w-5 h-5 text-amber-400" />
  ];

  return (
    <section id="about" className="py-24 relative bg-devops-surface/40 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-devops-cyan/10 border border-devops-cyan/30 text-xs font-mono text-devops-cyan mb-3">
            <span>ABOUT RAJAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Infrastructure for Scale & Resilience
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Bridging software delivery and production operations with automation, high availability, and proactive observability.
          </p>
        </div>

        {/* Top Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-devops-cyan/5 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-devops-cyan" />
              Professional Background
            </h3>

            <p className="text-slate-300 leading-relaxed text-base mb-6">
              DevOps Engineer with 2 years of hands-on experience architecting CI/CD pipelines, orchestrating containerized services, and provisioning resilient cloud infrastructure. Specializing in AWS optimization, Docker, Kubernetes, and Infrastructure as Code (Terraform), I help engineering teams accelerate delivery while maintaining strict production reliability standards.
            </p>

            {/* Quick Experience Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {aboutData.domains.map((domain, idx) => (
                <div 
                  key={idx} 
                  className="bg-devops-card/80 border border-white/10 rounded-xl p-4 hover:border-devops-cyan/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                      {domainIcons[domain.title] || <Cloud className="w-5 h-5 text-devops-cyan" />}
                    </div>
                    <h4 className="font-semibold text-sm text-white">{domain.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="lg:col-span-4 glass-card p-6 rounded-2xl border border-white/10 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3 flex items-center justify-between">
              <span>Quick Profile</span>
              <span className="text-xs font-mono text-devops-cyan">status: active</span>
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-devops-cyan mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-mono">LOCATION</span>
                  <span className="font-medium text-slate-200">{personalInfo.location}</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-devops-cyan mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-mono">PRIMARY EMAIL</span>
                  <a href={`mailto:${personalInfo.email}`} className="font-medium text-slate-200 hover:text-devops-cyan break-all transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-devops-cyan mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-mono">CONTACT NUMBER</span>
                  <a href={`tel:${personalInfo.phone}`} className="font-medium text-slate-200 hover:text-devops-cyan transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 pt-2 border-t border-white/5">
                <Server className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-mono">PRIMARY STACK</span>
                  <span className="font-medium text-slate-200 text-xs">AWS · Jenkins · Docker · Kubernetes · Terraform · Prometheus</span>
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl bg-devops-cyan/10 border border-devops-cyan/40 text-devops-cyan text-xs font-semibold hover:bg-devops-cyan hover:text-devops-dark transition-all"
              >
                Initiate Conversation
              </a>
            </div>
          </div>

        </div>

        {/* Four Core DevOps Pillars */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Core Engineering Focus
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Methodologies applied across high-availability production environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="glass-card p-5 rounded-xl border border-white/10 hover:border-devops-cyan/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-devops-card border border-white/10 flex items-center justify-center mb-4">
                    {pillarIcons[idx]}
                  </div>
                  <h4 className="font-bold text-white text-base mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-devops-cyan">
                  #Pillar_0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
