import { ArrowRight, PlayCircle, Users, Clock, User, Phone, Mail, Lock } from 'lucide-react';

const Hero = () => {
  const stats = [
    {
      icon: <PlayCircle className="w-8 h-8 text-yellow-500" />,
      value: "+200",
      label: "Aulas Gravadas"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      value: "+10.000",
      label: "Alunos Aprovados"
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      value: "+200h",
      label: "de Conteúdo"
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col justify-center relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
            Método Exclusivo
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            DOMINE O <br />
            <span className="text-black bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 px-2">PORTUGUÊS</span> <br />
            PARA CONCURSOS
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-lg font-light">
            Faça parte de um grupo que transforma o português em vantagem real. 
            Aprenda gramática, interpretação e redação de forma objetiva e estratégica.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
             <div className="h-px bg-zinc-800 flex-1"></div>
             <div className="relative">
                <p className="italic font-medium text-white relative z-10">Mesmo começando do zero</p>
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-yellow-500" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.00025 5.5C14.5002 8 22.0002 2.5 34.0002 5.5C46.0002 8.5 53.0002 2.5 65.0002 5.5C77.0002 8.5 84.0002 2.5 96.0002 5.5C108.0002 8.5 115.0002 2.5 127.0002 5.5C139.0002 8.5 146.0002 2.5 158.0002 5.5C170.0002 8.5 177.0002 2.5 189.0002 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
             </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-zinc-700 transition-colors duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600"></div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2 uppercase">Garanta sua vaga</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Preencha seus dados para entrar no <span className="text-white font-medium">grupo exclusivo</span> e receber todas as informações.
            </p>
          </div>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Nome completo</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-yellow-500 transition-colors duration-300" />
                <input 
                  type="text" 
                  id="name"
                  placeholder="Digite seu nome" 
                  className="w-full pl-12 pr-4 py-3.5 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 text-white placeholder-zinc-600 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="whatsapp" className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">WhatsApp</label>
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-yellow-500 transition-colors duration-300" />
                <input 
                  type="tel" 
                  id="whatsapp"
                  placeholder="(DDD) 99999-9999" 
                  className="w-full pl-12 pr-4 py-3.5 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 text-white placeholder-zinc-600 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">E-mail</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-yellow-500 transition-colors duration-300" />
                <input 
                  type="email" 
                  id="email"
                  placeholder="seu@email.com" 
                  className="w-full pl-12 pr-4 py-3.5 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 text-white placeholder-zinc-600 transition-all duration-300"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mt-4 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20"
            >
              ENTRAR NO GRUPO
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="flex items-center justify-center gap-2 mt-8 text-zinc-400">
              <Lock className="w-3 h-3" />
              <p className="text-[10px] uppercase tracking-widest">
                Seus dados estão 100% seguros
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-black border border-zinc-800 hover:border-yellow-500/30 transition-colors duration-300 group">
            <div className="mb-5 p-4 bg-yellow-500/5 rounded-full border border-yellow-500/10 group-hover:bg-yellow-500/10 transition-colors">
              {stat.icon}
            </div>
            <h4 className="text-4xl font-bold text-white mb-2 tracking-tight">{stat.value}</h4>
            <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
          </div>
        ))}
      </div>
      
      </div>
    </section>
  );
};

export default Hero;
