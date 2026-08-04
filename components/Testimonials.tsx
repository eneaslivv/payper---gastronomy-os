import React from 'react';
import { Star, Quote } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const TESTIMONIALS = [
  {
    quote: 'Desde que implementamos Payper, redujimos los tiempos de espera un 40%. El KDS para baristas cambió completamente nuestra operación.',
    author: 'Martín Rodríguez',
    role: 'Fundador',
    business: 'Café Origen',
    city: 'Buenos Aires',
    rating: 5
  },
  {
    quote: 'Con Payper App gestionamos 3 sucursales desde un solo panel. El control de stock por receta nos ahorró miles de pesos en merma.',
    author: 'Lucía Fernández',
    role: 'Gerente de Operaciones',
    business: 'Tostado Specialty',
    city: 'Córdoba',
    rating: 5
  },
  {
    quote: 'Nuestros clientes aman pedir por QR sin descargar nada. La fidelización automática de Payper aumentó la recurrencia un 25%.',
    author: 'Santiago López',
    role: 'Co-fundador',
    business: 'La Barra Coffee',
    city: 'Mendoza',
    rating: 5
  },
  {
    quote: 'El modo Offline-First de Payper es increíble. En eventos al aire libre nunca dejamos de facturar aunque la señal sea mala.',
    author: 'Camila Torres',
    role: 'Dueña',
    business: 'Brew Street',
    city: 'Rosario',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-bone relative overflow-hidden border-t border-stone-200 text-forest">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-[10%] w-[400px] h-[200px] bg-forest/[0.02] blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <div className="flex items-center gap-2 mb-3 justify-center">
            <Quote className="w-4 h-4 text-brand" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand">Testimonios</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-forest text-center mb-4">
            Cafeterías que eligen Payper.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className="text-forest/60 text-lg font-light text-center mb-16 max-w-xl mx-auto">
            Negocios gastronómicos en toda Argentina que transformaron su operación con Payper App.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <RevealOnScroll key={index} delay={250 + index * 100}>
              <div className="group bg-white rounded-2xl border border-stone-200/80 p-8 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/[0.06] transition-all duration-500 h-full flex flex-col hover:-translate-y-1">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-forest/80 text-sm leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-stone-100">
                  <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-brand text-sm font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-forest">{testimonial.author}</div>
                    <div className="text-xs text-forest/50">
                      {testimonial.role} — {testimonial.business}, {testimonial.city}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
