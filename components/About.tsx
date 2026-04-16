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
                src="https://picsum.photos/seed/community/800/600" 
                alt="Nuestra Comunidad" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-primary text-white p-8 rounded-2xl shadow-xl max-w-[240px]">
              <p className="text-3xl font-bold mb-1">10k+</p>
              <p className="text-sm opacity-90">Vidas impactadas positivamente a través de nuestros programas.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-accent">Sobre Nosotros</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary leading-tight">
              Nuestra Misión es tu <span className="italic">Bienestar</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              La Fundación Cambia tu Mente nació de la necesidad de democratizar el acceso a herramientas de salud mental y bienestar emocional. Somos una organización comprometida con la transformación social a través del individuo, ofreciendo servicios con arancel social.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Creemos que una mente sana es la base de una sociedad próspera. Por eso, trabajamos incansablemente para eliminar el estigma y proporcionar apoyo real a quienes más lo necesitan.
            </p>
            
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500 font-medium">
                Organización Registrada No Profit: <span className="text-brand-primary">EIN 12-3456789</span>
              </p>
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
              <h4 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
