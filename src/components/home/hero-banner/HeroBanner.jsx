"use client";
import React from "react";
import BannerVideo from "./BannerVideo";
import Button from "@/components/button/Button";

const HeroBanner = () => {
  const handleClickBan = () => {
    console.log("Button was clicked!");
  };
  return (
    <>
      <div className="bg-black lg:grid lg:grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="flex-col gap-10 lg:mt-5 mt-10 z-10 lg:ml-16 ml-0">
            <h1 className="text-yellow-400 font-semibold text-6xl pb-5 lg:text-nowrap z-40">
              Innovation Starts Here
            </h1>
            <h1 className="text-white">
              Brandio is a global leader in branding and development, dedicated
              to redefining brand experiences and empowering business growth.
            </h1>
            <Button
              onClick={handleClickBan}
              className="mt-4 rounded-full font-semibold bg-yellow-400 text-black text-sm md:text-base lg:text-base px-6 py-2 md:px-3 md:py-1 lg:px-5 lg:py-2 duration-300 transform transition hover:scale-105 active:scale-95"
            >
              Have a project in your mind
            </Button>
          </div>
        </div>
        <div className="">
          <BannerVideo />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
