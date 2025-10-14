import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';
import { type Project } from '../types';

interface HomeProps {
  personalData: {
    name: string;
    role: string;
    impactPhrase: string;
    avatarUrl: string;
    cvUrl?: string;
    contact: {
      email: string;
      linkedin: string;
      github: string;
      instagram: string;
    };
  };
  projects: Project[];
}

const Home: React.FC<HomeProps> = ({ personalData, projects }) => {
  return (
    <div>
      <div className="container mx-auto px-6 md:px-12">
        <Hero 
          name={personalData.name} 
          role={personalData.role} 
          impactPhrase={personalData.impactPhrase} 
          avatarUrl={personalData.avatarUrl}
          cvUrl={personalData.cvUrl}
        />
        <Projects projects={projects} />
      </div>
      <Services />
      <div className="container mx-auto px-6 md:px-12">
        <Contact contactInfo={personalData.contact} name={personalData.name}/>
      </div>
    </div>
  );
};

export default Home;

