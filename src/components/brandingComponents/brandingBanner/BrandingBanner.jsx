import Button from "@/components/button/Button";
import TextWithLineBreaks from "@/components/TextWithLineBreaks";
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
  // console.log(description);
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-[500px]">
      {/* Text Section */}
      <div className="w-full lg:w-2/4 text-center lg:text-left  flex flex-col lg:justify-start justify-center items-center lg:items-start gap-8 lg:-mt-16 mt-0">
        <h1 className="font-bold text-2xl lg:text-5xl text-white">
          <TextWithLineBreaks text={heading} />
        </h1>
        <div className="text-slate-200 text-sm lg:text-base whitespace-pre-line">
          <TextWithLineBreaks text={description} />
        </div>
        <div>
          <Button
          // onClick={onButtonClick}
          // className="mt-5 rounded-3xl font-semibold bg-yellow-400 px-8 py-3 text-sm lg:text-lg text-black duration-300 active:scale-95"
          >
            {buttonText}
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-2/4 mt-10 lg:mt-0 flex justify-center overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={500}
          className="object-cover lg:block hidden overflow-hidden"
        />
      </div>
    </div>
  );
};

export default BrandingBanner;
