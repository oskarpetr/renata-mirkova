"use client";

import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface Props {
  text: string;
  width?: "fit" | "full";
  onClick?: () => void;
  disabled?: boolean;
  style?: "primary" | "cancel";
  className?: ComponentProps<"div">["className"];
}

export default function Button({
  text,
  width = "fit",
  onClick,
  disabled = false,
  style = "primary",
  className,
}: Props) {
  return (
    <button
      className={cn(
        "cursor-pointer gap-2 rounded-xl border border-black/10 px-6 py-2 transition-colors disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-black/50",
        width === "fit" ? "w-fit" : "w-full",
        style === "primary"
          ? "bg-primary hover:bg-primary-hover"
          : "bg-neutral-200 text-black/70 hover:bg-neutral-300",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <div>{text}</div>
    </button>
  );
}
