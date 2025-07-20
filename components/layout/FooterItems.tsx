"use client";

import {
  Footer,
  FooterContentSection,
  FooterLegalInformation,
  FooterSocialSites,
} from "@/types/Footer.types";
import Heading from "./Heading";
import Link from "next/link";
import TextStagger from "../animation/TextStagger";
import Description from "./Description";
import { usePathname } from "next/navigation";
import SocialSites from "./SocialSites";

interface Props {
  czechFooter: Footer;
  chineseFooter: Footer;
}

export default function FooterItems({ czechFooter, chineseFooter }: Props) {
  const pathname = usePathname();
  const footer = pathname.startsWith("/zh") ? chineseFooter : czechFooter;

  const formatLegalInformation = (section: FooterLegalInformation) => (
    <div className="flex flex-col gap-2">
      <Heading text={section.title} type="h3" />

      <div className="flex flex-col gap-1">
        {section.links.map((item, itemIndex) => (
          <Link
            href={item.link}
            target={item.target}
            key={`footer-item-${section.title}-${itemIndex}`}
          >
            <TextStagger>
              <Description description={item.title} />
            </TextStagger>
          </Link>
        ))}
      </div>
    </div>
  );

  const formatContentSection = (section: FooterContentSection) => (
    <div className="flex flex-col gap-2">
      <Heading text={section.title} type="h3" />

      <div className="flex flex-col gap-1">
        {section.content.map((item, itemIndex) => (
          <Description
            key={`footer-item-${section.title}-${itemIndex}`}
            description={item}
          />
        ))}
      </div>
    </div>
  );

  const formatCopyright = (section: string[]) => (
    <div className="flex flex-col gap-2">
      {section.map((item, itemIndex) => (
        <div className="opacity-50" key={`footer-copyright-${itemIndex}`}>
          {item}
        </div>
      ))}
    </div>
  );

  const formatSocialSites = (socialSites: FooterSocialSites) => (
    <div className="flex flex-col gap-2">
      <Heading text={socialSites.title} type="h3" />
      <SocialSites socialSites={socialSites.sites} />
    </div>
  );

  return (
    <>
      {formatLegalInformation(footer.legalInformation)}
      {formatContentSection(footer.billingInformation)}
      {formatSocialSites(footer.socialSites)}
      {formatCopyright(footer.copyright)}
    </>
  );
}
