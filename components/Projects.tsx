import React from 'react';
import { SectionId } from '../types';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.Projects} className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
           <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              Featured Projects
           </h2>
           <a href="#" className="hidden md:flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors">
             View all archives <ExternalLink size={14} />
           </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-zinc-800 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <div className="flex gap-3">
                    <a href={project.link} className="text-zinc-500 hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.link} className="text-zinc-500 hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors">
             View all archives <ExternalLink size={14} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
