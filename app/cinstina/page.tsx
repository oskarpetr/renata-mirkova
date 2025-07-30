import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import {
  getEmail,
  getGalleries,
  getLessonsPage,
  getPageSeo,
  getReachOut,
} from "@/utils/cms";
import ReachOut from "@/components/reachOut/ReachOut";
import Galleries from "@/components/gallery/Galleries";
import Reviews from "@/components/reviews/Reviews";
import { pageMetadata } from "@/utils/seo";
import CategoryCards from "@/components/categories/CategoryCards";
import CoursesSection from "@/components/courses/CoursesSection";
import Heading from "@/components/layout/Heading";
import Icon from "@/components/layout/Icon";
import BlockContent from "@/components/layout/BlockContent";

const fetchLessonsPage = cache(getLessonsPage);
const fetchGalleries = cache(getGalleries);
const fetchReachOut = cache(getReachOut);
const fetchEmail = cache(getEmail);
const fetchSeo = cache(getPageSeo);

export default async function LessonsPage() {
  const lessonsPage = await fetchLessonsPage("cs");
  const galleries = await fetchGalleries("cs");
  const email = await fetchEmail();
  const reachOut = await fetchReachOut("cs");

  return (
    <PageLayout
      pageTitle={lessonsPage.pageTitle}
      description={lessonsPage.description}
      popups={lessonsPage.popups}
    >
      <div className="flex flex-col gap-12">
        <div className="flex w-full flex-col gap-4">
          <div className="flex gap-2">
            <Icon name={lessonsPage.lessons.icon} size={32} weight="bold" />
            <Heading text={lessonsPage.lessons.title} type="h2" />
          </div>

          <CategoryCards
            cards={lessonsPage.lessons.lessonTypes}
            email={email.email}
          />
          <BlockContent content={lessonsPage.lessons.pricing} />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Icon name={lessonsPage.courses.icon} size={32} weight="bold" />
            <Heading text={lessonsPage.courses.title} type="h2" />
          </div>

          <CoursesSection
            courseCategories={lessonsPage.courses.courseCategories}
            buttons={lessonsPage.courses.buttons}
          />
        </div>
      </div>

      <Reviews reviews={lessonsPage.reviews} />
      <Galleries gallery={galleries} />

      <ReachOut reachOut={reachOut} email={email.email} />
    </PageLayout>
  );
}

export async function generateMetadata() {
  const seo = await fetchSeo("lessonsPage", "cs");

  if (seo) {
    return pageMetadata(seo);
  } else {
    const notFoundSeo = await fetchSeo("notFoundPage", "cs");
    return pageMetadata(notFoundSeo);
  }
}
