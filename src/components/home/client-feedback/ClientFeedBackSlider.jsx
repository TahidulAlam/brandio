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
    designation: "Cheif Marketing Officer",
    review:
      "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
    image: "/assets/image/Client Review.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Cheif Marketing Officer",
    review:
      "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
    image: "/assets/image/Client Review.png",
  },
  {
    id: 3,
    name: "Samuel Jones",
    designation: "Cheif Marketing Officer",
    review:
      "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
    image: "/assets/image/Client Review.png",
  },
  {
    id: 4,
    name: "Anna Williams",
    designation: "Cheif Marketing Officer",
    review:
      "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
    image: "/assets/image/Client Review.png",
  },
  {
    id: 5,
    name: "Michael Brown",
    designation: "Cheif Marketing Officer",
    review:
      "We were happy that we found the best UI/UX Design agency and best product design agency to work with. We will definitely continue to work with them as we have greatest output.",
    image: "/assets/image/Client Review.png",
  },
];

const ClientFeedBackSlider = () => (
  <Swiper
    slidesPerView={3}
    spaceBetween={30}
    centeredSlides={true}
    // pagination={{ clickable: true }}
    modules={[Pagination]}
    className="mySwiper cursor-grab"
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
