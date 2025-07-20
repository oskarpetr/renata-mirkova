import { Image } from "./Image.types";

export interface HomeSectionCms {
  id: string;
  title: string;
  description: string | null;
  cards: HomeSectionCardCms[];
}

export type HomeSection = Omit<HomeSectionCms, "cards"> & {
  cards: HomeSectionCard[];
};

export interface HomeSectionCardCms {
  id: string;
  title: string;
  description: string;
  image: string;
  button: {
    text: string;
    link: string;
  };
}

export type HomeSectionCard = Omit<HomeSectionCardCms, "image"> & {
  image: Image;
};
