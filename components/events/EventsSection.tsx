"use client";

import { useState } from "react";
import Button from "../layout/Button";
import { EventCategory } from "@/types/Event.types";
import EventItem from "./EventItem";
import BlockContent from "../layout/BlockContent";
import { EventsButtons } from "@/types/EventsPage.types";

interface Props {
  eventCategories: EventCategory[];
  buttons: EventsButtons;
}

export default function EventsSection({ eventCategories, buttons }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    eventCategories[0]?.id || "",
  );

  const eventCategory = eventCategories.find(
    (eventCategory) => eventCategory.id === selectedCategory,
  );

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {eventCategories.map((eventCategory) => (
          <Button
            key={eventCategory.id}
            text={eventCategory.title}
            onClick={() => setSelectedCategory(eventCategory.id)}
            style={selectedCategory === eventCategory.id ? "primary" : "cancel"}
          />
        ))}
      </div>

      <BlockContent content={eventCategory?.description} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {eventCategory?.events.map((event) => (
          <EventItem key={event.id} event={event} buttons={buttons} />
        ))}
      </div>
    </section>
  );
}
