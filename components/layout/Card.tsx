import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface Props {
  children: ReactNode;
  withoutPadding?: ReactNode;
}

export default function Card({ children, withoutPadding }: Props) {
  return (
    <div
      className={cn(
        "h-fit overflow-hidden rounded-xl border border-black/10 bg-white",
        {
          // "bg-neutral-50": allowBackground,
        },
      )}
    >
      {withoutPadding && withoutPadding}

      <div className="flex flex-col gap-6 p-6">{children}</div>
    </div>
  );
}
