import Counter from "@/components/counter/Counter";
import Image from "next/image";
import React from "react";

const InnovationBanner = () => {
  return (
    <div className="h-auto lg:h-[600px] bg-gradient-to-bl from-yellow-400 via-yellow-100 via-30% to-white to-90%">
      {/* Title Section */}
      <div className="w-[90%] mx-auto pt-10 text-center lg:text-left">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
          Innovation
        </h1>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:pl-28">
          Success Stories
        </h1>
      </div>

      {/* Content Section: Image and Text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[90%] lg:w-[80%] mx-auto">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/assets/image/image 6.png"
            alt="Innovation Background"
            width={350}
            height={350}
            className="object-cover"
          />
        </div>

        {/* Text and Counter Section */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 text-center lg:text-left">
            <p className="leading-relaxed text-sm sm:text-base lg:text-lg">
              Over the years, we've propelled numerous businesses to thrive,
              maintaining robust partnerships through our collaborative
              approach. We are proud to help businesses grow and succeed across
              different industries. From startups to established enterprises,
              our tailored solutions have helped them conquer challenges, reach
              milestones, and actualize their visions.
            </p>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Counter name="Projects Done" start={10} end={50} />
            <Counter name="Happy Clients" start={10} end={50} />
            <Counter name="Expert Team" start={10} end={50} />
            <Counter name="Years of Experience" start={10} end={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationBanner;
