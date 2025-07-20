import { cache, ReactNode } from "react";
import Heading from "./Heading";
import FadeIn from "../animation/FadeIn";
import BlockContent from "./BlockContent";
import { getPopups } from "@/utils/cms";
import Popups from "./Popups";

interface Props {
  children: ReactNode;
  pageTitle?: string;
  description?: string;
}

const fetchPopups = cache(getPopups);

export default async function PageLayout({
  children,
  pageTitle,
  description,
}: Props) {
  const popupsCzech = await fetchPopups("cs");
  const popupsChinese = await fetchPopups("zh");

  return (
    <main className="flex min-h-[40vh] flex-col items-start gap-14 px-8 py-16 sm:gap-28 sm:px-16 sm:py-16 lg:px-32 xl:px-48">
      {(pageTitle || description) && (
        <div className="flex flex-col gap-4">
          {pageTitle && (
            <FadeIn animateWhileInView={false}>
              <Heading text={pageTitle} type="h1" />
            </FadeIn>
          )}

          {description && (
            <FadeIn animateWhileInView={false}>
              <div className="lg:w-1/2">
                <BlockContent content={description} />
              </div>
            </FadeIn>
          )}
        </div>
      )}

      {children}

      <Popups popupsCzech={popupsCzech} popupsChinese={popupsChinese} />
    </main>
  );
}
