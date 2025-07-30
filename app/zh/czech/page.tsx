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
import Reviews from "@/components/reviews/Reviews";
import { pageMetadata } from "@/utils/seo";
import Heading from "@/components/layout/Heading";
import CategoryCards from "@/components/categories/CategoryCards";
import CoursesSection from "@/components/courses/CoursesSection";
import Icon from "@/components/layout/Icon";
import Galleries from "@/components/gallery/Galleries";

const fetchLessonsPage = cache(getLessonsPage);
const fetchGalleries = cache(getGalleries);
const fetchReachOut = cache(getReachOut);
const fetchEmail = cache(getEmail);
const fetchSeo = cache(getPageSeo);

export default async function ChineseLessonsPage() {
  const lessonsPage = await fetchLessonsPage("zh");
  const galleries = await fetchGalleries("zh");
  const email = await fetchEmail();
  const reachOut = await fetchReachOut("zh");

  return (
    <PageLayout
      pageTitle={lessonsPage.pageTitle}
      description={lessonsPage.description}
      popups={lessonsPage.popups}
    >
      <div className="flex w-full flex-col gap-4">
        <div className="flex gap-2">
          <Icon name={lessonsPage.lessons.icon} size={32} weight="bold" />
          <Heading text={lessonsPage.lessons.title} type="h2" />
        </div>

        <CategoryCards
          cards={lessonsPage.lessons.lessonTypes}
          email={email.email}
        />
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

      <Reviews reviews={lessonsPage.reviews} />
      <Galleries gallery={galleries} />

      <ReachOut reachOut={reachOut} email={email.email} />
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
