import React from "react";

const BrandingCardComponent = ({
  title,
  description,
  services,
  image,
  link,
  reverseLayout,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 items-start lg:items-center">
      {/* Text Section */}
      <div
        className={`${
          reverseLayout ? "lg:order-last" : "lg:order-first"
        } flex flex-col justify-center space-y-4`}
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 grid grid-cols-2 text-black font-semibold">
          {services.map((service, index) => (
            <li key={index}>- {service}</li>
          ))}
        </ul>
        <a href={link} className="text-red-500 font-semibold mt-4 inline-block">
          Learn More
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="rounded-md w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default BrandingCardComponent;
