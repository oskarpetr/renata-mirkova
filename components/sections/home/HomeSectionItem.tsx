import Heading from "@/components/layout/Heading";

import { HomeSectionCard } from "@/types/HomeSection.types";
import HomeSectionCardItem from "./HomeSectionCardItem";

interface Props {
  title: string;
  sectionCards: HomeSectionCard[];
}

export default function HomeSectionItem({ title, sectionCards }: Props) {
  return (
    <section className="flex flex-col gap-4">
      <Heading text={title} type="h2" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sectionCards.map((sectionCard) => (
          <HomeSectionCardItem
            key={`card-item-${sectionCard.id}`}
            card={sectionCard}
          />
        ))}
      </div>
    </section>
  );
}
