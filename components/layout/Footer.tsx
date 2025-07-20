import { getFooter } from "@/utils/cms";
import { cache } from "react";
import FooterItems from "./FooterItems";

const fetchFooter = cache(getFooter);

export default async function Footer() {
  const czechFooter = await fetchFooter("cs");
  const chineseFooter = await fetchFooter("zh");

  return (
    <footer className="grid grid-cols-1 gap-x-6 gap-y-12 border-t px-8 py-16 sm:px-16 md:grid-cols-2 lg:px-32 xl:grid-cols-4 xl:px-48">
      <FooterItems czechFooter={czechFooter} chineseFooter={chineseFooter} />
    </footer>
  );
}
