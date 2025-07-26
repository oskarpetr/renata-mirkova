"use client";

import { CourseCategory, CoursesButtons } from "@/types/Course.types";
import { useState } from "react";
import Button from "../layout/Button";
import CourseItem from "./CourseItem";
import BlockContent from "../layout/BlockContent";

interface Props {
  courseCategories: CourseCategory[];
  buttons: CoursesButtons;
}

export default function CoursesSection({ courseCategories, buttons }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    courseCategories[0]?.id || "",
  );

  const courseCategory = courseCategories.find(
    (courseCategory) => courseCategory.id === selectedCategory,
  );

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {courseCategories.map((courseCategory) => (
          <Button
            key={courseCategory.id}
            text={courseCategory.title}
            onClick={() => setSelectedCategory(courseCategory.id)}
            style={
              selectedCategory === courseCategory.id ? "primary" : "cancel"
            }
          />
        ))}
      </div>

      <BlockContent content={courseCategory?.description} />

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courseCategory?.courses.map((course) => (
          <CourseItem key={course.id} course={course} buttons={buttons} />
        ))}
      </div>
    </section>
  );
}
