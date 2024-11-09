"use client";
import React, { useState } from "react";

const InqueryForm = () => {
  // Separate state for each dropdown
  const [isFirstDropdownOpen, setFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setSecondDropdownOpen] = useState(false);
  const [selectedValueFirst, setSelectedValueFirst] =
    useState("Select Your Range");
  const [selectedValueSecond, setSelectedValueSecond] = useState(
    "Select Your Service"
  );

  // Array of options
  const optionsService = [
    "Branding",
    "UI/UX Design",
    "Web Design & Development",
    "Mobile Application",
    "Monthly Design",
    "Digital Marketing",
    "CMS Website",
  ];
  const optionsAmount = ["Apple", "Banana", "Chips"];

  return (
    <div className="max-w-xl lg:space-y-6 rounded-3xl border bg-white p-10">
      <form className="space-y-9">
        <div className="space-y-2 text-sm">
          <label
            className="text-sm font-bold leading-none text-black"
            htmlFor="full_name"
          >
            Full Name*
          </label>
          <input
            className="flex h-10 w-full border border-b-[1px] border-t-0 border-l-0 border-r-0 border-b-black  border-opacity-90 py-2 focus-visible:outline-none"
            id="full_name"
            placeholder="Enter your full name"
            name="full_name"
            type="text"
          />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="space-y-2 text-sm">
            <label
              className="text-sm font-bold leading-none text-black"
              htmlFor="company_name"
            >
              Company Name*
            </label>
            <input
              className="flex h-10 w-full border border-b-[1px] border-t-0 border-l-0 border-r-0 border-b-black py-2 focus-visible:outline-none"
              id="company_name"
              placeholder="Enter company name"
              name="company_name"
              type="text"
            />
          </div>
          <div className="space-y-2 text-sm">
            <label
              className="text-sm font-bold leading-none text-black"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              className="flex h-10 w-full border border-b-[1px] border-t-0 border-l-0 border-r-0 border-b-black  py-2 focus-visible:outline-none"
              id="email"
              placeholder="Enter your email"
              name="email"
              type="email"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <label
              className="text-sm font-bold leading-none text-black"
              htmlFor="service_required"
            >
              Service Required*
            </label>

            <div className="relative">
              <div
                onClick={() => setSecondDropdownOpen(!isSecondDropdownOpen)}
                className="flex items-center justify-between w-full border border-b-[1px] border-t-0 border-l-0 border-r-0 border-b-black py-2 cursor-pointer"
              >
                <h1 className="font-medium text-gray-600">
                  {selectedValueSecond}
                </h1>
                <svg
                  className={`${
                    isSecondDropdownOpen ? "-rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                  width={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              {/* Dropdown options */}
              {isSecondDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white shadow-lg">
                  {optionsService.map((option, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedValueSecond(option);
                        setSecondDropdownOpen(false);
                      }}
                      className=" py-2 px-2 text-gray-500 hover:bg-gray-200 cursor-pointer"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-bold leading-none text-black"
                htmlFor="project_budget"
              >
                Project Budget
              </label>
              <input
                className="flex h-10 w-full border border-b-[1px] border-t-0 border-l-0 border-r-0 border-b-black py-2 focus-visible:outline-none"
                id="project_budget"
                placeholder="Enter your Budget"
                name="project_budget"
                type="number"
              />
            </div>
          </div>
        </div>

        {/* Project Details as a Multi-line Input */}
        <div className="space-y-2 text-sm">
          <label
            className="text-sm font-bold leading-none text-black"
            htmlFor="project_details"
          >
            Project Details
          </label>
          <textarea
            className="flex w-full h-10 border border-b-[1px] border-t-0 border-l-0 border-r-0 border-b-black  py-2 focus-visible:outline-none"
            id="project_details"
            placeholder="Tell us more about your idea"
            name="project_details"
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-center w-3/5 mx-auto">
          <button className=" bg-red-600 w-full rounded-lg py-2 text-white transition-colors hover:bg-red-800">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InqueryForm;
