import { IconType } from "@/components/layout/Icon";

export interface CourseObject {
  id: string;
  title: string;
  icon: IconType;
  courseCategories: CourseCategory[];
  buttons: CoursesButtons;
}

export interface CourseCategory {
  id: string;
  title: string;
  description: string;
  courses: Course[];
}

export interface Course {
  id: string;
  title: string;
  registrationOpen: boolean;
  startDate: string | null;
  lessonCount: string | null;
  meetingTime: string | null;
  studentCount: string | null;
  price: string | null;
  prerequisites: string | null;
  link: string;
}

export interface CoursesButtons {
  registrationOpen: string;
  registrationClosed: string;
}
