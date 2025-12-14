import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { SectionId } from '../types';
import { InteractiveNebulaShader } from './ui/liquid-shader';

const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.Hero} 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Interactive Shader Background */}
      <InteractiveNebulaShader
        className="absolute inset-0 z-0 pointer-events-none"
        hasActiveReminders={false}
        hasUpcomingReminders={false}
        disableCenterDimming={false}
      />

      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-zinc-300 tracking-wide uppercase font-medium">Available for work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 drop-shadow-lg">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
              consciousness.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 drop-shadow-md">
            I'm Alex, a Senior Software Engineer specializing in scalable frontend architectures 
            and crafting intuitive user experiences with modern web technologies and AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <a 
              href="#projects" 
              className="group flex items-center gap-2 px-8 py-4 bg-white/90 backdrop-blur-sm text-black rounded-full font-semibold hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-6">
              <SocialLink href="#" icon={<Github size={24} />} />
              <SocialLink href="#" icon={<Linkedin size={24} />} />
              <SocialLink href="#" icon={<Twitter size={24} />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a 
    href={href} 
    className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800/50 backdrop-blur-sm rounded-full"
    target="_blank"
    rel="noreferrer"
  >
    {icon}
  </a>
);

export default Hero;
