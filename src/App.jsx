import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Metrics from './components/Metrics';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-devops-bg text-slate-100 flex flex-col font-sans selection:bg-devops-cyan selection:text-devops-dark">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Metrics />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
