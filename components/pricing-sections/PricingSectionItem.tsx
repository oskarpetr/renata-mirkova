import Heading from "../layout/Heading";
import NoItemsYet from "../layout/NoItemsYet";
import { PricingSection } from "@/types/PricingSection.types";
import PricingSectionCardItem from "./PricingSectionCardItem";

interface Props {
  section: PricingSection;
}

export default function PricingSectionItem({ section }: Props) {
  return (
    <div className="flex w-full flex-col gap-4">
      <Heading text={section.title} type="h2" />

      <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2">
        {section.cards.length > 0 ? (
          section.cards.map((card) => (
            <PricingSectionCardItem key={card.id} card={card} />
          ))
        ) : (
          <NoItemsYet items="cards" />
        )}
      </div>
    </div>
  );
}
