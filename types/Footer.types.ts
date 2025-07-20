import { SocialSites } from "./SocialSites.types";

export interface Footer {
  id: string;
  legalInformation: FooterLegalInformation;
  billingInformation: FooterContentSection;
  socialSites: FooterSocialSites;
  copyright: string[];
}

export interface FooterLegalInformation {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface FooterSocialSites {
  id: string;
  title: string;
  sites: SocialSites;
}

export interface FooterLink {
  id: string;
  title: string;
  link: string;
  target?: "_blank" | "_self";
}

export interface FooterContentSection {
  id: string;
  title: string;
  content: string[];
}
