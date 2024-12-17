"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SmoothScrollComponent = ({
  scrollSettings = "duration:1 ease:power1.out smoother:on", // Default settings
  children,
}) => {
  const smoothScrollRef = useRef(null);
  const animRequestID = useRef(null);

  // Function to parse settings from string format to object format
  const parseSettings = (str) => {
    const result = {};
    str.split(" ").forEach((s) => {
      const [key, value] = s.split(":");
      result[key] = value;
    });
    return result;
  };

  const settings = parseSettings(scrollSettings);

  // Resize handler
  const handleResize = () => {
    if (smoothScrollRef.current) {
      const bodyHeight = smoothScrollRef.current.offsetHeight;
      gsap.set("body", { height: bodyHeight });
      cancelAnimationFrame(animRequestID.current);
    }
  };

  // Scroll handler
  const handleScroll = () => {
    scrollTo(window.scrollY);
  };

  // Smooth scrolling function
  const scrollTo = (y) => {
    cancelAnimationFrame(animRequestID.current);
    animRequestID.current = requestAnimationFrame(() => {
      gsap.to(smoothScrollRef.current, {
        duration: settings.duration,
        y: -y,
        ease: settings.ease,
      });
    });
  };

  // Set up GSAP and add event listeners on mount
  useEffect(() => {
    gsap.set(smoothScrollRef.current, { force3D: true });

    if (settings.smoother === "on") {
      gsap.set(smoothScrollRef.current, {
        rotation: 0.001,
        // Uncomment if you need z axis tweak
        // z: 0.01
      });
    }

    // Initial resize and scroll effect
    handleResize();

    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animRequestID.current);
    };
  }, [settings]);

  return (
    <div id="smooth-scroll" ref={smoothScrollRef}>
      {children}
    </div>
  );
};

export default SmoothScrollComponent;
