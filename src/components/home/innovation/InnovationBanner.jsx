import React from "react";
import Button from "../../button/Button";

const InnovationBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-2 py-10 lg:p-20 w-[90%] lg:w-[80%] mx-auto">
      {/* Text Section */}
      <div className="w-full lg:w-3/5 flex flex-col justify-start lg:text-left text-black">
        <h1 className="text-xl lg:text-4xl font-bold py-2 text-black">
          Innovation Starts Here
        </h1>
        <p className="text-sm lg:text-base lg:pt-5 pt-0">
          Welcome to our Design & Development Company! We are a passionate team
          of creative designers and development experts who are dedicated to
          crafting intuitive and impactful digital experiences for our clients.
        </p>
        <div className="mt-6 lg:mt-10">
          <Button
            children={"More About Us"}
            className="px-6 lg:px-10 py-2 rounded-2xl text-sm"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
        <div className="flex w-full mx-auto">
          <img
            src="/assets/image/image-8.png"
            alt="Feedback Background"
            width={500}
            height={500}
            className="z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default InnovationBanner;
