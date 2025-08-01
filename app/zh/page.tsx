import HeroSection from "@/components/sections/home/HeroSection";
import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import { getEmail, getHomePage, getPageSeo, getReachOut } from "@/utils/cms";
import HomeSectionItem from "@/components/sections/home/HomeSectionItem";
import ReachOut from "@/components/reachOut/ReachOut";
import { pageMetadata } from "@/utils/seo";

const fetchHomePage = cache(getHomePage);
const fetchReachOut = cache(getReachOut);
const fetchEmail = cache(getEmail);
const fetchSeo = cache(getPageSeo);

export default async function ChineseHomePage() {
  const homePage = await fetchHomePage("zh");
  const reachOut = await fetchReachOut("zh");
  const email = await fetchEmail();

  return (
    <PageLayout popups={homePage.popups}>
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

      <ReachOut reachOut={reachOut} email={email.email} />
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
