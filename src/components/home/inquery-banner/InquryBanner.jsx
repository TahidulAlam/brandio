import React from "react";
import InqueryForm from "./InqueryForm";
import Image from "next/image";

const InquryBanner = () => {
  return (
    <div className="relative h-[950px] lg:h-[670px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/image/Cliend Feedback bg image.png"
          alt="Feedback Background"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full items-center h-full p-5 lg:p-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6 mt-10">
            Have a Project Idea?
          </h2>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 h-full mt-8 lg:mt-14">
          <InqueryForm />
        </div>
      </div>
    </div>
  );
};

export default InquryBanner;
