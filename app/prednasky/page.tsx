import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import { getLecturesPage, getPageSeo, getReachOut } from "@/utils/cms";
import ReachOut from "@/components/reachOut/ReachOut";
import Gallery from "@/components/gallery/Gallery";
import Reviews from "@/components/reviews/Reviews";
import PricingSections from "@/components/pricing-sections/PricingSections";
import { pageMetadata } from "@/utils/seo";

const fetchLecturesPage = cache(getLecturesPage);
const fetchReachOut = cache(getReachOut);
const fetchSeo = cache(getPageSeo);

export default async function LecturesPage() {
  const lecturesPage = await fetchLecturesPage();
  const reachOut = await fetchReachOut("cs");

  return (
    <PageLayout
      pageTitle={lecturesPage.pageTitle}
      description={lecturesPage.description}
    >
      <PricingSections sections={lecturesPage.sections} />

      <Reviews reviews={lecturesPage.reviews} />
      <Gallery gallery={lecturesPage.gallery} />

      <ReachOut reachOut={reachOut} />
    </PageLayout>
  );
}

export async function generateMetadata() {
  const seo = await fetchSeo("lecturesPage");

  if (seo) {
    return pageMetadata(seo);
  } else {
    const notFoundSeo = await fetchSeo("notFoundPage", "cs");
    return pageMetadata(notFoundSeo);
  }
}
