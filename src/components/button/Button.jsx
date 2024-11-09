import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`lg:mt-5 mt-1 rounded-full font-semibold bg-yellow-400 lg:px-6 px-5 py-3 lg:py-4 lg:text-base text-[12px] text-black duration-300 active:scale-95`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
