import { CourseObject } from "./Course.types";
import { LessonObject } from "./Lessons.types";
import { ReviewSection } from "./Review.types";

export interface LessonsPage {
  id: string;
  pageTitle: string;
  description: string;
  lessons: LessonObject;
  courses: CourseObject;
  reviews: ReviewSection;
}
