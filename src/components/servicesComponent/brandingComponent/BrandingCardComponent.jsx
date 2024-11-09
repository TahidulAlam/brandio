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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:mt-20 mt-5 py-5">
      {/* Text Section */}
      <div
        className={`${
          reverseLayout ? "lg:order-last" : "lg:order-first"
        } flex flex-col  space-y-4`}
      >
        <div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <ul className="grid grid-cols-2 text-black items-start font-semibold pt-5">
            {services.map((service, index) => (
              <li key={index} className="py-2">
                - {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full h-full flex  items-center">
        <div>
          <img
            src={image}
            alt={title}
            className="rounded-md w-full h-auto object-cover"
          />
          <a
            href={link}
            className="text-red-500 font-semibold mt-4 inline-block"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandingCardComponent;
