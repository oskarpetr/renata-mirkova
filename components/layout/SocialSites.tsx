import { SocialSites as SocialSitesType } from "@/types/SocialSites.types";
import Link from "next/link";
import Icon from "./Icon";

interface Props {
  socialSites: SocialSitesType;
}

export default function SocialSites({ socialSites }: Props) {
  return (
    <div className="grid w-fit grid-cols-3 gap-1">
      {socialSites.sites.map((item, itemIndex) => (
        <Link
          href={item.link}
          target={
            item.link.startsWith("mailto") || item.link.startsWith("tel")
              ? "_self"
              : "_blank"
          }
          key={`footer-item-${item.title}-${itemIndex}`}
        >
          <Icon name={item.icon} size={30} weight="fill" />
        </Link>
      ))}
    </div>
  );
}
