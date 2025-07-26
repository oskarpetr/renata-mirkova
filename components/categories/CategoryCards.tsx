import { CategoryCard } from "@/types/Category.types";
import CategoryCardItem from "./CategoryCardItem";
import NoItemsYet from "../layout/NoItemsYet";

interface Props {
  cards: CategoryCard[];
  email: string;
}

export default function CategoryCards({ cards, email }: Props) {
  return (
    <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2">
      {cards.length > 0 ? (
        cards.map((card) => (
          <CategoryCardItem key={card.id} card={card} email={email} />
        ))
      ) : (
        <NoItemsYet items="cards" />
      )}
    </div>
  );
}
