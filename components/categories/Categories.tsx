import { Category } from "@/types/Category.types";
import CategoryItem from "./CategoryItem";

interface Props {
  categories: Category[];
  email: string;
}

export default function Categories({ categories, email }: Props) {
  return (
    categories.length > 0 &&
    categories.map((category) => (
      <CategoryItem key={category.id} category={category} email={email} />
    ))
  );
  // : (
  //   <NoItemsYet items="sections" />
  // );
}
