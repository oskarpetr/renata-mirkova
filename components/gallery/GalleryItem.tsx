import { Gallery, GalleryImage } from "@/types/Galleries.types";
import Image from "next/image";
import GalleryModal from "../modals/GalleryModal";
import { useState } from "react";

interface Props {
  gallery: Gallery;
}

export default function GalleryItem({ gallery }: Props) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <button
        key={gallery.id}
        className="group relative flex cursor-pointer flex-col items-start gap-2 transition-all hover:border-black/20 focus:outline-none"
        onClick={() => setSelectedImage(gallery.gallery[0])}
      >
        <div className="relative h-auto w-full overflow-hidden rounded-xl border border-black/10">
          <Image
            src={gallery.gallery[0].src}
            alt={gallery.gallery[0].alt}
            width={600}
            height={600}
            placeholder="blur"
            blurDataURL={gallery.gallery[0].placeholder}
            className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
        <div className="text-lg font-semibold">{gallery.title}</div>
      </button>

      <GalleryModal
        gallery={gallery.gallery}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </>
  );
}
