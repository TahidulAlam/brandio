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
      <div className="bg-black grid grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="flex-col gap-10">
            <h1 className="text-yellow-400 font-semibold text-6xl pb-5">
              Innovation Starts Here
            </h1>
            <h1 className="text-white">
              Brandio is a global leader in branding and development, dedicated
              to redefining brand experiences and empowering business growth.
            </h1>
            <Button
              onClick={handleClickBan}
              className="mt-5 rounded-3xl font-semibold bg-yellow-400 px-8 py-3 text-lg text-black duration-300 active:scale-95"
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
