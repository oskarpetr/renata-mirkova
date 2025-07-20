import { EventCategory } from "./Event.types";
import { GallerySection, GallerySectionCms } from "./GalleryImage.types";
import { ReviewSection } from "./Review.types";

export interface EventsPageCms {
  pageTitle: string;
  description: string;
  eventCategories: EventCategory[];
  buttonTexts: EventsButtonTexts;
  gallery: GallerySectionCms;
  reviews: ReviewSection;
}

export type EventsPage = Omit<EventsPageCms, "gallery"> & {
  gallery: GallerySection;
};

export interface EventsButtonTexts {
  registrationOpen: string;
  registrationClosed: string;
}
