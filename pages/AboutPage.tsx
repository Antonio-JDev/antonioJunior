import React from 'react';

interface AboutPageProps {
  content: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ content }) => {
  // Dividir o conteúdo em 3 parágrafos
  const paragraphs = [
    "Sou um desenvolvedor apaixonado por tecnologia e por criar aplicações web eficientes e escaláveis. Com experiência em todo o ciclo de desenvolvimento, tenho um perfil proativo e colaborativo, sempre focado em transformar ideias em realidade.",
    "Minha experiência no setor administrativo me concedeu uma visão de regra de negócios onde consigo levantar requisitos, entender a necessidade do cliente e adaptar o pensamento analítico para implementar uma solução utilizando as minhas ferramentas de desenvolvimento.",
    "Estou cursando o 3° período de Análise e Desenvolvimento de Sistemas e venho desenvolvendo desde que iniciei os estudos. Sempre buscando ampliar meus conhecimentos para entregar soluções que trarão acessibilidade no ambiente de trabalho."
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 py-20">
      <section className="max-w-5xl mx-auto">
        {/* Título com decoração */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-8 mb-4">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mim</span>
          </h1>
          <p className="text-gray-400 text-lg">Conheça mais sobre minha jornada e experiência</p>
        </div>

        {/* Blocos de parágrafos com design moderno */}
        <div className="space-y-6 mb-16">
          {paragraphs.map((paragraph, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Decoração lateral animada */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
              
              {/* Card do parágrafo */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-800/30 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  {/* Ícone numérico decorativo */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/30">
                    {index + 1}
                  </div>
                  
                  {/* Texto do parágrafo */}
                  <p className="text-gray-300 text-lg leading-relaxed flex-1 pt-2">
                    {paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divisor decorativo */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full max-w-md"></div>
        </div>
        
        {/* Estatísticas com animação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-gray-800/80 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-cyan-500/50">
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                +1
              </div>
              <div className="text-gray-400 font-medium">Ano de Estudo</div>
              <div className="mt-3 h-1 w-16 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-gray-800/80 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-cyan-500/50">
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                +5
              </div>
              <div className="text-gray-400 font-medium">Projetos Feitos</div>
              <div className="mt-3 h-1 w-16 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-gray-800/80 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-cyan-500/50">
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-400 font-medium">Dedicação</div>
              <div className="mt-3 h-1 w-16 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Citação motivacional */}
        <div className="mt-16 relative">
          <div className="absolute -top-6 left-8 text-6xl text-cyan-500/20 font-serif">"</div>
          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 md:p-10 border border-cyan-500/20">
            <p className="text-xl md:text-2xl text-gray-300 italic text-center relative z-10">
              Transformando linhas de código em soluções que fazem a diferença
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

