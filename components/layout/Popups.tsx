import { Popup as PopupType } from "@/types/Popup.types";
import Popup from "./Popup";

interface Props {
  popups: PopupType[];
}

export default function Popups({ popups }: Props) {
  return (
    <div>
      {popups.map((popup) => (
        <Popup key={popup.id} code={popup.code} />
      ))}
    </div>
  );
}
