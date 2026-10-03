import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Architecture from './components/Architecture';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-200 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-300">
      {/* Sticky Minimal Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero />
        <Impact />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <Architecture />
        <Education />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
