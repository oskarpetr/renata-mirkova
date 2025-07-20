import Image from "next/image";
import Heading from "../../layout/Heading";
import Button from "../../layout/Button";
import Counter from "@/components/home/Counter";
import FadeIn from "@/components/animation/FadeIn";
import { HomePage } from "@/types/HomePage.types";
import BlockContent from "@/components/layout/BlockContent";
import ShowMoreButton from "./ShowMoreButton";

interface Props {
  homePage: HomePage;
}

export default function HeroSection({ homePage }: Props) {
  return (
    <section className="w-full">
      <div className="flex w-full flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-12 lg:gap-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <FadeIn animateWhileInView={false}>
                <Heading text={homePage.pageTitle} type="h1" />
              </FadeIn>

              <div className="w-full sm:max-w-[18rem] lg:max-w-[25rem]">
                <FadeIn>
                  <BlockContent content={homePage.description} />
                </FadeIn>
              </div>
            </div>

            <FadeIn delay={0.2} animateWhileInView={false}>
              <ShowMoreButton text={homePage.showMoreButtonText} />
            </FadeIn>
          </div>

          <div className="flex gap-8 lg:gap-16">
            {homePage.counters.map((counter) => (
              <FadeIn
                key={`counter-${counter.id}`}
                delay={0.3}
                animateWhileInView={false}
              >
                <Counter
                  number={counter.value}
                  suffix={counter.suffix}
                  description={counter.description}
                />
              </FadeIn>
            ))}
          </div>
        </div>

        <Image
          src={homePage.image.src}
          alt="Renata Mirková / 米仁"
          width={800}
          height={800}
          placeholder="blur"
          blurDataURL={homePage.image.placeholder}
          className="w-full rounded-xl sm:w-60 lg:w-96"
        />
      </div>
    </section>
  );
}
