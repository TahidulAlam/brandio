"use client";
import React, { useEffect, useRef } from "react";

const SmoothScroll = ({ children }) => {
  const scrollContainerRef = useRef(null);
  let currentScroll = 0;
  let targetScroll = 0;
  const scrollSpeed = 0.1; // Adjust this for smoother/faster scrolling

  const smoothScrollHandler = () => {
    currentScroll += (targetScroll - currentScroll) * scrollSpeed;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = currentScroll;
    }
    requestAnimationFrame(smoothScrollHandler);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      targetScroll += e.deltaY; // Increase target scroll by wheel delta
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    requestAnimationFrame(smoothScrollHandler); // Start the scroll animation

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        height: "100vh",
        overflow: "hidden", // Hide native scrollbar
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
