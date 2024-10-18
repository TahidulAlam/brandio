import React from "react";
import Image from "next/image";
import Button from "../../button/Button";

const ExplorePlan = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-10 lg:p-20 w-[90%] lg:w-[80%] mx-auto bg-black">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <div className="flex w-full">
          <img
            src="/assets/image/Image 9.png"
            alt="Feedback Background"
            width={500}
            height={500}
            className="w-full z-0"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col text-white text-center lg:text-left">
        <h1 className="text-xl lg:text-2xl font-bold py-2 text-yellow-400">
          Enroll for Monthly Design
        </h1>
        <p className="text-sm lg:text-base text-start">
          Explore your brand with our monthly design subscription service. Our
          experienced and creative designers are dedicated to bringing your
          vision to life. Choose from our flexible pricing plans that suit your
          needs.
        </p>
        <div className="mt-6 lg:mt-10">
          <Button
            children={"Explore Plan"}
            className="px-6 lg:px-10 py-2 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ExplorePlan;
