import React, { useState } from 'react';
import { 
  Cloud, 
  Boxes, 
  GitBranch, 
  Layers, 
  Activity, 
  Terminal, 
  Database, 
  ShieldCheck, 
  Server, 
  GitCommit,
  Search,
  Check
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    "Cloud & Infrastructure": <Cloud className="w-5 h-5 text-devops-cyan" />,
    "Containers & Orchestration": <Boxes className="w-5 h-5 text-sky-400" />,
    "CI/CD & Delivery": <GitBranch className="w-5 h-5 text-emerald-400" />,
    "Infrastructure as Code": <Layers className="w-5 h-5 text-amber-400" />,
    "Monitoring & Observability": <Activity className="w-5 h-5 text-violet-400" />,
    "Programming & Scripting": <Terminal className="w-5 h-5 text-devops-cyan" />,
    "Databases & Storage": <Database className="w-5 h-5 text-emerald-400" />,
    "Security & DevSecOps": <ShieldCheck className="w-5 h-5 text-rose-400" />,
    "OS & Networking": <Server className="w-5 h-5 text-sky-400" />,
    "Version Control": <GitCommit className="w-5 h-5 text-slate-300" />
  };

  const categoriesList = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories = skillCategories
    .filter((cat) => selectedCategory === 'All' || cat.category === selectedCategory)
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const matchingSkills = cat.skills.filter((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        skills: matchingSkills
      };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative bg-devops-surface/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-devops-cyan/10 border border-devops-cyan/30 text-xs font-mono text-devops-cyan mb-3">
            <span>TOOLING & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills & DevOps Stack
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            Clean categorization of production-tested technologies across cloud architecture, automation, orchestration, and system reliability.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Quick Categories Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categoriesList.slice(0, 6).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-devops-cyan text-devops-dark font-bold shadow-sm shadow-devops-cyan/20'
                    : 'bg-devops-card/80 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-devops-card border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-devops-cyan transition-colors"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-devops-cyan/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-devops-card border border-white/10">
                    {categoryIcons[group.category] || <Server className="w-5 h-5 text-devops-cyan" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {group.category}
                    </h3>
                    <span className="text-[11px] font-mono text-devops-muted">
                      {group.skills.length} verified technologies
                    </span>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-slate-200 bg-devops-card/90 border border-white/10 hover:border-devops-cyan/50 hover:text-devops-cyan transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-devops-cyan/70"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Production ready</span>
                <span className="text-devops-cyan">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-devops-cyan hover:underline font-mono"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
