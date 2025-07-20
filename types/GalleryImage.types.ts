export interface GallerySectionCms {
  id: string;
  title: string;
  gallery: GalleryImageCms[];
}

export interface GallerySection {
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
