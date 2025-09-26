import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { type Skill, type Project, type SkillCategory } from './types';


const personalData = {
  name: "Antonio Junior dos Santos",
  role: "Desenvolvedor Full-Stack",
  impactPhrase: "Construindo soluções digitais inovadoras do back-end ao front-end.",
  avatarUrl: "assets/images/foto-perfil.png",
  about: "Sou um desenvolvedor apaixonado por tecnologia e por criar aplicações web eficientes e escaláveis. Com experiência em todo o ciclo de desenvolvimento, tenho um perfil proativo e colaborativo, sempre focado em transformar ideias em realidade. Minha experiência no setor administrativo me concedeu uma visão de regra de negócios onde consigo levantar requisitos entender a necessidade do cliente e adaptar o pensamento analítico para implementar uma solução utilizando as minhas ferramentas de desenvolvimento.  Estou cursando o 3° periodo de Análises e desenvolvimento de sistemas e venho desenvolvendo desde que iniciei os estudos. Sempre buscando ampliar meus conhecimentos para entregar soluções que trarão acessibilidade no ambiente de trabalho. ",
  contact: {
    email: "antoniojrtech@gmail.com",
    linkedin: "https://www.linkedin.com/in/antonio-jdev/",
    github: "https://github.com/Antonio-JDev",
    instagram: "https://www.instagram.com/dev_antoniojr/",
  }
};

const skillsData: Record<SkillCategory, Skill[]> = {
  'Frontend': [
    { name: 'React' },
    { name: 'TypeScript' },
    { name: 'JavaScript (ES6+)' },
    { name: 'HTML5' },
    { name: 'CSS3 & Tailwind' },
    { name: 'Next.js' },
  ],
  'Backend': [
    { name: 'Node.js' },
    { name: 'Express.js' },
    { name: 'REST APIs' },
  ],
  'Banco de Dados': [
    { name: 'PostgreSQL' },
    { name: 'MongoDB' },
    { name: 'SQL' },
    { name: 'Redis' },
    { name: 'Prisma' },
  ],
  'Ferramentas': [
    { name: 'Git & GitHub' },
    { name: 'Docker' },
    { name: 'VS Code' },
    { name: 'Vite' },
    { name: 'CI/CD' },
  ],
  'Análise & Suporte': [
    { name: 'Modelagem de Dados (ER, DER, MER)' },
    { name: 'Levantamento de Requisitos' },
    { name: 'Pensamento Analítico' },
    { name: 'Windows & Suporte Técnico' },
    { name: 'Infraestrutura & Redes' },
    { name: 'Inteligência Artificial' },
  ],
};

const projectsData: Project[] = [
  {
    title: "App de Previsão do Tempo",
    description: "Uma aplicação simples para consultar o clima de uma cidade em tempo real, utilizando uma API de previsão do tempo para fornecer dados como umidade e velocidade do vento.",
    imageUrl: "/portfolio-01/assets/images/App-tempo.png",
    githubUrl: "https://github.com/Antonio-JDev/projeto-tempo",
    liveUrl: "https://antonio-jdev.github.io/projeto-tempo/",
    tags: ["JavaScript", "HTML5", "CSS3", "API Rest"]
  },
  {
    title: "S3E Engenharia Website",
    description: "Site institucional para a empresa S3E Engenharia, apresentando seus serviços, portfólio de projetos e informações de contato. Desenvolvido com foco em um design limpo e profissional.",
    imageUrl: "/portfolio-01/assets/images/S3e-engenharia.png",
    githubUrl: "https://github.com/Antonio-JDev/S3E-engenharia-WebSite",
    liveUrl: "https://s3eengenharia.com.br/",
    tags: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "PD Gesso & Drywall Website",
    description: "Site institucional para a empresa PD Gesso & Drywall, apresentando seus serviços, projetos e informações de contato, com um design moderno e profissional.",
    imageUrl: "/portfolio-01/assets/images/Pdgesso.png",
    githubUrl: "https://github.com/Antonio-JDev/PD-gesso-drywall",
    liveUrl: "https://pdgessodrywall.com.br/",
    tags: ["HTML5", "CSS3", "JavaScript"]
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <Hero 
          name={personalData.name} 
          role={personalData.role} 
          impactPhrase={personalData.impactPhrase} 
          avatarUrl={personalData.avatarUrl}
        />
        <About content={personalData.about} />
        <Skills skills={skillsData} />
        <Projects projects={projectsData} />
        <Contact contactInfo={personalData.contact} name={personalData.name}/>
      </main>
    </div>
  );
};

export default App;