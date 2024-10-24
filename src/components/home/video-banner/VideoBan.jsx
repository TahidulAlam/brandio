"use client";
import { useEffect, useState } from "react";

export default function VideoBan() {
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [isFullyOnScreen, setIsFullyOnScreen] = useState(false);
  const [initialWidth, setInitialWidth] = useState(0);
  const [initialHeight, setInitialHeight] = useState(0);
  const [isClient, setIsClient] = useState(false); // Track if rendering on the client

  const minSizeWidthPx = 140;
  const minSizeHeightPx = 70;
  const thresholdSizePx = 400;
  const rotateThresholdPx = 300;
  const scrollRange = 1000;

  // Ensure client-side rendering before using window properties
  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      const updateDimensions = () => {
        setInitialWidth(window.innerWidth);
        setInitialHeight(window.innerHeight);
      };

      updateDimensions();

      const divElement = document.querySelector(".full-screen-div");

      if (divElement) {
        const sectionTopPos =
          divElement.getBoundingClientRect().top + window.scrollY;
        setSectionTop(sectionTopPos);
      }

      const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > sectionTop - window.innerHeight) {
          setIsFullyOnScreen(true);
        }

        if (isFullyOnScreen && scrollPosition > sectionTop) {
          setScrollY(scrollPosition - sectionTop);
        }
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", updateDimensions);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, [sectionTop, isFullyOnScreen]);

  if (!isClient) {
    return null;
  }

  const scrollProgress = Math.min(scrollY / scrollRange, 1);
  const currentWidth =
    initialWidth - scrollProgress * (initialWidth - minSizeWidthPx);
  const currentHeight =
    initialHeight - scrollProgress * (initialHeight - minSizeHeightPx);

  const finalWidth = `${Math.max(currentWidth, minSizeWidthPx)}px`;
  const finalHeight = `${Math.max(currentHeight, minSizeHeightPx)}px`;

  const isTextVisible =
    parseFloat(finalWidth) <= thresholdSizePx ||
    parseFloat(finalHeight) <= thresholdSizePx;

  const rotateVideo =
    parseFloat(finalWidth) <= rotateThresholdPx ||
    parseFloat(finalHeight) <= rotateThresholdPx;

  const textOpacity = isTextVisible ? scrollProgress : 0;

  return (
    <div className="relative">
      <div className="full-screen-div sticky top-0 z-10 h-screen w-full flex items-center justify-center overflow-hidden">
        <div
          className="relative transition-all ease-out"
          // style={{
          //   width: finalWidth,
          //   height: finalHeight,
          //   transitionDuration: "0.2s",
          //   transform: rotateVideo
          //     ? `rotate(${3 * scrollProgress}deg)`
          //     : "none",
          //   transformOrigin: "center center",
          // }}
          style={{
            width: finalWidth,
            height: finalHeight,
            transition:
              "width 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
            transform: rotateVideo
              ? `rotate(${3 * scrollProgress}deg)`
              : "none",
            transformOrigin: "center center",
          }}
        >
          <video
            autoPlay
            loop
            muted
            preload="none"
            className="object-cover"
            style={{ width: "100%", height: "100%" }}
          >
            <source src="/assets/video/Middle Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text elements */}
        <div
          className="absolute text-black font-bold text-nowrap"
          style={{
            fontSize: "60px",
            top: `clamp(20px, calc(50% - ${finalHeight} / 2 - 100px), 50%)`,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: textOpacity,
            transition: "all 0.5s ease",
            visibility: isTextVisible ? "visible" : "hidden",
          }}
        >
          Elevating UX, Empowering
        </div>

        <div
          className="absolute text-red-600 font-bold"
          style={{
            fontSize: "60px",
            top: `clamp(50%, calc(50% + ${finalHeight} / 2 + 10px), calc(100% - 10px))`,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: textOpacity,
            transition: "all 0.5s ease",
            visibility: isTextVisible ? "visible" : "hidden",
          }}
        >
          Experiences...
        </div>

        <div
          className="absolute text-yellow-500 font-bold"
          style={{
            fontSize: "60px",
            top: "50%",
            left: `clamp(20px, calc(50% - ${finalWidth} / 2 - 360px), 50%)`,
            transform: "translateY(-50%)",
            opacity: textOpacity,
            transition: "all 0.5s ease",
            visibility: isTextVisible ? "visible" : "hidden",
          }}
        >
          Businesses,
        </div>

        <div
          className="absolute text-yellow-500 font-bold"
          style={{
            fontSize: "60px",
            top: "50%",
            left: `clamp(50%, calc(50% + ${finalWidth} / 2 + 30px), calc(100% - 30px))`,
            transform: "translateY(-50%)",
            opacity: textOpacity,
            transition: "all 0.5s ease",
            visibility: isTextVisible ? "visible" : "hidden",
          }}
        >
          Redefining
        </div>
      </div>
      <div className="h-[150vh]"></div>
    </div>
  );
}
/************************** step code 1 ***********************/
// "use client";
// import { useEffect, useState } from "react";

