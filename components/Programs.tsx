import React from 'react';
import { Brain, HeartHandshake, Lightbulb, MessageCircle } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      icon: <Brain size={40} />,
      title: "Talleres de Mindfulness",
      description: "Prácticas guiadas para el control de la ansiedad y el estrés, promoviendo la regulación emocional.",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=60&w=400&fm=webp&auto=format&fit=crop",
      cta: "Inscribirse a Taller"
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Grupos de Apoyo",
      description: "Espacios seguros y moderados por psicólogos, enfocados en compartir experiencias y contención grupal.",
      image: "https://images.unsplash.com/photo-1529156069898-49953eb1b5b6?q=60&w=400&fm=webp&auto=format&fit=crop",
      cta: "Unirse a un Grupo"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Psicoeducación Comunitaria",
      description: "Charlas y programas preventivos en colegios y organizaciones para promover la salud mental.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=60&w=400&fm=webp&auto=format&fit=crop",
      cta: "Agendar Charla"
    },
    {
      icon: <MessageCircle size={40} />,
      title: "Atención Clínica (Arancel Social)",
      description: "Terapia psicológica individual dirigida por profesionales acreditados a un costo accesible.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=60&w=400&fm=webp&auto=format&fit=crop",
      cta: "Agendar Consulta"
    }
  ];

  return (
    <section id="programas" className="py-24 bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-accent block mb-2">Nuestros Servicios y Programas</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">Herramientas Clínicas para tu <span className="italic">Crecimiento</span></h2>
          <p className="text-lg text-gray-700">
            Brindamos intervenciones de salud mental estructuradas, ofreciendo atención accesible a través de nuestro programa de arancel social y actividades benéficas gratuitas para la comunidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col sm:flex-row"
            >
              <div className="sm:w-1/2 h-64 sm:h-auto overflow-hidden">
                <img 
                  src={program.image}
                  srcSet={`${program.image.replace('w=400', 'w=400')} 400w, ${program.image.replace('w=400', 'w=800')} 800w`}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  alt={program.title} 
                  width="400"
                  height="300"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="sm:w-1/2 p-8 flex flex-col justify-center space-y-4">
                <div className="text-brand-primary">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-primary">{program.title}</h3>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
                <a 
                  href="https://forms.gle/j9F77gxiJcyf2DhX6"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-accent font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  aria-label={`Inscribirse en ${program.title}`}
                >
                  {program.cta} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
