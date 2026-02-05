import React from 'react';
import { CheckCircle2 } from 'lucide-react';

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
           
           <div className="relative bg-black border border-zinc-800 rounded-3xl p-10">
             <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-black text-lg shadow-lg shadow-yellow-500/20 shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Método Direto</h4>
                    <p className="text-gray-400 leading-relaxed">Sem enrolação teórica. Você aprende exatamente o que precisa para marcar o X no lugar certo.</p>
                  </div>
                </div>
                
                <div className="w-full h-px bg-zinc-800/50"></div>
                
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white text-lg shrink-0 border border-zinc-700">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Foco na Banca</h4>
                    <p className="text-gray-400 leading-relaxed">Entenda o padrão de cobrança das principais bancas e pare de cair em pegadinhas.</p>
                  </div>
                </div>
                
                <div className="w-full h-px bg-zinc-800/50"></div>
                
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white text-lg shrink-0 border border-zinc-700">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Interpretação</h4>
                    <p className="text-gray-400 leading-relaxed">Técnicas de leitura dinâmica e identificação de palavras-chave para ganhar tempo.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-xs font-semibold tracking-widest uppercase mb-6">
            Diferenciais
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            O <span className="relative inline-block text-yellow-500">
              Português Operacional
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-yellow-500" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00025 5.5C14.5002 8 22.0002 2.5 34.0002 5.5C46.0002 8.5 53.0002 2.5 65.0002 5.5C77.0002 8.5 84.0002 2.5 96.0002 5.5C108.0002 8.5 115.0002 2.5 127.0002 5.5C139.0002 8.5 146.0002 2.5 158.0002 5.5C170.0002 8.5 177.0002 2.5 189.0002 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span> é um método prático e direto.
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
            Criado para quem precisa de resultados rápidos e não pode perder tempo com teorias que não resolvem questões.
          </p>
          
          <div className="space-y-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="bg-yellow-500/10 p-1 rounded-full group-hover:bg-yellow-500/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="pl-6 border-l-2 border-yellow-500">
            <p className="text-gray-400 italic font-light">
              "Há mais de 10 anos ajudando candidatos a evoluir em provas reais."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
