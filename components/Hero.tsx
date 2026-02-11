
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="80" cy="20" r="40" fill="url(#grad)" />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wider uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Alternant en Projets Digitaux
          </div>
          <p className="text-2xl font-medium text-slate-500 mb-2">Bonjour, je m'appelle</p>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.1] mb-8">
            Abdoulaye Cissé. <br/>
            <span className="text-indigo-600">Stratégie & Impact.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
            Alternant en gestion de projets digitaux, passionné par la communication, le social media et les campagnes publicitaires. J'accompagne la transformation numérique avec rigueur et créativité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projets" className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
              Voir mes projets <ArrowRight size={20} />
            </a>
            <a href="#skills" className="flex items-center justify-center bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm">
              Mes compétences
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
