import React from "react";

const BrandioBanner = () => {
  return (
    <div className="w-full z-10">
      <blockquote className="text-center my-8">
        <p className="text-lg italic">
          “Brandio swiftly delivered content in two weeks, meeting client
          expectations, and managed workflow and communication efficiently and
          positively.”
        </p>
        <cite className="block mt-4 text-gray-700 font-semibold">
          Md Sabbir, Product Manager at Mircus
        </cite>
      </blockquote>

      <div className="w-[80%] mx-auto h-[400px] bg-yellow-400 flex">
        <div className="w-1/2 flex justify-center items-center p-14">
          <h1 className="text-6xl font-bold text-slate-800 leading-tight">
            Your Vision <br /> Our Process <br /> Stellar Results!
          </h1>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center px-8">
          <div>
            <p className="text-start mb-6">
              At Brandio, your vision is our compass. Through our proven
              process, we navigate challenges, crafting stellar results that
              reflect our commitment to excellence!
            </p>
            <button className="bg-slate-900 text-white px-5 py-3 rounded-3xl hover:bg-slate-800 transition">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandioBanner;
