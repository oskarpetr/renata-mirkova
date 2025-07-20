"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PathnameWrapperProps {
  children: (pathname: string) => ReactNode;
}

export default function PathnameWrapper({ children }: PathnameWrapperProps) {
  const pathname = usePathname();
  return <>{children(pathname)}</>;
}
