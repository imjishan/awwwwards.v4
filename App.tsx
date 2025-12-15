import React from 'react';
import { Navbar1 } from './components/ui/navbar-1';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ShaderBackground } from '@/components/ui/ShaderBackground';

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200 relative">
      <ShaderBackground color1="#000000" color2="#1a1a1a" />
      <Navbar1 />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
