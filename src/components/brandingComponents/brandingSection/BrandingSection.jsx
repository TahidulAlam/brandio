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
      className={`${bgClass} grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-14`}
    >
      {/* Image Column */}
      <div className={`w-full h-full ${reverse ? "lg:order-2" : "lg:order-1"}`}>
        <div className={`flex justify-center  items-center`}>
          <img
            src={image}
            alt={title}
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-md max-w-[90%] lg:max-w-full"
          />
        </div>
      </div>

      {/* Text Column */}
      <div className={`space-y-6 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <h2
          className={`${h2Class} text-3xl md:text-5xl lg:text-6xl font-bold text-black`}
        >
          {title}
        </h2>
        <p
          className={`${pClass} text-base md:text-lg text-gray-700 leading-relaxed`}
        >
          {description}
        </p>

        <Button
          text="Create your Brand Identity"
          className="mt-5 rounded-3xl font-semibold bg-yellow-400 px-8 py-3 text-sm md:text-base lg:text-lg text-black duration-300 active:scale-95"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default BrandingSection;
