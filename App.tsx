
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Academy from './components/Academy';
import BookingForm from './components/BookingForm';
import Portfolio from './components/Portfolio';
import { SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Services Section - Tighter Padding */}
        <section id="services" className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="order-2 lg:order-1 px-4 md:px-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop" 
                    alt="Salon Interior" 
                    className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                  />
                  <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-lavender -z-10"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-[10px] uppercase tracking-[0.5em] text-plum block mb-6 font-bold opacity-60 text-center lg:text-left">Нашите Услуги</span>
                <h2 className="text-4xl md:text-5xl text-plum mb-10 md:mb-12 leading-tight text-center lg:text-left">
                  Луксозна грижа за <br /><span className="italic font-normal">Вашите ръце</span>
                </h2>
                <div className="space-y-6 md:space-y-8">
                  {SERVICES.map(service => (
                    <div key={service.id} className="group flex justify-between items-start border-b border-gray-100 pb-4 md:pb-6 hover:border-plum transition-colors cursor-pointer">
                      <div className="max-w-[65%] md:max-w-sm">
                        <h3 className="text-lg md:text-xl text-plum mb-1 font-medium group-hover:italic transition-all">{service.title}</h3>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="serif text-xl md:text-2xl text-plum mb-1">{service.price}</p>
                        <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold">{service.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Academy />

        <Portfolio />

        <BookingForm />
      </main>

      {/* Footer */}
      <footer className="bg-plum py-16 md:py-24 text-white border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1 text-center sm:text-left">
              <span className="serif text-3xl font-bold tracking-tighter block mb-6">
                NAIL ART <span className="font-normal italic">Bilqna</span>
              </span>
              <p className="text-[10px] text-lavender/50 leading-loose uppercase tracking-widest max-w-xs mx-auto sm:mx-0">
                Лукс, прецизност и образование на най-високо ниво. Вашият партньор в света на красотата.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-lavender">Навигация</h4>
              <ul className="text-xs space-y-4 opacity-70 font-medium tracking-wide">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Начало</a></li>
                <li><a href="#services" className="hover:opacity-100 transition-opacity">Услуги</a></li>
                <li><a href="#academy" className="hover:opacity-100 transition-opacity">Академия</a></li>
                <li><a href="#portfolio" className="hover:opacity-100 transition-opacity">Портфолио</a></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-lavender">Локация</h4>
              <ul className="text-xs space-y-4 opacity-70 font-medium tracking-wide">
                <li>София, Център</li>
                <li>бул. "Витоша" 100</li>
                <li>+359 888 123 456</li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-lavender">Бюлетин</h4>
              <p className="text-[10px] opacity-50 uppercase tracking-widest mb-4">Бъдете първи с новите тенденции</p>
              <div className="flex border-b border-white/20 pb-2 max-w-[240px] mx-auto sm:mx-0">
                <input type="email" placeholder="Email адрес" className="bg-transparent text-xs w-full outline-none placeholder:text-white/30" />
                <button className="text-[10px] uppercase font-bold hover:text-lavender transition-colors">OK</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-lavender/30">
            <p className="mb-6 md:mb-0">© 2024 Nail Art Bilqna. All rights reserved.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
