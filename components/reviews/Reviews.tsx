"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ReviewSection } from "@/types/Review.types";
import Heading from "../layout/Heading";
import ReviewItem from "./ReviewItem";
import { SwiperOptions } from "swiper/types";
import { useRef } from "react";
import ReviewsControls from "./ReviewsControls";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  reviews: ReviewSection;
}

export type SwiperType = ReturnType<typeof useSwiper> | null;

export default function Reviews({ reviews }: Props) {
  const breakpoints: SwiperOptions["breakpoints"] = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  };

  const swiperRef = useRef<SwiperType>(null);

  return (
    <section className="relative -left-8 flex w-screen flex-col items-start gap-6 bg-neutral-100 px-8 py-20 sm:-left-16 sm:px-16 lg:-left-32 lg:px-32 xl:-left-48 xl:px-48">
      <Heading text={reviews.title} type="h2" />

      {reviews.reviews.length > 0 ? (
        <div className="relative w-full overflow-visible">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={3}
            spaceBetween={24}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop
            grabCursor
            autoplay={{ delay: 2500 }}
            breakpoints={breakpoints}
            style={{ paddingBottom: "3rem" }}
          >
            {reviews.reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewItem review={review} />
              </SwiperSlide>
            ))}
          </Swiper>

          <ReviewsControls swiperRef={swiperRef} />
        </div>
      ) : (
        <div className="col-span-full text-center text-black/50">
          No reviews found.
        </div>
      )}
    </section>
  );
}
