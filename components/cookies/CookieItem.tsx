import { useState } from "react";
import Description from "../layout/Description";
import Icon from "../layout/Icon";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  heading: string;
  description: string;
  alwaysActive?: boolean;
}

export default function CookieItem({
  heading,
  description,
  alwaysActive,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full rounded-xl border border-neutral-200 bg-neutral-100">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between gap-1 px-6 py-3 focus:outline-none"
      >
        <div className="font-semibold">{heading}</div>

        <div className="flex items-center gap-1">
          <div>
            {alwaysActive ? (
              <div className="opacity-50">Vždy aktivní</div>
            ) : (
              <input type="checkbox" />
            )}
          </div>
          <Icon
            name="CaretDownIcon"
            className="-rotate-90 opacity-50"
            size={18}
          />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div className="px-6 pb-3">
            <Description description={description} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
