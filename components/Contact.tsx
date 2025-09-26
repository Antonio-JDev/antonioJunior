import React from 'react';
import Section from './Section';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';
import InstagramIcon from './icons/InstagramIcon';

interface ContactProps {
  contactInfo: {
    email: string;
    linkedin: string;
    github: string;
    instagram?: string;
  };
  name: string;
}

const Contact: React.FC<ContactProps> = ({ contactInfo, name }) => {
  return (
    <Section id="contact" title="Contato">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-300 mb-8">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
        </p>
        <div className="flex justify-center items-center space-x-8 mb-8">
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-cyan-400 transition-transform transform hover:scale-110">
            <GithubIcon className="w-10 h-10" />
          </a>
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-cyan-400 transition-transform transform hover:scale-110">
            <LinkedinIcon className="w-10 h-10" />
          </a>
          {contactInfo.instagram && (
             <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-cyan-400 transition-transform transform hover:scale-110">
                <InstagramIcon className="w-10 h-10" />
             </a>
          )}
          <a href={`mailto:${contactInfo.email}`} aria-label="Email" className="text-gray-400 hover:text-cyan-400 transition-transform transform hover:scale-110">
            <MailIcon className="w-10 h-10" />
          </a>
        </div>
        <div className="text-gray-500 mt-12 border-t border-gray-700 pt-6">
          <p>&copy; {new Date().getFullYear()} {name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;