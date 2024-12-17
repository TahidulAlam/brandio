import React from "react";

const TextWithLineBreaks = ({ text = "", classNameP = "lg:mb-2 mb-1" }) => {
  return (
    <div>
      {text.split("/n")?.map((line, index) => (
        <p key={index} className={`${classNameP}`}>
          {line}
        </p>
      ))}
    </div>
  );
};

export default TextWithLineBreaks;
