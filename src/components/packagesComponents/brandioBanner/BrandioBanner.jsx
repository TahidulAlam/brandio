import React from "react";

const BrandioBanner = () => {
  return (
    <div className="w-full z-10">
      {/* Blockquote Section */}
      <blockquote className="text-center my-8">
        <span className="text-6xl">"</span>
        <p className="text-lg md:text-xl italic leading-relaxed">
          “Brandio swiftly delivered content in two weeks, meeting <br /> client
          expectations, and managed workflow and communication <br />{" "}
          efficiently and positively.”
        </p>
        <cite className="block mt-4 text-gray-700 font-semibold">
          Md Sabbir, Product Manager at Mircus
        </cite>
      </blockquote>

      {/* Banner Section */}
      <div className="w-[90%] lg:w-[80%] mx-auto h-auto lg:h-[400px] bg-yellow-400 flex flex-col lg:flex-row">
        {/* Left Section: Heading */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-8 lg:p-14">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1714] leading-snug text-center lg:text-left flex flex-col">
            Your Vision <span className="lg:py-2 py-0"> Our Process</span>{" "}
            <span className="lg:py-2 py-0">Stellar Results!</span>
          </div>
        </div>

        {/* Right Section: Description and Button */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-8 lg:py-6 pb-8">
          <div>
            <p className="text-center lg:text-left text-base md:text-lg mb-6 leading-relaxed">
              At Brandio, your vision is our compass. Through our proven
              process, we navigate challenges, crafting stellar results that
              reflect our commitment to excellence!
            </p>
          </div>
          <div>
            <button className="bg-slate-900 text-white px-14 py-3 rounded-3xl hover:bg-slate-800 transition text-sm md:text-base">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandioBanner;
