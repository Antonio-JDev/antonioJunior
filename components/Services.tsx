import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Desenvolvimento Full-Stack",
      description: "Criação de aplicações web completas, do front-end ao back-end, com tecnologias modernas e escaláveis para transformar suas ideias em realidade digital."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Sistemas de Gestão",
      description: "Desenvolvimento de sistemas personalizados para otimizar processos, automatizar tarefas e aumentar a produtividade do seu negócio."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Identidade Visual Digital",
      description: "Criação de sites institucionais modernos e responsivos que refletem a essência da sua marca e fortalecem sua presença online."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Soluções Inovadoras",
      description: "Análise de requisitos e desenvolvimento de soluções criativas adaptadas às necessidades específicas do seu negócio."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Otimização de Processos",
      description: "Identificação de gargalos e implementação de soluções tecnológicas para tornar seus processos mais eficientes e ágeis."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Consultoria Técnica",
      description: "Orientação especializada em arquitetura de software, escolha de tecnologias e melhores práticas de desenvolvimento."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O que posso fazer por{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                você?
              </span>
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
          </div>
          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
            Uno conhecimento técnico e criatividade para entregar soluções inovadoras que 
            contribuem com seu dia a dia, otimizam processos e fortalecem sua identidade visual.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Card */}
              <div className="relative bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Ícone */}
                <div className="mb-6 text-cyan-400 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                {/* Descrição */}
                <p className="text-gray-400 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Linha decorativa */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-8 md:p-12 border border-cyan-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para transformar suas ideias em realidade?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Vamos conversar sobre como posso ajudar a impulsionar seu projeto com soluções 
              tecnológicas eficientes e inovadoras.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.querySelector('#contact');
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-10 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

