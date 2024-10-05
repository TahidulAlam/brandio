import Button from "@/components/button/Button";
import React from "react";

const ServicesBanner = () => {
  return (
    <div className="h-[500px] w-[90%] mx-auto">
      <h1 className="font-bold text-7xl text-white pt-20 pb-5">
        Digital Product Design & <br /> Consulting Services
      </h1>
      <p className="text-white">
        Our Global digital product design agency helps brands to make
        top-quality Branding, <br /> MVP, Software, Mobile apps, and Websites.
        We focus on user-friendly designs that <br /> look great and work
        smoothly. Let us help your business grow with our expert <br /> digital
        product solutions.
      </p>
      <Button
        //   onClick={handleClickBan}
        className="mt-5 rounded-3xl font-semibold bg-yellow-400 px-8 py-3 text-lg text-black duration-300 active:scale-95"
      >
        Design my Product Now
      </Button>
    </div>
  );
};

export default ServicesBanner;
