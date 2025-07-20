import { IconType } from "@/components/layout/Icon";

export interface ReachOut {
  id: string;
  title: string;
  cards: ReachOutCard[];
}

export interface ReachOutCard {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  button: {
    text: string;
    code: string;
  };
}
