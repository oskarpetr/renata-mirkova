import { Counter } from "./Counter.types";
import { HomeSection, HomeSectionCms } from "./HomeSection.types";
import { Image } from "./Image.types";

export interface HomePageCms {
  id: string;
  pageTitle: string;
  description: string;
  showMoreButtonText: string;
  counters: Counter[];
  image: string;
  sections: HomeSectionCms[];
}

export type HomePage = Omit<HomePageCms, "sections" | "image"> & {
  sections: HomeSection[];
  image: Image;
};
