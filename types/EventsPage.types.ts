import { EventCategory } from "./Event.types";
import { Popup } from "./Popup.types";
import { ReviewSection } from "./Review.types";

export interface EventsPage {
  pageTitle: string;
  description: string;
  eventCategories: EventCategory[];
  buttons: EventsButtons;
  reviews: ReviewSection;
  popups: Popup[];
}

export interface EventsButtons {
  registrationOpen: string;
  registrationClosed: string;
}
