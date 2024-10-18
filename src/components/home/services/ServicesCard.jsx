"use client";
import Button from "@/components/button/Button";
import { useEffect, useState } from "react";

const ServicesCard = ({
  idx,
  title,
  image,
  description,
  isOpen,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className="border-b border-gray-500/50 lg:py-10 py-2 last-of-type:border-b-0 group"
      onMouseEnter={() => handleMouseEnter(idx)}
      onMouseLeave={handleMouseLeave}
      style={{ height: "auto", minHeight: "50px" }} // Ensure stable height for the container
    >
      <div className="flex h-full w-full items-center justify-between font-medium text-white">
        {/* Left section containing the number and title */}
        <div className="flex gap-5 items-center">
          {/* Number */}
          <h1
            className="text-yellow-400 transition-colors duration-500 ease-in-out group-hover:text-orange-400"
            style={{
              lineHeight: "1",
              fontSize: "1.5rem",
              transition: "color 0.5s ease",
            }}
          >
            0{idx + 1}
          </h1>

          {/* Title */}
          <span
            className="lg:text-5xl text-xl font-bold text-gray-400 transition-colors duration-500 ease-in-out group-hover:text-white"
            style={{
              // lineHeight: "1.2",
              // fontSize: "3rem",
              transition: "color 0.5s ease",
            }}
          >
            {title}
          </span>
        </div>

        {/* Right section containing the image */}
        <div
          className="relative lg:w-[160px] w-[100px] h-[20px] lg:h-[120px]"
          // style={{
          //   width: "160px",
          //   height: "120px",
          // }}
        >
          <img
            src={image}
            alt={title}
            className={`w-[120px] h-[80px] lg:block hidden absolute top-0 left-0 transition-transform duration-500 ease-in-out group-hover:w-[160px] group-hover:h-[120px] ${
              isOpen === idx ? "rotate-[-30deg] -translate-x-[10px]" : ""
            }`}
            style={{ transformOrigin: "center" }}
          />
        </div>
      </div>

      {/* Description and button */}
      <div
        className={`grid w-96 lg:ml-8 ml-0 overflow-hidden text-white transition-all duration-500 ease-in-out ${
          isOpen === idx
            ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden lg:w-96 w-80 lg:pr-4 pr-0 lg:text-sm text-xs lg:px-5 px-0 -mr-5">
          {description}
        </div>
        <div>
          <Button
            children={"Learn More"}
            className="lg:mt-5 mt-1 rounded-3xl font-semibold bg-yellow-400 lg:px-4 px-3 py-1 lg:py-2 lg:text-base text-sm text-black duration-300 active:scale-95"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
