"use client";

import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const isChinese = pathname.startsWith("/zh");

  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex cursor-pointer items-center gap-1 sm:relative sm:gap-2"
    >
      <div className="text-xl font-normal sm:text-2xl">
        {isChinese ? "🇨🇳" : "🇨🇿"}
      </div>
      <Icon name="CaretDownIcon" size={14} weight="bold" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <div
              className={cn(
                "absolute right-4 left-auto z-10 mt-4 flex w-48 overflow-hidden rounded-md border border-black/10 bg-white shadow-lg sm:right-auto sm:-left-4",
                isChinese ? "flex-col" : "flex-col-reverse",
              )}
            >
              <Link
                href="/zh"
                className="flex w-full items-center justify-between px-4 py-2 hover:bg-neutral-100"
              >
                <div>🇨🇳 &nbsp;中文</div>
                {isChinese && <Icon name="CheckIcon" size={18} />}
              </Link>
              <div className="h-px w-full bg-black/10"></div>
              <Link
                href="/"
                className="flex w-full items-center justify-between px-4 py-2 hover:bg-neutral-100"
              >
                <div>🇨🇿 &nbsp;Česky</div>
                {!isChinese && <Icon name="CheckIcon" size={18} />}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {open && (
        <div className="fixed inset-0 z-0" onClick={() => setOpen(false)}></div>
      )}
    </button>
  );
}
