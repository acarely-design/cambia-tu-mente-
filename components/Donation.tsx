import React from 'react';
import { Heart, CreditCard, Smartphone, Globe } from 'lucide-react';

const Donation: React.FC = () => {
  const donationOptions = [
    { amount: "$10.000", label: "Apoyo Mensual", description: "Ayuda a mantener nuestros grupos de apoyo gratuitos." },
    { amount: "$25.000", label: "Beca de Taller", description: "Patrocina a una persona para un taller de mindfulness." },
    { amount: "$50.000", label: "Recursos Educativos", description: "Proporciona materiales para nuestras charlas escolares." },
    { amount: "$100.000", label: "Impacto Comunitario", description: "Financia un evento comunitario de salud mental." }
  ];

  return (
    <section id="donar" className="py-24 bg-brand-primary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/20 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/20 rounded-full translate-y-1/4 -translate-x-1/4 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-semibold tracking-wide uppercase">
              <Heart size={16} fill="currentColor" />
              <span>Tu apoyo hace la diferencia</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              Ayúdanos a Seguir <span className="italic">Transformando</span> Mentes
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-lg">
              Cada donación se destina directamente a nuestros programas de apoyo y educación con arancel social. Tu contribución permite que sigamos ofreciendo recursos a quienes más lo necesitan.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Donación Segura</h4>
                  <p className="text-sm text-white/60">Procesamos tus pagos a través de plataformas encriptadas y seguras (HTTPS).</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Transparencia Total</h4>
                  <p className="text-sm text-white/60">Publicamos informes anuales sobre el uso de cada centavo donado.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-12 text-gray-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center text-brand-primary">Selecciona un monto para donar</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {donationOptions.map((option, index) => (
                <button 
                  key={index}
                  className="p-6 border-2 border-gray-100 rounded-3xl hover:border-brand-accent hover:bg-brand-accent/5 transition-all text-left group"
                >
                  <p className="text-2xl font-bold text-brand-accent mb-1">{option.amount}</p>
                  <p className="text-sm font-bold text-brand-primary">{option.label}</p>
                  <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{option.description}</p>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <a 
                href="https://link.mercadopago.cl/funcambiatumente"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-brand-accent text-white rounded-2xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Donar con Mercado Pago
                <CreditCard size={20} />
              </a>
              <p className="text-center text-sm text-gray-500 font-medium">
                Aceptamos tarjetas de crédito, débito y transferencias.
              </p>
            </div>
            
            <p className="text-center text-xs text-gray-400 mt-6">
              Al donar, aceptas nuestros términos de servicio y política de privacidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
