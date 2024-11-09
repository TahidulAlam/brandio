"use client";
import React from "react";
import Image from "next/image";
import LogoMarquee from "@/components/home/branding-partner/LogoMarquee";
import Container from "@/components/container/Container";
import TextWithLineBreaks from "@/components/TextWithLineBreaks";

const DesignSection = ({
  title,
  description,
  buttonText,
  buttonAction,
  mainImageSrc,
  mainImageAlt,
  BrandingSection,
  brandData1,
  brandData2,
  imageHeight = 450,
  imageWidth = 450,
  newClass,
  bgClass,
}) => {
  return (
    <section className={`${bgClass} lg:py-16 py-5 text-white `}>
      <Container>
        <div className=" flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
              <TextWithLineBreaks text={title} />
            </div>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              <TextWithLineBreaks text={description} />
            </p>
            <button
              onClick={buttonAction}
              className="bg-yellow-400 text-black font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full transition-transform duration-300 transform hover:scale-105"
            >
              {buttonText}
            </button>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={mainImageSrc}
              alt={mainImageAlt}
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Container>
      <Container>
        {/* <BrandingSection
          image={mainImageSrc}
          title={title}
          description={description}
          h2Class="text-white"
          pClass="text-slate-300"
          reverse={true}
          buttonText={buttonText}
        /> */}
      </Container>
      {/* Marquee Section */}
      <div className="mt-12 md:mt-16">
        <Container>
          <div className="text-2xl lg:text-5xl font-semibold lg:text-start text-center mb-8">
            <TextWithLineBreaks
              text={"Glimpse of our client -/n favorite works!"}
            />
          </div>
        </Container>
        <div className="flex flex-col gap-5">
          <LogoMarquee
            brandData={brandData1}
            direction={"left"}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
            newClass={newClass}
            layout={"responsive"}
          />
          <LogoMarquee
            brandData={brandData2}
            direction={"right"}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
            newClass={newClass}
            layout={"responsive"}
          />
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
