
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-32 sm:pt-40 md:pt-48 lg:pt-32">
      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center h-full pb-16">
        <div className="lg:col-span-7 z-10 text-center lg:text-left">
          <p className="text-plum uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 font-bold animate-fade-in opacity-50">
            L’Art de la Manucure
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-plum leading-[1.15] sm:leading-[1.1] md:leading-[1] mb-8 md:mb-10 font-serif">
            Изкуството, <br />
            <span className="italic font-normal">което носите.</span>
          </h1>
          <p className="text-charcoal max-w-lg mx-auto lg:mx-0 text-sm md:text-base leading-relaxed mb-10 md:mb-12 opacity-70">
            Добре дошли в света на Nail Art Bilqna – където прецизността среща въображението. 
            Луксозен салон за ценители и професионална академия за бъдещи лидери.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => scrollTo('services')}
              className="bg-plum text-white px-8 md:px-12 py-4 md:py-5 text-xs md:text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-plum/10"
            >
              Разгледай Услугите
            </button>
            <button 
              onClick={() => scrollTo('academy')}
              className="border border-plum/30 text-plum px-8 md:px-12 py-4 md:py-5 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-plum hover:text-white transition-all"
            >
              Стани Професионалист
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0">
          <div className="w-full max-w-[360px] lg:max-w-none aspect-[4/5] bg-lavender relative overflow-hidden shadow-2xl rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop" 
              alt="Luxury Nail Art" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="border border-white/20 w-[92%] h-[92%]"></div>
            </div>
          </div>
          {/* Decorative floating elements */}
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-plum/5 rounded-full blur-3xl"></div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-lavender/30 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      {/* Side Text - Only for Desktop */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
        <p className="rotate-90 origin-right text-[9px] uppercase tracking-[1.2em] text-plum/30 font-bold whitespace-nowrap">
          ESTABLISHED 2018 • EXCELLENCE IN EDUCATION
        </p>
      </div>
    </section>
  );
};

export default Hero;
