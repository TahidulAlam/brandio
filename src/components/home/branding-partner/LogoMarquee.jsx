"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
const LogoMarquee = ({
  brandData,
  direction,
  imageHeight,
  imageWidth,
  newClass,
  layout,
}) => {
  return (
    <Marquee direction={direction}>
      {brandData.map((item, index) => (
        <div key={index} className={`${newClass}`}>
          <Image
            src={item.image}
            alt="Brand Logo"
            width={imageWidth}
            height={imageHeight}
            className="object-fill overflow-hidden"
            // layout="fixed"
            layout={layout}
          />
        </div>
      ))}
    </Marquee>
  );
};

export default LogoMarquee;
