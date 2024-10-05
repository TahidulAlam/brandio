import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const PortfolioBanner = () => {
  return (
    <div className="h-[600px] bg-black">
      <div className="w-[90%] ml-auto flex items-center justify-center pt-20">
        <div className=" w-2/3 flex justify-center items-center">
          <div className="flex flex-col">
            <div>
              <h2 className="text-5xl font-bold mb-6 mt-10">
                <span className="text-white">
                  Brandio Design Arena <br />{" "}
                </span>
                <span className="text-yellow-500 py-2">
                  Igniting Excellence Through <br /> Dedication & Innovation.
                </span>
              </h2>
            </div>
            <div>
              <p className="text-white pb-5">
                At Brandio, our journey is fired by passion—our core spark. The
                secret to our innovation and success? It's the fusion of
                relentless dedication, a heart that beats for design, and a
                drive to innovate! we specialize in crafting compelling brand
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
        <div className="ml-14">
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
