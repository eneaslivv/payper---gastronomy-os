
import React from 'react';
import { Building2, Store, LayoutDashboard, Zap, Gift, ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Architecture: React.FC = () => {
  return (
    <section id="soluciones" className="py-32 lg:py-40 bg-bone relative z-20 text-forest">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-forest/[0.02] blur-[100px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-2xl mb-20">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-forest mb-6">
              Payper escala con tu negocio.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-lg text-forest/60 font-light leading-relaxed">
              Ya seas una ventana de café al paso o una franquicia en expansión, el software gastronómico de Payper se adapta a tu volumen.
            </p>
          </RevealOnScroll>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Bloque Grande - Izquierda (Span 2) */}
          <RevealOnScroll delay={200} className="lg:col-span-2">
            <div className="group bg-forest rounded-2xl border border-forest/5 p-8 flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden shadow-2xl min-h-[320px] h-full">
              <div className="absolute inset-0 bg-dot-pattern opacity-[0.1] group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-forest via-transparent to-forest/80"></div>
              
              <div className="relative z-10 max-w-md pl-2 py-6">
                <div className="inline-flex items-center gap-2 mb-5 border border-bone/10 px-2.5 py-1 rounded-md bg-white/[0.05] backdrop-blur-sm">
                  <Building2 className="w-3 h-3 text-brand" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-bone/60">MULTI-SUCURSAL</span>
                </div>
                <h3 className="text-2xl font-medium text-bone mb-3 tracking-tight">Cadenas &amp; Franquicias</h3>
                <p className="text-sm text-bone/60 leading-relaxed font-light mb-6">
                  Gestioná el menú, precios y stock de todos tus locales desde una sola oficina.
                </p>
                <button className="text-xs font-medium text-brand border border-brand/30 px-4 py-2 rounded-full hover:bg-brand hover:text-white transition-all">
                   Agendar Consultoría
                </button>
              </div>

              <div className="relative z-10 mt-8 md:mt-0 bg-white/[0.03] backdrop-blur-md border border-bone/10 rounded-xl p-6 w-full md:w-auto min-w-[240px] shadow-2xl group-hover:border-brand/30 transition-all duration-500">
                <div className="absolute top-5 right-5 w-1.5 h-1.5 bg-brand rounded-full shadow-[0_0_10px_#C9A66B]"></div>
                
                <div className="flex items-end justify-between mb-6">
                  <span className="text-[10px] text-bone/40 uppercase font-bold tracking-wider">Control Centralizado</span>
                </div>
                
                {/* Visualization of multiple nodes - ANIMATED */}
                <div className="relative flex items-center justify-between gap-4 py-2">
                  
                  {/* Connecting Lines (Background) */}
                  <div className="absolute top-1/2 left-4 right-4 h-px bg-white/10 -translate-y-1/2"></div>
                  
                  {/* Animated Data Stream (Left) */}
                  <div className="absolute top-1/2 left-[30%] right-[50%] h-[2px] -translate-y-1/2 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-brand to-transparent -translate-x-full group-hover:animate-flow-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  {/* Animated Data Stream (Right) */}
                  <div className="absolute top-1/2 left-[50%] right-[30%] h-[2px] -translate-y-1/2 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-brand to-transparent -translate-x-full group-hover:animate-flow-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '0.1s'}}></div>
                  </div>

                  {/* Node: Left Store */}
                  <div className="relative z-10 w-9 h-9 rounded-lg bg-[#0F1C18] border border-white/10 flex items-center justify-center group-hover:border-brand/40 group-hover:shadow-[0_0_15px_-5px_rgba(201,166,107,0.3)] transition-all duration-500">
                    <Store className="w-3.5 h-3.5 text-bone/50 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Node: Central Hub */}
                  <div className="relative z-10">
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 bg-brand/20 rounded-xl blur-md scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
                    
                    <div className="w-12 h-12 rounded-xl bg-forest border border-brand/40 flex items-center justify-center relative shadow-xl group-hover:scale-105 transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)">
                      <LayoutDashboard className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-300" />
                      
                      {/* Status Dot */}
                      <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#0F1C18] rounded-full flex items-center justify-center border border-white/10">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Node: Right Store */}
                  <div className="relative z-10 w-9 h-9 rounded-lg bg-[#0F1C18] border border-white/10 flex items-center justify-center group-hover:border-brand/40 group-hover:shadow-[0_0_15px_-5px_rgba(201,166,107,0.3)] transition-all duration-500 delay-75">
                    <Store className="w-3.5 h-3.5 text-bone/50 group-hover:text-white transition-colors duration-300" />
                  </div>

                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Bloque Chico - Derecha (Span 1) */}
          <RevealOnScroll delay={300} className="lg:col-span-1">
            <div className="group h-full rounded-2xl bg-white border border-stone-200 p-8 flex flex-col justify-between relative overflow-hidden hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 transition-all duration-500 min-h-[320px]">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 bg-gradient-to-b from-brand/10 to-transparent rounded-full blur-[40px] group-hover:bg-brand/15 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-10 h-10 bg-bone rounded-lg border border-stone-100 flex items-center justify-center mb-6 shadow-sm text-brand group-hover:scale-110 transition-transform duration-500">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-forest mb-2 tracking-tight">Cafeterías de Especialidad</h3>
                <p className="text-sm text-forest/60 leading-relaxed font-light">
                  Velocidad pura. Un sistema que "no se cuelga" y funciona 100% Offline si se corta internet.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Bloque Ancho - Abajo (Span 3 - Full Width) */}
          <RevealOnScroll delay={400} className="lg:col-span-3">
            <div className="group rounded-2xl bg-[#EBEBE6] border border-stone-200 p-8 md:p-10 hover:shadow-xl hover:shadow-stone-200/50 hover:border-brand/20 transition-all duration-500 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
              
              {/* Background Decoration */}
              <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              
              <div className="relative z-10 max-w-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-forest rounded-md flex items-center justify-center text-brand">
                    <Gift className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-medium text-forest tracking-tight">Fidelización Automática</h3>
                </div>
                <p className="text-sm text-forest/60 leading-relaxed font-light mb-6">
                  Olvidate de las tarjetas de cartón. El sistema identifica al cliente por su nombre o celular y suma puntos automáticamente. Configura reglas como "Tu 10° café es gratis" y aumentá la retención sin esfuerzo operativo.
                </p>
                 <a href="#como-funciona" className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline">
                    Ver cómo funciona <ArrowRight className="w-3 h-3" />
                 </a>
              </div>

              {/* Interactive SVG Illustration */}
              <div className="relative w-full max-w-xs h-40 flex items-center justify-center">
                <svg width="300" height="160" viewBox="0 0 300 160" className="overflow-visible">
                    
                    {/* Phone / Digital Card Container */}
                    <g className="animate-float-slow">
                      <rect x="40" y="20" width="220" height="120" rx="12" fill="#1E362D" stroke="#1E362D" strokeWidth="2" className="drop-shadow-2xl" />
                      
                      {/* Screen glare */}
                      <path d="M42,22 L258,22 L258,60 Q150,80 42,60 Z" fill="white" fillOpacity="0.03" />

                      {/* Header */}
                      <rect x="60" y="40" width="40" height="40" rx="8" fill="#F7F6F2" />
                      <image href="payper-logo.png" x="65" y="45" width="30" height="30" />
                      {/* Fallback text if image missing */}
                      <text x="80" y="68" textAnchor="middle" fontSize="20" fill="#1E362D" fontWeight="bold" opacity="0">P</text>
                      
                      <rect x="110" y="45" width="100" height="8" rx="4" fill="#F7F6F2" fillOpacity="0.2" />
                      <rect x="110" y="60" width="60" height="8" rx="4" fill="#F7F6F2" fillOpacity="0.1" />

                      {/* Stamp Slots */}
                      <circle cx="70" cy="110" r="12" fill="#2A4A3E" stroke="#F7F6F2" strokeWidth="1" strokeOpacity="0.1" />
                      <circle cx="110" cy="110" r="12" fill="#2A4A3E" stroke="#F7F6F2" strokeWidth="1" strokeOpacity="0.1" />
                      <circle cx="150" cy="110" r="12" fill="#2A4A3E" stroke="#F7F6F2" strokeWidth="1" strokeOpacity="0.1" />
                      <circle cx="190" cy="110" r="12" fill="#2A4A3E" stroke="#F7F6F2" strokeWidth="1" strokeOpacity="0.1" />
                      
                      {/* Filled Stamps (Animated) */}
                      <circle cx="70" cy="110" r="6" fill="#C9A66B" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[100ms]" />
                      <circle cx="110" cy="110" r="6" fill="#C9A66B" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[300ms]" />
                      <circle cx="150" cy="110" r="6" fill="#C9A66B" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[500ms]" />
                      
                      {/* The "Action" Stamp (Pulsing) */}
                      <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[700ms]">
                        <circle cx="190" cy="110" r="12" fill="#C9A66B" className="animate-pulse" />
                        <path d="M185,110 L188,114 L196,106" stroke="#1E362D" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </g>

                      {/* Reward Badge Pop-up */}
                      <g className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-[900ms]">
                        <circle cx="240" cy="50" r="20" fill="#F7F6F2" stroke="#C9A66B" strokeWidth="2" />
                        <path d="M232,54 L240,42 L248,54" fill="#C9A66B" /> {/* Simulated Crown/Star */}
                      </g>
                    </g>

                    {/* Confetti Particles */}
                    <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[800ms]">
                      <rect x="230" y="20" width="4" height="4" fill="#C9A66B" className="animate-float-reverse" />
                      <rect x="250" y="30" width="3" height="3" fill="#1E362D" className="animate-float-slow" />
                      <circle cx="260" cy="15" r="2" fill="#C9A66B" className="animate-ping-slow" />
                    </g>

                </svg>
              </div>

            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Architecture;
