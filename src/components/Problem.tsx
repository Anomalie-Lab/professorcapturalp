import { X, AlertTriangle } from 'lucide-react';
import Badge from './Badge';
import FadeInSection from './animations/FadeInSection';

const Problem = () => {
  const problems = [
    "Decora regras que não caem em prova",
    "Estuda sem saber como a banca cobra",
    "Erra questões por falta de interpretação",
    "Sente que português só atrapalha a aprovação"
  ];

  return (
    <section className="bg-black py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <FadeInSection className="text-center mb-16" direction="up">
          <div className="flex justify-center mb-6">
            <Badge variant="red" icon={<AlertTriangle className="w-full h-full" />}>
              Ponto de Atenção
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase">
            O erro que quase todo <br />
            <span className="relative inline-block text-red-500 font-chawp">
              CONCURSEIRO COMETE
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light">
            A maioria estuda português da forma errada:
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {problems.map((problem, index) => (
            <FadeInSection key={index} delay={index * 0.1} direction="up">
              <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl flex items-center gap-5 transition-all duration-300 h-full">
                <div className="bg-red-500/10 p-2 rounded-lg shrink-0 transition-colors">
                   <X className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-md md:text-lg text-gray-300 transition-colors">{problem}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection direction="up" delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 transform rotate-1 mx-auto max-w-4xl">
            {/* Background Paper */}
            <img 
              src="/Paper.png" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
            />
            
            <div className="relative z-10 pt-24 px-6 pb-10 md:p-14 text-center">
              <h3 className="text-2xl md:text-4xl font-chawp text-black mb-4 md:mb-6 leading-snug tracking-wide">
                Concursos não cobram teoria. <br className="hidden md:block"/>
                <span className="text-red-700">COBRAM APLICAÇÃO.</span>
              </h3>
              <p className="text-zinc-800 font-chawp text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                E é exatamente isso que quase ninguém ensina. O método tradicional foca no "quê", nós focamos no "como".
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Problem;
