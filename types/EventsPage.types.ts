import { EventCategory } from "./Event.types";
import { ReviewSection } from "./Review.types";

export interface EventsPage {
  pageTitle: string;
  description: string;
  eventCategories: EventCategory[];
  buttonTexts: EventsButtonTexts;
  reviews: ReviewSection;
}

export interface EventsButtonTexts {
  registrationOpen: string;
  registrationClosed: string;
}
