import { CourseCategory } from "./Course.types";
import { GallerySection, GallerySectionCms } from "./GalleryImage.types";
import { ReviewSection } from "./Review.types";

export interface CoursesPageCms {
  pageTitle: string;
  description: string;
  courseCategories: CourseCategory[];
  buttonTexts: CoursesButtonTexts;
  gallery: GallerySectionCms;
  reviews: ReviewSection;
}

export type CoursesPage = Omit<CoursesPageCms, "gallery"> & {
  gallery: GallerySection;
};

export interface CoursesButtonTexts {
  registrationOpen: string;
  registrationClosed: string;
}
