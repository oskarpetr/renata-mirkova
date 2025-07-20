"use client";

import { memo, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { BEZIER_EASING } from "@/utils/animation";

function TextStagger({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-85%" },
        }}
        transition={{ ease: BEZIER_EASING, duration: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
        transition={{ ease: BEZIER_EASING, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default memo(TextStagger);
