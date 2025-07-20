export interface EventCategory {
  id: string;
  title: string;
  description: string;
  events: Event[];
}

export interface Event {
  id: string;
  title: string;
  registrationOpen: boolean;
  startDate: string | null;
  location: string | null;
  eventDuration: string | null;
  attendeeCount: string | null;
  price: string | null;
  link: string;
}
