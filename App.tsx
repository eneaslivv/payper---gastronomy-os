
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Architecture from './components/Architecture';
import Modules from './components/Modules';
import LifestyleSlider from './components/LifestyleSlider';
import LiveDemo from './components/LiveDemo';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import SobrePayper from './components/SobrePayper';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-forest text-bone overflow-x-hidden w-full">
      {/* Global SVG Filters defined once */}
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch"></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2"></feFuncA>
            </feComponentTransfer>
          </filter>
          <linearGradient id="wireframe-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F7F6F2" stopOpacity="0.1"></stop>
            <stop offset="100%" stopColor="transparent" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>

      <Navbar />
      
      <main>
        <Hero />
        <Architecture />
        <Modules />
        <LifestyleSlider />
        <Testimonials />
        <LiveDemo />
        <CTA />
        <FAQ />
        <SobrePayper />
      </main>
      
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
