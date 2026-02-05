import { PlayCircle, Users, Clock } from 'lucide-react';

const Stats = () => {
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
    <section className="bg-black border-b border-zinc-900 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors duration-300">
              <div className="mb-5 p-4 bg-yellow-500/10 rounded-full border border-yellow-500/20">
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

export default Stats;
