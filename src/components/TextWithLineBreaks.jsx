import React from "react";

const TextWithLineBreaks = ({ text = "", className = "lg:mb-2 mb-1" }) => {
  return (
    <div>
      {text.split("/n")?.map((line, index) => (
        <p key={index} className={`${className}`}>
          {line}
        </p>
      ))}
    </div>
  );
};

export default TextWithLineBreaks;
