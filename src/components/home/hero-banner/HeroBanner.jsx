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
          <div className="flex-col gap-10 lg:mt-5 mt-10 z-10 ">
            <h1 className="text-yellow-400 font-semibold lg:text-6xl text-4xl pb-5 lg:text-nowrap z-40">
              Innovation Starts Here
            </h1>
            <h1 className="text-white lg:text-base text-sm">
              Brandio is a global leader in branding and development, dedicated
              to redefining brand experiences and empowering business growth.
            </h1>
            <div className="lg:mt-0 mt-5">
              <Button onClick={handleClickBan}>
                Have a project in your mind
              </Button>
            </div>
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
