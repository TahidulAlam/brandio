import React from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

const WhyChooseSection = ({
  heading,
  description,
  features,
  buttonText,
  imageUrl,
  altText,
  onButtonClick,
}) => {
  return (
    <section className="w-[90%] mx-auto py-16 flex flex-col md:flex-row items-center gap-8">
      {/* Left side: Text content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-extrabold text-black mb-4">{heading}</h2>
        <p className="text-gray-700 mb-6">{description}</p>

        {/* Feature List */}
        <ul className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FaArrowUp className="w-6 h-6 text-black bg-slate-300 rounded-full p-1 rotate-45 mr-3" />
              <span className="text-gray-800 font-bold">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Call to Action Button */}
        <button
          className="bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/2">
        <Image
          src={imageUrl}
          alt={altText}
          width={500}
          height={300}
          className="object-cover rounded-md shadow-lg"
        />
      </div>
    </section>
  );
};

export default WhyChooseSection;
