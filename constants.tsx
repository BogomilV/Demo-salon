
import { Service, Course, PortfolioItem } from './types';

export const COLORS = {
  lavender: '#E6E6FA',
  plum: '#5D3954',
  charcoal: '#333333',
  white: '#FFFFFF',
};

export const SERVICES: Service[] = [
  { id: '1', title: 'Класически Маникюр', description: 'Прецизно оформяне и грижа за кутикулите.', price: '45 лв.', duration: '60 мин.' },
  { id: '2', title: 'Гел Лак с Арт Дизайн', description: 'Дълготраен цвят с уникални декорации.', price: '65 лв.', duration: '90 мин.' },
  { id: '3', title: 'Ноктопластика', description: 'Удължаване с висок клас гел или акригел.', price: '90 лв.', duration: '120 мин.' },
  { id: '4', title: 'Спа Терапия за Ръце', description: 'Дълбока хидратация и подхранване.', price: '30 лв.', duration: '30 мин.' },
];

export const COURSES: Course[] = [
  { 
    id: 'c1', 
    title: 'Базов Курс: Маникюр и Гел Лак', 
    description: 'Основи на професионалния маникюр, стерилизация и работа с апарат.', 
    duration: '5 дни', 
    level: 'Начинаещи', 
    price: '850 лв.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'c2', 
    title: 'Майсторски Клас: Арт Дизайн', 
    description: 'Сложни техники за рисуване, 3D елементи и флорални мотиви.', 
    duration: '2 дни', 
    level: 'Майсторски клас', 
    price: '450 лв.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'c3', 
    title: 'Експресно Удължаване', 
    description: 'Иновативни методи за бързо и здраво изграждане.', 
    duration: '3 дни', 
    level: 'Напреднали', 
    price: '600 лв.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 'p1', title: 'Сватбена Елегантност', category: 'Сватбен', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop', size: 'large' },
  { id: 'p2', title: 'Минималистичен Мрамор', category: 'Минималистичен', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop', size: 'small' },
  { id: 'p3', title: 'Арт Флорални Мотиви', category: 'Арт', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop', size: 'tall' },
  { id: 'p4', title: 'Дипломна Работа - Гел', category: 'Академия', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop', size: 'small' },
  { id: 'p5', title: 'Перлен Блясък', category: 'Сватбен', image: 'https://images.unsplash.com/photo-1599387737281-f0fb8189b839?q=80&w=800&auto=format&fit=crop', size: 'small' },
  { id: 'p6', title: 'Геометрични Линии', category: 'Арт', image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop', size: 'large' },
  { id: 'p7', title: 'Нюд Перфекционизъм', category: 'Минималистичен', image: 'https://images.unsplash.com/photo-1628151815802-9993325e634f?q=80&w=800&auto=format&fit=crop', size: 'small' },
  { id: 'p8', title: 'Майсторски Студентски Труд', category: 'Академия', image: 'https://images.unsplash.com/photo-1520102143003-75388c3e6601?q=80&w=800&auto=format&fit=crop', size: 'tall' },
];
