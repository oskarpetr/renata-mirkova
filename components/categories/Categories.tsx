import { Category } from "@/types/Category.types";
import CategoryItem from "./CategoryItem";

interface Props {
  categories: Category[];
}

export default function Categories({ categories }: Props) {
  return (
    categories.length > 0 &&
    categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))
  );
  // : (
  //   <NoItemsYet items="sections" />
  // );
}
