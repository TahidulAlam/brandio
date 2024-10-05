"use client";
import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const TailoredBrandDesign = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const industries = [
    {
      name: "Technology",
      description:
        "Creating cutting-edge technology branding solutions that convey innovative, user-friendly, and reliable services, positioning you as an industry leader.",
    },
    {
      name: "Healthcare",
      description:
        "Cutting-edge healthcare branding that ensures trust, reliability, and professionalism.",
    },
    {
      name: "Finance",
      description:
        "Finance branding solutions that convey stability, trustworthiness, and innovation.",
    },
    {
      name: "Consumer Goods",
      description:
        "Branding for consumer goods that stands out in a crowded marketplace, with a focus on uniqueness and reliability.",
    },
    {
      name: "Fashion",
      description:
        "Fashion branding that highlights creativity, trendsetting, and luxury, customized for your brand’s image.",
    },
    {
      name: "Beauty & Cosmetics",
      description:
        "Beauty & cosmetics branding that reflects luxury, elegance, and innovation, enhancing your brand’s appeal.",
    },
    {
      name: "Branding for Startups",
      description:
        "Helping startups create dynamic and fresh brand identities that captivate their target market.",
    },
    {
      name: "Cybersecurity",
      description:
        "Cybersecurity branding solutions that highlight security, trust, and cutting-edge technology.",
    },
  ];

  return (
    <section className="w-[90%] mx-auto py-16 flex flex-col md:flex-row gap-8 text-white">
      {/* Left side: Text content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-extrabold mb-6">
          From Tech to Retail: <br /> Tailored Brand Design for Every Industry
        </h2>
        <p className="text-gray-300 mb-8">
          We provide cutting-edge brand design services across various
          industries, including:
        </p>
        <button className="bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
          Create Brand Identity
        </button>
      </div>

      {/* Right side: Collapsible list */}
      <div className="md:w-1/2">
        {/* <h3 className="text-yellow-400 text-xl font-bold mb-4">Technology</h3>
        <p className="text-gray-300 mb-8">
          Creating cutting-edge technology branding solutions that convey
          innovative, user-friendly, and reliable services, positioning you as
          an industry leader.
        </p> */}

        {/* Industries List with hover functionality */}
        <ul className="space-y-4">
          {industries.map((industry, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="border border-b-2 border-x-0 border-t-0 p-4 transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <span className="text-white text-lg">{industry.name}</span>
                <FaArrowDown className="w-6 h-6 text-yellow-400" />
              </div>

              {/* Smooth transition for description on hover */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  hoverIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 mt-4">{industry.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TailoredBrandDesign;
