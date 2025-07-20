import HeroSection from "@/components/sections/home/HeroSection";
import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import { getHomePage, getPageSeo, getReachOut } from "@/utils/cms";
import ReachOut from "@/components/reachOut/ReachOut";
import HomeSectionItem from "@/components/sections/home/HomeSectionItem";
import { pageMetadata } from "@/utils/seo";

const fetchHomePage = cache(getHomePage);
const fetchReachOut = cache(getReachOut);
const fetchSeo = cache(getPageSeo);

export default async function HomePage() {
  const homePage = await fetchHomePage("cs");
  const reachOut = await fetchReachOut("cs");

  return (
    <PageLayout>
      <HeroSection homePage={homePage} />

      <div id="home-sections" className="flex flex-col gap-14">
        {homePage.sections.map((section) => (
          <HomeSectionItem
            key={section.id}
            title={section.title}
            sectionCards={section.cards}
          />
        ))}
      </div>

      <ReachOut reachOut={reachOut} />
    </PageLayout>
  );
}

export async function generateMetadata() {
  const seo = await fetchSeo("homePage", "cs");

  if (seo) {
    return pageMetadata(seo);
  } else {
    const notFoundSeo = await fetchSeo("notFoundPage", "cs");
    return pageMetadata(notFoundSeo);
  }
}
