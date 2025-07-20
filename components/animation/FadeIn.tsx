"use client";

import { BEZIER_EASING } from "@/utils/animation";
import { motion } from "framer-motion";
import { memo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  animateWhileInView?: boolean;
  delay?: number;
}

function FadeIn({ children, animateWhileInView = true, delay = 0 }: Props) {
  return (
    <motion.div
      whileInView={animateWhileInView ? { opacity: 1, y: 0 } : undefined}
      animate={animateWhileInView ? undefined : { opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      viewport={animateWhileInView ? { once: true, amount: 1 } : undefined}
      transition={{
        delay,
        duration: 1,
        ease: BEZIER_EASING,
      }}
    >
      {children}
    </motion.div>
  );
}

export default memo(FadeIn);
