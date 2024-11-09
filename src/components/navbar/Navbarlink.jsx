// "use client";

// import React, { useState } from "react";
// import DropDown from "./DropDown";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import BrandLogo from "./BrandLogo";
// import Button from "../button/Button";
// import { CiMenuFries } from "react-icons/ci"; // Mobile menu icon
// import { AiOutlineClose } from "react-icons/ai";

// const Navbarlink = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false); // State for mobile menu
//   const pathname = usePathname();

//   const handleClickNav = () => {
//     console.log("Button was clicked!");
//   };

//   const navLinks = [
//     { name: "Services", path: "/services" },
//     { name: "About", path: "/about" },
//     { name: "Packages", path: "/packages" },
//     { name: "Our Work", path: "/ourwork" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const handleMobileDropdownToggle = (e) => {
//     e.preventDefault(); // Prevent default behavior to allow dropdown toggle
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const getBackgroundColor = () => {
//     switch (pathname) {
//       case "/":
//         return "bg-black text-white"; // For the home page
//       case "/about":
//         return "bg-white text-black"; // About page
//       case "/services":
//         return "bg-black text-white"; // Services page
//       case "/contact":
//         return "bg-black text-white"; // Contact page
//       default:
//         return "bg-black text-white"; // Default color
//     }
//   };

//   return (
//     <div className={`${getBackgroundColor()}`}>
//       <div className="grid grid-cols-8 w-[90%] mx-auto lg:py-10 py-5">
//         {/* Logo Section */}
//         <div className="z-50 col-span-2">
//           <Link href={"/"}>
//             <BrandLogo />
//           </Link>
//         </div>

//         {/* Navbar Links for Desktop */}
//         <div className="col-span-4 w-full lg:flex hidden justify-center">
//           <div className="flex items-center justify-center gap-14 relative pt-2 z-40">
//             {navLinks.map((link) => (
//               <div key={link.name} className="relative z-50">
//                 <Link
//                   href={link.path}
//                   className={`${
//                     pathname === link.path
//                       ? "font-bold z-50 text-white"
//                       : "hover:text-blue z-50 text-white"
//                   } transition-colors duration-300 z-50`}
//                   onMouseEnter={
//                     link.name === "Services"
//                       ? () => setIsDropdownOpen(true)
//                       : undefined
//                   }
//                 >
//                   {link.name}
//                 </Link>

//                 {/* Dropdown for Services */}
//                 {link.name === "Services" && (
//                   <div
//                     className={`fixed -top-5 left-0 w-screen bg-black text-white shadow-lg transform transition-transform duration-500 lg:h-[600px] h-[100%] ease-in-out z-50 ${
//                       isDropdownOpen
//                         ? "translate-y-0 opacity-100"
//                         : "-translate-y-full opacity-0"
//                     }`}
//                     onMouseEnter={() => setIsDropdownOpen(true)}
//                     onMouseLeave={() => setIsDropdownOpen(false)}
//                   >
//                     <DropDown />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Mobile Menu Icon */}
//         <div className="z-50 col-span-6 lg:hidden flex justify-end items-center">
//           {mobileSidebarOpen ? (
//             <AiOutlineClose
//               className="text-[2rem] text-white cursor-pointer transition-colors duration-300"
//               onClick={() => setMobileSidebarOpen(false)}
//             />
//           ) : (
//             <CiMenuFries
//               className="text-[2rem] text-white cursor-pointer transition-colors duration-300"
//               onClick={() => setMobileSidebarOpen(true)}
//             />
//           )}
//         </div>

//         {/* Button */}
//         <div className="z-50 col-span-2 hidden lg:flex justify-center items-center">
//           <Button
//             onClick={handleClickNav}
//             className="rounded-3xl font-semibold bg-yellow-400 px-5 py-2 text-lg text-black duration-300 active:scale-95"
//           >
//             Contact Us
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <aside
//         className={`lg:hidden bg-black text-white p-2 text-center absolute top-[75px] right-0 w-full transition-all duration-500 h-screen ${
//           mobileSidebarOpen
//             ? "translate-x-0 opacity-100 z-20"
//             : "translate-x-[100%] opacity-0 z-[-1]"
//         }`}
//       >
//         <ul className="flex flex-col items-center gap-[20px] text-[1rem] text-gray-100">
//           {navLinks.map((link) => (
//             <div key={link.name}>
//               <Link
//                 href={link.path}
//                 onClick={
//                   link.name === "Services"
//                     ? handleMobileDropdownToggle
//                     : undefined
//                 }
//               >
//                 <li className="hover:text-primary transition-colors duration-300 capitalize">
//                   {link.name}
//                 </li>
//               </Link>

//               {/* Dropdown for Mobile (Replace hover with click) */}
//               {link.name === "Services" && isDropdownOpen && (
//                 <div className="w-ful text-white shadow-lg transition-transform duration-500 ease-in-out h-[600px]">
//                   <DropDown />
//                 </div>
//               )}
//             </div>
//           ))}
//           <li className="w-full">
//             <div className="lg:hidden block ml-5 w-[80%] mx-auto">
//               <Button
//                 onClick={handleClickNav}
//                 className="rounded-2xl mx-2 font-semibold bg-yellow-400 px-3 py-1 text-sm text-black duration-300 active:scale-95 w-full"
//               >
//                 Contact Us
//               </Button>
//             </div>
//           </li>
//         </ul>
//       </aside>
//     </div>
//   );
// };

// export default Navbarlink;
/* code 1 */
// "use client";

// import React, { useState } from "react";
// import DropDown from "./DropDown";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import BrandLogo from "./BrandLogo";
// import Button from "../button/Button";
// import { CiMenuFries } from "react-icons/ci"; // Mobile menu icon
// import { AiOutlineClose } from "react-icons/ai";

// const Navbarlink = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
//   const pathname = usePathname();

//   const handleClickNav = () => {
//     console.log("Button was clicked!");
//   };

//   const navLinks = [
//     { name: "Services", path: "/services" },
//     { name: "About", path: "/about" },
//     { name: "Packages", path: "/packages" },
//     { name: "Our Work", path: "/ourwork" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const handleMobileDropdownToggle = (e) => {
//     e.preventDefault();
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const getBackgroundColor = () => {
//     switch (pathname) {
//       case "/":
//         return "bg-black text-white";
//       case "/about":
//         return "bg-white text-black";
//       case "/services":
//         return "bg-black text-white";
//       case "/contact":
//         return "bg-black text-white";
//       default:
//         return "bg-black text-white";
//     }
//   };

//   return (
//     <div className={`${getBackgroundColor()}`}>
//       <div className="grid grid-cols-8 w-[90%] mx-auto lg:py-10 py-5">
//         {/* Logo Section */}
//         <div className="z-50 col-span-2">
//           <Link href={"/"}>
//             <BrandLogo />
//           </Link>
//         </div>

//         {/* Navbar Links for Desktop */}
//         <div className="col-span-4 w-full lg:flex hidden justify-center">
//           <div className="flex items-center justify-center gap-14 relative pt-2 z-40">
//             {navLinks.map((link) => (
//               <div key={link.name} className="relative">
//                 <Link
//                   href={link.path}
//                   className={`${
//                     pathname === link.path ? "font-bold" : "hover:text-white"
//                   } transition-colors duration-300 ${
//                     pathname === "/about" ? "text-black" : "text-white"
//                   }`} // Dynamically changing text color based on route
//                   onMouseEnter={
//                     link.name === "Services"
//                       ? () => setIsDropdownOpen(true)
//                       : undefined
//                   }
//                 >
//                   {link.name}
//                 </Link>

//                 {/* Dropdown for Services */}
//                 {link.name === "Services" && (
//                   <div
//                     className={`fixed -top-5 -z-10 left-0 w-screen bg-black text-white shadow-lg transform transition-transform duration-500 lg:h-[600px] h-[100%] ease-in-out ${
//                       isDropdownOpen
//                         ? "translate-y-0 opacity-100 hidden"
//                         : "-translate-y-full opacity-0 block"
//                     }`}
//                     onMouseEnter={() => setIsDropdownOpen(true)}
//                     onMouseLeave={() => setIsDropdownOpen(false)}
//                   >
//                     <DropDown />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="z-50 col-span-6 lg:hidden flex justify-end items-center">
//           {mobileSidebarOpen ? (
//             <AiOutlineClose
//               className="text-[2rem] cursor-pointer transition-colors duration-300"
//               onClick={() => setMobileSidebarOpen(false)}
//             />
//           ) : (
//             <CiMenuFries
//               className="text-[2rem] cursor-pointer transition-colors duration-300"
//               onClick={() => setMobileSidebarOpen(true)}
//             />
//           )}
//         </div>

//         {/* Button */}
//         <div className="z-50 col-span-2 hidden lg:flex justify-center items-center">
//           <Button
//             onClick={handleClickNav}
//             className="rounded-3xl font-semibold bg-yellow-400 px-5 py-2 text-lg text-black duration-300 active:scale-95"
//           >
//             Contact Us
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <aside
//         className={`lg:hidden bg-black text-white p-2 text-center absolute top-[75px] right-0 w-full transition-all duration-500 h-screen ${
//           mobileSidebarOpen
//             ? "translate-x-0 opacity-100 z-20"
//             : "translate-x-[100%] opacity-0 z-[-1]"
//         }`}
//       >
//         <ul className="flex flex-col items-center gap-[20px] text-[1rem] text-gray-100">
//           {navLinks.map((link) => (
//             <div key={link.name}>
//               <Link
//                 href={link.path}
//                 onClick={
//                   link.name === "Services"
//                     ? handleMobileDropdownToggle
//                     : undefined
//                 }
//               >
//                 <li className="hover:text-primary transition-colors duration-300 capitalize">
//                   {link.name}
//                 </li>
//               </Link>

//               {/* Dropdown for Mobile (Replace hover with click) */}
//               {link.name === "Services" && isDropdownOpen && (
//                 <div className="w-ful text-white shadow-lg transition-transform duration-500 ease-in-out h-[600px]">
//                   <DropDown />
//                 </div>
//               )}
//             </div>
//           ))}
//           <li className="w-full">
//             <div className="lg:hidden block ml-5 w-[80%] mx-auto">
//               <Button
//                 onClick={handleClickNav}
//                 className="rounded-2xl mx-2 font-semibold bg-yellow-400 px-3 py-1 text-sm text-black duration-300 active:scale-95 w-full"
//               >
//                 Contact Us
//               </Button>
//             </div>
//           </li>
//         </ul>
//       </aside>
//     </div>
//   );
// };

// export default Navbarlink;

/* code 2 */
"use client";

import React, { useState } from "react";
import DropDown from "./DropDown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import Button from "../button/Button";
import { CiMenuFries } from "react-icons/ci"; // Mobile menu icon
import { AiOutlineClose } from "react-icons/ai";

const Navbarlink = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  const handleClickNav = () => {
    console.log("Button was clicked!");
  };

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Packages", path: "/packages" },
    { name: "Our Work", path: "/ourwork" },
    { name: "Blog", path: "/blog" },
  ];

  const getBackgroundColor = () => {
    switch (pathname) {
      case "/":
        return "bg-black text-white";
      case "/about":
        return "bg-white text-black";
      case "/services":
        return "bg-black text-white";
      case "/contact":
        return "bg-black text-white";
      default:
        return "bg-black text-white";
    }
  };

  return (
    <div className={`${getBackgroundColor()}`}>
      <div className="grid grid-cols-8 lg:py-6 lg:pt-6 pt-3 mx-auto max-w-[90%] lg:max-w-[80%]">
        {/* Logo Section */}
        <div className="z-50 col-span-2 mt-3">
          <Link href={"/"}>
            <BrandLogo />
          </Link>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="col-span-4 w-full lg:flex hidden justify-center ">
          <div className="flex items-center justify-center gap-10 relative z-40 text-sm">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  href={link.path}
                  className={`${
                    pathname === link.path ? "font-bold" : "hover:text-white"
                  } transition-colors duration-300 ${
                    pathname === "/about" ? "text-black" : "text-white"
                  }`}
                  onMouseEnter={
                    link.name === "Services"
                      ? () => setIsDropdownOpen(true)
                      : undefined
                  }
                >
                  {link.name}
                </Link>

                {/* Dropdown for Services */}

                {link.name === "Services" && (
                  <div
                    className={`fixed -top-5 -z-10 left-0 w-screen bg-black text-white shadow-lg transform transition-transform duration-500 lg:h-[700px] h-[100%] ease-in-out ${
                      isDropdownOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-full opacity-0"
                    }`}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <DropDown />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="z-50 col-span-6 lg:hidden flex justify-end items-center">
          {mobileSidebarOpen ? (
            <AiOutlineClose
              className="text-[2rem] cursor-pointer transition-colors duration-300"
              onClick={() => setMobileSidebarOpen(false)}
            />
          ) : (
            <CiMenuFries
              className="text-[2rem] cursor-pointer transition-colors duration-300"
              onClick={() => setMobileSidebarOpen(true)}
            />
          )}
        </div>

        {/* Button */}
        <div className="z-50 col-span-2 hidden lg:flex justify-end items-center">
          <Button
            onClick={handleClickNav}
            className="rounded-3xl font-semibold bg-yellow-400 px-3 py-2 text-xs text-black duration-300 active:scale-95"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar (Appears from the top) */}
      <aside
        className={`lg:hidden bg-black text-white p-2 text-center absolute top-0 left-0 w-full transition-all duration-500 h-screen ${
          mobileSidebarOpen
            ? "translate-y-0 opacity-100 z-20"
            : "-translate-y-full opacity-0 z-[-1]"
        }`}
      >
        <ul className="flex flex-col items-start gap-[20px] text-xs text-gray-100 mt-20">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.path}
                onClick={
                  link.name === "Services"
                    ? (e) => {
                        e.preventDefault();
                        setIsDropdownOpen(!isDropdownOpen);
                      }
                    : () => setMobileSidebarOpen(false)
                }
              >
                <li className="hover:text-primary text-lg transition-colors duration-300 capitalize pl-5">
                  {link.name}
                </li>
              </Link>

              {/* Dropdown for Mobile (Click instead of hover) */}
              {link.name === "Services" && isDropdownOpen && (
                <div className="w-full text-white shadow-lg transition-transform duration-500 ease-in-out h-[400px] z-50">
                  <DropDown />
                </div>
              )}
            </div>
          ))}
          <li className="w-full">
            <div className="lg:hidden block mt-5 ml-5 lg:w-[80%] lg:mx-auto float-start">
              <Button
                onClick={handleClickNav}
                className="rounded-2xl mx-2 font-semibold bg-yellow-400 px-3 py-2 text-sm text-black duration-300 active:scale-95 w-full"
              >
                Contact Us
              </Button>
            </div>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Navbarlink;
