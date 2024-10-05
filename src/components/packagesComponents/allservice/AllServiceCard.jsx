import Button from "@/components/button/Button";
import { useEffect, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
const AllServiceCard = ({
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
      className="border-b border-gray-500/50 pb-2 mb-2 last-of-type:border-b-0 group"
      onMouseEnter={() => handleMouseEnter(idx)}
      onMouseLeave={handleMouseLeave}
      style={{ height: "auto", minHeight: "60px" }} // Ensure stable height for the container
    >
      <div className="flex w-full items-center justify-between font-medium text-white">
        {/* Left section containing the number and title */}
        <div
          className="text-2xl font-bold text-gray-400 transition-colors duration-500 ease-in-out group-hover:text-white"
          style={{
            //   lineHeight: ".5",
            fontSize: "2rem",
            transition: "color 0.5s ease",
          }}
        >
          {title}
        </div>

        {/* Right section containing the image */}
        <div className="relative">
          <FaArrowCircleDown className="group-hover:text-yellow-300 text-4xl text-slate-700" />
        </div>
      </div>

      {/* Description and button */}
      <div
        className={`grid w-96 overflow-hidden text-white transition-all duration-500 ease-in-out ${
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

export default AllServiceCard;
