import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'yellow' | 'red' | 'zinc';
  icon?: ReactNode;
  showDot?: boolean;
  className?: string;
}

const Badge = ({ children, variant = 'yellow', icon, showDot, className = '' }: BadgeProps) => {
  // Configurações de cores baseadas na variante
  const variants = {
    yellow: {
      bg: "bg-yellow-500",
      text: "text-black",
      border: "border-yellow-500",
      glow: "shadow-[0_0_15px_rgba(234,179,8,0.3)]"
    },
    red: {
      bg: "bg-red-600",
      text: "text-white",
      border: "border-red-600",
      glow: "shadow-[0_0_15px_rgba(220,38,38,0.3)]"
    },
    zinc: {
      bg: "bg-zinc-800",
      text: "text-white",
      border: "border-zinc-700",
      glow: "shadow-none"
    }
  };

  const currentVariant = variants[variant];

  return (
    <div className={`relative group inline-block ${className}`}>
      {/* Elemento de fundo com leve inclinação para dar dinamismo */}
      <div className={`absolute inset-0 transform translate-x-1 translate-y-1 border ${currentVariant.border} opacity-50 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5`}></div>
      
      {/* Conteúdo principal */}
      <div className={`
        relative 
        inline-flex items-center gap-2.5 
        px-5 py-2
        ${currentVariant.bg} 
        ${currentVariant.text}
        font-bold text-xs tracking-widest uppercase
        border ${currentVariant.border}
        ${currentVariant.glow}
        transition-all duration-300
        group-hover:-translate-y-0.5
      `}>
        {/* Detalhe tático lateral */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/20"></div>

        {icon ? (
          <span className="w-4 h-4 flex items-center justify-center relative z-10">{icon}</span>
        ) : (showDot && (
          <span className="w-1.5 h-1.5 rounded-full bg-current relative z-10 animate-pulse"></span>
        ))}
        
        <span className="relative z-10 font-sans">{children}</span>
        
        {/* Detalhe de canto cortado (simulado com CSS borders ou clip-path seria ideal, mas divs funcionam bem no tailwind puro) */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-black rotate-45 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-black rotate-45 translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default Badge;
