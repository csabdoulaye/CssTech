
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projets" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Projets Sélectionnés</h2>
            <p className="text-slate-500 max-w-lg">Un aperçu de mes réalisations dans le domaine du marketing digital, de l'immobilier et de l'engagement social.</p>
          </div>
          <div className="h-px flex-1 bg-slate-100 mx-10 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-indigo-200 transition-all shadow-sm hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-sm font-medium flex items-center gap-2">
                    En savoir plus <ExternalLink size={16} />
                  </span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed italic">
                  "{project.description}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
