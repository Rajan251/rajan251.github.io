import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-devops-dark border-t border-white/10 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-devops-card border border-devops-cyan/30 flex items-center justify-center text-devops-cyan font-mono text-xs">
                <Terminal className="w-4 h-4 text-devops-cyan" />
              </div>
              <span className="font-mono font-bold text-white text-base">
                RAJAN<span className="text-devops-cyan">_KUMAR</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              DevOps Engineer · AWS · CI/CD · Kubernetes · Observability
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 font-medium">
            <a href="#about" className="hover:text-devops-cyan transition-colors">About</a>
            <a href="#skills" className="hover:text-devops-cyan transition-colors">Skills</a>
            <a href="#experience" className="hover:text-devops-cyan transition-colors">Experience</a>
            <a href="#projects" className="hover:text-devops-cyan transition-colors">Projects</a>
            <a href="#architecture" className="hover:text-devops-cyan transition-colors">Architecture</a>
            <a href="#contact" className="hover:text-devops-cyan transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-devops-cyan/20 border border-white/10 text-slate-300 hover:text-devops-cyan text-xs font-mono transition-all"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>All systems operational · 99.9% reported uptime</span>
          </div>

          <div>
            <span>© {new Date().getFullYear()} Rajan Kumar. Built for production reliability.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
