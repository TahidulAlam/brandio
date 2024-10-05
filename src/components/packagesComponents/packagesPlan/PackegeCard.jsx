"use client";
import React from "react";
import { FaCheck } from "react-icons/fa6";
const PackegeCard = ({ subHeader, mainHeader, services, recommended }) => {
  return (
    <div className="border rounded-xl shadow-sm p-6 bg-white text-gray-800">
      <h3 className="text-sm font-semibold text-gray-800 text-center">
        {subHeader}
      </h3>
      <h2 className="text-2xl font-bold text-gray-600 mb-4 text-center py-3 ">
        {mainHeader}
      </h2>
      <div className=" border border-b-2 border-x-0 border-t-0 pb-10">
        <div className="w-2/5 mx-auto">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold py-1 px-4 rounded-md w-full mb-3">
            Get Plan
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[400px]">
        <ul className="mb-6 mt-6">
          {services?.map((service, index) => (
            <li key={index} className="mb-2 flex gap-2 text-black font-medium">
              <FaCheck className="text-red-600" /> {service}
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          {recommended && (
            <button className="bg-slate-900 hover:bg-slate-950 text-white py-2 px-4 rounded-2xl w-48 ">
              Recommended
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackegeCard;
