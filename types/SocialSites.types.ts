import { IconType } from "@/components/layout/Icon";

export interface SocialSites {
  id: string;
  sites: SocialSite[];
}

export interface SocialSite {
  id: string;
  title: string;
  link: string;
  icon: IconType;
}
