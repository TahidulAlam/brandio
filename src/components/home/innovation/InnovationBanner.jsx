import React from "react";
import Button from "../../button/Button";

const InnovationBanner = () => {
  return (
    <div className="flex justify-center items-center gap-10 p-20 w-[80%] mx-auto">
      <div className="w-3/5 flex flex-col text-black">
        <h1 className="text-2xl font-bold py-2 text-yellow-400">
          Innovation Starts Here
        </h1>
        <p>
          Welcome to our Design & Development Company! We are a passionate team
          of creative designers and Development experts who are dedicated to
          crafting intuitive and impactful digital experiences for our clients.
        </p>
        <div className="mt-10">
          <Button
            children={"More About us"}
            className={"px-10 py-2 rounded-2xl"}
          />
        </div>
      </div>
      <div className="w-2/5">
        <div className="flex w-[90%] mx-auto">
          <img
            src="/assets/image/image-8.png"
            alt="Feedback Background"
            // layout="fill"
            // objectFit="cover"
            width={500}
            height={500}
            className="z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default InnovationBanner;
