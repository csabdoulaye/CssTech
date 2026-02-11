
import React from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8">Discutons de votre <span className="text-indigo-400">prochain projet.</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-12">
              Que ce soit pour une stratégie Social Media, une campagne Ads ou un projet à fort impact social, je suis à votre écoute pour donner vie à vos ambitions.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:contact@abdoulayecisse.fr" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-medium">contact@abdoulayecisse.fr</span>
              </a>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Linkedin size={20} />
                </div>
                <span className="text-lg font-medium">LinkedIn / abdoulaye-cisse</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Nom complet</label>
                  <input type="text" placeholder="Votre nom" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all placeholder:text-slate-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input type="email" placeholder="votre@email.com" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all placeholder:text-slate-600" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea rows={4} placeholder="Parlez-moi de votre projet..." className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all placeholder:text-slate-600"></textarea>
              </div>
              <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20">
                Envoyer le message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} - Abdoulaye Cissé. Tous droits réservés.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
