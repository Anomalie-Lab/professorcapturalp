import { X, AlertTriangle } from 'lucide-react';

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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-red-400 font-medium mb-6 bg-red-500/5 px-4 py-1.5 rounded-full border border-red-500/10 text-sm tracking-wide uppercase">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Ponto de Atenção</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            O erro que quase todo <br />
            <span className="relative inline-block text-red-500">
              concurseiro comete
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-red-500" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00025 5.5C14.5002 8 22.0002 2.5 34.0002 5.5C46.0002 8.5 53.0002 2.5 65.0002 5.5C77.0002 8.5 84.0002 2.5 96.0002 5.5C108.0002 8.5 115.0002 2.5 127.0002 5.5C139.0002 8.5 146.0002 2.5 158.0002 5.5C170.0002 8.5 177.0002 2.5 189.0002 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light">
            A maioria estuda português da forma errada:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {problems.map((problem, index) => (
            <div key={index} className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl flex items-center gap-5 hover:bg-zinc-900/50 transition-all duration-300 group hover:border-red-500/20">
              <div className="bg-red-500/10 p-2 rounded-lg shrink-0 group-hover:bg-red-500/20 transition-colors">
                 <X className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-lg text-gray-300 group-hover:text-white transition-colors">{problem}</p>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900/30 border border-zinc-800 p-10 md:p-14 rounded-3xl text-center relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
          
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 relative z-10 leading-snug">
            Concursos não cobram teoria. <br className="hidden md:block"/>
            <span className="text-yellow-500">Cobram aplicação.</span>
          </h3>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto relative z-10">
            E é exatamente isso que quase ninguém ensina. O método tradicional foca no <span className='text-white font-semibold'>"quê"</span>, nós focamos no <span className='text-white font-semibold'>"como".</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
