"use client";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import Button from "@/components/button/Button"; // Ensure the Button component is responsive as well

const PackageCard = ({ subHeader, mainHeader, services, recommended }) => {
  return (
    <div className="border rounded-xl shadow-lg p-6 bg-white text-gray-800 flex flex-col justify-between">
      {/* Header Section */}
      <div>
        <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center">
          {subHeader}
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-4 text-center py-3">
          {mainHeader}
        </h2>
      </div>

      {/* Get Plan Button */}
      <div className="border-t border-gray-300 pt-4">
        <div className="w-full md:w-2/3 mx-auto">
          <Button
            children={"Get Plan"}
            className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm md:text-base font-semibold py-2 px-4 rounded-md w-full mb-3 transition-colors duration-300"
          />
        </div>
      </div>

      {/* Services List */}
      <div className="flex flex-col flex-grow">
        <ul className="mb-6 mt-6">
          {services?.map((service, index) => (
            <li
              key={index}
              className="mb-2 flex items-start gap-2 text-black font-medium"
            >
              <FaCheck className="text-red-600 mt-1 flex-shrink-0" />
              <span className="text-sm md:text-base">{service}</span>
            </li>
          ))}
        </ul>

        {/* Recommended Badge */}
        {recommended && (
          <div className="flex justify-center md:justify-end">
            <button className="bg-slate-900 hover:bg-slate-950 text-white py-2 px-4 rounded-2xl w-40 md:w-48 text-sm md:text-base transition-colors duration-300">
              Recommended
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
