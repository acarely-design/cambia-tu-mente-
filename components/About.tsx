import React from 'react';
import { Shield, Users, Sparkles, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="text-brand-primary" size={32} />,
      title: "Integridad",
      description: "Actuamos con honestidad y transparencia en cada paso de nuestro camino."
    },
    {
      icon: <Users className="text-brand-primary" size={32} />,
      title: "Comunidad",
      description: "Creamos espacios seguros donde todos se sienten escuchados y valorados."
    },
    {
      icon: <Sparkles className="text-brand-primary" size={32} />,
      title: "Innovación",
      description: "Buscamos constantemente nuevas formas de apoyar el bienestar mental."
    },
    {
      icon: <Award className="text-brand-primary" size={32} />,
      title: "Excelencia",
      description: "Nos comprometemos con los más altos estándares en nuestros servicios."
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=60&w=800&fm=webp&auto=format&fit=crop"
                srcSet="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=60&w=400&fm=webp&auto=format&fit=crop 400w, https://images.unsplash.com/photo-1521791136064-7986c2920216?q=60&w=800&fm=webp&auto=format&fit=crop 800w, https://images.unsplash.com/photo-1521791136064-7986c2920216?q=60&w=1200&fm=webp&auto=format&fit=crop 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Grupos de apoyo y terapia grupal" 
                width="800"
                height="600"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-accent block mb-2">Nuestra Historia y Propósito</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary leading-tight">
              Nuestra Misión es tu <span className="italic">Bienestar Mental</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              La <strong>Fundación Cambia tu Mente</strong> es un organismo sin fines de lucro cuyo objetivo fundamental es democratizar y facilitar el acceso a la atención psicológica y recursos de salud mental. Ofrecemos nuestros distintos programas clínicos con un modelo de <strong>arancel social</strong>, garantizando que el factor económico no sea una barrera para recibir tratamiento clínico profesional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Trabajamos incansablemente para promover la psicoeducación, eliminar el estigma asociado a los trastornos de ánimo y proporcionar apoyo terapéutico real a jóvenes, adultos y comunidades que más lo necesitan.
            </p>
            
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-sm text-gray-700 font-medium">
                Organización Benéfica Registrada <span className="mx-2">|</span> RUT: <span className="text-brand-primary">65.262.957-1</span>
              </p>
              <a 
                href="#donar" 
                className="text-sm font-bold text-brand-accent hover:underline sm:ml-auto flex items-center gap-1"
                aria-label="Conoce cómo puedes apoyarnos"
              >
                Conoce cómo puedes apoyarnos <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-brand-secondary hover:bg-brand-accent/20 transition-colors group"
            >
              <div className="mb-6 p-3 bg-white rounded-2xl inline-block shadow-sm group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
