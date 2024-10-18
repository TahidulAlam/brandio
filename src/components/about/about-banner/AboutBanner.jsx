import React from "react";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-5">
      <Image
        src="/assets/image/Rectangle 1445.png"
        alt="Feedback Background"
        layout="fill"
        objectFit="cover"
        priority={true}
        className="object-cover"
      />
    </div>
  );
};

export default AboutBanner;
