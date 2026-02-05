import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-black pt-20 pb-10 px-4 md:px-8 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          Entre agora mesmo no nosso <br />
          <span className="relative inline-block text-yellow-500">
            grupo exclusivo
            <svg className="absolute w-full h-3 -bottom-2 left-0 text-yellow-500" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.00025 5.5C14.5002 8 22.0002 2.5 34.0002 5.5C46.0002 8.5 53.0002 2.5 65.0002 5.5C77.0002 8.5 84.0002 2.5 96.0002 5.5C108.0002 8.5 115.0002 2.5 127.0002 5.5C139.0002 8.5 146.0002 2.5 158.0002 5.5C170.0002 8.5 177.0002 2.5 189.0002 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </span>
        </h2>
        
        <div className="flex flex-col items-center justify-center gap-6 mb-16">
          <button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-5 px-10 rounded-lg text-lg transition-all duration-300 cursor-pointer shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/30 flex items-center justify-center gap-3">
            QUERO SER APROVADO!
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-gray-500 text-sm mt-2">
            <span className='text-white'>Vagas limitadas.</span> Não perca essa oportunidade.
          </p>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Português Operacional. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <p>Designed by Merci</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