// export default function VideoBan() {
//   const [scrollY, setScrollY] = useState(0);
//   const [sectionTop, setSectionTop] = useState(0);
//   const [isFullyOnScreen, setIsFullyOnScreen] = useState(false);
//   const [initialWidth, setInitialWidth] = useState(0);
//   const [initialHeight, setInitialHeight] = useState(0);
//   const [isClient, setIsClient] = useState(false);

//   const minSizeWidthPx = 140;
//   const minSizeHeightPx = 70;
//   const thresholdSizePx = 400;
//   const rotateThresholdPx = 300;
//   const scrollRange = 1000;

//   // Ensure client-side rendering before using window properties
//   useEffect(() => {
//     setIsClient(true);

//     if (typeof window !== "undefined") {
//       const updateDimensions = () => {
//         setInitialWidth(window.innerWidth);
//         setInitialHeight(window.innerHeight);
//       };

//       updateDimensions();

//       const divElement = document.querySelector(".full-screen-div");

//       if (divElement) {
//         const sectionTopPos =
//           divElement.getBoundingClientRect().top + window.scrollY;
//         setSectionTop(sectionTopPos);
//       }

//       const handleScroll = () => {
//         const scrollPosition = window.scrollY;

//         if (scrollPosition > sectionTop - window.innerHeight) {
//           setIsFullyOnScreen(true);
//         }

//         if (isFullyOnScreen && scrollPosition > sectionTop) {
//           setScrollY(scrollPosition - sectionTop);
//         }
//       };

//       window.addEventListener("scroll", handleScroll);
//       window.addEventListener("resize", updateDimensions);

//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//         window.removeEventListener("resize", updateDimensions);
//       };
//     }
//   }, [sectionTop, isFullyOnScreen]);

//   if (!isClient) {
//     // Prevent rendering on the server to avoid mismatch issues
//     return null;
//   }

//   const scrollProgress = Math.min(scrollY / scrollRange, 1);
//   const currentWidth =
//     initialWidth - scrollProgress * (initialWidth - minSizeWidthPx);
//   const currentHeight =
//     initialHeight - scrollProgress * (initialHeight - minSizeHeightPx);

//   const finalWidth = `${Math.max(currentWidth, minSizeWidthPx)}px`;
//   const finalHeight = `${Math.max(currentHeight, minSizeHeightPx)}px`;

//   const isTextVisible =
//     parseFloat(finalWidth) <= thresholdSizePx ||
//     parseFloat(finalHeight) <= thresholdSizePx;

//   const rotateVideo =
//     parseFloat(finalWidth) <= rotateThresholdPx ||
//     parseFloat(finalHeight) <= rotateThresholdPx;

//   const textOpacity = isTextVisible ? scrollProgress : 0;

//   return (
//     <div className="relative">
//       <div className="full-screen-div sticky top-0 z-10 h-screen w-full flex items-center justify-center overflow-hidden">
//         <div
//           className="relative transition-transform duration-500 ease-out"
//           style={{
//             width: finalWidth,
//             height: finalHeight,
//             transform: rotateVideo
//               ? `rotate(${3 * scrollProgress}deg)`
//               : "none",
//             transformOrigin: "center center",
//           }}
//         >
//           <video
//             autoPlay
//             loop
//             muted
//             preload="none"
//             className="object-cover"
//             style={{ width: "100%", height: "100%" }}
//           >
//             <source src="/assets/video/Middle Video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {/* Text elements */}
//         <div
//           className="absolute text-black font-bold text-nowrap"
//           style={{
//             fontSize: "60px",
//             top: "calc(50% - 150px)",
//             left: "50%",
//             transform: "translateX(-50%)",
//             opacity: textOpacity,
//             transition: "opacity 0.5s ease",
//             visibility: isTextVisible ? "visible" : "hidden",
//           }}
//         >
//           Elevating UX, Empowering
//         </div>

