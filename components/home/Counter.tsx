"use client";

import { animate, useMotionValue } from "framer-motion";
import Description from "../layout/Description";
import { memo, useEffect, useState } from "react";

interface Props {
  number: number;
  suffix: string;
  description: string;
}

function Counter({ number, suffix, description }: Props) {
  const motionValue = useMotionValue(1);
  const [displayValue, setDisplayValue] = useState(1);

  useEffect(() => {
    const controls = animate(motionValue, number, {
      duration: 2,
      ease: "easeInOut",
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });

    return controls.stop;
  }, [motionValue]);

  return (
    <div className="flex flex-col gap-1 whitespace-nowrap">
      <div className="text-2xl font-semibold">
        {displayValue}
        {suffix}
      </div>
      <Description description={description} />
    </div>
  );
}

export default memo(Counter);
