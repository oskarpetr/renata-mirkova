import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import {
  getGalleries,
  getInterpretationPage,
  getPageSeo,
  getReachOut,
} from "@/utils/cms";
import ReachOut from "@/components/reachOut/ReachOut";
import Reviews from "@/components/reviews/Reviews";
import { pageMetadata } from "@/utils/seo";
import Categories from "@/components/categories/Categories";
import Galleries from "@/components/gallery/Galleries";

const fetchInterpretationPage = cache(getInterpretationPage);
const fetchGalleries = cache(getGalleries);
const fetchReachOut = cache(getReachOut);
const fetchSeo = cache(getPageSeo);

export default async function InterpretationPage() {
  const interpretationPage = await fetchInterpretationPage();
  const galleries = await fetchGalleries("cs");
  const reachOut = await fetchReachOut("cs");

  return (
    <PageLayout
      pageTitle={interpretationPage.pageTitle}
      description={interpretationPage.description}
    >
      <Categories categories={interpretationPage.categories} />

      <Reviews reviews={interpretationPage.reviews} />
      <Galleries gallery={galleries} />

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
