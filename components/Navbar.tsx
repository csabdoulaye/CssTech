
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-indigo-600">A. CISSÉ</a>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#projets" className="hover:text-indigo-600 transition-colors">Projets</a>
          <a href="#skills" className="hover:text-indigo-600 transition-colors">Compétences</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors">
          Me contacter
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
