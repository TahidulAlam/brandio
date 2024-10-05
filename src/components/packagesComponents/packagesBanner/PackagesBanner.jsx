import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const PackagesBanner = () => {
  return (
    <div className="h-[600px] bg-black">
      <div className="w-[90%] ml-auto flex items-center justify-center pt-5">
        <div className="w-2/3 flex justify-center items-center">
          <div className="flex flex-col">
            <div>
              <h1 className="text-white text-2xl">Start Business With</h1>
              <h2 className="text-8xl font-bold mb-6 mt-10">
                <span className="text-yellow-500 py-2"> -Brandio</span>
              </h2>
            </div>
            <div>
              <p className="text-white pb-5">
                Looking for a Perfect Package for your dream, and celebrating
                the extraordinary? then you are home!
              </p>
            </div>
            <div>
              <Button
                children={"Contact us"}
                className={"rounded-lg px-5 py-2"}
              />
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <Image
            src="/assets/image/image 7.png"
            alt="Feedback Background"
            width={800}
            height={800}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PackagesBanner;
