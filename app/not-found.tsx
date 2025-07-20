import PageLayout from "@/components/layout/PageLayout";
import NotFoundHeroSection from "@/components/not-found/NotFoundHeroSection";
import { getNotFoundPage, getPageSeo } from "@/utils/cms";
import { pageMetadata } from "@/utils/seo";
import { cache } from "react";

const fetchNotFoundPage = cache(getNotFoundPage);
const fetchSeo = cache(getPageSeo);

export default async function NotFound() {
  const notFoundPageCzech = await fetchNotFoundPage("cs");
  const notFoundPageChinese = await fetchNotFoundPage("zh");

  return (
    <PageLayout>
      <NotFoundHeroSection
        notFoundPageCzech={notFoundPageCzech}
        notFoundPageChinese={notFoundPageChinese}
      />
    </PageLayout>
  );
}

export async function generateMetadata() {
  const seo = await fetchSeo("notFoundPage", "cs");
  return pageMetadata(seo);
}
