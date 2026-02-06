import { CheckCircle2 } from 'lucide-react';
import Badge from './Badge';
import FadeInSection from './animations/FadeInSection';

const Solution = () => {
  const benefits = [
    "Interpretar textos com precisão",
    "Resolver questões com segurança",
    "Parar de errar \"sem saber por quê\"",
    "Ganhar confiança e subir a nota em português"
  ];

  return (
    <section className="bg-zinc-900/50 py-24 px-4 md:px-8 relative overflow-hidden border-y border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
           
           <FadeInSection direction="right">
             <div className="relative rounded-3xl p-12 overflow-hidden shadow-2xl shadow-black/50 transform -rotate-1">
               {/* Background Paper */}
               <img 
                 src="/Paper.png" 
                 alt="" 
                 className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
               />
               
               {/* Content Container - Adjusted for paper margins */}
               <div className="relative z-10 space-y-2 md:space-y-6 pl-5 pr-3 pt-14 pb-6 md:pl-6 md:pr-4 md:pt-16 md:pb-8">
                  <div className="flex items-start gap-3 group">
                    <div className="mt-2 w-2.5 h-2.5 rounded-full bg-black shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-lg md:text-xl font-chawp text-black mb-1 tracking-wide">Método Direto</h4>
                      <p className="font-chawp text-zinc-800 text-sm md:text-base leading-snug">Sem enrolação teórica. Você aprende exatamente o que precisa para marcar o X no lugar certo.</p>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-black/10 border-b border-dashed border-black/20"></div>
                  
                  <div className="flex items-start gap-3 group">
                    <div className="mt-2 w-2.5 h-2.5 rounded-full bg-black shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-lg md:text-xl font-chawp text-black mb-1 tracking-wide">Foco na Banca</h4>
                      <p className="font-chawp text-zinc-800 text-sm md:text-base leading-snug">Entenda o padrão de cobrança das principais bancas e pare de cair em pegadinhas.</p>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-black/10 border-b border-dashed border-black/20"></div>
                  
                  <div className="flex items-start gap-3 group">
                    <div className="mt-2 w-2.5 h-2.5 rounded-full bg-black shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-lg md:text-xl font-chawp text-black mb-1 tracking-wide">Interpretação</h4>
                      <p className="font-chawp text-zinc-800 text-sm md:text-base leading-snug">Técnicas de leitura dinâmica e identificação de palavras-chave para ganhar tempo.</p>
                    </div>
                  </div>
               </div>
             </div>
           </FadeInSection>
        </div>
        
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <FadeInSection direction="left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Badge>Diferenciais</Badge>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase">
              O <span className="text-yellow-500 font-chawp">
                PORTUGUÊS OPERACIONAL
              </span> <br />
              é um método prático e direto.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Criado para quem precisa de resultados rápidos e não pode perder tempo com teorias que não resolvem questões.
            </p>
            
            <div className="space-y-4 mb-10 inline-block text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="bg-yellow-500/10 p-1 rounded-full group-hover:bg-yellow-500/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Solution;
