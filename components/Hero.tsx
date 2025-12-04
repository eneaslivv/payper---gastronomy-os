import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  Coffee, 
  QrCode, 
  MonitorCheck, 
  Scale, 
  PieChart,
  ArrowRightCircle
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

// --- DATA DEFINITION ---
const STEPS = [
  {
    id: 1,
    title: "Cliente",
    label: "Paso 1",
    icon: Coffee,
    color: "brand", // Gold
    desc: "El cliente escanea el QR desde la mesa. Sin descargar apps ni registros largos.",
    next: "Pedido",
    gradient: "from-transparent via-brand/60 to-transparent",
    delay: 0
  },
  {
    id: 2,
    title: "Pedido/QR",
    label: "Paso 2",
    icon: QrCode,
    color: "white", 
    desc: "Selecciona sus productos, personaliza la orden y paga al instante con su billetera virtual.",
    next: "Cocina",
    gradient: "from-transparent via-blue-500/50 to-transparent",
    delay: 0.6
  },
  {
    id: 3,
    title: "KDS",
    label: "Paso 3",
    icon: MonitorCheck,
    color: "blue-400",
    desc: "La comanda entra a la pantalla del barista, priorizada por tiempo y tipo de preparación.",
    next: "Stock",
    gradient: "from-transparent via-emerald-500/50 to-transparent",
    delay: 1.2
  },
  {
    id: 4,
    title: "Receta/Stock",
    label: "Paso 4",
    icon: Scale,
    color: "emerald-400",
    desc: "El sistema descuenta los gramos exactos de café y leche según la receta del producto vendido.",
    next: "Data",
    gradient: "from-transparent via-brand/50 to-transparent",
    delay: 1.8
  },
  {
    id: 5,
    title: "Data",
    label: "Paso 5",
    icon: PieChart,
    color: "brand",
    desc: "Visualizá el cierre de caja, productos más vendidos y rendimiento del personal en tiempo real.",
    next: "Ciclo Completo",
    gradient: "", // Last step has no line
    delay: 0
  }
];

