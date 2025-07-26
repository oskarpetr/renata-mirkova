import Button from "@/components/layout/Button";
import Card from "@/components/layout/Card";
import Description from "@/components/layout/Description";
import Heading from "@/components/layout/Heading";
import { HomeSectionCard } from "@/types/HomeSection.types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  card: HomeSectionCard;
}

export default function HomeSectionCardItem({ card }: Props) {
  const websiteRegex =
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  const isWebsite = websiteRegex.test(card.button.link);

  const sectionImage = (
    <Image
      src={card.image.src}
      alt={card.title}
      width={400}
      height={400}
      placeholder="blur"
      blurDataURL={card.image.placeholder}
      className="h-48 w-full object-cover sm:h-72"
    />
  );

  return (
    <Card withoutPadding={sectionImage}>
      <div className="flex flex-col gap-2">
        <Heading text={card.title} type="h3" />
        <Description description={card.description} />
      </div>

      <Link href={card.button.link} target={isWebsite ? "_blank" : "_self"}>
        <Button text={card.button.text} width="full" />
      </Link>
    </Card>
  );
}
