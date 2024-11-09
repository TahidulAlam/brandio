import React from "react";
import Image from "next/image";

const WorkBanner = () => {
  return (
    <div className="h-[600px] bg-black">
      <div className=" flex items-center justify-center pt-5">
        <div className=" lg:w-2/3 w-full flex justify-start items-center">
          <div className="flex flex-col mt-28 lg:mt-0">
            <div>
              <h1 className="text-white lg:text-6xl text-4xl lg:text-start text-center font-bold">
                Showcase Our Work
              </h1>
            </div>
            <div>
              <p className="text-white pb-5 lg:pt-2 text-center lg:text-start pt-3">
                An Experience design agency building high-end products and
                experiences <br /> that grow your business exponentially.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src="/assets/image/knot3.png"
            alt="Feedback Background"
            width={500}
            height={500}
            className="object-cover lg:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkBanner;
