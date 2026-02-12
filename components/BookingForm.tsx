
import React, { useState, useMemo } from 'react';
import { SERVICES, COURSES } from '../constants';

type BookingStep = 1 | 2 | 3 | 'success';

const BookingForm: React.FC = () => {
  const [step, setStep] = useState<BookingStep>(1);
  const [formData, setFormData] = useState({
    type: 'booking' as 'booking' | 'enrollment',
    selectionId: '',
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    notes: ''
  });

  const availableDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    const days = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    
    for (let i = 0; i < 10; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      dates.push({
        full: d.toISOString().split('T')[0],
        dayName: days[d.getDay()],
        dateNum: d.getDate(),
        month: d.toLocaleString('bg-BG', { month: 'short' })
      });
    }
    return dates;
  }, []);

  const timeSlots = ['09:00', '10:00', '11:00', '12:30', '14:00', '15:30', '17:00', '18:30'];

  const selectedItem = formData.type === 'booking' 
    ? SERVICES.find(s => s.id === formData.selectionId)
    : COURSES.find(c => c.id === formData.selectionId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.time) {
      alert("Моля, изберете дата и час.");
      return;
    }
    setStep('success');
  };

  const nextStep = () => setStep((prev) => (prev as number + 1) as BookingStep);
  const prevStep = () => setStep((prev) => (prev as number - 1) as BookingStep);

  if (step === 'success') {
    return (
      <section id="booking" className="py-12 md:py-16 bg-lavender/20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white p-12 text-center shadow-2xl rounded-3xl animate-fade-in border border-plum/5">
            <div className="w-16 h-16 bg-plum text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg shadow-plum/20">
              ✓
            </div>
            <h2 className="text-3xl text-plum serif italic mb-4">Благодарим Ви!</h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
              Вашата заявка за <span className="font-bold text-plum">{selectedItem?.title}</span> е приета. Ще се свържем с Вас за финално потвърждение на посочения телефон.
            </p>
            <button 
              onClick={() => { setStep(1); setFormData({ ...formData, selectionId: '', date: '', time: '' }); }}
              className="bg-plum text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:shadow-xl transition-all"
            >
              Направи нова резервация
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-8 md:py-12 bg-lavender/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-plum opacity-40 font-bold block mb-2">Online Concierge</span>
            <h2 className="text-4xl md:text-5xl text-plum serif mb-4">Запази своя <span className="italic font-normal">момент</span></h2>
            
            <div className="flex items-center justify-center space-x-3 mt-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold transition-all duration-500 ${
                    step === s ? 'bg-plum text-white scale-110 shadow-lg' : 
                    (step as number) > s ? 'bg-plum/20 text-plum' : 'bg-gray-200 text-gray-400'
                  }`}>
                    {s}
                  </div>
                  {s < 3 && <div className={`w-6 md:w-12 h-[1px] mx-1 ${ (step as number) > s ? 'bg-plum/30' : 'bg-gray-200' }`}></div>}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-[0_20px_60px_rgba(93,57,84,0.06)] rounded-[2rem] overflow-hidden border border-plum/5">
            <div className="p-6 md:p-12">
              
              {/* STEP 1: Type Selection */}
              {step === 1 && (
                <div className="animate-fade-in">
                  <h3 className="text-lg md:text-xl text-plum serif italic mb-8 text-center">Какво търсите днес?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button 
                      onClick={() => { setFormData({...formData, type: 'booking'}); nextStep(); }}
                      className="group p-6 md:p-8 border border-gray-100 rounded-2xl hover:border-plum/30 hover:bg-lavender/5 transition-all text-center"
                    >
                      <span className="block text-3xl mb-3">💅</span>
                      <h4 className="text-base text-plum font-bold uppercase tracking-widest mb-1">Салон</h4>
                      <p className="text-[10px] text-gray-400 font-light italic uppercase tracking-wider">Професионална грижа</p>
                    </button>
                    <button 
                      onClick={() => { setFormData({...formData, type: 'enrollment'}); nextStep(); }}
                      className="group p-6 md:p-8 border border-gray-100 rounded-2xl hover:border-plum/30 hover:bg-lavender/5 transition-all text-center"
                    >
                      <span className="block text-3xl mb-3">🎓</span>
                      <h4 className="text-base text-plum font-bold uppercase tracking-widest mb-1">Академия</h4>
                      <p className="text-[10px] text-gray-400 font-light italic uppercase tracking-wider">Обучение и курсови</p>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Service Selection */}
              {step === 2 && (
                <div className="animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <button onClick={prevStep} className="text-[9px] uppercase tracking-widest font-bold text-plum/40 hover:text-plum flex items-center">
                      <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                      Назад
                    </button>
                    <h3 className="text-lg text-plum serif italic">Изберете {formData.type === 'booking' ? 'услуга' : 'курс'}</h3>
                    <div className="w-10"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                    {(formData.type === 'booking' ? SERVICES : COURSES).map((item) => (
                      <button 
                        key={item.id}
                        onClick={() => { setFormData({...formData, selectionId: item.id}); nextStep(); }}
                        className={`flex items-center justify-between p-4 border rounded-xl transition-all ${
                          formData.selectionId === item.id ? 'border-plum bg-plum/5' : 'border-gray-100 hover:border-plum/20 hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-left">
                          <h4 className="text-plum font-bold uppercase tracking-widest text-[11px] mb-0.5">{item.title}</h4>
                          <p className="text-gray-400 text-[9px] italic">{(item as any).duration || (item as any).level}</p>
                        </div>
                        <div className="text-right">
                          <span className="serif text-base text-plum font-bold">{item.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Visual Date & Time Picker */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="animate-fade-in">
                  <div className="flex items-center justify-between mb-8">
                    <button type="button" onClick={prevStep} className="text-[9px] uppercase tracking-widest font-bold text-plum/40 hover:text-plum flex items-center">
                      <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                      Назад
                    </button>
                    <h3 className="text-lg text-plum serif italic">Дата и Час</h3>
                    <div className="w-10"></div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-plum/50 mb-4 text-center">Изберете ден</label>
                      <div className="flex space-x-3 overflow-x-auto pb-3 px-1 custom-scrollbar no-scrollbar">
                        {availableDates.map((d) => (
                          <button
                            key={d.full}
                            type="button"
                            onClick={() => setFormData({...formData, date: d.full})}
                            className={`flex-shrink-0 w-14 h-20 rounded-xl flex flex-col items-center justify-center transition-all border ${
                              formData.date === d.full 
                              ? 'bg-plum text-white border-plum shadow-md scale-105' 
                              : 'bg-gray-50 text-plum border-gray-100 hover:bg-lavender/20'
                            }`}
                          >
                            <span className="text-[8px] uppercase font-bold opacity-60 mb-1">{d.dayName}</span>
                            <span className="serif text-lg font-bold mb-0.5">{d.dateNum}</span>
                            <span className="text-[8px] uppercase opacity-60">{d.month}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-plum/50 mb-4 text-center">Свободни часове</label>
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormData({...formData, time: t})}
                            className={`py-3 rounded-lg text-[11px] font-bold transition-all border ${
                              formData.time === t 
                              ? 'bg-plum text-white border-plum shadow-sm' 
                              : 'bg-white text-plum border-gray-100 hover:border-plum/30'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      <div className="md:col-span-2">
                         <label className="block text-[9px] uppercase tracking-widest font-bold text-plum/40 mb-1">Вашето Име</label>
                         <input 
                            required type="text" 
                            className="w-full bg-gray-50 p-3 rounded-lg focus:bg-white border border-transparent focus:border-plum/20 outline-none transition-all text-xs"
                            placeholder="Напишете името си..."
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                      </div>
                      <div>
                        <label className="block text-[9px] uppercase tracking-widest font-bold text-plum/40 mb-1">Телефон</label>
                        <input 
                          required type="tel" 
                          className="w-full bg-gray-50 p-3 rounded-lg focus:bg-white border border-transparent focus:border-plum/20 outline-none transition-all text-xs"
                          placeholder="+359..."
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] uppercase tracking-widest font-bold text-plum/40 mb-1">Email</label>
                        <input 
                          required type="email" 
                          className="w-full bg-gray-50 p-3 rounded-lg focus:bg-white border border-transparent focus:border-plum/20 outline-none transition-all text-xs"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={!formData.date || !formData.time}
                      className="w-full bg-plum text-white py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] hover:shadow-xl hover:shadow-plum/20 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Потвърди Резервацията
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
