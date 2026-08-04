import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const FAQ_DATA = [
  {
    question: '¿Qué es Payper y cómo funciona la app?',
    answer: 'Payper es un sistema operativo integral diseñado para cafeterías y negocios gastronómicos en Argentina. La app Payper conecta el punto de venta (POS), la cocina (KDS), el control de stock por receta y la fidelización de clientes en una sola plataforma. Podés gestionar todo tu negocio desde payper.io.'
  },
  {
    question: '¿Payper funciona sin internet?',
    answer: 'Sí. Payper tiene una arquitectura Offline-First, lo que significa que tu operación nunca se detiene aunque se corte internet. Todas las transacciones se sincronizan automáticamente cuando la conexión se restablece, con un tiempo de sincronización menor a 50ms.'
  },
  {
    question: '¿Cuánto cuesta Payper para mi cafetería en Argentina?',
    answer: 'Payper ofrece planes flexibles adaptados al tamaño de tu negocio. Podés solicitar una cotización personalizada completando el formulario de contacto o agendando una demo gratuita. Trabajamos con cafeterías de especialidad, franquicias y cadenas en toda Argentina.'
  },
  {
    question: '¿Qué incluye el POS gastronómico de Payper?',
    answer: 'El Smart POS de Payper incluye cobro rápido con división de cuentas, descuentos automáticos, integración con KDS para baristas, control de stock por receta en tiempo real, pedidos por QR sin necesidad de descargar apps, y métricas de negocio en vivo.'
  },
  {
    question: '¿Cómo funciona el control de stock por receta?',
    answer: 'Cada vez que se vende un producto, Payper descuenta automáticamente los gramos exactos de cada ingrediente según la receta configurada. Por ejemplo, al vender un Flat White, el sistema descuenta 18g de café y 250ml de leche del inventario en tiempo real.'
  },
  {
    question: '¿Puedo usar payper.io desde mi celular?',
    answer: 'Sí, Payper App está diseñada para funcionar en cualquier dispositivo. Podés acceder al panel de administración desde tu celular, tablet o computadora a través de payper.io. Tus clientes también pueden pedir y pagar escaneando un código QR desde su propio teléfono.'
  },
  {
    question: '¿Payper sirve para franquicias y múltiples sucursales?',
    answer: 'Absolutamente. Payper ofrece gestión multi-sucursal centralizada. Podés controlar el menú, precios, stock y reportes de todos tus locales desde una sola cuenta. Ideal para cadenas de cafeterías y franquicias gastronómicas en Argentina.'
  },
  {
    question: '¿Payper ofrece soporte técnico en Argentina?',
    answer: 'Sí, Payper fue diseñado y es operado desde Buenos Aires, Argentina. Contamos con un equipo de soporte local que te acompaña en la implementación y operación diaria. Además, tenés acceso a nuestro Centro de Ayuda y comunidad online.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_DATA.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    });
    script.id = 'faq-schema';
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <section id="faq" className="py-28 lg:py-36 bg-forest relative overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-[0.03]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <div className="flex items-center gap-2 mb-3 justify-center">
            <HelpCircle className="w-4 h-4 text-brand" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand">Preguntas Frecuentes</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className="text-3xl md:text-5xl font-medium text-bone tracking-tight text-center mb-4">
            Todo sobre Payper App.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className="text-bone/50 text-lg font-light text-center mb-16 max-w-xl mx-auto">
            Respuestas a las dudas más comunes sobre el sistema operativo para gastronomía líder en Argentina.
          </p>
        </RevealOnScroll>

        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => (
            <RevealOnScroll key={index} delay={250 + index * 50}>
              <div
                className={`rounded-xl border transition-all duration-300 ${
                  openIndex === index
                    ? 'border-brand/30 bg-white/[0.03]'
                    : 'border-bone/[0.08] bg-white/[0.01] hover:border-bone/[0.15]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-sm md:text-base font-medium text-bone/90 pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-bone/50 leading-relaxed font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