const Hero: React.FC = () => {
  // State for the "Smart Tooltip"
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent, stepId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate position: Centered horizontally above the element
    setTooltipPos({
      top: rect.top - 16, // 16px gap
      left: rect.left + (rect.width / 2)
    });
    setActiveTooltip(stepId);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  // Helper to get color classes dynamically
  const getColorClasses = (colorName: string, type: 'text' | 'bg' | 'border' | 'shadow') => {
    const map: Record<string, string> = {
      'brand': 'text-brand bg-brand border-brand shadow-[0_0_30px_-15px_rgba(201,166,107,0.4)]',
      'white': 'text-white bg-white border-bone/20 shadow-[0_0_30px_-15px_rgba(255,255,255,0.3)]',
      'blue-400': 'text-blue-400 bg-blue-500 border-blue-500/30 shadow-[0_0_30px_-15px_rgba(59,130,246,0.3)]',
      'emerald-400': 'text-emerald-400 bg-emerald-500 border-emerald-500/30 shadow-[0_0_30px_-15px_rgba(16,185,129,0.3)]',
    };
    
    const fullStr = map[colorName] || map['brand'];
    if (type === 'text') return fullStr.split(' ')[0];
    if (type === 'bg') return fullStr.split(' ')[1];
    if (type === 'border') return fullStr.split(' ')[2];
    if (type === 'shadow') return fullStr.split(' ')[3];
    return '';
  };

  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-forest">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(201,166,107,0.15)_0%,transparent_70%)] blur-[100px] rounded-full pointer-events-none animate-glow"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-bone/10 to-transparent"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <RevealOnScroll delay={100}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bone/[0.03] bg-white/[0.01] text-bone text-[10px] font-medium mb-10 backdrop-blur-md hover:border-brand/30 transition-all cursor-default shadow-none group mx-auto">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand"></span>
            </span>
            <span className="tracking-wider uppercase bg-gradient-to-r from-bone/40 to-bone/20 bg-clip-text text-transparent group-hover:to-white transition-all">
              SOLUCIÓN INTEGRAL PARA GASTRONOMÍA
            </span>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-bone/80 tracking-tight mb-8 leading-[1.05] md:leading-[0.95]">
            El flujo perfecto para tu <br /> 
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-bone/80 via-bone/70 to-bone/30 relative z-10">
                barra de café.
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand/0 via-brand/10 to-brand/0 blur-3xl -z-10 opacity-20 transform scale-y-50 translate-y-4"></span>
            </span>
          </h1>
        </RevealOnScroll>
        
        <RevealOnScroll delay={300}>
          <p className="text-base md:text-lg text-bone/50 max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
            Olvidate de las comandas perdidas y el descontrol de insumos. Centralizá pedidos, <span className="text-bone/90 font-normal border-b border-brand/30 pb-0.5">recetas exactas</span> y cobros en una plataforma diseñada para que tu operación nunca se detenga.
          </p>
        </RevealOnScroll>
        
        <RevealOnScroll delay={400}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-28">
            <button className="group h-10 px-6 bg-bone text-forest font-medium rounded-full text-[13px] hover:bg-white hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2">
              Ver Demo Barista 
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-brand" />
            </button>
            <button className="h-10 px-6 border border-bone/10 text-bone/70 font-medium rounded-full text-[13px] hover:bg-white/5 hover:text-white hover:border-bone/20 transition-all">
              Cotizar para mi local
            </button>
          </div>
        </RevealOnScroll>
      </div>

      {/* Diagram Visualization */}
      <RevealOnScroll delay={500} className="w-full">
      <div id="como-funciona" className="max-w-5xl mx-auto px-4">
        <div className="relative rounded-xl border border-bone/[0.08] bg-charcoal shadow-2xl overflow-visible">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-bone/10 to-transparent opacity-50"></div>
          
          <div ref={containerRef} className="pt-12 pb-10 md:pt-40 md:pb-28 relative flex justify-center items-center overflow-x-auto no-scrollbar scroll-smooth">
            {/* Soft Vignettes */}
            <div className="absolute left-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-r from-charcoal to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-l from-charcoal to-transparent z-20 pointer-events-none"></div>

            <div className="flex items-center gap-3 md:gap-8 min-w-max px-4 pt-4">
              
              {STEPS.map((step, index) => {
                const Icon = step.icon;
                const isHovered = activeTooltip === step.id;
                
                return (
                  <React.Fragment key={step.id}>
                    {/* NODE */}
                    <div 
                      className="flex flex-col items-center gap-5 group relative cursor-pointer"
                      onMouseEnter={(e) => handleMouseEnter(e, step.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className={`w-10 h-10 rounded-xl bg-forest border border-bone/[0.08] flex items-center justify-center shadow-lg transition-all duration-500 z-10 relative ${isHovered ? getColorClasses(step.color, 'border') + ' bg-forest/80 ' + getColorClasses(step.color, 'shadow') : 'group-hover:border-bone/20'}`}>
                        <Icon className={`w-4 h-4 text-bone/40 transition-colors duration-300 ${isHovered ? getColorClasses(step.color, 'text') : ''}`} />
                      </div>
                      <span className={`text-[10px] tracking-[0.2em] uppercase font-medium transition-colors ${isHovered ? 'text-white' : 'text-bone/20'}`}>
                        {step.title}
                      </span>
                    </div>

                    {/* CONNECTOR LINE (if not last) */}
                    {index < STEPS.length - 1 && (
                      <div className="h-px w-4 md:w-10 lg:w-20 bg-bone/[0.04] relative overflow-hidden">
                        <div 
                          className={`absolute inset-0 bg-gradient-to-r w-full -translate-x-full animate-flow-subtle ${step.gradient}`} 
                          style={{ animationDelay: `${step.delay}s` }}
                        ></div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}

            </div>
          </div>

          {/* METRICS BAR */}
          <div className="grid grid-cols-3 border-t border-bone/[0.06] bg-[#151515]">
            <div className="py-5 text-center border-r border-bone/[0.06]">
              <div className="text-[9px] text-bone/30 uppercase tracking-[0.15em] font-semibold mb-1.5">Uptime</div>
              <div className="text-[13px] font-mono text-brand">99.99%</div>
            </div>
            <div className="py-5 text-center border-r border-bone/[0.06]">
              <div className="text-[9px] text-bone/30 uppercase tracking-[0.15em] font-semibold mb-1.5">Sync Time</div>
              <div className="text-[13px] font-mono text-bone/90">&lt;50ms</div>
            </div>
            <div className="py-5 text-center">
              <div className="text-[9px] text-bone/30 uppercase tracking-[0.15em] font-semibold mb-1.5">Mode</div>
              <div className="text-[13px] font-mono text-emerald-500/90 flex items-center justify-center gap-2">
                <span className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
                Offline-First
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>

      {/* --- SMART FIXED TOOLTIP PORTAL --- 
          This renders OUTSIDE the overflow container, positioned fixed relative to viewport 
      */}
      {activeTooltip && (
        <div 
            className="fixed z-[100] w-64 p-4 bg-[#0a0a0a]/95 backdrop-blur-xl border border-brand/20 rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)] pointer-events-none animate-in fade-in zoom-in-95 duration-200"
            style={{ 
              top: tooltipPos.top - 16, // 16px gap
              left: tooltipPos.left,
              transform: 'translate(-50%, -100%)' // Center horizontally, sit above
            }}
        >
          {STEPS.map(step => {
             if (step.id !== activeTooltip) return null;
             return (
               <div key={step.id}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color === 'brand' ? '#C9A66B' : step.color === 'white' ? '#FFFFFF' : step.color === 'blue-400' ? '#60A5FA' : step.color === 'emerald-400' ? '#34D399' : '#C9A66B' }}></div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${getColorClasses(step.color, 'text')}`}>
                      {step.label}
                    </span>
                  </div>
                  <p className="text-xs text-bone/80 leading-relaxed font-light mb-3">
                    {step.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] text-bone/40 font-mono">
                    {step.next === "Ciclo Completo" ? <ArrowRightCircle className="w-3 h-3 text-brand" /> : <ArrowRight className="w-3 h-3" />}
                    <span>Siguiente: <span className="text-bone/70">{step.next}</span></span>
                  </div>
                  {/* Down Arrow Tip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-4 h-4 bg-[#0a0a0a] border-r border-b border-brand/20 transform rotate-45"></div>
               </div>
             )
          })}
        </div>
      )}

    </header>
  );
};

export default Hero;