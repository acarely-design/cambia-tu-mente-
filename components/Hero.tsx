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
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            En la Fundación Cambia tu Mente, ofrecemos arancel social para que el bienestar emocional sea accesible para todos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://forms.gle/j9F77gxiJcyf2DhX6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-accent text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Inscríbete aquí
              <ArrowRight size={20} />
            </a>
            <a 
              href="#programas"
              className="px-8 py-4 border-2 border-brand-primary text-brand-primary rounded-full font-semibold flex items-center justify-center hover:bg-brand-primary/5 transition-all"
            >
              Nuestros Programas
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in delay-200">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-square bg-white p-8">
            <img 
              src="https://www.cambiatumente.org/images/156/23993228/Gemini_Generated_Image_1m34l81m34l81m34-j2FU397v90IMEQXrmoVYgA.webp" 
              alt="Fundación Cambia tu Mente" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
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
