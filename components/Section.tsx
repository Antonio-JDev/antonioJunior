
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-20 md:py-28 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-cyan-400 rounded-full"></span>
        </h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
