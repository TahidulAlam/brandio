import React from "react";
import { ImQuotesRight } from "react-icons/im";
const FeedBackCard = ({ image, name, review, designation }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white lg:p-10 lg:py-20 py-2 p-2 rounded-3xl gap-5 lg:h-[360px] h-[250px]">
      {/* Quotation mark */}
      <div className="self-start">
        <p className="lg:text-4xl text-xl font-bold text-red-600">
          <ImQuotesRight />
        </p>
      </div>

      {/* Review text */}
      <p className="text-sm font-semibold text-start text-gray-900">{review}</p>

      {/* Reviewer details */}
      <div className="flex gap-5 w-full items-center lg:mt-5">
        <img
          src={image}
          alt={`${name}'s feedback`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
