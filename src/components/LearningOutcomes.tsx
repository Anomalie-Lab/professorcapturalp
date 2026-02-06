import { BookOpen, Target, Shield, Brain, Zap } from 'lucide-react';
import FadeInSection from './animations/FadeInSection';

const LearningOutcomes = () => {
  const outcomes = [
    {
      icon: <Target className="w-10 h-10 text-yellow-500" />,
      title: "Estudo Estratégico",
      desc: "Como estudar português sem perder tempo com o que não cai.",
      module: "MÓDULO 01"
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-500" />,
      title: "Gramática Aplicada",
      desc: "Como aplicar a gramática direto nas questões de prova.",
      module: "MÓDULO 02"
    },
    {
      icon: <Shield className="w-10 h-10 text-yellow-500" />,
      title: "Blindagem de Erros",
      desc: "Como evitar os erros mais comuns e as pegadinhas das bancas.",
      module: "MÓDULO 03"
    },
    {
      icon: <Brain className="w-10 h-10 text-yellow-500" />,
      title: "Mente da Banca",
      desc: "Entenda como as bancas pensam e cobram os conteúdos.",
      module: "MÓDULO 04"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-yellow-500" />,
      title: "Interpretação Turbo",
      desc: "Técnicas para interpretar textos mais rápido e com precisão.",
      module: "MÓDULO 05"
    }
  ];

  return (
    <section className="bg-black py-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-16" direction="up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 uppercase">
            O que você vai aprender <br />
            <span className="relative inline-block text-yellow-500 font-chawp">
              ao entrar no método
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Uma estrutura completa desenhada para te levar do zero à aprovação em tempo recorde.
          </p>
        </FadeInSection>

        <div className="flex flex-wrap justify-center gap-6">
          {outcomes.map((outcome, index) => (
            <FadeInSection 
              key={index} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
              delay={index * 0.1}
              direction="up"
            >
              <div 
                className="group relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full"
              >
                {/* Top Gradient/Glow Effect from image */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors duration-300"></div>

                <div className="relative z-10 flex flex-col h-full min-h-[320px]">
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                    <div className="p-4 rounded-full bg-black/50 border border-zinc-800 group-hover:border-yellow-500/20 transition-colors">
                      {outcome.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 font-chawp">{outcome.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {outcome.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-800/50 flex justify-between items-center">
                    <span className="text-xs font-bold text-yellow-500 tracking-widest uppercase">
                      {outcome.module}
                    </span>
                    <div className="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
