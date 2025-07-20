import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import {
  getPageSeo,
  getReachOut,
  getTrainingAndConsultingPage,
} from "@/utils/cms";
import ReachOut from "@/components/reachOut/ReachOut";
import Gallery from "@/components/gallery/Gallery";
import Reviews from "@/components/reviews/Reviews";
import PricingSections from "@/components/pricing-sections/PricingSections";
import { pageMetadata } from "@/utils/seo";

const fetchTrainingAndConsultingPage = cache(getTrainingAndConsultingPage);
const fetchReachOut = cache(getReachOut);
const fetchSeo = cache(getPageSeo);

export default async function TrainingAndConsultingPage() {
  const trainingAndConsultingPage = await fetchTrainingAndConsultingPage();
  const reachOut = await fetchReachOut("cs");

  return (
    <PageLayout
      pageTitle={trainingAndConsultingPage.pageTitle}
      description={trainingAndConsultingPage.description}
    >
      <PricingSections sections={trainingAndConsultingPage.sections} />

      <Reviews reviews={trainingAndConsultingPage.reviews} />
      <Gallery gallery={trainingAndConsultingPage.gallery} />

      <ReachOut reachOut={reachOut} />
    </PageLayout>
  );
}

export async function generateMetadata() {
  const seo = await fetchSeo("trainingAndConsultingPage");

  if (seo) {
    return pageMetadata(seo);
  } else {
    const notFoundSeo = await fetchSeo("notFoundPage", "cs");
    return pageMetadata(notFoundSeo);
  }
}
