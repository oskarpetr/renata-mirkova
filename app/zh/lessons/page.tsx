import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import { getLessonsPage, getPageSeo, getReachOut } from "@/utils/cms";
import ReachOut from "@/components/reachOut/ReachOut";
import Gallery from "@/components/gallery/Gallery";
import Reviews from "@/components/reviews/Reviews";
import PricingSections from "@/components/pricing-sections/PricingSections";
import { pageMetadata } from "@/utils/seo";

const fetchLessonsPage = cache(getLessonsPage);
const fetchReachOut = cache(getReachOut);
const fetchSeo = cache(getPageSeo);

export default async function ChineseLessonsPage() {
  const lessonsPage = await fetchLessonsPage("zh");
  const reachOut = await fetchReachOut("zh");

  return (
    <PageLayout
      pageTitle={lessonsPage.pageTitle}
      description={lessonsPage.description}
    >
      <PricingSections sections={lessonsPage.sections} />

      <Reviews reviews={lessonsPage.reviews} />
      <Gallery gallery={lessonsPage.gallery} />

      <ReachOut reachOut={reachOut} />
    </PageLayout>
  );
}

export async function generateMetadata() {
  const seo = await fetchSeo("lessonsPage", "zh");

  if (seo) {
    return pageMetadata(seo);
  } else {
    const notFoundSeo = await fetchSeo("notFoundPage", "zh");
    return pageMetadata(notFoundSeo);
  }
}
