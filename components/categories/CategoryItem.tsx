import { Category } from "@/types/Category.types";
import Heading from "../layout/Heading";
import CategoryCards from "./CategoryCards";

interface Props {
  category: Category;
}

export default function CategoryItem({ category }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <Heading text={category.title} type="h2" />
      <CategoryCards cards={category.cards} />
    </div>
  );
}
