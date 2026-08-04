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
    <header className="relative pt-36 pb-24 lg:pt-52 lg:pb-36 overflow-hidden bg-forest">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle,rgba(201,166,107,0.12)_0%,transparent_60%)] blur-[100px] rounded-full pointer-events-none animate-glow"></div>
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(201,166,107,0.08)_0%,transparent_70%)] blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-bone/10 to-transparent"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <RevealOnScroll delay={100}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand/10 bg-brand/[0.04] text-bone text-[10px] font-medium mb-12 backdrop-blur-md hover:border-brand/30 hover:bg-brand/[0.08] transition-all duration-500 cursor-default shadow-[0_0_20px_-10px_rgba(201,166,107,0.15)] group mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            <span className="tracking-[0.15em] uppercase text-bone/50 group-hover:text-bone/80 transition-colors font-semibold">
              PAYPER — SOLUCIÓN INTEGRAL PARA GASTRONOMÍA
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-normal text-bone/85 tracking-tight mb-10 leading-[1.08] md:leading-[0.98]">
            Payper: el sistema operativo <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-bone/80 via-bone/70 to-bone/30 relative z-10">
                para tu barra de café.
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand/0 via-brand/10 to-brand/0 blur-3xl -z-10 opacity-20 transform scale-y-50 translate-y-4"></span>
            </span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <p className="text-base md:text-lg text-bone/45 max-w-lg mx-auto mb-14 leading-relaxed font-light tracking-wide">
            Olvidate de las comandas perdidas y el descontrol de insumos. Con la app Payper, centralizá pedidos, <span className="text-bone/90 font-normal border-b border-brand/30 pb-0.5">recetas exactas</span> y cobros en una plataforma diseñada para cafeterías y gastronomía en Argentina.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-32">
            <button aria-label="Ver demo de Payper App para cafeterías" className="group h-12 px-8 bg-bone text-forest font-semibold rounded-full text-sm hover:bg-white hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.25)] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_30px_-10px_rgba(247,246,242,0.15)]">
              Ver Demo Barista
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-brand" />
            </button>
            <button aria-label="Solicitar cotización de Payper para mi local" className="h-12 px-8 border border-bone/[0.12] text-bone/60 font-medium rounded-full text-sm hover:bg-white/[0.06] hover:text-white hover:border-bone/25 transition-all duration-300">
              Cotizar para mi local
            </button>
          </div>
        </RevealOnScroll>
      </div>

      {/* Diagram Visualization */}
      <RevealOnScroll delay={500} className="w-full">
        <div id="como-funciona" className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-2xl border border-bone/[0.08] bg-charcoal shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-visible">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent"></div>
            <div className="absolute -top-px inset-x-[20%] h-[2px] bg-gradient-to-r from-transparent via-brand/30 to-transparent blur-sm"></div>

            <div ref={containerRef} className="pt-12 pb-12 md:pt-40 md:pb-28 relative flex justify-center items-center">
              {/* Soft Vignettes */}
              <div className="absolute left-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-r from-charcoal to-transparent z-20 pointer-events-none hidden md:block"></div>
              <div className="absolute right-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-l from-charcoal to-transparent z-20 pointer-events-none hidden md:block"></div>

              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 min-w-max md:min-w-0 px-4 pt-4 w-full md:w-auto">

                {STEPS.map((step, index) => {
                  const Icon = step.icon;
                  const isHovered = activeTooltip === step.id;

                  return (
                    <React.Fragment key={step.id}>
                      {/* NODE */}
                      <div
                        className="flex flex-col items-center gap-3 md:gap-5 group relative cursor-pointer"
                        onMouseEnter={(e) => handleMouseEnter(e, step.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className={`w-10 h-10 md:w-10 md:h-10 rounded-xl bg-forest border border-bone/[0.08] flex items-center justify-center shadow-lg transition-all duration-500 z-10 relative ${isHovered ? getColorClasses(step.color, 'border') + ' bg-forest/80 ' + getColorClasses(step.color, 'shadow') : 'group-hover:border-bone/20'}`}>
                          <Icon className={`w-4 h-4 text-bone/40 transition-colors duration-300 ${isHovered ? getColorClasses(step.color, 'text') : ''}`} />
                        </div>
                        <span className={`text-[10px] tracking-[0.2em] uppercase font-medium transition-colors ${isHovered ? 'text-white' : 'text-bone/20'}`}>
                          {step.title}
                        </span>
                      </div>

                      {/* CONNECTOR LINE (if not last) */}
                      {index < STEPS.length - 1 && (
                        <div className="w-px h-8 md:h-px md:w-4 lg:w-20 bg-bone/[0.04] relative overflow-hidden">
                          <div
                            className={`absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r w-full -translate-y-full md:translate-y-0 md:-translate-x-full animate-scan-v md:animate-flow-subtle ${step.gradient}`}
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
            <div className="grid grid-cols-3 border-t border-bone/[0.06] bg-[#121212] rounded-b-2xl">
              <div className="py-6 text-center border-r border-bone/[0.06] group/metric hover:bg-white/[0.02] transition-colors">
                <div className="text-[9px] text-bone/25 uppercase tracking-[0.2em] font-semibold mb-2">Uptime</div>
                <div className="text-sm font-mono text-brand font-medium">99.99%</div>
              </div>
              <div className="py-6 text-center border-r border-bone/[0.06] group/metric hover:bg-white/[0.02] transition-colors">
                <div className="text-[9px] text-bone/25 uppercase tracking-[0.2em] font-semibold mb-2">Sync Time</div>
                <div className="text-sm font-mono text-bone/90 font-medium">&lt;50ms</div>
              </div>
              <div className="py-6 text-center group/metric hover:bg-white/[0.02] transition-colors">
                <div className="text-[9px] text-bone/25 uppercase tracking-[0.2em] font-semibold mb-2">Mode</div>
                <div className="text-sm font-mono text-emerald-500/90 flex items-center justify-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
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