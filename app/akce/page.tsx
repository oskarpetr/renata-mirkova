import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import {
  getEventsPage,
  getGalleries,
  getPageSeo,
  getReachOut,
} from "@/utils/cms";
import ReachOut from "@/components/reachOut/ReachOut";
import Reviews from "@/components/reviews/Reviews";
import EventsSection from "@/components/events/EventsSection";
import { pageMetadata } from "@/utils/seo";
import Galleries from "@/components/gallery/Galleries";

const fetchEventsPage = cache(getEventsPage);
const fetchGalleries = cache(getGalleries);
const fetchReachOut = cache(getReachOut);
const fetchSeo = cache(getPageSeo);

export default async function EventsPage() {
  const events = await fetchEventsPage("cs");
  const galleries = await fetchGalleries("cs");
  const reachOut = await fetchReachOut("cs");

  return (
    <PageLayout pageTitle={events.pageTitle} description={events.description}>
      <EventsSection
        eventCategories={events.eventCategories}
        buttons={events.buttons}
      />

      <Reviews reviews={events.reviews} />
      <Galleries gallery={galleries} />

      <ReachOut reachOut={reachOut} />
    </PageLayout>
  );
}

export async function generateMetadata() {
  const seo = await fetchSeo("eventsPage", "cs");

  if (seo) {
    return pageMetadata(seo);
  } else {
    const notFoundSeo = await fetchSeo("notFoundPage", "cs");
    return pageMetadata(notFoundSeo);
  }
}
