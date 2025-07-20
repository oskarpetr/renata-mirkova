import { AboutSection as AboutSectionType } from "@/types/AboutPage.types";
import Image from "next/image";
import Heading from "../layout/Heading";
import BlockContent from "../layout/BlockContent";
import { cn } from "@/utils/cn";

interface Props {
  aboutSection: AboutSectionType;
}

export default function AboutSection({ aboutSection }: Props) {
  return (
    <section
      className={cn(
        "flex w-full gap-8 lg:items-center lg:gap-20",
        aboutSection.alignment === "left"
          ? "flex-col-reverse lg:flex-row"
          : "flex-col-reverse lg:flex-row-reverse",
      )}
    >
      <Image
        src={aboutSection.image.src}
        alt={aboutSection.title}
        width={400}
        height={600}
        placeholder="blur"
        blurDataURL={aboutSection.image.placeholder}
        className="w-full rounded-xl sm:w-96"
      />

      <div className="flex flex-col gap-4">
        <Heading text={aboutSection.title} type="h2" />
        <BlockContent content={aboutSection.content} />
      </div>
    </section>
  );
}
