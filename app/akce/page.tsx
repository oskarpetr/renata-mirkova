import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import { getEventsPage, getPageSeo, getReachOut } from "@/utils/cms";
import ReachOut from "@/components/reachOut/ReachOut";
import Gallery from "@/components/gallery/Gallery";
import Reviews from "@/components/reviews/Reviews";
import EventsSection from "@/components/events/EventsSection";
import { pageMetadata } from "@/utils/seo";

const fetchEventsPage = cache(getEventsPage);
const fetchReachOut = cache(getReachOut);
const fetchSeo = cache(getPageSeo);

export default async function EventsPage() {
  const events = await fetchEventsPage("cs");
  const reachOut = await fetchReachOut("cs");

  return (
    <PageLayout pageTitle={events.pageTitle} description={events.description}>
      <EventsSection
        eventCategories={events.eventCategories}
        buttonTexts={events.buttonTexts}
      />

      <Reviews reviews={events.reviews} />
      <Gallery gallery={events.gallery} />

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
