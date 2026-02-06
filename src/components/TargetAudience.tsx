import { ArrowRight } from 'lucide-react';
import Badge from './Badge';
import FadeInSection from './animations/FadeInSection';

const TargetAudience = () => {
  const audience = [
    {
      id: 1,
      title: "Precisa de clareza",
      desc: "Precisa de um método claro e aplicável para estudar."
    },
    {
      id: 2,
      title: "Concurseiros",
      desc: "Vai fazer concurso público (militar ou civil)."
    },
    {
      id: 3,
      title: "Busca Nota Alta",
      desc: "Quer nota alta, não só “entender a matéria” superficialmente."
    },
    {
      id: 4,
      title: "Estagnado",
      desc: "Já estudou português, mas não vê evolução nas notas."
    },
    {
      id: 5,
      title: "Com Dificuldade",
      desc: "Tem dificuldade com gramática ou interpretação de texto."
    }
  ];

  return (
    <section className="bg-black py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-24 mb-8 lg:mb-0 relative z-20 text-center lg:text-left">
          <FadeInSection direction="right">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Badge>Quem faz acontecer</Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight uppercase">
              O Português Operacional <br />
              é para <span className="relative inline-block text-yellow-500 font-chawp">
                você que:
              </span>
            </h2>
            
            <p className="text-lg mb-12 font-light leading-relaxed text-gray-300">
              Se você quer estudar com <span className='font-glitch font-bold'>"maldade de prova"</span> e focar apenas no que realmente importa, você está no lugar certo.
            </p>
            
            <button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 group uppercase mx-auto lg:mx-0">
              Quero dominar o português
              <ArrowRight className="w-5 h-5" />
            </button>
          </FadeInSection>
        </div>

        <div className="space-y-4 relative z-10">
          {audience.map((item, index) => (
            <FadeInSection key={item.id} direction="left" delay={index * 0.1}>
              <div className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-2xl flex gap-6 items-center transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-lg shrink-0 transition-colors duration-300">
                  {item.id}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 transition-colors font-chawp">{item.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
