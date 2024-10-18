import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const PackagesBanner = () => {
  return (
    <div className="h-auto min-h-[600px] bg-black">
      <div className="w-[90%] lg:ml-auto mx-auto flex flex-col lg:flex-row items-center justify-center py-5">
        {/* Text Section */}
        <div className="w-full lg:w-2/3 flex justify-center items-center">
          <div className="flex flex-col text-center lg:text-left">
            <div>
              <h1 className="text-white text-xl lg:text-2xl">
                Start Business With
              </h1>
              <h2 className="text-5xl lg:text-8xl font-bold mb-6 mt-5 lg:mt-10">
                <span className="text-yellow-500 py-2"> -Brandio</span>
              </h2>
            </div>
            <div>
              <p className="text-white pb-5 text-sm lg:text-base">
                Looking for a Perfect Package for your dream, and celebrating
                the extraordinary? Then you are home!
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
        <div className="w-full lg:w-1/3 mb-10 lg:mb-0 flex justify-center">
          <Image
            src="/assets/image/image 7.png"
            alt="Package Image"
            width={600}
            height={600}
            className="object-cover max-w-[80%] lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PackagesBanner;
