import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} AlexDev. All rights reserved.
        </div>
        <div className="text-zinc-600 text-sm flex gap-6">
           <span>Designed in Figma</span>
           <span>Built with React & Gemini</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
