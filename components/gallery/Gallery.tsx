"use client";

import Image from "next/image";
import Heading from "../layout/Heading";
import { GalleryImage, GallerySection } from "@/types/GalleryImage.types";
import { useState } from "react";
import GalleryModal from "../modals/GalleryModal";
import NoItemsYet from "../layout/NoItemsYet";

interface Props {
  gallery: GallerySection;
}

export default function Gallery({ gallery }: Props) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="flex flex-col items-start gap-6">
      <Heading text={gallery.title} type="h2" />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {gallery.gallery.length > 0 ? (
          gallery.gallery.map((image) => (
            <button
              key={image.id}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-black/10 transition-all hover:border-black/20"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-auto w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={600}
                  placeholder="blur"
                  blurDataURL={image.placeholder}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </button>
          ))
        ) : (
          <NoItemsYet items="images" />
        )}
      </div>

      <GalleryModal
        gallery={gallery.gallery}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </section>
  );
}
