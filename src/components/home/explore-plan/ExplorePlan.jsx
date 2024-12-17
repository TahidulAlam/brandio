import React from "react";
import Image from "next/image";
import Button from "../../button/Button";
import TextWithLineBreaks from "@/components/TextWithLineBreaks";
import BrandingSection from "@/components/brandingComponents/brandingSection/BrandingSection";
import Container from "@/components/container/Container";

const ExplorePlan = () => {
  return (
    // <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-2 lg:p-20 w-[95%] lg:w-[80%] mx-auto bg-black py-10">
    //   <div className="w-full lg:w-1/2">
    //     <div className="flex w-full">
    //       <img
    //         src="/assets/image/Rectangle 1463.png"
    //         alt="Feedback Background"
    //         width={500}
    //         height={500}
    //         className="w-full z-0"
    //       />
    //     </div>
    //   </div>
    //   <div className="w-full lg:w-1/2 flex flex-col justify-start text-white lg:text-left lg:ml-5">
    //     <div className="text-2xl md:text-3xl lg:text-5xl font-bold py-2 text-yellow-400">
    //       <TextWithLineBreaks text={"Ensure your Brand Guideline"} />
    //     </div>
    //     <TextWithLineBreaks text="Explore your brand with our monthly design subscription service./n Our experienced and creative designers are dedicated to bringing/n your vision to life. Choose from our flexible pricing plans that suits/n your needs." />
    //     {/* <p className="text-sm lg:text-base text-start lg:pt-5 pt-0">
    //       You can create full professional brand guideline design for your
    //       company, which ensures your brand value is high, ensure clear &
    //       effective business growth.
    //     </p> */}
    //     <div className="mt-6 lg:mt-10">
    //       <Button
    //         children={"Contact us"}
    //         className="px-6 lg:px-10 py-2 rounded-2xl  text-sm"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="py-10 lg:py-0">
      <Container>
        <BrandingSection
          image="/assets/image/Rectangle 1463.png"
          title={"Ensure your Brand Guideline"}
          description={
            "Explore your brand with our monthly design subscription service. Our experienced and creative designers are dedicated to bringing your vision to life. Choose from our flexible pricing plans that suits your needs."
          }
          buttonText="Explore Plan"
          h2Class="text-yellow-400"
          pClass="text-white"
        />
      </Container>
    </div>
  );
};

export default ExplorePlan;
