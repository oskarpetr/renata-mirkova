import Icon from "../layout/Icon";
import { RefObject } from "react";
import { SwiperType } from "./Reviews";

interface Props {
  swiperRef: RefObject<SwiperType>;
}

export default function ReviewsControls({ swiperRef }: Props) {
  const slidePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const slideNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="absolute inset-0 hidden sm:block">
      <div className="absolute top-2/5 -translate-y-1/2 sm:-left-12 lg:-left-16">
        <button onClick={slidePrev} className="cursor-pointer opacity-50">
          <Icon name="CaretDownIcon" className="rotate-90" size={32} />
        </button>
      </div>

      <div className="absolute top-2/5 -translate-y-1/2 sm:-right-12 lg:-right-16">
        <button onClick={slideNext} className="cursor-pointer opacity-50">
          <Icon name="CaretDownIcon" className="-rotate-90" size={32} />
        </button>
      </div>
    </div>
  );
}
