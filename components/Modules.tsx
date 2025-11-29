
import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { ArrowRight } from 'lucide-react';

const Modules: React.FC = () => {
  return (
    <section id="modulos" className="py-32 bg-charcoal relative border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-medium text-bone tracking-tight mb-4">Tu ecosistema operativo.</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <p className="text-bone/50 text-lg font-light max-w-xl">Todo conectado. Desde que el cliente pide hasta que se descuenta el gramo de café.</p>
            </RevealOnScroll>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: POS */}
          <RevealOnScroll delay={200}>
            <div className="group relative bg-forest rounded-2xl border border-white/[0.08] overflow-hidden hover:border-brand/30 transition-colors duration-500 flex flex-col hover:shadow-2xl hover:shadow-black/50 h-full">
              <div className="h-56 w-full flex items-center justify-center relative overflow-hidden bg-[#151515] border-b border-white/[0.04]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent"></div>
                <svg width="200" height="140" viewBox="0 0 200 140" className="relative z-10 overflow-visible">
                  {/* Terminal Base */}
                  <path d="M60,90 L140,90 L150,50 L50,50 Z" fill="#1E362D" stroke="#F7F6F2" strokeWidth="1" opacity="0.8" />
                  <path d="M50,50 L150,50 L150,45 L50,45 Z" fill="#2A4A3E" />
                  
                  {/* Screen Glow */}
                  <rect x="65" y="55" width="70" height="25" fill="#C9A66B" fillOpacity="0.1" className="group-hover:fillOpacity-0.2 transition-all duration-500" />
                  
                  {/* Floating Card */}
                  <g className="animate-float-slow">
                    <rect x="70" y="10" width="60" height="35" rx="3" fill="#F7F6F2" stroke="#1E362D" strokeWidth="1" />
                    <rect x="75" y="15" width="10" height="8" rx="1" fill="#C9A66B" />
                    <line x1="75" y1="35" x2="120" y2="35" stroke="#1E362D" strokeWidth="0.5" strokeOpacity="0.3" />
                  </g>

                  {/* Contactless Waves */}
                  <g transform="translate(100, 30)" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <circle cx="0" cy="0" r="15" stroke="#C9A66B" strokeWidth="1" fill="none" className="animate-ping-slow" />
                    <circle cx="0" cy="0" r="25" stroke="#C9A66B" strokeWidth="0.5" fill="none" className="animate-ping-slow" style={{animationDelay: '0.2s'}} />
                  </g>
                </svg>
              </div>
              <div className="p-6 relative z-10 bg-forest flex-1">
                <h3 className="text-base font-medium text-bone/90 mb-2">Smart POS Ultra-Rápido</h3>
                <p className="text-sm text-bone/40 leading-relaxed font-light">Interfaz limpia diseñada para minimizar los clics. Cobrá, dividí cuentas y aplicá descuentos en segundos.</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 2: KDS */}
          <RevealOnScroll delay={300}>
            <div className="group relative bg-forest rounded-2xl border border-white/[0.08] overflow-hidden hover:border-brand/30 transition-colors duration-500 flex flex-col hover:shadow-2xl hover:shadow-black/50 h-full">
              <div className="h-56 w-full flex items-center justify-center relative overflow-hidden bg-[#151515] border-b border-white/[0.04]">
                <svg width="200" height="140" viewBox="0 0 200 140" className="relative z-10 overflow-visible">
                  {/* Pipeline/Rail */}
                  <line x1="20" y1="70" x2="180" y2="70" stroke="#F7F6F2" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 4" />
                  
                  {/* Ticket 1 */}
                  <g className="animate-flow-subtle" style={{animationDuration: '8s'}}>
                    <rect x="40" y="50" width="30" height="40" fill="#1E362D" stroke="#F7F6F2" strokeWidth="1" />
                    <line x1="45" y1="60" x2="65" y2="60" stroke="#F7F6F2" strokeOpacity="0.5" />
                    <line x1="45" y1="70" x2="60" y2="70" stroke="#F7F6F2" strokeOpacity="0.5" />
                  </g>

                  {/* Ticket 2 */}
                  <g className="animate-flow-subtle" style={{animationDuration: '8s', animationDelay: '2s'}}>
                    <rect x="90" y="50" width="30" height="40" fill="#2A4A3E" stroke="#C9A66B" strokeWidth="1" />
                    <line x1="95" y1="60" x2="115" y2="60" stroke="#C9A66B" strokeOpacity="0.5" />
                    <line x1="95" y1="70" x2="110" y2="70" stroke="#C9A66B" strokeOpacity="0.5" />
                  </g>

                  {/* Ticket 3 */}
                  <g className="animate-flow-subtle" style={{animationDuration: '8s', animationDelay: '4s'}}>
                    <rect x="140" y="50" width="30" height="40" fill="#1E362D" stroke="#F7F6F2" strokeWidth="1" />
                    <line x1="145" y1="60" x2="165" y2="60" stroke="#F7F6F2" strokeOpacity="0.5" />
                  </g>
                  
                  {/* Status Indicator */}
                  <circle cx="105" cy="30" r="2" fill="#C9A66B" className="animate-pulse" />
                </svg>
              </div>
              <div className="p-6 relative z-10 bg-forest flex-1">
                <h3 className="text-base font-medium text-bone/90 mb-2">KDS Barista Flow</h3>
                <p className="text-sm text-bone/40 leading-relaxed font-light">Pantalla de despacho en la máquina de espresso. Organiza por orden de llegada y leches especiales. Cero papel.</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 3: Stock */}
          <RevealOnScroll delay={400}>
            <div className="group relative bg-forest rounded-2xl border border-white/[0.08] overflow-hidden hover:border-brand/30 transition-colors duration-500 flex flex-col hover:shadow-2xl hover:shadow-black/50 h-full">
              <div className="h-56 w-full flex items-center justify-center relative overflow-hidden bg-[#151515] border-b border-white/[0.04]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.02] to-transparent"></div>
                
                <svg width="200" height="140" viewBox="0 0 200 140" className="relative z-10 overflow-visible">
                  <defs>
                    <linearGradient id="coffeeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C9A66B" />
                        <stop offset="100%" stopColor="#8c734b" />
                    </linearGradient>
                  </defs>

                  {/* Left Tank: Coffee */}
                  <g transform="translate(30, 40)">
                    {/* Tank Body */}
                    <rect x="0" y="0" width="30" height="70" rx="4" stroke="#F7F6F2" strokeWidth="1" fill="none" opacity="0.3" />
                    {/* Label */}
                    <text x="15" y="-8" fontSize="8" fill="#F7F6F2" opacity="0.6" textAnchor="middle" letterSpacing="1" fontWeight="bold">CAFÉ</text>
                    
                    {/* Level */}
                    <rect x="2" y="2" width="26" height="66" rx="2" fill="url(#coffeeGradient)" className="origin-bottom transition-transform duration-700 ease-in-out group-hover:scale-y-[0.7]" />
                    
                    {/* Usage Marker (Floating) */}
                    <g className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:-translate-y-2">
                        <text x="45" y="40" fontSize="12" fill="#C9A66B" fontWeight="bold">-18g</text>
                    </g>
                  </g>

                  {/* Right Tank: Milk */}
                  <g transform="translate(140, 40)">
                    <rect x="0" y="0" width="30" height="70" rx="4" stroke="#F7F6F2" strokeWidth="1" fill="none" opacity="0.3" />
                    <text x="15" y="-8" fontSize="8" fill="#F7F6F2" opacity="0.6" textAnchor="middle" letterSpacing="1" fontWeight="bold">LECHE</text>
                    
                    <rect x="2" y="2" width="26" height="66" rx="2" fill="#F7F6F2" fillOpacity="0.8" className="origin-bottom transition-transform duration-700 ease-in-out group-hover:scale-y-[0.5]" />
                    
                    <g className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-2 group-hover:-translate-y-2">
                        <text x="-35" y="40" fontSize="12" fill="#F7F6F2" fontWeight="bold">-250ml</text>
                    </g>
                  </g>

                  {/* Center: Processing/Cup */}
                  <g transform="translate(85, 75)">
                      {/* Flow Lines */}
                      <line x1="-25" y1="-20" x2="0" y2="0" stroke="#C9A66B" strokeWidth="1" strokeDasharray="4 4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <line x1="55" y1="-20" x2="30" y2="0" stroke="#F7F6F2" strokeWidth="1" strokeDasharray="4 4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Cup Icon */}
                      <g transform="translate(0, 0)">
                        <path d="M0,0 L30,0 L26,20 Q15,24 4,20 Z" fill="none" stroke="#F7F6F2" strokeWidth="1.5" />
                        <path d="M30,4 Q35,4 35,9 Q35,14 28,14" fill="none" stroke="#F7F6F2" strokeWidth="1.5" />
                        
                        {/* Fill Animation */}
                        <path d="M2,2 L28,2 L25,19 Q15,22 5,19 Z" fill="#C9A66B" className="scale-y-0 origin-bottom transition-transform duration-500 delay-300 ease-out group-hover:scale-y-100" />
                        
                        {/* Steam */}
                        <path d="M10,-10 Q15,-15 10,-20" stroke="#F7F6F2" strokeWidth="1" opacity="0" className="group-hover:opacity-60 transition-opacity duration-700 delay-500 animate-float-slow" />
                        <path d="M20,-5 Q25,-10 20,-15" stroke="#F7F6F2" strokeWidth="1" opacity="0" className="group-hover:opacity-60 transition-opacity duration-700 delay-700 animate-float-reverse" />
                      </g>
                  </g>
                  
                </svg>
              </div>
              <div className="p-6 relative z-10 bg-forest flex-1">
                <h3 className="text-base font-medium text-bone/90 mb-2">Stock por Receta</h3>
                <p className="text-sm text-bone/40 leading-relaxed font-light">El sistema descuenta automáticamente los gramos de café y mililitros de leche con cada ticket.</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 4: Staff */}
          <RevealOnScroll delay={500}>
            <div className="group relative bg-forest rounded-2xl border border-white/[0.08] overflow-hidden hover:border-brand/30 transition-colors duration-500 flex flex-col hover:shadow-2xl hover:shadow-black/50 h-full">
              <div className="h-56 w-full flex items-center justify-center relative overflow-hidden bg-[#151515] border-b border-white/[0.04]">
                <svg width="200" height="140" viewBox="0 0 200 140" className="relative z-10 overflow-visible">
                  {/* Abstract ID Card */}
                  <g className="animate-float-slow">
                      <rect x="70" y="40" width="60" height="80" rx="4" fill="#1E362D" stroke="#F7F6F2" strokeWidth="1" />
                      <circle cx="100" cy="70" r="12" stroke="#F7F6F2" strokeWidth="1" fill="none" />
                      <path d="M90,95 Q100,105 110,95" stroke="#F7F6F2" strokeWidth="1" fill="none" />
                      {/* Header color */}
                      <path d="M70,44 Q70,40 74,40 L126,40 Q130,40 130,44 L130,55 L70,55 Z" fill="#2A4A3E" />
                  </g>
                  
                  {/* Scanner Line */}
                  <line x1="60" y1="40" x2="140" y2="40" stroke="#C9A66B" strokeWidth="1" strokeOpacity="0.8" className="animate-scan" />
                  
                  {/* Floating Particles */}
                  <circle cx="150" cy="50" r="2" fill="#F7F6F2" opacity="0.4" className="animate-pulse" />
                  <circle cx="50" cy="100" r="2" fill="#F7F6F2" opacity="0.4" className="animate-pulse" style={{animationDelay: '1s'}} />
                </svg>
              </div>
              <div className="p-6 relative z-10 bg-forest flex-1">
                <h3 className="text-base font-medium text-bone/90 mb-2">Control de Personal</h3>
                <p className="text-sm text-bone/40 leading-relaxed font-light">Gestioná turnos, permisos de caja y visualizá quién vende más (o quién cancela más tickets) en tiempo real.</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 5: Take-Away */}
          <RevealOnScroll delay={600}>
            <div className="group relative bg-forest rounded-2xl border border-white/[0.08] overflow-hidden hover:border-brand/30 transition-colors duration-500 flex flex-col hover:shadow-2xl hover:shadow-black/50 h-full">
              <div className="h-56 w-full flex items-center justify-center relative overflow-hidden bg-[#151515] border-b border-white/[0.04]">
                <svg width="200" height="140" viewBox="0 0 200 140" className="relative z-10 overflow-visible">
                  {/* QR Code Frame */}
                  <rect x="75" y="45" width="50" height="50" rx="4" stroke="#F7F6F2" strokeWidth="1" fill="none" />
                  
                  {/* QR Pattern (Abstract) */}
                  <rect x="82" y="52" width="10" height="10" fill="#F7F6F2" opacity="0.5" />
                  <rect x="108" y="52" width="10" height="10" fill="#F7F6F2" opacity="0.5" />
                  <rect x="82" y="78" width="10" height="10" fill="#F7F6F2" opacity="0.5" />
                  <rect x="98" y="65" width="8" height="8" fill="#C9A66B" />
                  
                  {/* Scan Laser */}
                  <rect x="70" y="45" width="60" height="2" fill="#C9A66B" className="animate-scan" style={{boxShadow: '0 0 8px #C9A66B'}} />
                  
                  {/* Phone Outline */}
                  <rect x="65" y="25" width="70" height="90" rx="8" stroke="#F7F6F2" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
                </svg>
              </div>
              <div className="p-6 relative z-10 bg-forest flex-1">
                <h3 className="text-base font-medium text-bone/90 mb-2">Take-Away &amp; QR</h3>
                <p className="text-sm text-bone/40 leading-relaxed font-light">Permití que tus clientes pidan desde la mesa o anticipen su pedido para llevar sin hacer fila y sin descargar Apps.</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 6: Reportes */}
          <RevealOnScroll delay={700}>
            <div className="group relative bg-forest rounded-2xl border border-white/[0.08] overflow-hidden hover:border-brand/30 transition-colors duration-500 flex flex-col hover:shadow-2xl hover:shadow-black/50 h-full">
              <div className="h-56 w-full flex items-center justify-center relative overflow-hidden bg-[#151515] border-b border-white/[0.04]">
                <svg width="200" height="140" viewBox="0 0 200 140" className="relative z-10 overflow-visible">
                  {/* Grid */}
                  <line x1="40" y1="40" x2="40" y2="100" stroke="#F7F6F2" strokeWidth="0.5" strokeOpacity="0.2" />
                  <line x1="40" y1="100" x2="160" y2="100" stroke="#F7F6F2" strokeWidth="0.5" strokeOpacity="0.2" />
                  
                  {/* Chart Line - Animated using stroke-dasharray trick if possible, or simple opacity/transform */}
                  <polyline 
                    points="40,90 70,70 100,85 130,50 160,30" 
                    fill="none" 
                    stroke="#F7F6F2" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Area under curve (Simulated) */}
                  <path d="M40,90 L70,70 L100,85 L130,50 L160,30 L160,100 L40,100 Z" fill="#C9A66B" fillOpacity="0.1" />

                  {/* Pulsing Dot at end */}
                  <circle cx="160" cy="30" r="3" fill="#C9A66B" className="animate-ping-slow" />
                  <circle cx="160" cy="30" r="3" fill="#C9A66B" />

                  {/* Floating Stats */}
                  <rect x="110" y="20" width="40" height="20" rx="2" fill="#1E362D" stroke="#F7F6F2" strokeWidth="0.5" className="animate-float-slow" />
                  <line x1="115" y1="30" x2="135" y2="30" stroke="#C9A66B" strokeWidth="1" />
                </svg>
              </div>
              <div className="p-6 relative z-10 bg-forest flex-1">
                <h3 className="text-base font-medium text-bone/90 mb-2">Métricas de Negocio</h3>
                <p className="text-sm text-bone/40 leading-relaxed font-light">Panel de control en vivo: Ticket promedio, productos estrella, horarios de mayor venta y cierre de caja automático.</p>
              </div>
            </div>
          </RevealOnScroll>

        </div>
        
        <RevealOnScroll delay={800} className="flex justify-center mt-12">
            <button className="group px-8 py-3 rounded-full border border-bone/10 bg-white/5 hover:bg-white/10 hover:border-brand/40 text-bone/80 hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-2">
                Explore all features
                <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
            </button>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Modules;
