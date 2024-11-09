"use client";
import React, { useState } from "react";
import Image from "next/image";

const WorkSection = () => {
  const imageData = [
    {
      name: "Discovery & Research",
      image: "/assets/image/Service/1.png",
      description:
        "In this initial phase, the focus is on understanding the brand's core values, target audience, and market positioning. This involves in-depth research into competitors, market trends, and customer insights.",
    },
    {
      name: "Brand Strategy",
      image: "/assets/image/Service/2.png",
      description:
        "With a clear and impactful brand strategy, we set the foundation for long-term growth, helping your brand connect authentically and stand out in a competitive market.",
    },
    {
      name: "Visual Identity Creation",
      image: "/assets/image/Service/3.png",
      description:
        "From logo design and color palette selection to typography and visual elements, we craft every detail with precision to ensure your brand is instantly recognizable and memorable. ",
    },
    {
      name: "Implementation & Launch",
      image: "/assets/image/Service/4.png",
      description:
        " Our team ensures every detail is executed flawlessly, from finalizing designs and development to thorough testing and quality checks. We coordinate every element for a smooth launch, optimizing for functionality, user experience, and performance across all platforms.",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(imageData[0]);

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  // Function to divide the name into two parts
  const splitName = (name) => {
    const words = name.split(" ");
    const firstPart = words.slice(0, Math.ceil(words.length / 2)).join(" ");
    const secondPart = words.slice(Math.ceil(words.length / 2)).join(" ");
    return { firstPart, secondPart };
  };

  return (
    <div className="w-full text-white bg-[#101010] p-10 lg:p-20 h-auto">
      <div className="w-[90%] mx-auto mt-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="flex flex-col lg:w-1/2 space-y-5 mb-10 lg:mb-5">
            <div className="mb-2">
              <h1 className="text-3xl lg:text-4xl font-bold py-4">
                How We Work
              </h1>
              <p className="text-base lg:text-lg text-slate-400">
                Our process is simple. We start with your needs, create engaging
                experiences, research, experiment with ideas, and use your
                feedback to guide us.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:mt-4">
              {imageData.map((item) => (
                <button
                  key={item.name}
                  className={`font-semibold text-lg lg:text-2xl transition-colors hover:text-white text-start border border-b-2 border-r-0 border-l-0 border-t-0 w-full lg:w-[400px] pb-4 ${
                    selectedItem.name === item.name
                      ? "text-white"
                      : "text-slate-400"
                  }`}
                  onClick={() => handleImageClick(item)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section - Image and Description */}
          <div className="lg:w-1/2 flex flex-col items-center justify-center lg:items-center">
            {/* Top Part of Name */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold lg:mr-60 -mb-4 text-start z-10 text-yellow-400">
                {splitName(selectedItem.name).firstPart}
              </h2>
              {/* Image */}
              <Image
                src={selectedItem.image}
                alt="Selected Work Process"
                width={500}
                height={400}
                className="object-fill mb-4 w-full max-w-xs lg:max-w-md"
              />
              {/* Bottom Part of Name */}
              <h2 className="text-3xl lg:text-4xl -mt-10 font-semibold text-end z-10 text-yellow-400 mr-0 lg:ml-40">
                {splitName(selectedItem.name).secondPart}
              </h2>
            </div>
            <div>
              {/* Description */}
              <p className="text-base lg:text-lg mt-4 text-center h-auto lg:h-28 text-slate-400">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
