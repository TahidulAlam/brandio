import React from "react";
import Image from "next/image";
import LogoMarquee from "@/components/home/branding-partner/LogoMarquee";

const DesignSection = ({
  title,
  description,
  buttonText,
  buttonAction,
  mainImageSrc,
  mainImageAlt,
  brandData,
  //   direction = "left",
  imageHeight = 450,
  imageWidth = 450,
  newClass,
  bgClass,
}) => {
  return (
    <section className={`${bgClass} py-12 text-white`}>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg leading-relaxed mb-6">{description}</p>
          <button
            onClick={buttonAction}
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full transition-transform duration-300 transform hover:scale-105"
          >
            {buttonText}
          </button>
        </div>

        {/* Right image */}
        <div className="lg:w-1/2">
          <Image
            src={mainImageSrc}
            alt={mainImageAlt}
            width={500}
            height={300}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Glimpse of our client-favorite works!
        </h3>
        <LogoMarquee
          brandData={brandData}
          direction={"left"}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          newClass={newClass}
        />
        <LogoMarquee
          brandData={brandData}
          direction={"right"}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          newClass={newClass}
        />
      </div>
    </section>
  );
};

export default DesignSection;
