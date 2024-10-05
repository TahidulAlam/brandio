"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Icons can be passed as props or customized

const BrandingServiceList = ({
  servicesData,
  title,
  backgroundImage,
  backgroundPosition = "right",
  backgroundTop = "top-[100px]",
  textColor = "text-white",
  highlightColor = "text-yellow-500",
  iconColor = "bg-yellow-500 text-black",
}) => {
  const [openCategories, setOpenCategories] = useState(
    servicesData.map((service) => service.isOpen)
  );
  const [contentHeight, setContentHeight] = useState(
    servicesData.map(() => "0px")
  );
  const contentRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setOpenCategories((prevState) =>
      prevState.map((isOpen, i) => (i === index ? true : isOpen))
    );
  };

  const handleMouseLeave = (index) => {
    setOpenCategories((prevState) =>
      prevState.map((isOpen, i) => (i === index ? false : isOpen))
    );
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        setContentHeight((prevHeights) =>
          prevHeights.map((height, i) =>
            openCategories[i] ? `${ref.scrollHeight}px` : "0px"
          )
        );
      }
    });
  }, [openCategories]);

  return (
    <section className={`relative bg-black ${textColor} py-16 px-6 md:px-20`}>
      {/* Background Image */}
      {backgroundImage && (
        <div
          className={`absolute ${backgroundPosition}-[200px] ${backgroundTop} opacity-70 hidden md:block z-0`}
        >
          <Image
            src={backgroundImage}
            alt="Background Image"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">{title}</h1>

        {servicesData.map((service, index) => (
          <div
            key={index}
            className="mb-2 border border-b-2 border-white border-x-0 border-t-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Category Header */}
            <div
              className={`flex justify-between items-center cursor-pointer py-4 transition-all duration-300 ease-in-out hover:${highlightColor}`}
              role="button"
              aria-expanded={openCategories[index] ? "true" : "false"}
            >
              <h2 className="text-2xl md:text-3xl font-medium">
                {service.category}
              </h2>
              {openCategories[index] ? (
                <FaArrowUp
                  className={`${iconColor} w-6 h-6 rounded-full p-1`}
                />
              ) : (
                <FaArrowDown
                  className={`${iconColor} w-6 h-6 rounded-full p-1`}
                />
              )}
            </div>

            {/* Category Details with Transitions */}
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: openCategories[index] ? contentHeight[index] : "0px",
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pl-4 py-2">
                {service.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center space-x-3 text-lg text-gray-300 hover:text-white transition-colors duration-300`}
                  >
                    <FaArrowUp className={`${highlightColor} rotate-45`} />
                    <span className="text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandingServiceList;
