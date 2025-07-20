import { Review } from "@/types/Review.types";
import Card from "../layout/Card";
import Heading from "../layout/Heading";
import Description from "../layout/Description";
import Image from "next/image";
import Icon from "../layout/Icon";

interface Props {
  review: Review;
}

export default function ReviewItem({ review }: Props) {
  return (
    <Card>
      <Image
        src={review.authorImage}
        alt={review.author}
        width={100}
        height={100}
        className="h-16 w-16 rounded-full object-cover"
      />

      <div className="flex flex-col">
        <Heading text={review.author} type="h3" />
        <div className="font-semibold opacity-50">{review.description}</div>
      </div>

      <Description description={review.content} />

      <div className="flex gap-0.5 text-yellow-500">
        {Array(review.starRating)
          .fill(0)
          .map((_, index) => (
            <Icon
              key={`review-${review.id}-star-${index}`}
              name="StarIcon"
              weight="fill"
            />
          ))}
      </div>
    </Card>
  );
}
