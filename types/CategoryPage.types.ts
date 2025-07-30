import { Category } from "./Category.types";
import { Popup } from "./Popup.types";
import { ReviewSection } from "./Review.types";

export interface CategoryPage {
  id: string;
  pageTitle: string;
  description: string;
  categories: Category[];
  reviews: ReviewSection;
  popups: Popup[];
}
