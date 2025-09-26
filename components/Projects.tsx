
import React from 'react';
import Section from './Section';
import { type Project } from '../types';
import GithubIcon from './icons/GithubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex space-x-4">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="text-gray-400 hover:text-cyan-400 transition-colors">
          <GithubIcon className="w-6 h-6" />
        </a>
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
