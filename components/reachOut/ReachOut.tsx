import { ReachOut as ReachOutType } from "@/types/ReachOut.types";
import Heading from "../layout/Heading";
import ReachOutItem from "./ReachOutItem";

interface Props {
  reachOut: ReachOutType;
}

export default function ReachOut({ reachOut }: Props) {
  return (
    <section className="flex w-full flex-col gap-6 lg:items-center">
      <Heading text={reachOut.title} type="h2" />

      <div className="flex w-full flex-col justify-center gap-6 lg:flex-row">
        {reachOut.cards.map((card) => (
          <div key={`reach-out-card-${card.id}`} className="w-full lg:w-1/3">
            <ReachOutItem
              icon={card.icon}
              title={card.title}
              description={card.description}
              buttonText={card.button.text}
              code={card.button.code}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
