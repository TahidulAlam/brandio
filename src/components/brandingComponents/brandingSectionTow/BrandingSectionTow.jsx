import Button from "@/components/button/Button";
import TextWithLineBreaks from "@/components/TextWithLineBreaks";
import Link from "next/link";
import React from "react";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";

const BrandingSectionTow = () => {
  return (
    <div className="w-full bg-black text-white py-20">
      {/* Container for the heading and description */}
      <div className="mb-10">
        <div className="flex flex-col justify-start gap-2">
          <div className="text-5xl font-bold mb-4">
            <TextWithLineBreaks text="Let’s Walk You Through Our Brand/n Design Process" />
          </div>
          <div className="text-gray-400">
            <TextWithLineBreaks
              text="The process of branding and design follows a certain chronological
            order."
            />
          </div>
          {/* Button */}
          <div>
            <Button className="mt-6 py-3 px-6 bg-yellow-500 rounded-full text-black font-semibold hover:bg-yellow-400 transition-colors">
              Begin Your Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Process steps with arrows */}
      <div className="flex items-start justify-start lg:w-4/5 w-full">
        {/* Steps Wrapper */}
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-start w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-zinc-900 py-20 w-full">
            <div className="text-yellow-500 font-semibold text-center">
              <TextWithLineBreaks text="Identifying target/n audience" />
            </div>
          </div>

          {/* Arrow */}
          <div className="text-white text-4xl text-center -mt-5 -mb-5 lg:-ml-5 lg:-mr-5 z-10">
            {/* → */}
            <div className="lg:block hidden">
              <FaArrowRightLong />
            </div>
            <div className="block lg:hidden">
              <FaArrowDownLong />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center bg-zinc-900 py-20 w-full">
            <div className="text-yellow-500 font-semibold text-center">
              {/* Competitor & User <br /> Research */}
              <TextWithLineBreaks text="Competitor & User/n Research " />
            </div>
          </div>

          {/* Arrow */}
          <div className="text-white text-4xl text-center -mt-5 -mb-5 lg:-ml-5 lg:-mr-5 z-10">
            {/* → */}
            <div className="lg:block hidden">
              <FaArrowRightLong />
            </div>
            <div className="block lg:hidden">
              <FaArrowDownLong />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center bg-zinc-900 py-20 w-full">
            <div className="text-yellow-500 font-semibold text-center">
              {/* Brand Model & <br /> Strategy */}
              <TextWithLineBreaks text="Brand Model &/n Strategy" />
            </div>
          </div>

          {/* Arrow */}
          <div className="text-white text-4xl text-center -mt-5 -mb-5 lg:-ml-5 lg:-mr-5 z-10">
            {/* → */}
            <div className="lg:block hidden">
              <FaArrowRightLong />
            </div>
            <div className="block lg:hidden">
              <FaArrowDownLong />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center bg-zinc-900 py-20 w-full">
            <div className="text-yellow-500 font-semibold text-center">
              {/* Brand Guideline & <br /> Launch */}
              <TextWithLineBreaks text="Brand Guideline &/n Launch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingSectionTow;
