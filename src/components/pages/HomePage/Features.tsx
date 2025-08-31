import img1 from "../../../assets/img/features/1.jpg";
import img2 from "../../../assets/img/features/2.jpg";
import img3 from "../../../assets/img/features/3.jpg";
import img4 from "../../../assets/img/features/4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import FeatureCard from "./FeatureCard";

const featureCardData = [
  {
    id: 1,
    imageSrc: img1,
    text: "All the projects in one place",
  },
  {
    id: 2,
    imageSrc: img2,
    text: "Work with verified and trusted developers",
  },
  {
    id: 3,
    imageSrc: img3,
    text: "Find the best option for your next investment",
  },
  {
    id: 4,
    imageSrc: img4,
    text: "Doesn't cost you more Guaranteed price",
  },
];

function FeaturesSection() {
  return (
    <section className="mt-16 md:mt-24 md:px-12 lg:mt-36">
      <div className="flex justify-center">
        <h2 className="max-w-[673px] text-center text-2xl font-semibold md:text-[32px]">
          Buying with{" "}
          <span className="font-bold text-[var(--color-primary)]">
            Soloenpreventa
          </span>{" "}
          doesn't cost you more Guaranteed price
        </h2>
      </div>
      <div className="mt-9 mb-9">
        <Swiper
          className="features-swiper"
          slidesPerView={1.1}
          spaceBetween={16}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 34,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 68,
            },
          }}
          modules={[Autoplay]}
        >
          {featureCardData.map((card) => (
            <SwiperSlide>
              <FeatureCard
                key={card.id}
                imageSrc={card.imageSrc}
                text={card.text}
                href="#?"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-9 text-center">
        <a href="#=" className="italic underline">
          View More
        </a>
      </div>
    </section>
  );
}

export default FeaturesSection;
