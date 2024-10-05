"use client";
import React, { useRef } from "react";
import { useCountUp } from "react-countup";

const Counter = ({ name, start, end }) => {
  const countUpRef = useRef(null);

  useCountUp({
    ref: countUpRef,
    start: start || 0,
    end: end || 1000,
    delay: 1,
    duration: 3,
    formattingFn: (value) => `${value}+`,
  });

  return (
    <div>
      <div className="text-5xl font-bold" ref={countUpRef} />
      <h2 className="text-base font-semibold">{name}</h2>
    </div>
  );
};

export default Counter;
