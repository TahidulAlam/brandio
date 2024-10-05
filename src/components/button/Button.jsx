import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`${className} font-semibold bg-yellow-400 text-black`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
