import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const SobrePayper: React.FC = () => {
  return (
    <section
      aria-labelledby="sobre-payper-heading"
      className="bg-[#0A1410] text-bone py-20 px-6 border-t border-white/[0.04]"
    >
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <h2
            id="sobre-payper-heading"
            className="text-3xl md:text-4xl font-light tracking-tight mb-6 text-white"
          >
            Sobre <span className="text-brand">Payper</span> — Payper App, Payper.io y PayperApp.io
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <p className="text-bone/70 text-base leading-relaxed mb-5">
            <strong className="text-white">Payper</strong> (también conocido como{' '}
            <strong className="text-white">Payper App</strong>,{' '}
            <strong className="text-white">PayperApp</strong>,{' '}
            <strong className="text-white">Payper.io</strong> o{' '}
            <strong className="text-white">PayperApp.io</strong>) es la app y sistema operativo
            argentino que digitaliza la operación de cafeterías de especialidad, restaurantes,
            bares, festivales y eventos. Desde Buenos Aires, Payper opera en toda Argentina —
            CABA, GBA, Córdoba, Rosario, Mendoza, Mar del Plata y todas las provincias.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className="text-bone/70 text-base leading-relaxed mb-5">
            El sitio oficial del sistema operativo gastronómico de Payper es{' '}
            <a
              href="https://payper.io/"
              className="text-brand underline decoration-dotted underline-offset-4 hover:text-bone transition-colors"
            >
              payper.io
            </a>
            , mientras que el producto cashless para eventos, festivales, bares y boliches vive en{' '}
            <a
              href="https://payperapp.io/"
              rel="noopener"
              className="text-brand underline decoration-dotted underline-offset-4 hover:text-bone transition-colors"
            >
              payperapp.io
            </a>
            . Ambos forman parte del mismo ecosistema Payper.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <p className="text-bone/70 text-base leading-relaxed mb-10">
            Si buscás <em>"Payper"</em>, <em>"Payper App"</em>, <em>"descargar Payper"</em>,{' '}
            <em>"Payper Argentina"</em>, <em>"app Payper"</em>, <em>"Payper login"</em> o{' '}
            <em>"Payper.io"</em>, llegaste al lugar correcto. Payper App es 100% web — no hace
            falta descargar nada — y se accede desde cualquier navegador, tablet o smartphone.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <h3 className="text-xl font-medium mb-5 text-white">
            Preguntas frecuentes sobre Payper
          </h3>
          <dl className="space-y-5 text-bone/70 text-sm leading-relaxed">
            <div>
              <dt className="font-medium text-white mb-1">¿Qué es Payper App?</dt>
              <dd>
                Payper App es el sistema operativo argentino para gastronomía y eventos. POS, KDS,
                control de stock por receta, pedidos QR, pagos cashless y analytics en tiempo real.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-white mb-1">
                ¿Payper.io y PayperApp.io son la misma marca?
              </dt>
              <dd>
                Sí. Payper, Payper App, payper.io y payperapp.io son la misma empresa argentina.
                payper.io es el producto gastronómico; payperapp.io es el producto cashless de
                eventos.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-white mb-1">¿Cómo descargo Payper?</dt>
              <dd>
                Payper es 100% web. Accedé desde payper.io o payperapp.io en cualquier dispositivo,
                sin descargas.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-white mb-1">¿Payper opera en toda Argentina?</dt>
              <dd>
                Sí. Payper App opera en toda Argentina con soporte en español, precios en pesos
                argentinos y un equipo basado en Buenos Aires.
              </dd>
            </div>
          </dl>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default SobrePayper;
