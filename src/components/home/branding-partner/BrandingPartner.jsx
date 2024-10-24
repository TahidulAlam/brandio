import React from "react";
import LogoMarquee from "./LogoMarquee";

const BrandingPartner = () => {
  const brandData = [
    { image: "/assets/image/Branding Partner/1.png" },
    { image: "/assets/image/Branding Partner/2.png" },
    { image: "/assets/image/Branding Partner/3.png" },
    { image: "/assets/image/Branding Partner/4.png" },
    { image: "/assets/image/Branding Partner/5.png" },
    { image: "/assets/image/Branding Partner/6.png" },
    { image: "/assets/image/Branding Partner/7.png" },
    { image: "/assets/image/Branding Partner/8.png" },
    { image: "/assets/image/Branding Partner/9.png" },
    { image: "/assets/image/Branding Partner/10.png" },
    { image: "/assets/image/Branding Partner/11.png" },
    { image: "/assets/image/Branding Partner/12.png" },
    { image: "/assets/image/Branding Partner/13.png" },
    { image: "/assets/image/Branding Partner/14.png" },
    { image: "/assets/image/Branding Partner/15.png" },
    { image: "/assets/image/Branding Partner/16.png" },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-[90%] mx-auto">
        <h1 className="font-bold text-3xl">100+ Branding Partner</h1>
        <h1 className="text-center">
          Brands are the cultural connection between companies and their
          communities.
        </h1>
      </div>
      <div className="my-10">
        <LogoMarquee
          brandData={brandData}
          imageHeight={50}
          imageWidth={80}
          direction={"left"}
          newClass={"lg:mx-10 mx-5"}
        />
        <LogoMarquee
          brandData={brandData}
          imageHeight={50}
          imageWidth={80}
          direction={"right"}
          newClass={"lg:mx-10 mx-5"}
        />
      </div>
    </div>
  );
};

export default BrandingPartner;
