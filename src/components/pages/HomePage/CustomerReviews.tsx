import CustomerReviewCard from "./CustomerReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviewCardData = [
  {
    id: 1,
    starCount: 5,
    reviewTitle: "Great experience!",
    reviewText:
      "I had an amazing experience with this service. Highly recommend to everyone!",
    customerName: "John Doe",
    customerLocation: "New York, USA",
    customerImageSrc: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 2,
    starCount: 2,
    reviewTitle: "Very satisfied but could be better",
    reviewText:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended! But i dont like this company because they are very busy and they dont care about their customers.",
    customerName: "Jane Smith",
    customerLocation: "London, UK",
    customerImageSrc: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 3,
    starCount: 3,
    reviewTitle: "Exceeded expectations",
    reviewText:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    customerName: "Alice Johnson",
    customerLocation: "Sydney, Australia",
    customerImageSrc: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    id: 4,
    starCount: 4,
    reviewTitle: "Highly recommend",
    reviewText:
      "I would highly recommend this to anyone looking for quality service.",
    customerName: "Michael Brown",
    customerLocation: "Toronto, Canada",
    customerImageSrc: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    id: 5,
    starCount: 2,
    reviewTitle: "Outstanding service",
    reviewText:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    customerName: "Emily Davis",
    customerLocation: "Sydney, Australia",
    customerImageSrc: "https://randomuser.me/api/portraits/men/80.jpg",
  },
  {
    id: 6,
    starCount: 5,
    reviewTitle: "Outstanding service",
    reviewText:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    customerName: "Emily Davis",
    customerLocation: "London, UK",
    customerImageSrc: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    id: 7,
    starCount: 5,
    reviewTitle: "Outstanding service",
    reviewText:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    customerName: "Emily Davis",
    customerLocation: "Istanbul, Turkey",
    customerImageSrc: "https://randomuser.me/api/portraits/men/82.jpg",
  },
];

function CustomerReviews() {
  return (
    <section className="mt-24">
      <h2 className="mb-10 text-center text-[32px] font-semibold">
        What our clients say
      </h2>
      <Swiper
        className="customer-reviews-swiper"
        slidesPerView={1.1}
        spaceBetween={12}
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".customer-reviews-pagination" }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {reviewCardData.map((card) => (
          <SwiperSlide>
            <CustomerReviewCard
              key={card.id}
              starCount={card.starCount}
              reviewTitle={card.reviewTitle}
              reviewText={card.reviewText}
              customerName={card.customerName}
              customerLocation={card.customerLocation}
              customerImageSrc={card.customerImageSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="customer-reviews-pagination mt-5 text-center"></div>
    </section>
  );
}

export default CustomerReviews;
