import Counter from "@/components/counter/Counter";
import Image from "next/image";
import React from "react";

const InnovationBanner = () => {
  return (
    <div className="h-auto lg:h-[750px] bg-gradient-to-bl from-yellow-400 via-yellow-100 via-30% to-white to-90%">
      {/* Title Section */}
      <div className="w-[90%] mx-auto pt-10 lg:pl-64 pl-0 ">
        <div className="lg:text-start text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold lg:mb-4 mb-0">
            Innovation
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold lg:mb-4 lg:pl-28 text-[#D71A21]">
            Success Stories
          </h1>
        </div>
      </div>

      {/* Content Section: Image and Text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[90%] lg:w-[80%] mx-auto">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/assets/image/image 6.png"
            alt="Innovation Background"
            width={550}
            height={550}
            className="object-cover"
          />
        </div>

        {/* Text and Counter Section */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 text-center lg:text-left">
            <p className="leading-relaxed text-sm sm:text-base lg:text-lg text-gray-700">
              Over the years, we've propelled numerous businesses to thrive,
              maintaining robust partnerships through our collaborative
              approach. <br /> <br /> We are proud to help businesses grow and
              succeed across different industries. From startups to established
              enterprises, our tailored solutions have helped them conquer
              challenges, reach milestones, and actualize their visions.
            </p>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-2 items-center lg:grid-cols-4 lg:gap-10 gap-4 lg:mt-5 lg:pb-0 pb-16">
            <Counter name="Projects Done" start={10} end={50} />
            <Counter name="Happy Clients" start={50} end={100} />
            <Counter name="Expert Team" start={5} end={20} />
            <Counter name="Experience" start={1} end={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationBanner;
