import { GallerySection, GallerySectionCms } from "./GalleryImage.types";
import { PricingSection } from "./PricingSection.types";
import { ReviewSection } from "./Review.types";

export interface LessonsPageCms {
  id: string;
  pageTitle: string;
  description: string;
  sections: PricingSection[];
  gallery: GallerySectionCms;
  reviews: ReviewSection;
}

export type LessonsPage = Omit<LessonsPageCms, "gallery"> & {
  gallery: GallerySection;
};
