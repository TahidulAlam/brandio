import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const PortfolioBanner = () => {
  return (
    <div className="lg:h-[600px] h-[750px] bg-black">
      <div className="w-[90%] lg:ml-auto mx-auto flex flex-col lg:flex-row items-center justify-center pt-10">
        <div className=" w-2/3 flex justify-center items-center">
          <div className="flex flex-col text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 mt-10">
                <span className="text-white">
                  Brandio Design Arena <br />{" "}
                </span>
                <span className="text-yellow-500 py-2">
                  Igniting Excellence Through <br /> Dedication & Innovation.
                </span>
              </h2>
            </div>
            <div>
              <p className="text-white pb-5 text-sm sm:text-base lg:text-lg">
                At Brandio, our journey is fired by passion—our core spark. The
                secret to our innovation and success? It's the fusion of
                relentless dedication, a heart that beats for design, and a
                drive to innovate! We specialize in crafting compelling brand
                identities and design solutions that resonate with audiences,
                leaving a lasting impression. Our passion lies in helping
                businesses define and express their unique essence through
                strategic branding.
              </p>
            </div>
            <div>
              <Button
                children={"View Our Portfolio"}
                className={"rounded-lg px-5 py-2"}
              />
            </div>
          </div>
        </div>
        <div className="lg:ml-14 ml-0 lg:block hidden">
          <Image
            src="/assets/image/object.png"
            alt="Feedback Background"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
