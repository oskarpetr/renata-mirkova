import { SocialSites as SocialSitesType } from "@/types/SocialSites.types";
import Link from "next/link";
import Icon from "./Icon";

interface Props {
  socialSites: SocialSitesType;
}

export default function SocialSites({ socialSites }: Props) {
  return (
    <div className="grid w-fit grid-cols-3 gap-1">
      {socialSites.sites.map((item) => (
        <Link
          href={item.link}
          target="_blank"
          key={`footer-item-${item.title}`}
        >
          <Icon name={item.icon} size={30} weight="fill" />
        </Link>
      ))}

      <Link href={`mailto:${socialSites.email}`}>
        <Icon name="EnvelopeOpenIcon" size={30} weight="fill" />
      </Link>
    </div>
  );
}
