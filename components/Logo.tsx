import React from 'react';
import { Heart, Brain } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-full h-full", showText = false }) => {
  return (
    <div className={`relative flex items-center justify-center bg-gradient-to-br from-brand-secondary to-white border border-brand-primary/10 rounded-2xl overflow-hidden ${className}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-full h-full bg-brand-primary blur-2xl rounded-full scale-150 translate-x-1/4" />
      </div>
      
      {/* Icon composition */}
      <div className="relative z-10 flex items-center justify-center">
        <Heart className="absolute text-brand-accent/30 scale-[1.8]" size={32} strokeWidth={1.5} fill="currentColor" />
        <Brain className="text-brand-primary" size={28} strokeWidth={2} />
      </div>

      {showText && (
        <div className="mt-4 text-center hidden md:block">
          <p className="font-bold text-brand-primary text-sm leading-tight">Fundación</p>
          <p className="font-bold font-serif text-brand-accent text-sm leading-tight italic">Cambia tu Mente</p>
        </div>
      )}
    </div>
  );
};

export default Logo;
