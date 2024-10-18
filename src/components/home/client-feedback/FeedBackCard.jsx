import React from "react";
import Image from "next/image";
const FeedBackCard = ({ image, name, review, designation }) => {
  return (
    <div className="flex flex-col items-center justify-start bg-white lg:p-10 p-2 rounded-xl gap-5">
      <div>
        <p className="lg:text-5xl text-3xl font-bold text-red-600 font-sans text-start">
          "
        </p>
        <p className="text-sm text-start text-gray-600">{review}</p>
      </div>
      <div className="flex gap-5 w-full">
        <img
          src={image}
          alt={`${name}'s feedback`}
          className="w-16 h-16 rounded-full mb-4 object-cover"
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
