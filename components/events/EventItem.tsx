import Icon from "../layout/Icon";
import { CoursesButtonTexts } from "@/types/CoursesPage.types";
import Button from "../layout/Button";
import Card from "../layout/Card";
import Heading from "../layout/Heading";
import Link from "next/link";
import { Event } from "@/types/Event.types";

interface Props {
  event: Event;
  buttonTexts: CoursesButtonTexts;
}

export default function EventItem({ event, buttonTexts }: Props) {
  const registrationButton = (
    <Button
      text={
        event.registrationOpen
          ? buttonTexts.registrationOpen
          : buttonTexts.registrationClosed
      }
      disabled={!event.registrationOpen}
      width="full"
    />
  );

  return (
    <Card>
      <Heading text={event.title} type="h3" />

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          {event.startDate && (
            <div className="flex items-center gap-2">
              <Icon
                name="CalendarBlankIcon"
                weight="fill"
                className="text-yellow-500"
              />
              <div className="opacity-80">{event.startDate}</div>
            </div>
          )}

          {event.location && (
            <div className="flex items-center gap-2">
              <Icon
                name="MapPinIcon"
                weight="fill"
                className="text-yellow-500"
              />
              <div className="opacity-80">{event.location}</div>
            </div>
          )}

          {event.eventDuration && (
            <div className="flex items-center gap-2">
              <Icon
                name="ClockIcon"
                weight="fill"
                className="text-yellow-500"
              />
              <div className="opacity-80">{event.eventDuration}</div>
            </div>
          )}

          {event.attendeeCount && (
            <div className="flex items-center gap-2">
              <Icon name="UserIcon" weight="fill" className="text-yellow-500" />
              <div className="opacity-80">{event.attendeeCount}</div>
            </div>
          )}

          {event.price && (
            <div className="flex items-center gap-2">
              <Icon
                name="MoneyIcon"
                weight="fill"
                className="text-yellow-500"
              />
              <div className="opacity-80">{event.price}</div>
            </div>
          )}
        </div>
      </div>

      {event.registrationOpen ? (
        <Link href={event.link} target="_blank">
          {registrationButton}
        </Link>
      ) : (
        registrationButton
      )}
    </Card>
  );
}
