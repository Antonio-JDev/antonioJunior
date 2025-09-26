import React from 'react';

interface HeroProps {
  name: string;
  role: string;
  impactPhrase: string;
  avatarUrl: string;
}

const Hero: React.FC<HeroProps> = ({ name, role, impactPhrase, avatarUrl }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
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
                className="bg-cyan-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Ver Projetos
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-gray-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center order-1 md:order-2">
           <div className="relative w-72 h-72 lg:w-96 lg:h-96">
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-50"></div>
             <img 
               src={avatarUrl} 
               alt={name} 
               className="relative w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-2xl"
             />
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;