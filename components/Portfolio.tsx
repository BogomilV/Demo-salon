
import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('Всички');
  const categories = ['Всички', 'Сватбен', 'Минималистичен', 'Арт', 'Академия'];

  const filteredItems = useMemo(() => {
    return filter === 'Всички' 
      ? PORTFOLIO_ITEMS 
      : PORTFOLIO_ITEMS.filter(item => item.category === filter);
  }, [filter]);

  const getGridClasses = (size: PortfolioItem['size']) => {
    switch (size) {
      case 'large': return 'sm:col-span-2 sm:row-span-2 aspect-square';
      case 'tall': return 'sm:row-span-2 aspect-[3/4]';
      case 'small': return 'aspect-square';
      default: return 'aspect-square';
    }
  };

  return (
    <section id="portfolio" className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10 md:mb-12 space-y-6 lg:space-y-0">
          <div className="text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.5em] text-plum block mb-2 font-bold opacity-60">Нашата Галерия</span>
            <h2 className="text-4xl md:text-6xl text-plum serif italic">Портфолио</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold pb-1 border-b-2 transition-all duration-300 ${
                  filter === cat ? 'border-plum text-plum' : 'border-transparent text-gray-400 hover:text-plum/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-2 md:gap-4">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden bg-lavender/5 cursor-pointer shadow-md transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl rounded-sm ${getGridClasses(item.size)}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale hover:grayscale-0 md:grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 bg-plum/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10">
                <div className="overflow-hidden">
                   <p className="text-white/80 text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {item.category}
                  </p>
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-white text-xl md:text-2xl serif italic transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out">
                    {item.title}
                  </h3>
                </div>
                <div className="w-12 h-[1px] bg-white/60 mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left delay-200"></div>
              </div>

              <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none scale-105 group-hover:scale-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
