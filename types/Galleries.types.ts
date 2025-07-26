import { IconType } from "@/components/layout/Icon";

export interface GalleryObjectCms {
  id: string;
  title: string;
  icon: IconType;
  galleries: GalleryCms[];
}

export type GalleryObject = Omit<GalleryObjectCms, "galleries"> & {
  galleries: Gallery[];
};

export interface GalleryCms {
  id: string;
  title: string;
  gallery: GalleryImageCms[];
}

export interface Gallery {
  id: string;
  title: string;
  gallery: GalleryImage[];
}

export interface GalleryImageCms {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  placeholder: string;
}

export type GalleryImage = GalleryImageCms & {
  placeholder: string;
};
