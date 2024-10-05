import React from "react";
import Button from "@/components/button/Button"; // Assuming you have a Button component

const BrandingSection = ({
  image,
  title,
  description,
  reverse = false,
  buttonText,
  bgClass,
  h2Class,
  pClass,
}) => {
  return (
    <div
      className={`${bgClass} grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-14`}
    >
      {/* Image Column */}
      <div className={`w-full h-full ${reverse ? "md:order-2" : "md:order-1"}`}>
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt={title}
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Text Column */}
      <div className={`space-y-6 ${reverse ? "md:order-1" : "md:order-2"}`}>
        <h2 className={` ${h2Class} text-4xl md:text-6xl font-bold text-black`}>
          {title}
        </h2>
        <p className={`${pClass} text-lg text-gray-700 leading-relaxed`}>
          {description}
        </p>

        <Button
          text="Create your Brand Identity"
          className="mt-5 rounded-3xl font-semibold bg-yellow-400 px-8 py-3 text-lg text-black duration-300 active:scale-95"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default BrandingSection;
