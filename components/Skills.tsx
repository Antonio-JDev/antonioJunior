
import React from 'react';
import Section from './Section';
import { type Skill, type SkillCategory } from '../types';

interface SkillsProps {
  skills: Record<SkillCategory, Skill[]>;
}

const SkillCard: React.FC<{ title: SkillCategory, skills: Skill[] }> = ({ title, skills }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full border border-gray-700 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-400/50">
    <h3 className="text-xl font-bold text-cyan-400 mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-300 flex items-center">
          <svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {skill.name}
        </li>
      ))}
    </ul>
  </div>
);

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories = Object.keys(skills) as SkillCategory[];

  return (
    <Section id="skills" title="Habilidades Técnicas">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <SkillCard key={category} title={category} skills={skills[category]} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;