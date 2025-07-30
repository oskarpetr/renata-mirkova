import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import {
  getEmail,
  getGalleries,
  getLecturesPage,
  getPageSeo,
  getReachOut,
} from "@/utils/cms";
import ReachOut from "@/components/reachOut/ReachOut";
import Reviews from "@/components/reviews/Reviews";
import { pageMetadata } from "@/utils/seo";
import Categories from "@/components/categories/Categories";
import Galleries from "@/components/gallery/Galleries";

const fetchLecturesPage = cache(getLecturesPage);
const fetchGalleries = cache(getGalleries);
const fetchReachOut = cache(getReachOut);
const fetchEmail = cache(getEmail);
const fetchSeo = cache(getPageSeo);

export default async function LecturesPage() {
  const lecturesPage = await fetchLecturesPage();
  const galleries = await fetchGalleries("cs");
  const email = await fetchEmail();
  const reachOut = await fetchReachOut("cs");

  return (
    <PageLayout
      pageTitle={lecturesPage.pageTitle}
      description={lecturesPage.description}
      popups={lecturesPage.popups}
    >
      <Categories categories={lecturesPage.categories} email={email.email} />

      <Reviews reviews={lecturesPage.reviews} />
      <Galleries gallery={galleries} />

      <ReachOut reachOut={reachOut} email={email.email} />
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
