import { Category } from "./Category.types";
import { ReviewSection } from "./Review.types";

export interface CategoryPage {
  id: string;
  pageTitle: string;
  description: string;
  categories: Category[];
  reviews: ReviewSection;
}
