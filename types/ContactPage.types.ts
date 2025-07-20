import { Image } from "./Image.types";
import { SocialSites } from "./SocialSites.types";

export interface ContactPage {
  id: string;
  pageTitle: string;
  description: string;
  billingInformation: string[];
  socialSites: SocialSites;
  image: Image;
}

export type ContactPageCms = Omit<ContactPage, "image"> & {
  image: string;
};
