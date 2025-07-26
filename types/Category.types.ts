export interface Category {
  id: string;
  title: string;
  cards: CategoryCard[];
}

export interface CategoryCard {
  id: string;
  title: string;
  content: string;
  pricing: string[];
}
