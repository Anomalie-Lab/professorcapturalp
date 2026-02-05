import React from 'react';
import { ArrowRight } from 'lucide-react';

const Instructor = () => {
  return (
    <section className="bg-zinc-900 py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Placeholder */}
        <div className="relative h-[600px] order-2 lg:order-1 flex items-end justify-center group">
            <div className="absolute inset-x-0 bottom-0 h-[90%] bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-700/50">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent opacity-80"></div>
            </div>
            
            <img 
              src="/professor.png" 
              alt="Professor Especialista" 
              className="relative z-10 h-[120%] object-contain object-bottom -mb-px"
            />
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <div className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-xs font-semibold tracking-widest uppercase mb-4">
              Quem faz acontecer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Professor <span className="relative inline-block text-yellow-500">
                Especialista
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-yellow-500" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.00025 5.5C14.5002 8 22.0002 2.5 34.0002 5.5C46.0002 8.5 53.0002 2.5 65.0002 5.5C77.0002 8.5 84.0002 2.5 96.0002 5.5C108.0002 8.5 115.0002 2.5 127.0002 5.5C139.0002 8.5 146.0002 2.5 158.0002 5.5C170.0002 8.5 177.0002 2.5 189.0002 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-yellow-500/80 font-medium text-lg">
              Mais de 10 anos preparando candidatos para concursos públicos
            </p>
          </div>

          <div className="space-y-6 text-gray-400 leading-relaxed font-light text-lg">
            <p>
              Com uma metodologia única desenvolvida ao longo de uma década, nosso mentor já ajudou mais de 
              <strong className="text-white font-semibold"> 10.000 candidatos</strong> a conquistarem suas aprovações em concursos de todo o Brasil.
            </p>
            <p>
              Especialista em transformar gramática complexa em conhecimento prático e aplicável, ele conhece profundamente as bancas e sabe exatamente o que cai em cada prova.
            </p>
            
            <div className="bg-black/30 border-l-2 border-yellow-500 p-6 rounded-r-xl">
                <p className="text-gray-300">
                    Sua abordagem <strong className="text-white font-semibold">"operacional"</strong> elimina o estudo desnecessário e foca exclusivamente no que você precisa saber para gabaritar.
                </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-800/50">
            <div>
                <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Anos de XP</div>
            </div>
            <div>
                <div className="text-3xl md:text-4xl font-bold text-white">10k+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Aprovados</div>
            </div>
            <div>
                <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Foco</div>
            </div>
          </div>

          <button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20">
            QUERO APRENDER COM O ESPECIALISTA
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
