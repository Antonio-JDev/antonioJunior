
import React from 'react';
import Section from './Section';

interface AboutProps {
  content: string;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <Section id="about" title="Sobre Mim">
      <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg md:text-xl leading-relaxed">
        <p>{content}</p>
      </div>
    </Section>
  );
};

export default About;
