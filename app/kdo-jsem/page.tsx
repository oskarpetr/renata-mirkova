import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import { getAboutPage, getPageSeo, getReachOut } from "@/utils/cms";
import ReachOut from "@/components/reachOut/ReachOut";
import AboutSection from "@/components/about/AboutSection";
import { pageMetadata } from "@/utils/seo";

const fetchAboutPage = cache(getAboutPage);
const fetchReachOut = cache(getReachOut);
const fetchSeo = cache(getPageSeo);

export default async function AboutMePage() {
  const aboutPage = await fetchAboutPage("cs");
  const reachOut = await fetchReachOut("cs");

  return (
    <PageLayout>
      {aboutPage.sections.map((section) => (
        <AboutSection key={section.id} aboutSection={section} />
      ))}

      <ReachOut reachOut={reachOut} />
    </PageLayout>
  );
}

export async function generateMetadata() {
  const seo = await fetchSeo("aboutPage", "cs");

  if (seo) {
    return pageMetadata(seo);
  } else {
    const notFoundSeo = await fetchSeo("notFoundPage", "cs");
    return pageMetadata(notFoundSeo);
  }
}
