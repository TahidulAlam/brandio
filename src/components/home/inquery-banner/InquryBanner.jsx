import React from "react";
import InqueryForm from "./InqueryForm";
import Image from "next/image";

const InquryBanner = () => {
  return (
    <div className="relative h-[600px]">
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
      <div className="relative z-10 flex w-full items-center h-full p-10">
        <div className="w-1/2 flex justify-center items-center">
          <h2 className="text-5xl font-bold text-black mb-6 mt-10">
            Have a Project <br /> Idea?
          </h2>
        </div>
        {/* Slider Component */}
        <div className="w-1/2 h-full">
          <InqueryForm />
        </div>
      </div>
    </div>
  );
};

export default InquryBanner;
