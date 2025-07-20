"use client";

import { Menu } from "@/types/Menu.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { useState } from "react";
import TextStagger from "../animation/TextStagger";
import { motion } from "framer-motion";

interface Props {
  czechMenu: Menu;
  chineseMenu: Menu;
}

export default function MobileMenuItems({ czechMenu, chineseMenu }: Props) {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const menu = pathname.startsWith("/zh") ? chineseMenu : czechMenu;

  return (
    <div>
      <Icon
        name="ListIcon"
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: open ? 1 : 0, display: open ? "flex" : "none" }}
        exit={{ opacity: 0, display: "none" }}
        className="absolute top-0 left-0 mt-20 flex w-full flex-col gap-4 border-b bg-white px-8 py-8 text-xl sm:px-16 lg:px-32 xl:px-48"
      >
        {menu.items.map((item) => (
          <Link key={item.link} href={item.link} onClick={() => setOpen(false)}>
            <TextStagger>{item.title}</TextStagger>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
