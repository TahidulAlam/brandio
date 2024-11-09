import React from "react";

const InfoBox = ({ title, description }) => {
  return (
    <article className="bg-white p-6 min-h-[150px] flex flex-col justify-between">
      <h3 className="lg:text-2xl text-xl font-bold text-gray-900 lg:mb-4 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </article>
  );
};

export default InfoBox;
