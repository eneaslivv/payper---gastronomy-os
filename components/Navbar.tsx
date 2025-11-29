import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1E362D]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-6 h-6 bg-bone/90 rounded-[4px] flex items-center justify-center group-hover:bg-brand transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <div className="w-2 h-2 bg-forest rounded-full"></div>
          </div>
          <span className="text-sm font-medium tracking-tight text-bone/90 group-hover:text-white transition-colors">
            PAYPER
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-[13px] font-medium text-bone/60">
          <a href="#soluciones" className="hover:text-brand transition-colors duration-200">Arquitectura</a>
          <a href="#como-funciona" className="hover:text-brand transition-colors duration-200">Flujo</a>
          <a href="#modulos" className="hover:text-brand transition-colors duration-200">Ecosistema</a>
          <a href="#pricing" className="hover:text-brand transition-colors duration-200">Precios</a>
        </div>
        
        <div className="flex gap-4 items-center">
          <a href="#login" className="hidden sm:block text-[13px] font-medium text-bone/60 hover:text-white transition-colors">
            Log in
          </a>
          <a 
            href="#demo" 
            className="text-[13px] font-medium bg-bone text-forest px-4 py-1.5 rounded-full hover:bg-brand hover:text-white transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] hover:shadow-brand/20"
          >
            Ver Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;