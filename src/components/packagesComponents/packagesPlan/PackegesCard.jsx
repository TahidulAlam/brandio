"use client";
import React from "react";

import Image from "next/image";
import PackageCard from "./PackegeCard";

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

const PackagesCard = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/image/Cliend Feedback bg image.png"
          alt="Feedback Background"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20">
        {/* Header */}
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl px-5">
          Make your Strong Appearance in Social Media
        </h1>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5 md:p-10 w-[95%] md:w-[80%] mx-auto mt-8">
          {plans.map((plan) => (
            <PackageCard
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

export default PackagesCard;
