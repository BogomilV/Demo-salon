
import React from 'react';
import { COURSES } from '../constants';

const Academy: React.FC = () => {
  return (
    <section id="academy" className="py-8 md:py-12 bg-plum text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 md:mb-10 space-y-6 lg:space-y-0">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl mb-4 leading-tight">Академия за <br /><span className="italic font-normal">Майстори</span></h2>
            <p className="text-lavender/60 text-base leading-relaxed font-light">
              Защо да изберете нашата академия? Защото ние не просто преподаваме техники, ние изграждаме артисти. 
              Нашите сертифицирани курсове комбинират теория и интензивна практика.
            </p>
          </div>
          <div className="text-left lg:text-right w-full lg:w-auto">
             <span className="text-[10px] uppercase tracking-[0.5em] text-lavender block mb-2 opacity-50">Career Growth</span>
             <p className="serif text-xl md:text-2xl italic font-light opacity-90">Превърнете страстта си в професия.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {COURSES.map((course) => (
            <div key={course.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4 shadow-2xl rounded-sm">
                {/* Image with subtle zoom */}
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
                
                {/* Refined Overlay with description slide-up */}
                <div className="absolute inset-0 bg-plum/70 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out flex items-center justify-center p-8 backdrop-blur-md">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out text-center">
                    <p className="text-sm md:text-base leading-relaxed font-light text-lavender/90 px-4">
                      {course.description}
                    </p>
                    {/* Decorative line animation */}
                    <div className="w-8 h-[1px] bg-lavender/40 mx-auto mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300 origin-center"></div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/10 backdrop-blur-md text-[9px] px-3 py-1.5 uppercase tracking-widest border border-white/20 font-bold">
                    {course.level}
                  </span>
                </div>
              </div>

              <h3 className="text-lg md:text-xl mb-2 group-hover:text-lavender transition-colors font-serif duration-500">{course.title}</h3>
              
              <div className="flex justify-between items-end text-[10px] uppercase tracking-widest text-lavender/60 font-bold">
                <span>{course.duration}</span>
                <span className="text-white text-lg md:text-xl font-normal serif italic leading-none">{course.price}</span>
              </div>
              
              <button className="mt-6 w-full py-3 border border-lavender/20 text-[9px] uppercase tracking-[0.4em] hover:bg-lavender hover:text-plum hover:border-lavender transition-all duration-500 font-bold">
                Запиши се сега
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academy;
