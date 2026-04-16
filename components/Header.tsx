import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Programas', href: '#programas' },
    { name: 'Impacto', href: '#impacto' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
            <Logo />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-brand-primary leading-none">
              Fundación
            </span>
            <span className="text-lg font-serif font-bold tracking-tight text-brand-accent leading-none">
              Cambia tu Mente
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://link.mercadopago.cl/funcambiatumente"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
          >
            Donar Ahora
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl animate-fade-in">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://link.mercadopago.cl/funcambiatumente"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-6 py-3 rounded-xl text-center font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donar Ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
