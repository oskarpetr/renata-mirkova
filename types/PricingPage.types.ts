import { GallerySection, GallerySectionCms } from "./GalleryImage.types";
import { PricingSection } from "./PricingSection.types";
import { ReviewSection } from "./Review.types";

export interface PricingPageCms {
  id: string;
  pageTitle: string;
  description: string;
  sections: PricingSection[];
  gallery: GallerySectionCms;
  reviews: ReviewSection;
}

export type PricingPage = Omit<PricingPageCms, "gallery"> & {
  gallery: GallerySection;
};
