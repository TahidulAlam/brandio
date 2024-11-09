"use client";
import Button from "@/components/button/Button";
import TextWithLineBreaks from "@/components/TextWithLineBreaks";
import Image from "next/image";
import React from "react";

const MonthlyDesignBanner = ({
  imageSrc,
  imageAlt,
  buttonText,
  width,
  height,
}) => {
  return (
    <div className="flex flex-col lg:pb-20 pb-0">
      <div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={width}
          height={height}
          layout="responsive"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover lg:block hidden overflow-hidden py-10"
        />
      </div>
      <div className="flex flex-col lg:justify-start justify-center">
        <div className="text-4xl font-bold text-white">
          <TextWithLineBreaks text="Transform Your Visuals: Monthly Design Services" />
        </div>
        <div className="text-slate-300">
          <TextWithLineBreaks text="In today’s fast-paced digital world, maintaining a strong and consistent/n brand presence is crucial. But Brandio Provide  offer a seamless solution to keep your brand/n visually appealing and up-to-date." />
        </div>
        <div>
          <Button children={"Explore Packages"} />
        </div>
      </div>
    </div>
  );
};

export default MonthlyDesignBanner;
