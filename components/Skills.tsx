
import React from 'react';
import { SOFT_SKILLS, HARD_SKILL_GROUPS } from '../constants';
import { CheckCircle2, Award, Terminal, Heart } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Compétences & Expertise</h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Hard Skills */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                <Terminal size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Expertise Technique</h3>
            </div>
            
            <div className="space-y-8">
              {HARD_SKILL_GROUPS.map((group, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="text-lg font-bold text-indigo-600 mb-4 border-b pb-2 border-indigo-50">{group.category}</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {group.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 size={18} className="text-indigo-400 mt-1 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                <Heart size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOFT_SKILLS.map((skill, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="mt-1">
                    <Award size={20} className="text-rose-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{skill.name}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mt-1">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
