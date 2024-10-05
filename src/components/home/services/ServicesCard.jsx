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
      className="border-b border-gray-500/50 py-10 last-of-type:border-b-0 group"
      onMouseEnter={() => handleMouseEnter(idx)}
      onMouseLeave={handleMouseLeave}
      style={{ height: "auto", minHeight: "150px" }} // Ensure stable height for the container
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
            className="text-5xl font-bold text-gray-400 transition-colors duration-500 ease-in-out group-hover:text-white"
            style={{
              lineHeight: "1.2",
              fontSize: "3rem",
              transition: "color 0.5s ease",
            }}
          >
            {title}
          </span>
        </div>

        {/* Right section containing the image */}
        <div
          className="relative"
          style={{
            width: "160px", // Set explicit width
            height: "120px", // Prevents overflow during scaling
          }}
        >
          <img
            src={image}
            alt={title}
            className={`w-[120px] h-[80px] absolute top-0 left-0 transition-transform duration-500 ease-in-out group-hover:w-[160px] group-hover:h-[120px] ${
              isOpen === idx ? "rotate-[-30deg] -translate-x-[10px]" : ""
            }`}
            style={{ transformOrigin: "center" }}
          />
        </div>
      </div>

      {/* Description and button */}
      <div
        className={`grid w-96 ml-8 overflow-hidden text-white transition-all duration-500 ease-in-out ${
          isOpen === idx
            ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pr-4 text-sm">{description}</div>
        <div>
          <Button
            children={"Learn More"}
            className="mt-5 rounded-3xl font-semibold bg-yellow-400 px-4 py-2 text-base text-black duration-300 active:scale-95"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
