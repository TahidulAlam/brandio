import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ClientFeedBackSlider = dynamic(() => import("./ClientFeedBackSlider"), {
  ssr: false,
});

const ClientFeedBack = () => {
  return (
    <div className="relative lg:h-[650px] h-[400px]">
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 lg:py-14">
        {/* Header */}
        <h2 className="text-3xl font-bold text-black mb-6 mt-10">
          Clients Feedback
        </h2>

        {/* Slider Component */}
        <div className="w-full h-full">
          <ClientFeedBackSlider />
        </div>
      </div>
    </div>
  );
};

export default ClientFeedBack;
