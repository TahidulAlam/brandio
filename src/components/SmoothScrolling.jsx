// "use client";
// import { ReactLenis } from "@studio-freight/react-lenis";

// const SmoothScrolling = ({ children }) => {
//   return (
//     <ReactLenis
//       root
//       options={{
//         lerp: 0.01,
//         duration: 4,
//         smoothWheel: true,
//         smoothTouch: true,
//         easing: (t) => t,
//       }}
//     >
//       {children}
//     </ReactLenis>
//   );
// };

// export default SmoothScrolling;

/* ********** code step 1 ************** */

// import React, { useEffect, useRef } from "react";
// import useWindowSize from "./useWindowSize";

// const SmoothScroll = ({ children }) => {
//   // 1.
//   const windowSize = useWindowSize();

//   //2.
//   const scrollingContainerRef = useRef();

//   // 3.
//   const data = {
//     ease: 0.1,
//     current: 0,
//     previous: 0,
//     rounded: 0,
//   };

//   // 4.
//   useEffect(() => {
//     setBodyHeight();
//   }, [windowSize.height]);

//   const setBodyHeight = () => {
//     document.body.style.height = `${
//       scrollingContainerRef.current.getBoundingClientRect().height
//     }px`;
//   };

//   // 5.
//   useEffect(() => {
//     requestAnimationFrame(() => smoothScrollingHandler());
//   }, []);

//   const smoothScrollingHandler = () => {
//     data.current = window.scrollY;
//     data.previous += (data.current - data.previous) * data.ease;
//     data.rounded = Math.round(data.previous * 100) / 100;

//     scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

//     // Recursive call
//     requestAnimationFrame(() => smoothScrollingHandler());
//   };

//   return (
//     <div className="parent">
//       <div ref={scrollingContainerRef}>{children}</div>
//     </div>
//   );
// };

// export default SmoothScroll;

/* ********** code step 2 ************** */
// "use client";
// import React, { useEffect, useRef } from "react";
// import useWindowSize from "./useWindowSize";

// const SmoothScroll = ({ children }) => {
//   const windowSize = useWindowSize();
//   const scrollingContainerRef = useRef();
//   const data = {
//     ease: 0.1,
//     current: 0,
//     previous: 0,
//     rounded: 0,
//   };

//   useEffect(() => {
//     setBodyHeight();
//   }, [windowSize.height]);

//   const setBodyHeight = () => {
//     document.body.style.height = `${
//       scrollingContainerRef.current.getBoundingClientRect().height
//     }px`;
//   };

//   useEffect(() => {
//     requestAnimationFrame(() => smoothScrollingHandler());
//   }, []);

//   const smoothScrollingHandler = () => {
//     // Get the current scroll position
//     const currentScrollY = window.scrollY;

//     // Check if the user is scrolling over the no-smooth-scroll section
//     const noSmoothScrollElement = document.querySelector(".no-smooth-scroll");
//     if (noSmoothScrollElement) {
//       const elementTop =
//         noSmoothScrollElement.getBoundingClientRect().top + window.scrollY;
//       const elementBottom = elementTop + noSmoothScrollElement.offsetHeight;

//       // Disable smooth scroll if within the VideoBan component
//       if (currentScrollY >= elementTop && currentScrollY <= elementBottom) {
//         // Simply bypass the smooth scroll logic
//         return requestAnimationFrame(() => smoothScrollingHandler());
//       }
//     }

//     data.current = window.scrollY;
//     data.previous += (data.current - data.previous) * data.ease;
//     data.rounded = Math.round(data.previous * 100) / 100;

//     scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

//     // Recursive call
//     requestAnimationFrame(() => smoothScrollingHandler());
//   };

//   return <div ref={scrollingContainerRef}>{children}</div>;
// };

// export default SmoothScroll;

/* ********** code step 3 ************** */

// "use client";
// import React, { useEffect, useRef } from "react";
// import useWindowSize from "./useWindowSize";

// const SmoothScroll = ({ children }) => {
//   const windowSize = useWindowSize();
//   const scrollingContainerRef = useRef();
//   const data = {
//     ease: 0.1,
//     current: 0,
//     previous: 0,
//     rounded: 0,
//   };

//   useEffect(() => {
//     setBodyHeight();
//   }, [windowSize.height]);

//   const setBodyHeight = () => {
//     document.body.style.height = `${
//       scrollingContainerRef.current.getBoundingClientRect().height
//     }px`;
//   };

//   useEffect(() => {
//     requestAnimationFrame(smoothScrollingHandler);
//   }, []);

