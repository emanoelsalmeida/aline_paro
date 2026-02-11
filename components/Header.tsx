
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Abordagem', href: '#abordagem' },
    { label: 'Consultas', href: '#consultas' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold text-stone-800 tracking-tight">
          Dra. Aline Paro
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-stone-600 hover:text-emerald-700 transition-colors font-medium">
              {link.label}
            </a>
          ))}
          <a href="#contato" className="bg-emerald-700 text-white px-6 py-2.5 rounded-full hover:bg-emerald-800 transition-all transform hover:scale-105 shadow-md">
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-stone-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-b border-stone-100 shadow-xl py-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-lg text-stone-700 py-2 border-b border-stone-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contato" 
              className="bg-emerald-700 text-white text-center px-6 py-4 rounded-xl mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
