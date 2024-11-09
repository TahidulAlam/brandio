import Container from "@/components/container/Container";
import AllImageContent from "@/components/ourWorkComponents/allImageContent/AllImageContent";
import WorkContentBanner from "@/components/ourWorkComponents/workContentBanner/WorkContentBanner";
import React from "react";

const logoDesign = () => {
  const imageData = [
    { src: "/assets/image/Our Work/Logo Design/image (1).jpg", alt: "Image 1" },
    { src: "/assets/image/Our Work/Logo Design/image (2).jpg", alt: "Image 2" },
    { src: "/assets/image/Our Work/Logo Design/image (3).jpg", alt: "Image 3" },
    { src: "/assets/image/Our Work/Logo Design/image (4).jpg", alt: "Image 4" },
    { src: "/assets/image/Our Work/Logo Design/image (5).jpg", alt: "Image 5" },
    { src: "/assets/image/Our Work/Logo Design/image (6).jpg", alt: "Image 6" },
    { src: "/assets/image/Our Work/Logo Design/image (7).jpg", alt: "Image 7" },
    { src: "/assets/image/Our Work/Logo Design/image (8).jpg", alt: "Image 8" },
    { src: "/assets/image/Our Work/Logo Design/image (9).jpg", alt: "Image 9" },
    {
      src: "/assets/image/Our Work/Logo Design/image (10).jpg",
      alt: "Image 10",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (11).jpg",
      alt: "Image 11",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (12).jpg",
      alt: "Image 12",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (13).jpg",
      alt: "Image 13",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (14).jpg",
      alt: "Image 14",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (15).jpg",
      alt: "Image 15",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (16).jpg",
      alt: "Image 16",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (17).jpg",
      alt: "Image 17",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (18).jpg",
      alt: "Image 18",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (19).jpg",
      alt: "Image 19",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (20).jpg",
      alt: "Image 20",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (21).jpg",
      alt: "Image 21",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (22).jpg",
      alt: "Image 22",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (23).jpg",
      alt: "Image 23",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (24).jpg",
      alt: "Image 24",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (25).jpg",
      alt: "Image 25",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (26).jpg",
      alt: "Image 26",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (27).jpg",
      alt: "Image 27",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (28).jpg",
      alt: "Image 28",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (29).jpg",
      alt: "Image 29",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (30).jpg",
      alt: "Image 30",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (31).jpg",
      alt: "Image 31",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (32).jpg",
      alt: "Image 32",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (33).jpg",
      alt: "Image 33",
    },
    {
      src: "/assets/image/Our Work/Logo Design/image (34).jpg",
      alt: "Image 34",
    },
  ];
  return (
    <div>
      <Container bgClassName="bg-black">
        <WorkContentBanner
          title={"Logo Design"}
          paragraph={
            "Explore our diverse portfolio, where innovation meets design./n At Brandio, we transform ideas into stunning visuals and impactful/n experiences that elevate brands and engage audiences. Dive into/n our work and see how we can bring your vision to life!"
          }
          buttonText={"Design my Product Now"}
        />
      </Container>
      <Container bgClassName="mt-10 mb-10">
        <AllImageContent imageData={imageData} />
      </Container>
    </div>
  );
};
// title, paragraph, buttonText
export default logoDesign;
