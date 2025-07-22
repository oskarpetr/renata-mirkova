"use client";

import { useCookiesStore } from "@/stores/cookiesStore";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Heading from "../layout/Heading";
import Description from "../layout/Description";
import Icon from "../layout/Icon";
import Button from "../layout/Button";
import { useState } from "react";
import CookieItem from "./CookieItem";
import { CookiesModal as CookiesModalType } from "@/types/CookiesModal.types";
import { usePathname } from "next/navigation";

interface Props {
  czechCookiesModal: CookiesModalType;
  chineseCookiesModal: CookiesModalType;
}

export default function CookiesModal({
  czechCookiesModal,
  chineseCookiesModal,
}: Props) {
  const pathname = usePathname();
  const cookiesModal = pathname.startsWith("/zh")
    ? chineseCookiesModal
    : czechCookiesModal;

  const { open, setOpen } = useCookiesStore();
  const [openSettings, setOpenSettings] = useState(false);

  const handleAcceptAll = () => {
    setOpen(false);
  };

  const handleRejectAll = () => {
    setOpen(false);
  };

  const toggleSettings = () => {
    setOpenSettings((prev) => !prev);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{
            opacity: open ? 1 : 0,
            y: 0,
            display: open ? "flex" : "none",
          }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, y: "100%" }}
          className="fixed right-8 bottom-8 ml-8 flex max-w-[40rem] flex-col gap-6 rounded-xl border border-black/10 bg-white px-8 py-6 shadow-2xl"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Heading text={cookiesModal.title} type="h3" />
              <Icon
                name="XIcon"
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              />
            </div>

            <Description description={cookiesModal.description} />
          </div>

          <AnimatePresence>
            {openSettings && (
              <motion.div className="flex flex-col gap-2">
                <CookieItem
                  heading={cookiesModal.technicalCookies.title}
                  description={cookiesModal.technicalCookies.description}
                  alwaysActive
                />
                <CookieItem
                  heading={cookiesModal.marketingCookies.title}
                  description={cookiesModal.marketingCookies.description}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col gap-2 lg:flex-row">
            <Button
              text={cookiesModal.buttons.accept}
              width="full"
              onClick={handleAcceptAll}
            />
            <Button
              text={cookiesModal.buttons.decline}
              width="full"
              onClick={handleRejectAll}
            />
            <Button
              text={
                openSettings
                  ? cookiesModal.buttons.save
                  : cookiesModal.buttons.settings
              }
              style="cancel"
              width="full"
              onClick={toggleSettings}
            />
          </div>

          <Link href="/zasady-cookies" className="text-blue-500">
            {cookiesModal.cookiesPolicyText}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
