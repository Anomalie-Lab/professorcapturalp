import { ArrowRight } from 'lucide-react';

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
        <div className="lg:sticky lg:top-24 mb-8 lg:mb-0 relative z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
            Para quem é
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            O Português Operacional <br />
            é para <span className="relative inline-block text-yellow-500">
              você que:
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-yellow-500" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00025 5.5C14.5002 8 22.0002 2.5 34.0002 5.5C46.0002 8.5 53.0002 2.5 65.0002 5.5C77.0002 8.5 84.0002 2.5 96.0002 5.5C108.0002 8.5 115.0002 2.5 127.0002 5.5C139.0002 8.5 146.0002 2.5 158.0002 5.5C170.0002 8.5 177.0002 2.5 189.0002 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed">
            Se você quer estudar com <span className='text-white font-semibold'>"maldade de prova"</span> e focar apenas no que realmente importa, você está no lugar certo.
          </p>
          
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 group uppercase">
            Quero dominar o português
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 relative z-10">
          {audience.map((item) => (
            <div key={item.id} className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-2xl flex gap-6 items-center hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-lg shrink-0 group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
                {item.id}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-500 transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
