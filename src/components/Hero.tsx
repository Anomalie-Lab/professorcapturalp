import { PlayCircle, Users, Clock, ArrowRight } from 'lucide-react';
import Counter from './Counter';
import { motion } from 'framer-motion';

const Hero = () => {
  const stats = [
    {
      icon: <PlayCircle className="w-10 h-10 text-white" />,
      value: "+200",
      label: "Aulas Gravadas"
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      value: "+10.000",
      label: "Alunos Aprovados"
    },
    {
      icon: <Clock className="w-10 h-10 text-white" />,
      value: "+200h",
      label: "de Conteúdo"
    }
  ];

  return (
    <section className="bg-black bg-[url('/Prancheta%202.png')] md:bg-[url('/Prancheta%201.png')] bg-cover bg-center bg-no-repeat text-white pt-8 md:pt-12 pb-0 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex-grow flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 flex-grow">
          
          <div className="flex flex-col gap-12 justify-start pb-12 lg:pb-0 pt-12 lg:pt-0 text-center lg:text-left">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img 
                src="/logo2.png" 
                alt="Português Operacional" 
                className="w-40 md:w-56 h-auto drop-shadow-xl block mx-auto lg:mx-0 lg:-ml-8 -mb-8 md:-mb-12" 
              />
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                DOMINE O <br />
                <span className="relative inline-block text-yellow-500 font-chawp">
                  PORTUGUÊS
                </span> <br />
                PARA CONCURSOS
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg font-light mx-auto lg:mx-0 mb-10">
                Faça parte de um grupo que transforma o português em vantagem real. Aprenda gramática, interpretação eredação de forma objetiva e estratégica.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6">
                <button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20 whitespace-nowrap">
                  QUERO COMEÇAR AGORA
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-3 text-sm text-gray-500">
                   <div className="h-px bg-zinc-800 w-8 md:w-12"></div>
                   <p className="italic font-medium text-white font-chawp whitespace-nowrap">Mesmo começando do zero</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-2 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center justify-center text-center p-2 md:p-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.2) }}
                >
                  <div className="mb-2 md:mb-3 flex justify-center text-white">
                    {/* Responsive icon size */}
                    <div className="[&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10">
                      {stat.icon}
                    </div>
                  </div>
                  <h4 className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2 tracking-tight font-chawp drop-shadow-lg">
                    <Counter value={stat.value} />
                  </h4>
                  <p className="text-gray-300 font-bold uppercase tracking-wider text-[10px] md:text-sm font-chawp leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-end h-full">
            <motion.img 
              src="/professor.png" 
              alt="Professor" 
              className="w-full max-w-[500px] lg:max-w-full object-contain drop-shadow-2xl"
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
