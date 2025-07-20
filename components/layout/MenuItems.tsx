"use client";

import { Menu } from "@/types/Menu.types";
import { usePathname } from "next/navigation";
import TextStagger from "../animation/TextStagger";
import Link from "next/link";

interface Props {
  czechMenu: Menu;
  chineseMenu: Menu;
}

export default function MenuItems({ czechMenu, chineseMenu }: Props) {
  const pathname = usePathname();
  const menu = pathname.startsWith("/zh") ? chineseMenu : czechMenu;

  return menu.items.map((item) => (
    <Link key={item.link} href={item.link}>
      <TextStagger>{item.title}</TextStagger>
    </Link>
  ));
}