//         <div
//           className="absolute text-black font-bold"
//           style={{
//             fontSize: "60px",
//             top: "calc(50% + 150px)",
//             left: "50%",
//             transform: "translateX(-50%)",
//             opacity: textOpacity,
//             transition: "opacity 0.5s ease",
//             visibility: isTextVisible ? "visible" : "hidden",
//           }}
//         >
//           Experiences...
//         </div>

//         <div
//           className="absolute text-black font-bold"
//           style={{
//             fontSize: "60px",
//             top: "50%",
//             left: "calc(50% - 400px)",
//             transform: "translateY(-50%)",
//             opacity: textOpacity,
//             transition: "opacity 0.5s ease",
//             visibility: isTextVisible ? "visible" : "hidden",
//           }}
//         >
//           Businesses,
//         </div>

//         <div
//           className="absolute text-black font-bold"
//           style={{
//             fontSize: "60px",
//             top: "50%",
//             left: "calc(50% + 400px)",
//             transform: "translateY(-50%)",
//             opacity: textOpacity,
//             transition: "opacity 0.5s ease",
//             visibility: isTextVisible ? "visible" : "hidden",
//           }}
//         >
//           Redefining
//         </div>
//       </div>
//       <div className="h-[150vh]"></div>
//     </div>
//   );
// }
/************************** step code 2 ***********************/
// "use client";
// import { useEffect, useState, useRef } from "react";

// export default function VideoBan() {
//   const [scrollY, setScrollY] = useState(0);
//   const [sectionTop, setSectionTop] = useState(0);
//   const [isFullyOnScreen, setIsFullyOnScreen] = useState(false);
//   const [initialWidth, setInitialWidth] = useState(0);
//   const [initialHeight, setInitialHeight] = useState(0);
//   const scrollingContainerRef = useRef(null); // Ref for smooth scrolling container

//   const minSizeWidthPx = 140;
//   const minSizeHeightPx = 70;
//   const thresholdSizePx = 400;
//   const rotateThresholdPx = 300;
//   const scrollRange = 1000;

//   useEffect(() => {
//     const updateDimensions = () => {
//       setInitialWidth(window.innerWidth);
//       setInitialHeight(window.innerHeight);
//     };

//     updateDimensions();

