import Container from "@/components/container/Container";
import AllImageContent from "@/components/ourWorkComponents/allImageContent/AllImageContent";
import WorkContentBanner from "@/components/ourWorkComponents/workContentBanner/WorkContentBanner";
import React from "react";

const socialMediaBanner = () => {
  const imageData = [
    {
      src: "/assets/image/Our Work/Social Media Banner/image (1).jpg",
      alt: "Image 1",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (2).jpg",
      alt: "Image 2",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (3).jpg",
      alt: "Image 3",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (4).jpg",
      alt: "Image 4",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (5).jpg",
      alt: "Image 5",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (6).jpg",
      alt: "Image 6",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (7).jpg",
      alt: "Image 7",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (8).jpg",
      alt: "Image 8",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (9).jpg",
      alt: "Image 9",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (10).jpg",
      alt: "Image 10",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (11).jpg",
      alt: "Image 11",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (12).jpg",
      alt: "Image 12",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (13).jpg",
      alt: "Image 13",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (14).jpg",
      alt: "Image 14",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (15).jpg",
      alt: "Image 15",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (16).jpg",
      alt: "Image 16",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (17).jpg",
      alt: "Image 17",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (18).jpg",
      alt: "Image 18",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (19).jpg",
      alt: "Image 19",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (20).jpg",
      alt: "Image 20",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (21).jpg",
      alt: "Image 21",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (22).jpg",
      alt: "Image 22",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (23).jpg",
      alt: "Image 23",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (24).jpg",
      alt: "Image 24",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (25).jpg",
      alt: "Image 25",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (26).jpg",
      alt: "Image 26",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (27).jpg",
      alt: "Image 27",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (28).jpg",
      alt: "Image 28",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (29).jpg",
      alt: "Image 29",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (30).jpg",
      alt: "Image 30",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (31).jpg",
      alt: "Image 31",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (32).jpg",
      alt: "Image 32",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (33).jpg",
      alt: "Image 33",
    },
    {
      src: "/assets/image/Our Work/Social Media Banner/image (34).jpg",
      alt: "Image 34",
    },
  ];
  return (
    <div>
      <Container bgClassName="bg-black">
        <WorkContentBanner
          title={"Social Media Banner"}
          paragraph={
            "Explore our diverse portfolio, where innovation meets design./n At Brandio, we transform ideas into stunning visuals and impactful/n experiences that elevate brands and engage audiences. Dive into/n our work and see how we can bring your vision to life!"
          }
          buttonText={"Create Your Design Now"}
        />
      </Container>
      <Container bgClassName="mt-10 mb-10">
        <AllImageContent imageData={imageData} />
      </Container>
    </div>
  );
};

export default socialMediaBanner;
