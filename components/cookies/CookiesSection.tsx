"use client";

import { CookiesModal } from "@/types/CookiesModal.types";
import Heading from "../layout/Heading";
import Description from "../layout/Description";
import { usePathname } from "next/navigation";
import CookieItem from "./CookieItem";

interface Props {
  czechCookiesModal: CookiesModal;
  chineseCookiesModal: CookiesModal;
}

export default function CookiesSection({
  czechCookiesModal,
  chineseCookiesModal,
}: Props) {
  const pathname = usePathname();
  const cookiesModal = pathname.startsWith("/zh")
    ? chineseCookiesModal
    : czechCookiesModal;

  return (
    <div className="flex flex-col gap-2">
      <Heading text={cookiesModal.title} type="h2" />
      <Description description={cookiesModal.description} />

      <div className="mt-2 flex flex-col gap-2 lg:w-1/2">
        <CookieItem
          heading={cookiesModal.technicalCookies.title}
          description={cookiesModal.technicalCookies.description}
          alwaysActive
        />
        <CookieItem
          heading={cookiesModal.marketingCookies.title}
          description={cookiesModal.marketingCookies.description}
        />
      </div>
    </div>
  );
}
