import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const BrandingBanner = ({
  heading,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  onButtonClick,
}) => {
  return (
    <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-center h-auto lg:h-[500px] py-10">
      {/* Text Section */}
      <div className="w-full lg:w-2/3 text-center lg:text-left">
        <h1 className="font-bold text-4xl lg:text-7xl text-white py-5">
          {heading}
        </h1>
        <p className="text-white text-sm lg:text-base">{description}</p>
        <Button
          // onClick={onButtonClick}
          className="mt-5 rounded-3xl font-semibold bg-yellow-400 px-8 py-3 text-sm lg:text-lg text-black duration-300 active:scale-95"
        >
          {buttonText}
        </Button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/3 mt-8 lg:mt-0 flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={600}
          className="object-cover max-w-[80%] lg:max-w-none"
        />
      </div>
    </div>
  );
};

export default BrandingBanner;
