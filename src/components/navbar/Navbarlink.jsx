"use client";

import React, { useState } from "react";
import DropDown from "./DropDown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import Button from "../button/Button";

const Navbarlink = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const handleClickNav = () => {
    console.log("Button was clicked!");
  };

  const navLinks = [
    // { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Packages", path: "/packages" },
    { name: "Our Work", path: "/ourwork" },
    { name: "Contact", path: "/contact" },
  ];

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  // Set the background and text color based on the current route
  const getBackgroundColor = () => {
    switch (pathname) {
      case "/":
        return "bg-black text-white"; // For the home page
      case "/about":
        return "bg-white text-black"; // About page
      case "/services":
        return "bg-black text-white"; // Services page
      case "/contact":
        return "bg-black text-white"; // Contact page
      default:
        return "bg-black text-white"; // Default color
    }
  };

  return (
    <div className={`${getBackgroundColor()}`}>
      <div className="grid grid-cols-8 w-[90%] mx-auto py-10">
        <div className="z-50 col-span-2">
          <Link href={"/"}>
            <BrandLogo />
          </Link>
        </div>
        <div className="col-span-4 w-full">
          <div className="flex pt-3 items-center justify-around relative z-40">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={
                  link.name === "Packages" ? handleMouseEnter : undefined
                }
                onMouseLeave={
                  link.name === "Packages" ? handleMouseLeave : undefined
                }
              >
                <Link
                  href={link.path}
                  className={`${
                    pathname === link.path
                      ? "font-bold" // Apply font-bold when active, but let parent determine text color
                      : "hover:text-blue"
                  } transition-colors duration-300 z-50`}
                >
                  {link.name}
                </Link>

                {link.name === "Packages" && (
                  <div
                    className={`fixed top-0 left-0 w-screen bg-black text-white shadow-lg transform transition-transform duration-500 h-[550px] ease-in-out -z-10 ${
                      isDropdownOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-full opacity-0"
                    }`}
                  >
                    <DropDown />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="z-50 col-span-2">
          <div className="flex justify-center items-center">
            <Button
              onClick={handleClickNav}
              className="rounded-3xl font-semibold bg-yellow-400 px-5 py-2 text-lg text-black duration-300 active:scale-95"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarlink;
