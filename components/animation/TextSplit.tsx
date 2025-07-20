"use client";

import { BEZIER_EASING } from "@/utils/animation";
import { motion, Variants } from "framer-motion";
import { memo } from "react";

interface Props {
  text: string;
  delay?: number;
  animateWhileInView?: boolean;
  includeExitAnimation?: boolean;
}

function TextSplit({
  text,
  delay = 0,
  animateWhileInView = true,
  includeExitAnimation = false,
}: Props) {
  const isCzech = text.includes(" ");
  const words = isCzech ? text.split(" ") : text.split("");
  const stagger = isCzech ? 0.01 : 0.005;

  const variants: Variants = {
    initial: {
      y: "300%",
      clipPath: "inset(100% 0 100% 0)",
    },
    animate: {
      y: 0,
      clipPath: "inset(0 0 0 0)",
    },
  };

  return (
    <motion.p
      initial="initial"
      animate={animateWhileInView ? undefined : "animate"}
      whileInView={animateWhileInView ? "animate" : undefined}
      exit={includeExitAnimation ? "initial" : undefined}
      viewport={animateWhileInView ? { once: true, amount: 1 } : undefined}
      className="relative inline-block overflow-hidden opacity-80"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={variants}
          transition={{
            delay: delay + index * stagger,
            duration: 1.2,
            ease: BEZIER_EASING,
          }}
          className="inline-block"
        >
          {word}
          {isCzech && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default memo(TextSplit);
