"use client";

import PopupsType from "@/types/Popups.types";
import { usePathname } from "next/navigation";
import Popup from "./Popup";

interface Props {
  popupsCzech: PopupsType;
  popupsChinese: PopupsType;
}

export default function Popups({ popupsCzech, popupsChinese }: Props) {
  const pathname = usePathname();
  const popups = pathname.startsWith("/zh") ? popupsChinese : popupsCzech;

  return (
    <div>
      {popups.popups.map((popup) => (
        <Popup key={popup.id} code={popup.code} />
      ))}
    </div>
  );
}
