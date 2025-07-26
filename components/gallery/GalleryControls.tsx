import Icon from "../layout/Icon";
import { RefObject } from "react";
import { SwiperType } from "../modals/GalleryModal";

interface Props {
  swiperRef: RefObject<SwiperType>;
  onClose: () => void;
}

export default function GalleryControls({ swiperRef, onClose }: Props) {
  const slidePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const slideNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="absolute inset-0">
      <div className="fixed top-8 right-8 z-50">
        <button onClick={onClose} className="cursor-pointer">
          <Icon name="XIcon" color="white" size={32} />
        </button>
      </div>

      <div className="absolute top-[50%] left-2 z-50 translate-y-[-50%] sm:left-8">
        <button
          onClick={slidePrev}
          className="cursor-pointer rounded-full border bg-white p-2 sm:p-4"
        >
          <Icon
            name="CaretDownIcon"
            className="hidden rotate-90 sm:block"
            size={32}
          />
          <Icon
            name="CaretDownIcon"
            className="block rotate-90 sm:hidden"
            size={24}
          />
        </button>
      </div>

      <div className="absolute top-[50%] right-2 z-50 translate-y-[-50%] sm:right-8">
        <button
          onClick={slideNext}
          className="cursor-pointer rounded-full border bg-white p-2 sm:p-4"
        >
          <Icon
            name="CaretDownIcon"
            className="hidden -rotate-90 text-3xl sm:block"
            size={32}
          />

          <Icon
            name="CaretDownIcon"
            className="block -rotate-90 text-3xl sm:hidden"
            size={24}
          />
        </button>
      </div>
    </div>
  );
}
