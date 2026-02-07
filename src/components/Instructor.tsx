import { ArrowRight } from 'lucide-react';
import Counter from './Counter';
import Badge from './Badge';
import FadeInSection from './animations/FadeInSection';

const Instructor = () => {
  return (
    <section className="bg-zinc-900 py-32 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Placeholder */}
        <FadeInSection direction="right" className="relative h-[600px] order-2 lg:order-1 flex items-end justify-center group">
            <div className="absolute inset-x-0 bottom-0 h-[90%]  rounded-3xl overflow-hidden ">
                <img 
                  src="/Paper.png" 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent opacity-80"></div>
                
            </div>
            
            <img 
              src="/professor.png" 
              alt="Professor Especialista" 
              className="relative z-10 h-[120%] object-contain object-bottom -mb-px"
            />
        </FadeInSection>

        <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
          <FadeInSection direction="left">
            <div>
              <div className="mb-4 flex justify-center lg:justify-start">
                <Badge>Quem faz acontecer</Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase">
                Professor <span className="relative inline-block text-yellow-500 font-chawp">
                  Especialista
                </span>
              </h2>
      
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed font-light text-lg md:text-xl">
              <p>
                Com uma metodologia única desenvolvida ao longo de uma década, nosso mentor já ajudou mais de 
                <strong className="font-glitch font-bold"> 10.000 candidatos</strong> a conquistarem suas aprovações em concursos de todo o Brasil.
              </p>
              <div className="bg-black/30 border-l-2 border-yellow-500 p-7 rounded-r-xl">
                  <p className="text-gray-300">
                      Sua abordagem <strong className="font-glitch font-bold">"operacional"</strong> elimina o estudo desnecessário e foca exclusivamente no que você precisa saber para gabaritar.
                  </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 py-6 border-t border-zinc-800/50">
              <div>
                  <div className="text-3xl md:text-4xl font-bold text-white font-chawp">
                    <Counter value="10+" />
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Anos de XP</div>
              </div>
              <div>
                  <div className="text-3xl md:text-4xl font-bold text-white font-chawp">
                    <Counter value="10k+" />
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Aprovados</div>
              </div>
              <div>
                  <div className="text-3xl md:text-4xl font-bold text-white font-chawp">
                    <Counter value="100%" />
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Foco</div>
              </div>
            </div>

            <button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20 mx-auto lg:mx-0 mt-8">
              QUERO APRENDER COM O ESPECIALISTA
              <ArrowRight className="w-5 h-5" />
            </button>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
