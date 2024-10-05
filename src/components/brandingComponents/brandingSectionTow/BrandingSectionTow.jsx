import Button from "@/components/button/Button";
import Link from "next/link";
import React from "react";

const BrandingSectionTow = () => {
  return (
    <div className="w-full bg-black text-white py-20">
      {/* Container for the heading and description */}
      <div className="w-[90%] mx-auto mb-10">
        <div className="flex flex-col justify-start">
          <h2 className="text-5xl font-bold mb-4">
            Let’s Walk You Through Our Brand <br /> Design Process
          </h2>
          <p className="text-gray-400">
            The process of branding and design follows a certain chronological
            order.
          </p>
          {/* Button */}
          <div>
            <Button className="mt-6 py-3 px-6 bg-yellow-500 rounded-full text-black font-semibold hover:bg-yellow-400 transition-colors">
              Begin Your Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Process steps with arrows */}
      <div className="flex items-start justify-start w-[90%] mx-auto">
        {/* Steps Wrapper */}
        <div className="flex gap-2 items-center justify-start w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-zinc-900 py-20 px-16">
            <p className="text-yellow-500 font-semibold text-center">
              Identifying target <br /> audience
            </p>
          </div>

          {/* Arrow */}
          <div className="text-white text-4xl text-center -ml-5 -mr-5 z-10">
            →
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center bg-zinc-900 py-20 px-16">
            <p className="text-yellow-500 font-semibold text-center">
              Competitor & User <br /> Research
            </p>
          </div>

          {/* Arrow */}
          <div className="text-white text-4xl text-center -ml-5 -mr-5 z-10">
            →
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center bg-zinc-900 py-20 px-16">
            <p className="text-yellow-500 font-semibold text-center">
              Brand Model & <br /> Strategy
            </p>
          </div>

          {/* Arrow */}
          <div className="text-white text-4xl text-center -ml-5 -mr-5 z-10">
            →
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center bg-zinc-900 py-20 px-16">
            <p className="text-yellow-500 font-semibold text-center">
              Brand Guideline & <br /> Launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingSectionTow;
