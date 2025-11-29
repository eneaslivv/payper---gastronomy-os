
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, Coffee, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050B08] text-bone border-t border-white/[0.05] relative overflow-hidden pt-20">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Trusted By Strip */}
        <RevealOnScroll>
          <div className="mb-20 border-b border-white/[0.05] pb-12">
              <p className="text-center text-xs font-mono uppercase tracking-widest text-white/30 mb-8">
                  Elegido por los mejores cafés de especialidad
              </p>
              <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale mix-blend-screen">
                  {/* Mock Logos using text for demo purposes, normally SVGs */}
                  <span className="text-xl font-bold font-serif tracking-tighter hover:opacity-100 transition-opacity">THE LAB.</span>
                  <span className="text-xl font-bold tracking-widest hover:opacity-100 transition-opacity">Onyx</span>
                  <span className="text-xl font-extrabold italic hover:opacity-100 transition-opacity">BREW</span>
                  <span className="text-xl font-semibold tracking-wide hover:opacity-100 transition-opacity">NORDIC</span>
                  <span className="text-xl font-bold font-mono hover:opacity-100 transition-opacity">Cupping Room</span>
              </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          
          {/* Brand Column */}
          <RevealOnScroll className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-bone rounded-[4px] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#050B08] rounded-full"></div>
                </div>
                <span className="text-lg font-medium tracking-tight text-white">PAYPER</span>
            </div>
            <p className="text-bone/50 text-sm leading-relaxed max-w-xs mb-6">
                El sistema operativo que transforma la experiencia de tu cafetería. Menos filas, más conexión, cero fricción.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300">
                    <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300">
                    <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300">
                    <Linkedin className="w-4 h-4" />
                </a>
            </div>
          </RevealOnScroll>

          {/* Links Columns */}
          <RevealOnScroll delay={100} className="lg:col-span-1">
            <h4 className="text-white font-medium mb-6">Producto</h4>
            <ul className="space-y-4 text-sm text-bone/50">
                <li><a href="#" className="hover:text-brand transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">KDS System</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Integraciones</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Hardware</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Precios</a></li>
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={200} className="lg:col-span-1">
            <h4 className="text-white font-medium mb-6">Compañía</h4>
            <ul className="space-y-4 text-sm text-bone/50">
                <li><a href="#" className="hover:text-brand transition-colors">Nosotros</a></li>
                <li>
                    <a href="#" className="hover:text-brand transition-colors flex items-center gap-2">
                        Carreras 
                        <span className="text-[9px] bg-brand/20 text-brand px-1.5 py-0.5 rounded">Hiring</span>
                    </a>
                </li>
                <li><a href="#" className="hover:text-brand transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Prensa</a></li>
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={300} className="lg:col-span-1">
            <h4 className="text-white font-medium mb-6">Recursos</h4>
            <ul className="space-y-4 text-sm text-bone/50">
                <li><a href="#" className="hover:text-brand transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Comunidad</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Status</a></li>
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={400} className="lg:col-span-1">
            <h4 className="text-white font-medium mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-bone/50">
                <li><a href="#" className="hover:text-brand transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Seguridad</a></li>
            </ul>
          </RevealOnScroll>

        </div>

        {/* Bottom Bar */}
        <RevealOnScroll delay={500}>
          <div className="border-t border-white/[0.05] py-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-bone/30">
                  &copy; {currentYear} Payper Technologies Inc. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-6">
                  <a href="#" className="text-xs text-bone/30 hover:text-white transition-colors">Designed in Buenos Aires</a>
              </div>
          </div>
        </RevealOnScroll>

      </div>
    </footer>
  );
};

export default Footer;
