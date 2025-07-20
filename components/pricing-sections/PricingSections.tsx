import { PricingSection } from "@/types/PricingSection.types";
import PricingSectionItem from "./PricingSectionItem";

interface Props {
  sections: PricingSection[];
}

export default function PricingSections({ sections }: Props) {
  return (
    sections.length > 0 &&
    sections.map((section) => (
      <PricingSectionItem key={section.id} section={section} />
    ))
  );
  // : (
  //   <NoItemsYet items="sections" />
  // );
}
