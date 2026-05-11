import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with soft gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full text-sm font-semibold tracking-wide uppercase">
            <Heart size={16} fill="currentColor" />
            <span>Salud Mental y Bienestar Emocional</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-serif font-bold leading-[1.1] text-brand-primary tracking-tight">
            Transformando vidas, <br />
            <span className="text-brand-accent italic">un pensamiento</span> a la vez.
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
            En la Fundación Cambia tu Mente, ofrecemos arancel social para que el bienestar emocional sea accesible para todos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://forms.gle/j9F77gxiJcyf2DhX6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-accent text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
              aria-label="Solicitar Atención Clínica"
            >
              Solicitar Atención Clínica
              <ArrowRight size={20} aria-hidden="true" />
            </a>
            <a 
              href="#programas"
              className="px-8 py-4 border-2 border-brand-primary text-brand-primary rounded-full font-semibold flex items-center justify-center hover:bg-brand-primary/5 transition-all"
              aria-label="Ver nuestros servicios y programas"
            >
              Ver Servicios
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in delay-200">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=70&w=800&fm=webp&auto=format&fit=crop"
              srcSet="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=70&w=400&fm=webp&auto=format&fit=crop 400w, https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=70&w=800&fm=webp&auto=format&fit=crop 800w, https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=70&w=1200&fm=webp&auto=format&fit=crop 1200w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Manos entrelazadas en señal de apoyo empático" 
              width="800"
              height="800"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-soft rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 border-4 border-brand-primary/10 rounded-[40px] -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
