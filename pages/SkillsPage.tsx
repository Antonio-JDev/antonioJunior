import React from 'react';
import { type Skill, type SkillCategory } from '../types';

interface SkillsPageProps {
  skills: Record<SkillCategory, Skill[]>;
}

const SkillsPage: React.FC<SkillsPageProps> = ({ skills }) => {
  const categories = Object.keys(skills) as SkillCategory[];

  return (
    <div className="container mx-auto px-6 md:px-12 py-20">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Minhas <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Habilidades</span>
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Tecnologias e ferramentas que domino para criar soluções completas e eficientes
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category} 
              className="bg-gray-800/50 rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/70"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4 border-b border-gray-700 pb-3">
                {category}
              </h3>
              <ul className="space-y-3">
                {skills[category].map((skill, index) => (
                  <li 
                    key={index} 
                    className="text-gray-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-8 border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Aprendizado Contínuo</h3>
          <p className="text-gray-300 leading-relaxed">
            Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades existentes. 
            Acredito que o desenvolvimento profissional é uma jornada constante de evolução e adaptação às 
            novas demandas do mercado de tecnologia.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;

