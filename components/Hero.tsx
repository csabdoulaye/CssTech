
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Background decoration */}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm mb-8">
            <Sparkles size={16} className="text-indigo-500" />
            <span className="text-indigo-700 text-xs font-bold tracking-wider uppercase">
              Alternant en Projets Digitaux
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse ml-2"></span>
          </div>
          
          <h2 className="text-2xl font-medium text-slate-500 mb-4">Hello, moi c'est</h2>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8">
            Abdoulaye <span className="text-indigo-600">Cissé</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
            Passionné par la convergence entre <span className="font-semibold text-slate-800">stratégie digitale</span> et <span className="font-semibold text-slate-800">impact social</span>. J'accompagne la croissance des marques à travers des projets innovants et une gestion rigoureuse.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#projets" className="flex items-center justify-center gap-2 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-600 hover:-translate-y-1 transition-all shadow-xl shadow-slate-900/10">
              Découvrir mon travail <ArrowRight size={20} />
            </a>
            <a href="#contact" className="flex items-center justify-center bg-white border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm">
              Me contacter
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
        <div className="w-8 h-12 border-2 border-slate-400 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
