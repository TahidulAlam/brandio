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
    name: "John Doe",
    designation: "Chief Marketing Officer",
    review:
      "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
    image: "/assets/image/Client Review.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Chief Marketing Officer",
    review:
      "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
    image: "/assets/image/Client Review.png",
  },
  {
    id: 3,
    name: "Samuel Jones",
    designation: "Chief Marketing Officer",
    review:
      "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
    image: "/assets/image/Client Review.png",
  },
  {
    id: 4,
    name: "Anna Williams",
    designation: "Chief Marketing Officer",
    review:
      "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
    image: "/assets/image/Client Review.png",
  },
  {
    id: 5,
    name: "Michael Brown",
    designation: "Chief Marketing Officer",
    review:
      "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
    image: "/assets/image/Client Review.png",
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
