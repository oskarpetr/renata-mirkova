import { ReachOut as ReachOutType } from "@/types/ReachOut.types";
import Heading from "../layout/Heading";
import ReachOutItem from "./ReachOutItem";

interface Props {
  reachOut: ReachOutType;
  email: string;
}

export default function ReachOut({ reachOut, email }: Props) {
  return (
    <section className="flex w-full flex-col gap-6 lg:items-center">
      <Heading text={reachOut.title} type="h2" />

      <div className="flex w-full flex-col justify-center gap-6 lg:flex-row">
        {reachOut.cards.map((card) => (
          <div key={`reach-out-card-${card.id}`} className="w-full lg:w-1/3">
            <ReachOutItem card={card} email={email} />
          </div>
        ))}
      </div>
    </section>
  );
}
