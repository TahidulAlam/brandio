import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const BrandingSectionOne = () => {
  return (
    <div className="h-[500px] w-[90%] mx-auto flex items-center justify-center ">
      <div className="w-1/3">
        <Image
          src="/assets/image/image 8.png"
          alt="Feedback Background"
          width={400}
          height={400}
          className="object-cover"
          priority
        />
      </div>
      <div className="w-2/3">
        <h1 className="font-extrabold text-5xl text-black pt-10 pb-5">
          Digital Product Design & <br /> Consulting Services
        </h1>
        <p className="text-balance">
          Your brand's design speaks before you do. 80% of <br />
          consumers recognize a brand just by its design & color! <br />
          We use color psychology to design your brand to be <br />
          memorable.
        </p>
        <Button
          //   onClick={handleClickBan}
          className="mt-5 rounded-3xl font-semibold bg-yellow-400 px-8 py-3 text-lg text-black duration-300 active:scale-95"
        >
          Design my Product Now
        </Button>
      </div>
    </div>
  );
};

export default BrandingSectionOne;
