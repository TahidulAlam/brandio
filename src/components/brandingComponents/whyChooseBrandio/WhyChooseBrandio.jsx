import React from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import TextWithLineBreaks from "@/components/TextWithLineBreaks";
import Button from "@/components/button/Button";

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
    <section className="py-16 flex flex-col md:flex-row items-center gap-8">
      {/* Left side: Text content */}
      <div className="md:w-1/2 flex flex-col gap-5">
        <div className="text-4xl font-extrabold text-black mb-4">
          <TextWithLineBreaks text={heading} />
        </div>
        <div className="text-gray-700 mb-6">
          <TextWithLineBreaks text={description} />
        </div>

        {/* Feature List */}
        <div>
          <ul className="space-y-4 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <FaArrowUp className="w-6 h-6 text-black bg-slate-300 rounded-full p-1 rotate-45 mr-3" />
                <span className="text-gray-800 font-bold">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action Button */}
        <div>
          <Button onClick={onButtonClick}>{buttonText}</Button>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/2 flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={altText}
          width={500}
          height={600}
          // layout="responsive"
          className="object-cover rounded-md shadow-lg lg:h-[600px] h-auto"
        />
      </div>
    </section>
  );
};

export default WhyChooseSection;