//   const smoothScrollingHandler = () => {
//     const currentScrollY = window.scrollY;

//     // Bypass smooth scrolling if inside the "no-smooth-scroll" section
//     const noSmoothScrollElement = document.querySelector(".no-smooth-scroll");
//     if (noSmoothScrollElement) {
//       const elementTop =
//         noSmoothScrollElement.getBoundingClientRect().top + window.scrollY;
//       const elementBottom = elementTop + noSmoothScrollElement.offsetHeight;

//       if (currentScrollY >= elementTop && currentScrollY <= elementBottom) {
//         requestAnimationFrame(smoothScrollingHandler);
//         return; // Skip smooth scrolling
//       }
//     }

//     // Smooth scroll logic
//     data.current = window.scrollY;
//     data.previous += (data.current - data.previous) * data.ease;
//     data.rounded = Math.round(data.previous * 100) / 100;

//     scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

//     requestAnimationFrame(smoothScrollingHandler);
//   };

//   return (
//     <div className="h-auto w-auto overflow-hidden ">
//       <div ref={scrollingContainerRef}>{children}</div>
//     </div>
//   );
// };

// export default SmoothScroll;

/* new code 4 */
// import React, { useEffect, useRef } from "react";
// import useWindowSize from "./useWindowSize";

// const SmoothScroll = ({ children }) => {
//   const windowSize = useWindowSize();
//   const scrollingContainerRef = useRef(null);
//   const data = {
//     ease: 0.1,
//     current: 0,
//     previous: 0,
//     rounded: 0,
//   };

//   // Set body height to match the scrolling container
//   useEffect(() => {
//     if (scrollingContainerRef.current) {
//       document.body.style.height = `${
//         scrollingContainerRef.current.getBoundingClientRect().height
//       }px`;
//     }
//   }, [windowSize.height]);

//   // Smooth scroll handler
//   useEffect(() => {
//     const smoothScrollingHandler = () => {
//       const currentScrollY = window.scrollY;

//       // Check if we are inside a no-smooth-scroll section
//       const noSmoothScrollElement = document.querySelector(".no-smooth-scroll");
//       if (noSmoothScrollElement) {
//         const elementTop =
//           noSmoothScrollElement.getBoundingClientRect().top + window.scrollY;
//         const elementBottom = elementTop + noSmoothScrollElement.offsetHeight;

//         if (currentScrollY >= elementTop && currentScrollY <= elementBottom) {
//           requestAnimationFrame(smoothScrollingHandler);
//           return; // Bypass smooth scrolling logic
//         }
//       }

//       // Proceed with smooth scrolling
//       data.current = window.scrollY;
//       data.previous += (data.current - data.previous) * data.ease;
//       data.rounded = Math.round(data.previous * 100) / 100;

//       if (scrollingContainerRef.current) {
//         scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
//       }

//       requestAnimationFrame(smoothScrollingHandler);
//     };

//     requestAnimationFrame(smoothScrollingHandler);
//   }, []);

//   return (
//     <div className="fixed h-[100%] w-[100%] overflow-hidden ">
//       <div ref={scrollingContainerRef}>{children}</div>
//     </div>
//   );
// };

// export default SmoothScroll;

/* new code 5 */
"use client";
import React, { useEffect, useRef, useCallback } from "react";
import useWindowSize from "./useWindowSize";

// SmoothScroll component to create a custom smooth scroll effect
const SmoothScroll = ({ children }) => {
  const windowSize = useWindowSize();
  const scrollingContainerRef = useRef(null);

  const data = useRef({
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }).current;

  // Function to set the correct body height based on the scrolling container
  const setBodyHeight = useCallback(() => {
    if (scrollingContainerRef.current) {
      const contentHeight = scrollingContainerRef.current.scrollHeight;
      document.body.style.height = `${contentHeight}px`;
    }
  }, []);

  useEffect(() => {
    // Set initial body height and update on window resize
    setBodyHeight();
  }, [windowSize.height, setBodyHeight]);

  // Smooth scroll animation handler
  const smoothScrollingHandler = useCallback(() => {
    const currentScrollY = window.scrollY;
    data.current = currentScrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    if (scrollingContainerRef.current) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.rounded}px)`;
    }

    requestAnimationFrame(smoothScrollingHandler);
  }, [data]);

  useEffect(() => {
    requestAnimationFrame(smoothScrollingHandler);
  }, [smoothScrollingHandler]);

  return (
    <div className="fixed top-0 left-0 h-[100%] w-[100%] overflow-hidden">
      {/* The scrolling container */}
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
