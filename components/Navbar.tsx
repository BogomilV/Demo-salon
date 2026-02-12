
import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Начало', id: 'hero' },
    { label: 'Услуги', id: 'services' },
    { label: 'Академия', id: 'academy' },
    { label: 'Портфолио', id: 'portfolio' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
        ? 'glass-effect py-2 md:py-3 shadow-md border-b border-plum/5' 
        : 'bg-transparent py-4 md:py-8'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative">
        {/* Logo Area */}
        <div className="flex-shrink-0 relative z-[110]">
          <span 
            className="serif text-base sm:text-lg md:text-2xl font-bold tracking-tighter text-plum cursor-pointer block" 
            onClick={() => scrollTo('hero')}
          >
            NAIL ART <span className="font-normal italic">Bilqna</span>
          </span>
        </div>
        
        {/* Desktop Links - Unified typography (Serif, Sentence Case, No underlining) */}
        <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 px-10 py-3 rounded-full bg-white/90 backdrop-blur-md border border-plum/10 shadow-sm">
          <div className="flex space-x-10 text-[15px] font-medium text-plum serif">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollTo(item.id)} 
                className="hover:opacity-60 transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Button & Toggle */}
        <div className="flex items-center space-x-2 md:space-x-4 relative z-[110]">
          <button 
            onClick={() => scrollTo('booking')}
            className="bg-plum text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-widest uppercase hover:shadow-lg transition-all active:scale-95 flex-shrink-0"
          >
            Запази час
          </button>

          <div className="relative" ref={menuRef}>
            <button 
              className={`lg:hidden w-10 h-10 md:w-12 md:h-12 flex items-center justify-center focus:outline-none transition-all rounded-full bg-white/90 border border-plum/20 text-plum shadow-sm ${
                isMenuOpen ? 'ring-2 ring-plum/10' : ''
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <div className="w-4 h-3.5 relative flex flex-col justify-between">
                  <span className="w-full h-0.5 bg-current transition-all"></span>
                  <span className="w-full h-0.5 bg-current transition-all"></span>
                  <span className="w-full h-0.5 bg-current transition-all"></span>
                </div>
              )}
            </button>

            {/* Mobile Dropdown Menu */}
            <div 
              className={`lg:hidden absolute top-[calc(100%+12px)] right-0 w-60 bg-white border border-plum/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-top-right ${
                isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
              }`}
            >
              <div className="p-3 flex flex-col">
                {navItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollTo(item.id)} 
                    className="text-left px-5 py-3.5 text-base serif italic text-plum hover:bg-lavender/30 rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
