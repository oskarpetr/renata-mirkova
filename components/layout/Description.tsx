import { cn } from "@/utils/cn";

interface Props {
  description: string;
  width?: "1/2" | "full";
}

export default function Description({ description, width = "full" }: Props) {
  return (
    <p className={cn("opacity-80", width === "full" ? "w-full" : "max-w-1/2")}>
      {description}
    </p>
  );
}
