
import React from 'react';
import Section from './Section';
import { type Project } from '../types';
import GithubIcon from './icons/GithubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2">
    <div className="relative">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
      {project.status === 'em desenvolvimento' && (
        <div className="absolute top-3 right-3 bg-yellow-500/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
          Em Desenvolvimento
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>
      <p className="text-gray-400 mb-4">{project.description}</p>
      {project.progress !== undefined && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-400">Progresso</span>
            <span className="text-sm font-semibold text-cyan-400">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div className="flex space-x-4">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <ExternalLinkIcon className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <Section id="projects" title="Projetos">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
