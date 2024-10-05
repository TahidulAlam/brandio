import React from "react";
import Image from "next/image";

const WorkBanner = () => {
  return (
    <div className="h-[600px] bg-black">
      <div className="w-[90%] ml-auto flex items-center justify-center pt-5">
        <div className=" w-2/3 flex justify-center items-center">
          <div className="flex flex-col">
            <div>
              <h1 className="text-white text-6xl">Showcase Our Work</h1>
            </div>
            <div>
              <p className="text-white pb-5 pt-2">
                An Experience design agency building high-end products and
                experiences that grow your business exponentially.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src="/assets/image/knot3.png"
            alt="Feedback Background"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkBanner;
