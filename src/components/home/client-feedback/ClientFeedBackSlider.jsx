"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Import base Swiper styles
import "swiper/css/pagination"; // Import Pagination styles
import FeedBackCard from "./FeedBackCard";

const reviews = [
  {
    id: 1,
    name: "Nedin Zahirovic",
    designation: "Co-Founder, Konoom, Europe",
    review:
      "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
    image: "/assets/image/Client Image/Nedin-Zahirovic.png",
  },
  {
    id: 2,
    name: "Sabbir Ahmed",
    designation: "Product Manager, Mircus, China",
    review:
      "Brandio efficiently, positively, and actively managed the workflow and communication. Overall, they were professional designers who delivered quality outcomes.",
    image: "/assets/image/Client Image/Sabbir Ahmed.png",
  },
  {
    id: 3,
    name: "Rejaul Karim",
    designation: "CEO, Nature Corner BD, Bangladesh",
    review:
      "Their ability to produce high-quality, on-brand design elements and animation within days was a game changer!",
    image: "/assets/image/Client Image/Rejaul-Karim.png",
  },
  {
    id: 4,
    name: "Reshad Kaka Falah",
    designation: "CEO, Maryam Amiri, Denmark",
    review:
      "Their creativity and strategic thinking have given us a clear visual identity, making our branding efforts so much easier. Great experience!",
    image: "/assets/image/Client Image/Reshad-Kaka-Falah.png",
  },
  {
    id: 5,
    name: "Hridoy Islam",
    designation: "CEO, Saaiq Corporation, Bangladesh",
    review:
      "They understood our needs from the get-go and created a design that not only looks stunning but also aligns perfectly with our core values. It’s been a pleasure working with such a dedicated team!",
    image: "/assets/image/Client Image/Anisul-Islam.png",
  },
];

const ClientFeedBackSlider = () => (
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    // pagination={{ clickable: true }}
    modules={[Pagination]}
    className="mySwiper cursor-grab"
    breakpoints={{
      // Mobile
      320: {
        slidesPerView: 1,
      },
      // Tablet
      768: {
        slidesPerView: 2,
      },
      // Desktop
      1024: {
        slidesPerView: 3,
      },
    }}
  >
    {reviews.map(({ id, name, review, image, designation }) => (
      <SwiperSlide key={id}>
        <FeedBackCard
          review={review}
          name={name}
          image={image}
          designation={designation}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ClientFeedBackSlider;
