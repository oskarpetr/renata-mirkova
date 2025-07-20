import Image from "next/image";
import FadeIn from "@/components/animation/FadeIn";
import Heading from "../layout/Heading";
import { ContactPage } from "@/types/ContactPage.types";
import SocialSites from "../layout/SocialSites";
import BlockContent from "../layout/BlockContent";

interface Props {
  contactPage: ContactPage;
}

export default function ContactHeroSection({ contactPage }: Props) {
  return (
    <section className="w-full">
      <div className="flex w-full flex-col justify-between gap-12 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <FadeIn animateWhileInView={false}>
              <Heading text={contactPage.pageTitle} type="h1" />
            </FadeIn>

            <div className="max-w-[25rem]">
              <FadeIn>
                <BlockContent content={contactPage.description} />
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.2}>
            {contactPage.billingInformation.map((item, index) => (
              <div key={`billing-info-${index}`} className="opacity-80">
                {item}
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={0.3}>
            <SocialSites socialSites={contactPage.socialSites} />
          </FadeIn>
        </div>

        <Image
          src={contactPage.image.src}
          alt="Renata Mirková / 米仁"
          width={800}
          height={800}
          placeholder="blur"
          blurDataURL={contactPage.image.placeholder}
          className="w-full rounded-xl sm:w-60 lg:w-96"
        />
      </div>
    </section>
  );
}
