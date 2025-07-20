import { Image } from "./Image.types";

export interface AboutPage {
  id: string;
  sections: AboutSection[];
}

export interface AboutPageCms {
  id: string;
  sections: AboutSectionCms[];
}

export interface AboutSection {
  id: string;
  title: string;
  content: string;
  image: Image;
  alignment: "left" | "right";
}

export interface AboutSectionCms {
  id: string;
  title: string;
  content: string;
  image: string;
  alignment: "left" | "right";
}
