import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1E362D]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <img src="/payper-logo.png" alt="PAYPER" className="h-10 w-auto object-contain" />
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