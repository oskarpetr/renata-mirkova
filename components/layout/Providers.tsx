import { Lenis } from "lenis/react";
import { memo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Providers({ children }: Props) {
  return <Lenis root>{children}</Lenis>;
}

export default memo(Providers);
