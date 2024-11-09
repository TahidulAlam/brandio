import React from "react";
import Image from "next/image";
import Button from "../../button/Button";

const ExplorePlan = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-2 lg:p-20 w-[95%] lg:w-[80%] mx-auto bg-black py-10">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <div className="flex w-full">
          <img
            src="/assets/image/Rectangle 1463.png"
            alt="Feedback Background"
            width={500}
            height={500}
            className="w-full z-0"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start text-white lg:text-left lg:ml-5">
        <h1 className="text-xl lg:text-4xl font-bold py-2 text-yellow-400">
          Ensure your Brand Guideline
        </h1>
        <p className="text-sm lg:text-base text-start lg:pt-5 pt-0">
          You can create full professional brand guideline design for your
          company, which ensures your brand value is high, ensure clear &
          effective business growth.
        </p>
        <div className="mt-6 lg:mt-10">
          <Button
            children={"Contact us"}
            className="px-6 lg:px-10 py-2 rounded-2xl  text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ExplorePlan;
