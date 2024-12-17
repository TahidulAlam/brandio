import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import InquryBanner from "@/components/home/inquery-banner/InquryBanner";
import WorkContentBanner from "@/components/ourWorkComponents/workContentBanner/WorkContentBanner";
import TextWithLineBreaks from "@/components/TextWithLineBreaks";
import React from "react";

const motionGraphics = () => {
  return (
    <>
      <Container bgClassName="bg-black">
        <WorkContentBanner
          title={"Motion Graphics &/n Reels"}
          paragraph={
            "Explore our diverse portfolio, where innovation meets design./n At Brandio, we transform ideas into stunning visuals and impactful/n experiences that elevate brands and engage audiences. Dive into/n our work and see how we can bring your vision to life!"
          }
          buttonText={"Create Your Design Now"}
        />
      </Container>
      <Container bgClassName="my-10">
        <div>
          <TextWithLineBreaks
            text="Make your Brand Real with/n attractive Motion."
            classNameP="text-5xl font-bold text-center mb-4"
          />
        </div>
        <div className="flex justify-center lg:gap-20 gap-2">
          <Button children={"Motion Graphics"} />
          <Button children={"Video Reels"} />
        </div>
      </Container>
      <InquryBanner />
    </>
  );
};

export default motionGraphics;
