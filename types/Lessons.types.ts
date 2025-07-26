import { IconType } from "@/components/layout/Icon";
import { CategoryCard } from "./Category.types";

export interface LessonObject {
  id: string;
  title: string;
  icon: IconType;
  lessonTypes: CategoryCard[];
  pricing: string;
}
