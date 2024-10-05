"use client";
import React from "react";
import PackegeCard from "./PackegeCard";
import Image from "next/image";

const plans = [
  {
    id: 1,
    subHeader: "Brand Essential",
    mainHeader: "BDT 8000/ month",
    services: [
      "Social Account Pro Setup",
      "Six (6) Social Media Banner",
      "Two (3) Motion Graphics",
      "Two (2) Video Reels",
      "Relevant Content for each design",
      "Regular Assessment",
    ],
    recommended: false,
  },
  {
    id: 2,
    subHeader: "Brand Standard",
    mainHeader: "BDT 12000/ month",
    services: [
      "Social Account Pro Setup",
      "Ten (10) Social Media Banner",
      "Four (4) Motion Graphics",
      "Three (3) Video Reels",
      "Relevant Content for each design",
      "Regular Assessment",
      "A dedicated Brand Consultation",
      "1 SMB for Brand Promotion",
    ],
    recommended: true,
  },
  {
    id: 3,
    subHeader: "Brand Professional",
    mainHeader: "BDT 15000/ month",
    services: [
      "Social Account Pro Setup",
      "Twelve (12) Social Media Banner",
      "Six (6) Motion Graphics",
      "Four (4) Video Reels",
      "Relevant Content for each design",
      "Regular Assessment",
      "A dedicated Brand Consultation",
      "2 SMB for Brand Promotion",
      "24/7 Emergency Support for urgent Design (Condition Apply)",
    ],
    recommended: true,
  },
];

const PackegesCard = () => {
  return (
    <div className="relative h-[800px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/image/Cliend Feedback bg image.png"
          alt="Feedback Background"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="relative">
        <h1 className="text-center font-bold text-3xl pt-10">
          Make your Strong appearance In Social Media{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 w-[80%] mx-auto">
          {plans.map((plan) => (
            <PackegeCard
              key={plan.id}
              subHeader={plan.subHeader}
              mainHeader={plan.mainHeader}
              services={plan.services}
              recommended={plan.recommended}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackegesCard;
