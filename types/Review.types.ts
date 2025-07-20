export interface ReviewSection {
  id: string;
  title: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  description: string;
  content: string;
  authorImage: string;
  starRating: number;
}
