import PageLayout from "@/components/layout/PageLayout";
import { cache } from "react";
import { getCookiesModal, getPolicy } from "@/utils/cms";
import BlockContent from "@/components/layout/BlockContent";
import CookiesSection from "@/components/cookies/CookiesSection";

const fetchCookiesPolicy = cache(getPolicy);
const fetchCookiesModal = cache(getCookiesModal);

export default async function CookiesPolicyPage() {
  const policy = await fetchCookiesPolicy("cookiesPolicy");
  const czechCookiesModal = await fetchCookiesModal("cs");
  const chineseCookiesModal = await fetchCookiesModal("zh");

  return (
    <PageLayout>
      <BlockContent content={policy.cookiesPolicy} />
      <CookiesSection
        czechCookiesModal={czechCookiesModal}
        chineseCookiesModal={chineseCookiesModal}
      />
    </PageLayout>
  );
}
