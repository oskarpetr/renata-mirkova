export interface PricingSection {
  id: string;
  title: string;
  cards: PricingSectionCard[];
}

export interface PricingSectionCard {
  id: string;
  title: string;
  content: string;
  pricings: string[];
}
