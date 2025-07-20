import Heading from "../layout/Heading";
import Button from "../layout/Button";
import Card from "../layout/Card";
import BlockContent from "../layout/BlockContent";
import { PricingSectionCard } from "@/types/PricingSection.types";

interface Props {
  card: PricingSectionCard;
}

export default function PricingSectionCardItem({ card }: Props) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <Heading text={card.title} type="h3" />
        <BlockContent content={card.content} />
      </div>

      {card.pricings.length > 0 && (
        <div className="flex flex-col gap-3 sm:flex-row">
          {card.pricings.map((pricing, index) => (
            <Button
              key={`lesson-section-${card.id}-pricing-${index}`}
              text={pricing}
              style="primary"
              className="w-full sm:w-fit"
            />
          ))}
        </div>
      )}
    </Card>
  );
}