//     const divElement = document.querySelector(".full-screen-div");
//     if (divElement) {
//       const sectionTopPos =
//         divElement.getBoundingClientRect().top + window.scrollY;
//       setSectionTop(sectionTopPos);
//     }

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       if (scrollPosition > sectionTop - window.innerHeight) {
//         setIsFullyOnScreen(true);
//       }

//       if (isFullyOnScreen && scrollPosition > sectionTop) {
//         setScrollY(scrollPosition - sectionTop);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", updateDimensions);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", updateDimensions);
//     };
//   }, [sectionTop, isFullyOnScreen]);

//   useEffect(() => {
//     const smoothScrollingHandler = () => {
//       if (scrollingContainerRef.current) {
//         scrollingContainerRef.current.style.transform = `translateY(-${scrollY}px)`;
//       }
//       requestAnimationFrame(smoothScrollingHandler);
//     };

//     requestAnimationFrame(smoothScrollingHandler);
//   }, [scrollY]);

//   const scrollProgress = Math.min(scrollY / scrollRange, 1);
//   const currentWidth =
//     initialWidth - scrollProgress * (initialWidth - minSizeWidthPx);
//   const currentHeight =
//     initialHeight - scrollProgress * (initialHeight - minSizeHeightPx);

//   const finalWidth = `${Math.max(currentWidth, minSizeWidthPx)}px`;
//   const finalHeight = `${Math.max(currentHeight, minSizeHeightPx)}px`;

//   const isTextVisible =
//     parseFloat(finalWidth) <= thresholdSizePx ||
//     parseFloat(finalHeight) <= thresholdSizePx;

//   const rotateVideo =
//     parseFloat(finalWidth) <= rotateThresholdPx ||
//     parseFloat(finalHeight) <= rotateThresholdPx;

//   const textOpacity = isTextVisible ? scrollProgress : 0;

//   return (
//     <div ref={scrollingContainerRef} className="smooth-scroll-container">
//       {/* Sticky video section */}
//       <div className="relative">
//         <div className="full-screen-div sticky top-0 z-10 h-screen w-full flex items-center justify-center overflow-hidden">
//           <div
//             className="relative transition-all ease-out"
//             style={{
//               width: finalWidth,
//               height: finalHeight,
//               transitionDuration: "0.2s",
//               transform: rotateVideo
//                 ? `rotate(${3 * scrollProgress}deg)`
//                 : "none",
//               transformOrigin: "center center",
//             }}
//           >
//             <video
//               autoPlay
//               loop
//               muted
//               preload="none"
//               className="object-cover"
//               style={{ width: "100%", height: "100%" }}
//             >
//               <source src="/assets/video/Middle Video.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>

//           {/* Text elements */}
//           <div
//             className="absolute text-black font-bold text-nowrap"
//             style={{
//               fontSize: "60px",
//               top: `clamp(20px, calc(50% - ${finalHeight} / 2 - 100px), 50%)`,
//               left: "50%",
//               transform: "translateX(-50%)",
//               opacity: textOpacity,
//               transition: "all 0.5s ease",
//               visibility: isTextVisible ? "visible" : "hidden",
//             }}
//           >
//             Elevating UX, Empowering
//           </div>

//           <div
//             className="absolute text-black font-bold"
//             style={{
//               fontSize: "60px",
//               top: `clamp(50%, calc(50% + ${finalHeight} / 2 + 10px), calc(100% - 10px))`,
//               left: "50%",
//               transform: "translateX(-50%)",
//               opacity: textOpacity,
//               transition: "all 0.5s ease",
//               visibility: isTextVisible ? "visible" : "hidden",
//             }}
//           >
//             Experiences...
//           </div>

//           <div
//             className="absolute text-black font-bold"
//             style={{
//               fontSize: "60px",
//               top: "50%",
//               left: `clamp(20px, calc(50% - ${finalWidth} / 2 - 360px), 50%)`,
//               transform: "translateY(-50%)",
//               opacity: textOpacity,
//               transition: "all 0.5s ease",
//               visibility: isTextVisible ? "visible" : "hidden",
//             }}
//           >
//             Businesses,
//           </div>

//           <div
//             className="absolute text-black font-bold"
//             style={{
//               fontSize: "60px",
//               top: "50%",
//               left: `clamp(50%, calc(50% + ${finalWidth} / 2 + 30px), calc(100% - 30px))`,
//               transform: "translateY(-50%)",
//               opacity: textOpacity,
//               transition: "all 0.5s ease",
//               visibility: isTextVisible ? "visible" : "hidden",
//             }}
//           >
//             Redefining
//           </div>
//         </div>
//       </div>

//       {/* Spacer to allow scrolling */}
//       <div className="h-[150vh]"></div>
//     </div>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";

// export default function VideoBan() {
//   const [scrollY, setScrollY] = useState(0);
//   const [sectionTop, setSectionTop] = useState(0);
//   const [isFullyOnScreen, setIsFullyOnScreen] = useState(false);
//   const [initialWidth, setInitialWidth] = useState(0);
//   const [initialHeight, setInitialHeight] = useState(0);
//   const [isClient, setIsClient] = useState(false);

//   const minSizeWidthPx = 140;
//   const minSizeHeightPx = 70;
//   const thresholdSizePx = 400;
//   const rotateThresholdPx = 300;
//   const scrollRange = 1000;

//   useEffect(() => {
//     setIsClient(true);

//     if (typeof window !== "undefined") {
//       const updateDimensions = () => {
//         setInitialWidth(window.innerWidth);
//         setInitialHeight(window.innerHeight);
//       };

//       updateDimensions();

//       const divElement = document.querySelector(".full-screen-div");
//       if (divElement) {
//         const sectionTopPos =
//           divElement.getBoundingClientRect().top + window.scrollY;
//         setSectionTop(sectionTopPos);
//       }

//       const handleScroll = () => {
//         const scrollPosition = window.scrollY;

//         if (scrollPosition > sectionTop - window.innerHeight) {
//           setIsFullyOnScreen(true);
//         }

//         if (isFullyOnScreen && scrollPosition > sectionTop) {
//           setScrollY(scrollPosition - sectionTop);
//         }
//       };

//       window.addEventListener("scroll", handleScroll);
//       window.addEventListener("resize", updateDimensions);

//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//         window.removeEventListener("resize", updateDimensions);
//       };
//     }
//   }, [sectionTop, isFullyOnScreen]);

//   if (!isClient) {
//     return null;
//   }

//   const scrollProgress = Math.min(scrollY / scrollRange, 1);
//   const currentWidth =
//     initialWidth - scrollProgress * (initialWidth - minSizeWidthPx);
//   const currentHeight =
//     initialHeight - scrollProgress * (initialHeight - minSizeHeightPx);

//   const finalWidth = `${Math.max(currentWidth, minSizeWidthPx)}px`;
//   const finalHeight = `${Math.max(currentHeight, minSizeHeightPx)}px`;

//   const isTextVisible =
//     parseFloat(finalWidth) <= thresholdSizePx ||
//     parseFloat(finalHeight) <= thresholdSizePx;

//   const rotateVideo =
//     parseFloat(finalWidth) <= rotateThresholdPx ||
//     parseFloat(finalHeight) <= rotateThresholdPx;

//   const textOpacity = Math.min(scrollProgress * 2, 1);

//   return (
//     <div className="relative">
//       <div className="full-screen-div sticky top-0 z-10 h-screen w-full flex items-center justify-center overflow-hidden">
//         <div
//           className="relative transition-all ease-out"
//           style={{
//             width: finalWidth,
//             height: finalHeight,
//             transitionDuration: "0.2s",
//             transform: rotateVideo
//               ? `rotate(${3 * scrollProgress}deg)`
//               : "none",
//             transformOrigin: "center center",
//           }}
//         >
//           <video
//             autoPlay
//             loop
//             muted
//             preload="none"
//             className="object-cover"
//             style={{ width: "100%", height: "100%" }}
//           >
//             <source src="/assets/video/Middle Video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {/* Text elements */}
//         <div
//           className="absolute text-black font-bold text-nowrap"
//           style={{
//             fontSize: "60px",
//             top: `clamp(20px, calc(50% - ${finalHeight} / 2 - 100px), 50%)`,
//             left: "50%",
//             transform: "translateX(-50%)",
//             opacity: textOpacity,
//             transition: "all 0.5s ease",
//             visibility: isTextVisible ? "visible" : "hidden",
//           }}
//         >
//           Elevating UX, Empowering
//         </div>

//         <div
//           className="absolute text-black font-bold"
//           style={{
//             fontSize: "60px",
//             top: `clamp(50%, calc(50% + ${finalHeight} / 2 + 10px), calc(100% - 10px))`,
//             left: "50%",
//             transform: "translateX(-50%)",
//             opacity: textOpacity,
//             transition: "all 0.5s ease",
//             visibility: isTextVisible ? "visible" : "hidden",
//           }}
//         >
//           Experiences...
//         </div>

//         <div
//           className="absolute text-black font-bold"
//           style={{
//             fontSize: "60px",
//             top: "50%",
//             left: `clamp(20px, calc(50% - ${finalWidth} / 2 - 360px), 50%)`,
//             transform: "translateY(-50%)",
//             opacity: textOpacity,
//             transition: "all 0.5s ease",
//             visibility: isTextVisible ? "visible" : "hidden",
//           }}
//         >
//           Businesses,
//         </div>

//         <div
//           className="absolute text-black font-bold"
//           style={{
//             fontSize: "60px",
//             top: "50%",
//             left: `clamp(50%, calc(50% + ${finalWidth} / 2 + 30px), calc(100% - 30px))`,
//             transform: "translateY(-50%)",
//             opacity: textOpacity,
//             transition: "all 0.5s ease",
//             visibility: isTextVisible ? "visible" : "hidden",
//           }}
//         >
//           Redefining
//         </div>
//       </div>
//       {/* <div className="h-[150vh]"></div> */}
//     </div>
//   );
// }
/************************** step code 3 ***********************/
// "use client";
// import { useEffect, useState } from "react";

// export default function VideoBan() {
//   const [scrollY, setScrollY] = useState(0);
//   const [sectionTop, setSectionTop] = useState(0);
//   const [isFullyOnScreen, setIsFullyOnScreen] = useState(false);
//   const [initialWidth, setInitialWidth] = useState(0);
//   const [initialHeight, setInitialHeight] = useState(0);
//   const [isClient, setIsClient] = useState(false);

//   const minSizeWidthPx = 140;
//   const minSizeHeightPx = 70;
//   const thresholdSizePx = 400;
//   const rotateThresholdPx = 300;
//   const scrollRange = 1000;

//   useEffect(() => {
//     setIsClient(true);

//     if (typeof window !== "undefined") {
//       const updateDimensions = () => {
//         setInitialWidth(window.innerWidth);
//         setInitialHeight(window.innerHeight);
//       };

//       updateDimensions();

//       const divElement = document.querySelector(".full-screen-div");

//       if (divElement) {
//         const sectionTopPos =
//           divElement.getBoundingClientRect().top + window.scrollY;
//         setSectionTop(sectionTopPos);
//       }

//       const handleScroll = () => {
//         const scrollPosition = window.scrollY;

//         if (scrollPosition > sectionTop - window.innerHeight) {
//           setIsFullyOnScreen(true);
//         }

//         if (isFullyOnScreen && scrollPosition > sectionTop) {
//           setScrollY(scrollPosition - sectionTop);
//         }
//       };

//       window.addEventListener("scroll", handleScroll);
//       window.addEventListener("resize", updateDimensions);

//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//         window.removeEventListener("resize", updateDimensions);
//       };
//     }
//   }, [sectionTop, isFullyOnScreen]);

//   if (!isClient) {
//     return null;
//   }

//   const scrollProgress = Math.min(scrollY / scrollRange, 1);
//   const currentWidth =
//     initialWidth - scrollProgress * (initialWidth - minSizeWidthPx);
//   const currentHeight =
//     initialHeight - scrollProgress * (initialHeight - minSizeHeightPx);

//   const finalWidth = `${Math.max(currentWidth, minSizeWidthPx)}px`;
//   const finalHeight = `${Math.max(currentHeight, minSizeHeightPx)}px`;

//   const isTextVisible =
//     parseFloat(finalWidth) <= thresholdSizePx ||
//     parseFloat(finalHeight) <= thresholdSizePx;

//   const rotateVideo =
//     parseFloat(finalWidth) <= rotateThresholdPx ||
//     parseFloat(finalHeight) <= rotateThresholdPx;

//   const textOpacity = isTextVisible ? scrollProgress : 0;

//   return (
//     <div className="relative">
//       <div className="full-screen-div sticky top-0 z-10 h-screen w-full flex items-center justify-center overflow-hidden">
//         <div
//           className="relative transition-all ease-out"
//           style={{
//             width: finalWidth,
//             height: finalHeight,
//             transition:
//               "width 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
//             transform: rotateVideo
//               ? `rotate(${3 * scrollProgress}deg)`
//               : "none",
//             transformOrigin: "center center",
//           }}
//         >
//           <video
//             autoPlay
//             loop
//             muted
//             preload="none"
//             className="object-cover"
//             style={{ width: "100%", height: "100%" }}
//           >
//             <source src="/assets/video/Middle Video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {/* Text elements */}
//         <div
//           className="absolute text-black font-bold text-nowrap"
//           style={{
//             fontSize: "60px",
//             top: `clamp(20px, calc(50% - ${finalHeight} / 2 - 100px), 50%)`,
//             left: "50%",
//             transform: "translateX(-50%)",
//             opacity: textOpacity,
//             transition: "opacity 0.5s ease, transform 0.5s ease",
//             visibility: isTextVisible ? "visible" : "hidden",
//           }}
//         >
//           Elevating UX, Empowering
//         </div>

//         <div
//           className="absolute text-black font-bold"
//           style={{
//             fontSize: "60px",
//             top: `clamp(50%, calc(50% + ${finalHeight} / 2 + 10px), calc(100% - 10px))`,
//             left: "50%",
//             transform: "translateX(-50%)",
//             opacity: textOpacity,
//             transition: "opacity 0.5s ease, transform 0.5s ease",
//             visibility: isTextVisible ? "visible" : "hidden",
//           }}
//         >
//           Experiences...
//         </div>

//         <div
//           className="absolute text-black font-bold"
//           style={{
//             fontSize: "60px",
//             top: "50%",
//             left: `clamp(20px, calc(50% - ${finalWidth} / 2 - 360px), 50%)`,
//             transform: "translateY(-50%)",
//             opacity: textOpacity,
//             transition: "opacity 0.5s ease, transform 0.5s ease",
//             visibility: isTextVisible ? "visible" : "hidden",
//           }}
//         >
//           Businesses,
//         </div>

//         <div
//           className="absolute text-black font-bold"
//           style={{
//             fontSize: "60px",
//             top: "50%",
//             left: `clamp(50%, calc(50% + ${finalWidth} / 2 + 30px), calc(100% - 30px))`,
//             transform: "translateY(-50%)",
//             opacity: textOpacity,
//             transition: "opacity 0.5s ease, transform 0.5s ease",
//             visibility: isTextVisible ? "visible" : "hidden",
//           }}
//         >
//           Redefining
//         </div>
//       </div>
//       <div className="h-[150vh]"></div>
//     </div>
//   );
// }
