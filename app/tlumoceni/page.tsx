import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import { getInterpretationPage, getPageSeo, getReachOut } from "@/utils/cms";
import ReachOut from "@/components/reachOut/ReachOut";
import Gallery from "@/components/gallery/Gallery";
import Reviews from "@/components/reviews/Reviews";
import PricingSections from "@/components/pricing-sections/PricingSections";
import { pageMetadata } from "@/utils/seo";

const fetchInterpretationPage = cache(getInterpretationPage);
const fetchReachOut = cache(getReachOut);
const fetchSeo = cache(getPageSeo);

export default async function InterpretationPage() {
  const interpretationPage = await fetchInterpretationPage();
  const reachOut = await fetchReachOut("cs");

  return (
    <PageLayout
      pageTitle={interpretationPage.pageTitle}
      description={interpretationPage.description}
    >
      <PricingSections sections={interpretationPage.sections} />

      <Reviews reviews={interpretationPage.reviews} />
      <Gallery gallery={interpretationPage.gallery} />

      <ReachOut reachOut={reachOut} />
    </PageLayout>
  );
}

export async function generateMetadata() {
  const seo = await fetchSeo("interpretationPage");

  if (seo) {
    return pageMetadata(seo);
  } else {
    const notFoundSeo = await fetchSeo("notFoundPage", "cs");
    return pageMetadata(notFoundSeo);
  }
}
