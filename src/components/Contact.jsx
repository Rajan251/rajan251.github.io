import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Info
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedType, setCopiedType] = useState(null);
  const [submittedStatus, setSubmittedStatus] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Compose mailto query
    const subject = encodeURIComponent(`[DevOps Inquiry] ${formData.subject || 'Opportunity Discussion'} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Rajan,\n\n${formData.message}\n\nFrom:\n${formData.name}\nEmail: ${formData.email}`
    );
    
    // Open default mail client
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmittedStatus('Email client opened. You can also directly reach Rajan at ' + personalInfo.email);
  };

  return (
    <section id="contact" className="py-24 relative bg-devops-surface/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-devops-cyan/10 border border-devops-cyan/30 text-xs font-mono text-devops-cyan mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Reliable.
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-xl">
            Looking for opportunities to build, automate and operate reliable infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Direct Channels
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Feel free to reach out via email, phone, or connect on LinkedIn and GitHub for technical discussions, cloud infrastructure architecture, or job opportunities.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-devops-card border border-white/10 flex items-center justify-between group hover:border-devops-cyan/40 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-devops-cyan/10 text-devops-cyan shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-mono text-slate-400">EMAIL ADDRESS</span>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-xs sm:text-sm font-semibold text-white hover:text-devops-cyan truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-devops-cyan/20 text-slate-300 hover:text-devops-cyan transition-colors shrink-0 ml-2"
                  title="Copy Email"
                  aria-label="Copy Email Address"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-devops-card border border-white/10 flex items-center justify-between group hover:border-devops-cyan/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400">PHONE NUMBER</span>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 transition-colors shrink-0 ml-2"
                  title="Copy Phone"
                  aria-label="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-devops-card border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-slate-400">LOCATION</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Social Links Grid */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-devops-card border border-white/10 text-slate-200 hover:text-white hover:border-devops-cyan/40 hover:bg-devops-cyan/10 transition-all text-xs font-mono"
                >
                  <Github className="w-4 h-4 text-devops-cyan" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-devops-card border border-white/10 text-slate-200 hover:text-white hover:border-devops-cyan/40 hover:bg-devops-cyan/10 transition-all text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-devops-cyan" />
                  <h3 className="text-base font-bold text-white">
                    Send a Message
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Static Client Dispatch
                </span>
              </div>

              {/* Form notice adhering strictly to prompt requirements */}
              <div className="p-3.5 rounded-xl bg-devops-card border border-devops-cyan/20 text-xs text-slate-300 flex items-start gap-2.5 mb-6">
                <Info className="w-4 h-4 text-devops-cyan shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Note: This is a static GitHub-hosted portfolio. Submitting this form prepares your message and launches your local email client with all details prefilled for direct delivery to <span className="text-devops-cyan font-mono">{personalInfo.email}</span>.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-devops-card border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-devops-cyan transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-devops-card border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-devops-cyan transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. DevOps Role / Infrastructure Project Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-devops-card border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-devops-cyan transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Describe your project, team requirements, or role details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-devops-card border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-devops-cyan transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-devops-cyan text-devops-dark font-bold text-xs hover:bg-cyan-300 transition-all shadow-lg shadow-devops-cyan/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Mail Client</span>
                </button>
              </form>

              {submittedStatus && (
                <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center">
                  {submittedStatus}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
