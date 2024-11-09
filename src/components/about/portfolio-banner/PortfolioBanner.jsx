import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const PortfolioBanner = () => {
  return (
    <div className="lg:h-[700px] h-[850px] bg-black lg:py-10">
      <div className="lg:w-[90%] w-[95%] ml-auto flex flex-col lg:flex-row items-center justify-center py-10">
        <div className=" lg:w-2/3 w-[90%] mx-auto flex justify-center items-center">
          <div className="flex flex-col text-center lg:text-left gap-2">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 mt-10">
                <h2 className="text-white py-2 ">Brandio Design Arena</h2>
                <h2 className="text-yellow-500 py-2 font-extrabold">
                  Igniting Excellence Through{" "}
                </h2>
                <h2 className="pt-2 text-yellow-500 font-extrabold">
                  Dedication & Innovation.
                </h2>
              </div>
            </div>
            <div>
              <p className="text-white pb-5 text-sm sm:text-base lg:text-lg">
                At Brandio, our journey is fired by passion—our core spark. The
                secret to our innovation and success? It's the fusion of
                relentless dedication, a heart that beats for design, and a
                drive to innovate!
                <br /> <br />
                We specialize in crafting compelling brand identities and design
                solutions that resonate with audiences, leaving a lasting
                impression. Our passion lies in helping businesses define and
                express their unique essence through strategic branding.
              </p>
            </div>
            <div className="lg:mt-2">
              <Button
                children={"View Our Portfolio"}
                className={"rounded-lg px-5 py-2"}
              />
            </div>
          </div>
        </div>
        <div className=" overflow-auto lg:ml-80 ml-0 lg:block hidden">
          <Image
            src="/assets/image/object.png"
            alt="Feedback Background"
            width={550}
            height={550}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
