import Button from "@/components/button/Button";
import TextWithLineBreaks from "@/components/TextWithLineBreaks";
import React from "react";

const CaseStudyCard = ({ image, title, description, buttonLabel }) => {
  return (
    <div className="bg-zinc-900 text-white p-6 flex flex-col justify-between lg:pb-12 pb-6 lg:pt-12 pt-6">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full lg:h-[500px] h-full object-cover lg:mb-8 mb-4"
      />
      {/* Title */}
      <div className="text-3xl w-4/5 font-bold mb-4 text-wrap">
        <TextWithLineBreaks text={title} />
      </div>
      {/* Description */}
      <div className="text-gray-400 mb-6">
        <TextWithLineBreaks text={description} />
      </div>
      {/* Button */}
      <div>
        <Button className="mt-5 rounded-3xl font-semibold bg-yellow-400 px-8 py-3 text-lg text-black duration-300 active:scale-95">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
