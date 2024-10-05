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
}) => {
  return (
    <Marquee direction={direction}>
      {brandData.map((item) => (
        <Image
          src={item.image}
          alt="Selected"
          width={imageWidth}
          height={imageHeight}
          className={`${newClass} object-cover`}
          layout="fixed"
        />
      ))}
    </Marquee>
  );
};

export default LogoMarquee;
