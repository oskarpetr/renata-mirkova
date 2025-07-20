import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import { getContactPage, getPageSeo } from "@/utils/cms";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import { pageMetadata } from "@/utils/seo";

const fetchContactPage = cache(getContactPage);
const fetchSeo = cache(getPageSeo);

export default async function ContactPage() {
  const contactPage = await fetchContactPage("cs");

  return (
    <PageLayout>
      <ContactHeroSection contactPage={contactPage} />
    </PageLayout>
  );
}

export async function generateMetadata() {
  const seo = await fetchSeo("contactPage", "cs");

  if (seo) {
    return pageMetadata(seo);
  } else {
    const notFoundSeo = await fetchSeo("notFoundPage", "cs");
    return pageMetadata(notFoundSeo);
  }
}
