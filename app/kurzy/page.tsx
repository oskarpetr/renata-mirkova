import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import { getCoursesPage, getPageSeo, getReachOut } from "@/utils/cms";
import ReachOut from "@/components/reachOut/ReachOut";
import CoursesSection from "@/components/courses/CoursesSection";
import Gallery from "@/components/gallery/Gallery";
import Reviews from "@/components/reviews/Reviews";
import { pageMetadata } from "@/utils/seo";

const fetchCoursesPage = cache(getCoursesPage);
const fetchReachOut = cache(getReachOut);
const fetchSeo = cache(getPageSeo);

export default async function CoursesPage() {
  const coursesPage = await fetchCoursesPage("cs");
  const reachOut = await fetchReachOut("cs");

  return (
    <PageLayout
      pageTitle={coursesPage.pageTitle}
      description={coursesPage.description}
    >
      <CoursesSection
        courseCategories={coursesPage.courseCategories}
        buttonTexts={coursesPage.buttonTexts}
      />

      <Reviews reviews={coursesPage.reviews} />
      <Gallery gallery={coursesPage.gallery} />

      <ReachOut reachOut={reachOut} />
    </PageLayout>
  );
}

export async function generateMetadata() {
  const seo = await fetchSeo("coursesPage", "cs");

  if (seo) {
    return pageMetadata(seo);
  } else {
    const notFoundSeo = await fetchSeo("notFoundPage", "cs");
    return pageMetadata(notFoundSeo);
  }
}
