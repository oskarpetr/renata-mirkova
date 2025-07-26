import { EventCategory } from "./Event.types";
import { ReviewSection } from "./Review.types";

export interface EventsPage {
  pageTitle: string;
  description: string;
  eventCategories: EventCategory[];
  buttons: EventsButtons;
  reviews: ReviewSection;
}

export interface EventsButtons {
  registrationOpen: string;
  registrationClosed: string;
}
