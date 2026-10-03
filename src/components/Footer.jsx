import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/[0.06] bg-[#090a0f]">
      <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
        
        <div>
          <span>© 2026 Rajan Kumar</span>
        </div>

        <div className="text-center sm:text-left text-neutral-400">
          <span>DevOps Engineer · AWS · Automation · Infrastructure</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-neutral-300 transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}
