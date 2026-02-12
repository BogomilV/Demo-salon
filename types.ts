
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Начинаещи' | 'Напреднали' | 'Майсторски клас';
  price: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Сватбен' | 'Минималистичен' | 'Арт' | 'Академия';
  image: string;
  size: 'small' | 'large' | 'tall';
}
