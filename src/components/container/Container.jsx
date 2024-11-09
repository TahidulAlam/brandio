import React from "react";

const Container = ({ children, bgClassName = "", className = "" }) => {
  return (
    <div className={bgClassName}>
      <div className={`mx-auto max-w-[90%] lg:max-w-[80%] ${className}`}>
        {children}
      </div>
    </div>
  );
};
export default Container;
