import Button from "@/components/button/Button";
import React from "react";

const ServicesBanner = () => {
  return (
    <div className="h-auto lg:w-[82%] w-[90%] mx-auto text-center md:text-left lg:pb-28 pb-5">
      {/* Title */}
      <div className="flex flex-col pt-10 md:pt-20 pb-5 gap-5">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl text-white leading-snug">
          Digital Product Design &
        </h1>
        <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl text-white leading-snug">
          {" "}
          Consulting Services
        </h1>
      </div>

      {/* Description */}
      <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed mb-5">
        Our Global digital product design agency helps brands make top-quality
        Branding, <br /> MVP, Software, Mobile apps, and Websites. We focus on
        user-friendly designs that <br /> look great and work smoothly. Let us
        help your business grow with our expert <br /> digital product
        solutions.
      </p>

      {/* Button */}
      <Button className="mt-5 rounded-3xl font-semibold bg-yellow-400 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg text-black duration-300 active:scale-95">
        Design my Product Now
      </Button>
    </div>
  );
};

export default ServicesBanner;
