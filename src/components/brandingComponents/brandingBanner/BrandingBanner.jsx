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
    <div className="h-[500px] w-[90%] mx-auto flex items-center justify-center">
      <div className="w-2/3">
        <h1 className="font-bold text-7xl text-white pt-20 pb-5">{heading}</h1>
        <p className="text-white">{description}</p>
        <Button
          // onClick={onButtonClick}
          className="mt-5 rounded-3xl font-semibold bg-yellow-400 px-8 py-3 text-lg text-black duration-300 active:scale-95"
        >
          {buttonText}
        </Button>
      </div>
      <div className="w-1/3">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={800}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default BrandingBanner;
