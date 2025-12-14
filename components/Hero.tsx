import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.Hero} 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-zinc-400 tracking-wide uppercase font-medium">Available for work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-700">
              consciousness.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            I'm Alex, a Senior Software Engineer specializing in scalable frontend architectures 
            and crafting intuitive user experiences with modern web technologies and AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <a 
              href="#projects" 
              className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
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
    className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-900 rounded-full"
    target="_blank"
    rel="noreferrer"
  >
    {icon}
  </a>
);

export default Hero;
