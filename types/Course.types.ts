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
  link: string;
}
