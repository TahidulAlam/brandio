import React from "react";
import Image from "next/image";
const AboutBanner = () => {
  return (
    <div className="w-full relative mt-5 h-[600px] ">
      <Image
        src="/assets/image/Rectangle 1445.png"
        alt="Feedback Background"
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
    </div>
  );
};

export default AboutBanner;
