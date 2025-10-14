import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/portfolio-01/', label: 'Início' },
    { href: '/portfolio-01/sobre', label: 'Sobre' },
    { href: '/portfolio-01/habilidades', label: 'Habilidades' },
  ];

  const isActive = (path: string) => {
    if (path === '/portfolio-01/') {
      return location.pathname === '/portfolio-01/' || location.pathname === '/portfolio-01';
    }
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <Link to="/portfolio-01/" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
          &lt;AJ /&gt;
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              to={link.href}
              className={`font-medium transition-colors ${
                isActive(link.href) 
                  ? 'text-cyan-400' 
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Mobile menu could be added here if needed */}
      </div>
    </header>
  );
};

export default Header;