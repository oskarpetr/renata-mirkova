import { Course, CoursesButtons } from "@/types/Course.types";
import Icon from "../layout/Icon";
import Button from "../layout/Button";
import Card from "../layout/Card";
import Heading from "../layout/Heading";
import Link from "next/link";
import BlockContent from "../layout/BlockContent";

interface Props {
  course: Course;
  buttons: CoursesButtons;
}

export default function CourseItem({ course, buttons }: Props) {
  const registrationButton = (
    <Button
      text={
        course.registrationOpen
          ? buttons.registrationOpen
          : buttons.registrationClosed
      }
      disabled={!course.registrationOpen}
      width="full"
    />
  );

  return (
    <div>
      <Card>
        <Heading text={course.title} type="h3" />

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-3">
            {course.startDate && (
              <div className="flex items-center gap-2">
                <Icon
                  name="CalendarBlankIcon"
                  weight="fill"
                  className="text-yellow-500"
                />
                <div className="opacity-80">{course.startDate}</div>
              </div>
            )}

            {course.lessonCount && (
              <div className="flex items-center gap-2">
                <Icon
                  name="GraduationCapIcon"
                  weight="fill"
                  className="text-yellow-500"
                />
                <div className="opacity-80">{course.lessonCount}</div>
              </div>
            )}

            {course.meetingTime && (
              <div className="flex items-center gap-2">
                <Icon
                  name="ClockIcon"
                  weight="fill"
                  className="text-yellow-500"
                />
                <div className="opacity-80">{course.meetingTime}</div>
              </div>
            )}

            {course.studentCount && (
              <div className="flex items-center gap-2">
                <Icon
                  name="UserIcon"
                  weight="fill"
                  className="text-yellow-500"
                />
                <div className="opacity-80">{course.studentCount}</div>
              </div>
            )}

            {course.price && (
              <div className="flex items-center gap-2">
                <Icon
                  name="MoneyIcon"
                  weight="fill"
                  className="text-yellow-500"
                />
                <div className="opacity-80">{course.price}</div>
              </div>
            )}
          </div>
        </div>

        {course.registrationOpen ? (
          <Link href={course.link} target="_blank">
            {registrationButton}
          </Link>
        ) : (
          registrationButton
        )}

        {course.prerequisites && (
          <div className="opacity-80">
            <BlockContent content={course.prerequisites} />
          </div>
        )}
      </Card>
    </div>
  );
}
