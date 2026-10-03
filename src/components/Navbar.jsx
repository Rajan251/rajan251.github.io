import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-content mx-auto px-6 flex items-center justify-between">
        {/* Left: Brand */}
        <a
          href="#"
          className="text-sm font-semibold tracking-wider text-neutral-100 hover:text-white transition-colors uppercase font-mono"
        >
          RAJAN KUMAR
        </a>

        {/* Right: Nav Links + Resume Button (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-xs text-neutral-400 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-neutral-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="h-3.5 w-[1px] bg-white/10" />

          <a
            href={personalInfo.resumeUrl}
            download="Rajan_Kumar_DevOps_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-neutral-200 bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] hover:border-white/[0.2] hover:text-white transition-all"
          >
            <ArrowDownToLine className="w-3.5 h-3.5 text-neutral-400" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e15] border-b border-white/[0.08] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/[0.08]">
            <a
              href={personalInfo.resumeUrl}
              download="Rajan_Kumar_DevOps_Resume.pdf"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium text-neutral-100 bg-white/[0.06] border border-white/[0.1] w-full justify-center"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
