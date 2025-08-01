import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import {
  getEmail,
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
const fetchEmail = cache(getEmail);
const fetchSeo = cache(getPageSeo);

export default async function InterpretationPage() {
  const interpretationPage = await fetchInterpretationPage();
  const galleries = await fetchGalleries("cs");
  const email = await fetchEmail();
  const reachOut = await fetchReachOut("cs");

  return (
    <PageLayout
      pageTitle={interpretationPage.pageTitle}
      description={interpretationPage.description}
      popups={interpretationPage.popups}
    >
      <Categories
        categories={interpretationPage.categories}
        email={email.email}
      />

      <Reviews reviews={interpretationPage.reviews} />
      <Galleries gallery={galleries} />

      <ReachOut reachOut={reachOut} email={email.email} />
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
