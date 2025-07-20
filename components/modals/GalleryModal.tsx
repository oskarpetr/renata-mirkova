import { GalleryImage } from "@/types/GalleryImage.types";
import { cn } from "@/utils/cn";
import { MouseEvent, useEffect } from "react";
import Icon from "../layout/Icon";
import Image from "next/image";

interface Props {
  gallery: GalleryImage[];
  selectedImage: GalleryImage | null;
  setSelectedImage: (image: GalleryImage | null) => void;
}

export default function GalleryModal({
  gallery,
  selectedImage,
  setSelectedImage,
}: Props) {
  const nextImage = (e?: MouseEvent<HTMLButtonElement>) => {
    if (!selectedImage) return;
    if (e) e.stopPropagation();

    const nextIndex = (currentIndex + 1) % gallery.length;
    setSelectedImage(gallery[nextIndex]);
  };

  const previousImage = (e?: MouseEvent<HTMLButtonElement>) => {
    if (!selectedImage) return;
    if (e) e.stopPropagation();

    const previousIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    setSelectedImage(gallery[previousIndex]);
  };

  const currentIndex = gallery.findIndex(
    (image) => image.id === selectedImage?.id,
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedImage) return;

    switch (e.key) {
      case "ArrowLeft":
        previousImage();
        break;
      case "ArrowRight":
        nextImage();
        break;
      case "Escape":
        setSelectedImage(null);
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-20 flex items-center justify-between bg-black/85 px-8 transition-opacity",
        selectedImage ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      onClick={() => setSelectedImage(null)}
    >
      <button
        onClick={previousImage}
        className="cursor-pointer p-4 focus:outline-none"
      >
        <Icon
          name="CaretDownIcon"
          color="white"
          size={32}
          className="rotate-90"
        />
      </button>

      {selectedImage && (
        <div className="relative z-30 p-4" onClick={(e) => e.stopPropagation()}>
          <div
            className="relative max-h-[85vh] w-full max-w-[min(1000px,90vw)]"
            style={{
              aspectRatio: `${selectedImage.width}/${selectedImage.height}`,
            }}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              placeholder="blur"
              blurDataURL={selectedImage.placeholder}
              className="rounded-xl object-contain"
            />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="font-semibold text-white">{selectedImage.alt}</div>
            <div className="text-sm text-white opacity-80">
              {currentIndex + 1}/{gallery.length}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={nextImage}
        className="cursor-pointer p-4 focus:outline-none"
      >
        <Icon
          name="CaretDownIcon"
          color="white"
          size={32}
          className="-rotate-90"
        />
      </button>
    </div>
  );
}
