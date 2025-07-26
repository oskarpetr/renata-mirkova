import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import {
  getGalleries,
  getPageSeo,
  getReachOut,
  getTrainingAndConsultingPage,
} from "@/utils/cms";
import ReachOut from "@/components/reachOut/ReachOut";
import Reviews from "@/components/reviews/Reviews";
import { pageMetadata } from "@/utils/seo";
import Categories from "@/components/categories/Categories";
import Galleries from "@/components/gallery/Galleries";

const fetchTrainingAndConsultingPage = cache(getTrainingAndConsultingPage);
const fetchGalleries = cache(getGalleries);
const fetchReachOut = cache(getReachOut);
const fetchSeo = cache(getPageSeo);

export default async function TrainingAndConsultingPage() {
  const trainingAndConsultingPage = await fetchTrainingAndConsultingPage();
  const galleries = await fetchGalleries("cs");
  const reachOut = await fetchReachOut("cs");

  return (
    <PageLayout
      pageTitle={trainingAndConsultingPage.pageTitle}
      description={trainingAndConsultingPage.description}
    >
      <Categories categories={trainingAndConsultingPage.categories} />

      <Reviews reviews={trainingAndConsultingPage.reviews} />
      <Galleries gallery={galleries} />

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
