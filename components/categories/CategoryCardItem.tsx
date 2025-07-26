import Heading from "../layout/Heading";
import Card from "../layout/Card";
import BlockContent from "../layout/BlockContent";
import { CategoryCard } from "@/types/Category.types";
import Button from "../layout/Button";
import Link from "next/link";

interface Props {
  card: CategoryCard;
  email: string;
}

export default function CategoryCardItem({ card, email }: Props) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <Heading text={card.title} type="h3" />
        <BlockContent content={card.content} />
      </div>

      {card.pricing.length > 0 && (
        <div className="flex flex-col gap-3 sm:flex-row">
          {card.pricing.map((pricing, index) => (
            <Link
              href={`mailto:${email}?subject=${card.title}`}
              key={`lesson-${card.id}-pricing-${index}`}
            >
              <Button
                text={pricing}
                style="primary"
                className="w-full sm:w-fit"
              />
            </Link>
          ))}
        </div>
      )}
    </Card>
  );
}
