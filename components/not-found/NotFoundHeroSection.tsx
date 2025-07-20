"use client";

import { NotFoundPage } from "@/types/NotFoundPage.types";
import Heading from "../layout/Heading";
import { usePathname } from "next/navigation";
import BlockContent from "../layout/BlockContent";

interface Props {
  notFoundPageCzech: NotFoundPage;
  notFoundPageChinese: NotFoundPage;
}

export default function NotFoundHeroSection({
  notFoundPageCzech,
  notFoundPageChinese,
}: Props) {
  const pathname = usePathname();
  const notFoundPage = pathname.startsWith("/zh")
    ? notFoundPageChinese
    : notFoundPageCzech;

  return (
    <div className="flex flex-col gap-4">
      <Heading text={notFoundPage.pageTitle} type="h1" />
      <BlockContent content={notFoundPage.description} />
    </div>
  );
}
