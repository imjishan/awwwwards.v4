import React from 'react';
import { SectionId } from '../types';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.Experience} className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            Work History
        </h2>

        <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={job.id} className="relative pl-8 md:pl-12 group">
              {/* Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-colors duration-300"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {job.role}
                </h3>
                <span className="text-sm font-mono text-zinc-500">{job.period}</span>
              </div>
              
              <div className="text-base font-medium text-zinc-300 mb-4">{job.company}</div>
              <p className="text-zinc-400 leading-relaxed max-w-2xl">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
