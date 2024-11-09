import Button from "@/components/button/Button";
import TextWithLineBreaks from "@/components/TextWithLineBreaks";
import React from "react";

const WorkContentBanner = ({ title, paragraph, buttonText }) => {
  return (
    <div className="h-auto text-center md:text-left lg:pb-28 pb-5 pt-10">
      {/* Title */}
      <div className="font-bold text-2xl lg:text-7xl text-white leading-snug mb-10">
        <TextWithLineBreaks text={title} />
      </div>

      {/* Description */}
      <div className="text-white text-base lg:text-lg leading-relaxed mb-5">
        <TextWithLineBreaks text={paragraph} />
      </div>

      {/* Button */}
      <Button className="mt-5 rounded-3xl font-semibold bg-yellow-400 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg text-black duration-300 active:scale-95">
        {buttonText}
      </Button>
    </div>
  );
};

export default WorkContentBanner;
