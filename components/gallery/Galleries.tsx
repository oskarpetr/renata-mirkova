"use client";

import Heading from "../layout/Heading";
import { GalleryObject } from "@/types/Galleries.types";
import NoItemsYet from "../layout/NoItemsYet";
import Icon from "../layout/Icon";
import GalleryItem from "./GalleryItem";

interface Props {
  gallery: GalleryObject;
}

export default function Galleries({ gallery }: Props) {
  console.log(gallery);
  return (
    <section className="flex flex-col items-start gap-6">
      <div className="flex items-center gap-2">
        <Icon name={gallery.icon} size={32} weight="bold" />
        <Heading text={gallery.title} type="h2" />
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6">
        {gallery.galleries.length > 0 ? (
          gallery.galleries.map((gallery) => (
            <GalleryItem key={gallery.id} gallery={gallery} />
          ))
        ) : (
          <NoItemsYet items="gallery" />
        )}
      </div>
    </section>
  );
}
