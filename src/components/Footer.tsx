import { ArrowRight } from 'lucide-react';
import FadeInSection from './animations/FadeInSection';

const Footer = () => {
  return (
    <footer className="bg-black bg-[url('/Prancheta%202.png')] md:bg-[url('/Prancheta%201.png')] bg-cover bg-center bg-no-repeat pt-20 pb-10 px-4 md:px-8 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection direction="up">
          <div className="flex justify-center">
             <img src="/logo2.png" alt="Português Operacional" className="w-40 md:w-56 h-auto opacity-90" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 uppercase">
            Entre agora mesmo no nosso <br />
            <span className="relative inline-block text-yellow-500 font-chawp">
              grupo exclusivo
            </span>
          </h2>
          
          <div className="flex flex-col items-center justify-center gap-6 mb-16">
            <button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-5 px-10 rounded-lg text-lg transition-all duration-300 cursor-pointer shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/30 flex items-center justify-center gap-3">
              QUERO SER APROVADO!
              <ArrowRight className="w-6 h-6" />
            </button>
            <p className="text-gray-400 text-sm mt-2">
              <span className='font-glitch font-bold'>Vagas limitadas.</span> Não perca essa oportunidade.
            </p>
          </div>
        </FadeInSection>
        
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Português Operacional. Todos os direitos reservados.</p>
          <div className="flex gap-1">
            Designed by <a href="http://grupomerci.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">Merci</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
