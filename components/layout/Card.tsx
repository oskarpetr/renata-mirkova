import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  withoutPadding?: ReactNode;
}

export default function Card({ children, withoutPadding }: Props) {
  return (
    <div className="h-fit overflow-hidden rounded-xl border border-black/10 bg-white">
      {withoutPadding && withoutPadding}

      <div className="flex flex-col gap-6 p-6">{children}</div>
    </div>
  );
}
