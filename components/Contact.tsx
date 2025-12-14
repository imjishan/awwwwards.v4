import React from 'react';
import { SectionId } from '../types';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.Contact} className="py-32 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Have an idea? <br />
          <span className="text-zinc-500">Let's build it together.</span>
        </h2>
        
        <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-12">
          I am currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:alex.dev@example.com"
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-all hover:scale-105"
        >
          <Mail size={20} />
          Say Hello
        </a>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-zinc-800 pt-12">
           <ContactLink label="GitHub" href="#" />
           <ContactLink label="LinkedIn" href="#" />
           <ContactLink label="Twitter" href="#" />
           <ContactLink label="Instagram" href="#" />
        </div>
      </div>
    </section>
  );
};

const ContactLink: React.FC<{ label: string; href: string }> = ({ label, href }) => (
  <a href={href} className="flex items-center justify-center gap-2 text-zinc-500 hover:text-white transition-colors group">
    {label}
    <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
  </a>
);

export default Contact;
