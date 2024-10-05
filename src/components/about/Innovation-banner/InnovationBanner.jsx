import Counter from "@/components/counter/Counter";
import Image from "next/image";
import React from "react";

const InnovationBanner = () => {
  return (
    <div className="h-[600px] bg-gradient-to-bl from-yellow-400 via-yellow-100 via-30% to-white to-90%">
      <div className="w-[90%] mx-auto pt-10">
        <h1 className="text-6xl font-bold">Innovation</h1>
        <h1 className="text-6xl font-bold mb-4 pl-28">Success Stories</h1>
      </div>

      <div className="grid grid-cols-2 gap-8 w-[80%] mx-auto">
        <div className="float-right">
          <Image
            src="/assets/image/image 6.png"
            alt="Feedback Background"
            width={450}
            height={450}
            // className="object-cover"
          />
        </div>
        <div>
          <div className="mb-6">
            <p className="leading-relaxed">
              Over the years, we've propelled numerous businesses to thrive,
              maintaining robust partnerships through our collaborative
              approach. We are proud to help businesses grow and succeed across
              different industries. From startups to established enterprises,
              our tailored solutions have helped them conquer challenges, reach
              milestones, and actualize their visions.
            </p>
          </div>

          {/* Counters */}
          <div className="flex justify-between">
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
