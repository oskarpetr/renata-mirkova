import HeroSection from "@/components/sections/home/HeroSection";
import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import { getHomePage, getPageSeo, getReachOut } from "@/utils/cms";
import Section from "@/components/sections/home/HomeSectionItem";
import ReachOut from "@/components/reachOut/ReachOut";
import { pageMetadata } from "@/utils/seo";

const fetchHomePage = cache(getHomePage);
const fetchReachOut = cache(getReachOut);
const fetchSeo = cache(getPageSeo);

export default async function ChineseHomePage() {
  const homePage = await fetchHomePage("zh");
  const reachOut = await fetchReachOut("zh");

  return (
    <PageLayout>
      <HeroSection homePage={homePage} />

      {homePage.sections.map((section) => (
        <Section
          key={section.id}
          title={section.title}
          sectionCards={section.cards}
        />
      ))}

      <ReachOut reachOut={reachOut} />
    </PageLayout>
  );
}

export async function generateMetadata() {
  const seo = await fetchSeo("homePage", "zh");

  if (seo) {
    return pageMetadata(seo);
  } else {
    const notFoundSeo = await fetchSeo("notFoundPage", "zh");
    return pageMetadata(notFoundSeo);
  }
}
