import React, { useState } from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Error de conexión. Intenta nuevamente.');
    }
  };

  return (
    <footer id="contacto" className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white">
                <Logo />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-none">
                  Fundación
                </span>
                <span className="text-lg font-serif font-bold tracking-tight text-green-400 leading-none">
                  Cambia tu Mente
                </span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Dedicados a la salud mental y el bienestar emocional a través de la educación y el apoyo con arancel social.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-8">Enlaces Rápidos</h2>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#inicio" className="hover:text-green-400 transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-green-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#programas" className="hover:text-green-400 transition-colors">Programas</a></li>
              <li><a href="https://link.mercadopago.cl/funcambiatumente" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Donaciones</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Blog de Bienestar</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-8">Contacto</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-primary shrink-0" />
                <span>Santiago, Chile</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-primary shrink-0" />
                <a href="https://wa.me/56989662101" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  +56 9 89662101
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-primary shrink-0" />
                <a href="mailto:contacto@cambiatumente.org" className="hover:text-green-400 transition-colors">
                  contacto@cambiatumente.org
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-8">Newsletter</h2>
            <p className="text-gray-300 mb-6">Suscríbete para recibir consejos de bienestar y noticias de nuestra comunidad.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico" 
                required
                aria-label="Correo electrónico para newsletter"
                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary transition-colors"
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-3 bg-brand-primary text-white rounded-xl font-bold hover:bg-opacity-90 transition-all disabled:opacity-50"
                aria-label="Suscribirse al newsletter"
              >
                {status === 'loading' ? 'Enviando...' : 'Suscribirse'}
              </button>
              {message && (
                <p className={`text-sm mt-2 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-300">
          <p>© 2024 Fundación Cambia tu Mente. RUT: 65.262.957-1. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
