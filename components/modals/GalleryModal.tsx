import { GalleryImage } from "@/types/Galleries.types";
import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { SwiperOptions } from "swiper/types";
import { Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import GalleryControls from "../gallery/GalleryControls";

interface Props {
  gallery: GalleryImage[];
  selectedImage: GalleryImage | null;
  setSelectedImage: (image: GalleryImage | null) => void;
}

export type SwiperType = ReturnType<typeof useSwiper> | null;

export default function GalleryModal({
  gallery,
  selectedImage,
  setSelectedImage,
}: Props) {
  const swiperRef = useRef<SwiperType>(null);

  const currentSlide = gallery.findIndex(
    (image) => image.id === selectedImage?.id,
  );

  const breakpoints: SwiperOptions["breakpoints"] = {
    0: { slidesPerView: 1.2 },
    1024: { slidesPerView: 1.5 },
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setSelectedImage(gallery[currentIndex]);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedImage) return;
    if (e.key === "Escape") setSelectedImage(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  if (!selectedImage) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-20 flex items-center justify-between bg-black/90 transition-opacity",
      )}
      onClick={() => setSelectedImage(null)}
    >
      {selectedImage && (
        <div className="z-30 w-full" onClick={(e) => e.stopPropagation()}>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={24}
            grabCursor
            autoHeight
            centeredSlides
            modules={[Keyboard]}
            keyboard={{ enabled: true, onlyInViewport: true }}
            initialSlide={currentSlide}
            breakpoints={breakpoints}
            onSlideChange={handleSlideChange}
          >
            {gallery.map((image) => (
              <SwiperSlide
                key={image.id}
                className="relative top-[50%] translate-y-[-50%]"
              >
                <div
                  className="flex max-h-[65vh] items-center justify-center"
                  style={{
                    aspectRatio: `${image.width}/${image.height}`,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    placeholder="blur"
                    blurDataURL={image.placeholder}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}

            <GalleryControls
              swiperRef={swiperRef}
              onClose={() => setSelectedImage(null)}
            />
          </Swiper>

          {selectedImage && (
            <div className="flex w-screen justify-center">
              <div className="mt-4 flex items-center gap-6">
                <div className="font-semibold text-white">
                  {selectedImage?.alt}
                </div>
                <div className="text-sm text-white opacity-80">
                  {currentSlide + 1}/{gallery.length}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
