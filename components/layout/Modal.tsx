"use client";

import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

interface Props {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  code: string;
}

export default function Modal({ openModal, setOpenModal, code }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openModal && containerRef.current) {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(code, "text/html");

      const scriptEl = htmlDoc.querySelector("script");
      const widgetDiv = htmlDoc.querySelector("div");

      if (widgetDiv && containerRef.current) {
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(widgetDiv);
      }

      if (scriptEl) {
        const newScript = document.createElement("script");
        newScript.innerHTML = scriptEl.innerHTML;
        containerRef.current.appendChild(newScript);
      }
    }
  }, [openModal, code]);

  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 z-30 flex h-screen w-full items-center justify-center"
        >
          <div
            className="absolute top-0 left-0 z-30 h-screen w-screen bg-black/50"
            onClick={() => setOpenModal(false)}
          ></div>

          <div
            className="pointer-events-auto relative z-40 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="m-8">
              <div ref={containerRef} className="overflow-hidden rounded-lg" />
            </div>

            <button
              className="absolute top-12 right-12 z-50 cursor-pointer text-black"
              onClick={() => setOpenModal(false)}
            >
              <Icon name="XIcon" size={20} weight="bold" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
