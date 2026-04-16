import React from 'react';
import { Brain, HeartHandshake, Lightbulb, MessageCircle } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      icon: <Brain size={40} />,
      title: "Talleres de Mindfulness",
      description: "Sesiones semanales diseñadas para reducir el estrés y aumentar la conciencia plena en la vida cotidiana.",
      image: "https://picsum.photos/seed/meditation/600/400"
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Grupos de Apoyo",
      description: "Espacios seguros moderados por profesionales para compartir experiencias y encontrar consuelo mutuo.",
      image: "https://picsum.photos/seed/support/600/400"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Educación Emocional",
      description: "Programas educativos para escuelas y empresas sobre la importancia de la inteligencia emocional.",
      image: "https://picsum.photos/seed/education/600/400"
    },
    {
      icon: <MessageCircle size={40} />,
      title: "Asesoría Individual",
      description: "Orientación personalizada para navegar desafíos específicos de la vida y el crecimiento personal.",
      image: "https://picsum.photos/seed/therapy/600/400"
    }
  ];

  return (
    <section id="programas" className="py-24 bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-accent">Nuestros Programas</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">Herramientas para tu <span className="italic">Crecimiento</span></h3>
          <p className="text-lg text-gray-600">
            Ofrecemos una variedad de servicios diseñados para acompañarte en cada etapa de tu camino hacia el bienestar mental con arancel social.
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
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="sm:w-1/2 p-8 flex flex-col justify-center space-y-4">
                <div className="text-brand-primary">
                  {program.icon}
                </div>
                <h4 className="text-2xl font-bold text-brand-primary">{program.title}</h4>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
                <a 
                  href="#contacto" 
                  className="text-brand-accent font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Saber más <span>→</span>
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
