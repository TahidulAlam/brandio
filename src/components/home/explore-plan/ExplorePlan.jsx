import React from "react";
import Image from "next/image";
import Button from "../../button/Button";
const ExplorePlan = () => {
  return (
    <div className="flex justify-center items-center gap-10 p-20 w-[80%] mx-auto bg-black">
      <div className="w-2/4">
        <div className="flex w-[100%]">
          <img
            src="/assets/image/Image 9.png"
            alt="Feedback Background"
            // layout="fill"
            // objectFit="cover"
            width={500}
            height={500}
            className=" w-full z-0"
          />
        </div>
      </div>
      <div className="w-2/4 flex flex-col text-white">
        <h1 className="text-2xl font-bold py-2 text-yellow-400">
          Enroll for Monthly Design
        </h1>
        <p>
          Explore your brand with our monthly design subscription service. Our
          experienced and creative designers are dedicated to bringing your
          vision to life. Choose from our flexible pricing plans that suits your
          needs.
        </p>
        <div className="mt-10">
          <Button
            children={"Explore Plan"}
            className={"px-10 py-2 rounded-2xl"}
          />
        </div>
      </div>
    </div>
  );
};

export default ExplorePlan;
