import React from 'react';
import DownloadIcon from './icons/DownloadIcon';

interface HeroProps {
  name: string;
  role: string;
  impactPhrase: string;
  avatarUrl: string;
  cvUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ name, role, impactPhrase, avatarUrl, cvUrl = '/portfolio-01/assets/cv/CV-Antonio-junior-FullStack.pdf' }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        
        {/* Text Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white animate-fade-in-down">
              {name}
            </h1>
            <p className="text-2xl lg:text-3xl text-cyan-400 font-semibold">
              {role}
            </p>
            <p className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
              {impactPhrase}
            </p>
            <div className="flex justify-center md:justify-start space-x-4 pt-4">
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="bg-cyan-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Ver Projetos
              </a>
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white font-semibold py-3 px-8 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <DownloadIcon className="w-5 h-5" />
                Acessar CV
              </a>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center order-1 md:order-2">
           <div className="relative w-72 h-72 lg:w-96 lg:h-96">
             {/* Brilho reduzido ao redor */}
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-xl opacity-20"></div>
             
             {/* Background animado preto para azul */}
             <div 
               className="absolute inset-0 rounded-full"
               style={{
                 background: 'linear-gradient(135deg, #000000, #2563eb)',
                 backgroundSize: '200% 200%',
                 animation: 'gradientShift 8s ease infinite'
               }}
             ></div>
             
             <img 
               src={avatarUrl} 
               alt={name} 
               className="relative w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-2xl z-10"
             />
           </div>
        </div>

        {/* Animação CSS */}
        <style>{`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          @keyframes bounceDown {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(10px);
            }
          }
        `}</style>

      </div>

      {/* Seta para baixo animada */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#projects"
          onClick={(e) => handleNavClick(e, '#projects')}
          className="flex flex-col items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group"
        >
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100">Role para baixo</span>
          <svg 
            className="w-8 h-8"
            style={{ animation: 'bounceDown 2s ease-in-out infinite' }}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;