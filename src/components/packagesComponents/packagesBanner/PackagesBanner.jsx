import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const PackagesBanner = () => {
  return (
    <div className="h-auto min-h-[600px] bg-black">
      <div className=" lg:ml-auto flex flex-col lg:flex-row items-center justify-center py-5 pt-28 lg:pt-5">
        <div className="w-full lg:w-2/3 flex justify-center items-center">
          <div className="flex flex-col text-center lg:text-left">
            <div>
              <h1 className="text-white text-4xl lg:text-5xl font-semibold">
                Start Business With
              </h1>
              <h2 className="text-5xl lg:text-9xl font-bold mb-6 mt-5 lg:mt-10">
                <span className="text-yellow-500 py-2"> -BRANDIO</span>
              </h2>
            </div>
            <div>
              <p className="text-white pb-5 text-sm lg:text-lg font-semibold">
                Looking for a Perfect Package for your dream, and celebrating
                the extraordinary? <br /> Then you are home!
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button
                children={"Contact us"}
                className={"rounded-lg px-5 py-2"}
              />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full  lg:w-1/3 mb-10 lg:mb-0 flex justify-center">
          <Image
            src="/assets/image/image 7.png"
            alt="Package Image"
            width={700}
            height={700}
            className="object-cover max-w-[80%] lg:max-w-full lg:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default PackagesBanner;
