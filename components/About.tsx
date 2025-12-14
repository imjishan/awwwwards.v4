import React from 'react';
import { SectionId } from '../types';
import { BIO } from '../constants';
import { Cpu, Globe, Zap, Layers } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.About} className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              About Me
            </h2>
            <div className="prose prose-invert text-zinc-400 leading-relaxed text-lg">
              {BIO.split('\n').map((paragraph, idx) => (
                paragraph.trim() && <p key={idx} className="mb-4">{paragraph}</p>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
               <StatCard icon={<Cpu className="text-indigo-400" />} label="Experience" value="5+ Years" />
               <StatCard icon={<Globe className="text-blue-400" />} label="Projects" value="30+" />
               <StatCard icon={<Zap className="text-yellow-400" />} label="Performance" value="Top 1%" />
               <StatCard icon={<Layers className="text-purple-400" />} label="Stack" value="Full Scale" />
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none"></div>
             <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-6">Technical Arsenal</h3>
                <div className="space-y-6">
                  <SkillBar skill="React / Next.js" level={95} />
                  <SkillBar skill="TypeScript" level={90} />
                  <SkillBar skill="Node.js / Python" level={85} />
                  <SkillBar skill="AWS / Cloud" level={80} />
                  <SkillBar skill="AI Integration / Gemini" level={85} />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex flex-col gap-1">
    <div className="mb-2">{icon}</div>
    <h4 className="text-2xl font-bold text-white">{value}</h4>
    <span className="text-sm text-zinc-500">{label}</span>
  </div>
);

const SkillBar: React.FC<{ skill: string; level: number }> = ({ skill, level }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-zinc-300">{skill}</span>
      <span className="text-sm text-zinc-500">{level}%</span>
    </div>
    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
      <div 
        className="h-full bg-zinc-200 rounded-full transition-all duration-1000 ease-out" 
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export default About;
