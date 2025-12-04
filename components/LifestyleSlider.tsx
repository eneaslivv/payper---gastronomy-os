import React from 'react';
import { ScanLine, MapPin } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

// Imágenes con estética "Flash/Nightlife/Gen Z"
const images = [
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop", loc: "Downtown", time: "23:42" },
  { src: "https://images.unsplash.com/photo-1529139574466-a302d2d3f990?q=80&w=600&auto=format&fit=crop", loc: "The Basement", time: "01:15" },
  { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop", loc: "Onyx Bar", time: "22:05" },
  { src: "https://images.unsplash.com/photo-1621243763214-e57579899388?q=80&w=600&auto=format&fit=crop", loc: "Transaction", time: "00:30" },
  { src: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=600&auto=format&fit=crop", loc: "Rooftop", time: "19:50" },
  { src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=600&auto=format&fit=crop", loc: "Main Stage", time: "02:20" },
  { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop", loc: "Entrance", time: "21:10" },
  { src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=600&auto=format&fit=crop", loc: "Checkout", time: "14:45" },
  // Nuevas imágenes añadidas (usando URLs de Unsplash para demostración)
  { src: "https://images.unsplash.com/photo-1514933651103-005bce6a8fd7?q=80&w=600&auto=format&fit=crop", loc: "The Mix", time: "22:15" }, // Similar a pasted-image-2025-12-04T03-25-14-643Z.png
  { src: "https://images.unsplash.com/photo-1519732773-d25a6054c8f5?q=80&w=600&auto=format&fit=crop", loc: "Night Out", time: "00:45" }, // Similar a DSC04329.JPG
  { src: "https://images.unsplash.com/photo-1556740734-a284151a3035?q=80&w=600&auto=format&fit=crop", loc: "After Hours", time: "01:30" }, // Similar a DSC04319.jpg
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop", loc: "Terrace", time: "20:00" }, // Similar a DSC04365.jpg
  { src: "https://images.unsplash.com/photo-1556740772-1c7470a0066c?q=80&w=600&auto=format&fit=crop", loc: "Restroom", time: "23:00" }, // Similar a DSC04339.jpg
  { src: "https://images.unsplash.com/photo-1556740730-7fd172f2227a?q=80&w=600&auto=format&fit=crop", loc: "Table 7", time: "21:40" }, // Similar a CEA288BF-9B2B-4A42-A0AC-3773D6017048.jpg
  { src: "https://images.unsplash.com/photo-1556740714-a8395b3be656?q=80&w=600&auto=format&fit=crop", loc: "Lounge", time: "22:55" }, // Similar a DSC04316.jpg
  { src: "https://images.unsplash.com/photo-1556740734-a284151a3035?q=80&w=600&auto=format&fit=crop", loc: "Bar Counter", time: "00:10" }, // Similar a DSC04307.jpg
];

const LifestyleSlider: React.FC = () => {
  return (
    <section className="py-32 bg-forest border-t border-white/[0.06] overflow-hidden relative group/section">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ filter: 'url(#noiseFilter)' }}></div>

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <RevealOnScroll>
            <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand">Live Feed</span>
            </div>
           </RevealOnScroll>
           <RevealOnScroll delay={100}>
            <h2 className="text-3xl md:text-5xl font-medium text-bone tracking-tight leading-none">
                Cashless Nights. <br/>
                <span className="text-brand serif italic">Timeless Vibes.</span>
            </h2>
           </RevealOnScroll>
        </div>
        <RevealOnScroll delay={200} className="hidden md:block">
            <p className="text-bone/40 text-sm font-light max-w-xs text-right">
            La experiencia Payper en los mejores spots de la ciudad. 
            Tecnología invisible para momentos reales.
            </p>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={300} className="w-full">
        <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            
            {/* The scrolling track */}
            <div className="flex gap-6 w-max animate-scroll group-hover/section:[animation-play-state:paused] will-change-transform py-10 pl-4 md:pl-0">
            {[...images, ...images].map((item, index) => (
                <div 
                key={index}
                className="relative w-[220px] h-[320px] md:w-[300px] md:h-[450px] rounded-sm overflow-hidden cursor-pointer group shrink-0 transition-all duration-700 ease-out hover:scale-[1.05] hover:z-30 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]"
                >
                {/* Image Container with Zoom Effect */}
                <div className="w-full h-full overflow-hidden bg-charcoal">
                    <img 
                    src={item.src} 
                    alt={`Lifestyle shot ${index}`} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0 brightness-[0.8] group-hover:brightness-100"
                    loading="lazy"
                    />
                </div>

                {/* Scan Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/10 to-transparent h-[10%] w-full -translate-y-full group-hover:animate-scan z-10 pointer-events-none opacity-0 group-hover:opacity-100"></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Top Metadata */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[10px] text-white font-mono flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                        REC
                    </div>
                </div>

                {/* Bottom Content - Slide Up */}
                <div className="absolute bottom-0 left-0 w-full p-5 z-20 transform translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500 ease-out">
                    
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1 text-brand text-xs font-medium uppercase tracking-wider">
                            <ScanLine className="w-3 h-3" />
                            <span>Payper ID</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/50">{item.time}</span>
                    </div>

                    <div className="h-px w-full bg-white/20 mb-3 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>

                    <div className="flex items-center gap-2 text-white">
                        <MapPin className="w-3 h-3 text-white/60" />
                        <span className="text-sm font-medium tracking-wide">{item.loc}</span>
                    </div>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-brand/40 transition-colors duration-500 pointer-events-none"></div>
                </div>
            ))}
            </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default LifestyleSlider;