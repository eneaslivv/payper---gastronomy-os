import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1E362D]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_-10px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <img src="/payper-logo.png" alt="Payper App - Sistema operativo para cafeterías y gastronomía" className="h-10 w-auto object-contain" />
        </div>

        <ul className="hidden md:flex gap-8 text-[13px] font-medium text-bone/50 list-none" role="navigation" aria-label="Navegación principal">
          <li><a href="#soluciones" className="hover:text-bone transition-colors duration-300 py-1">Arquitectura</a></li>
          <li><a href="#como-funciona" className="hover:text-bone transition-colors duration-300 py-1">Flujo</a></li>
          <li><a href="#modulos" className="hover:text-bone transition-colors duration-300 py-1">Ecosistema</a></li>
          <li><a href="#pricing" className="hover:text-bone transition-colors duration-300 py-1">Precios</a></li>
        </ul>

        <div className="flex gap-4 items-center">
          <a href="#login" className="hidden sm:block text-[13px] font-medium text-bone/50 hover:text-white transition-colors duration-300">
            Ingresar
          </a>
          <a
            href="#demo"
            className="text-[13px] font-semibold bg-bone text-forest px-5 py-2 rounded-full hover:bg-white hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] transition-all duration-300"
          >
            Ver Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;