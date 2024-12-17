import React from "react";
import LogoMarquee from "./LogoMarquee";

const BrandingPartner = ({ mainTitle, subtitle }) => {
  const brandDatas1 = [
    { image: "/assets/image/Branding Partner/image s1 (1).webp" },
    { image: "/assets/image/Branding Partner/image s1 (1).png" },
    { image: "/assets/image/Branding Partner/image s1 (2).png" },
    { image: "/assets/image/Branding Partner/image s1 (3).png" },
    { image: "/assets/image/Branding Partner/image s1 (4).png" },
    { image: "/assets/image/Branding Partner/image s1 (5).png" },
    { image: "/assets/image/Branding Partner/image s1 (6).png" },
    { image: "/assets/image/Branding Partner/image s1 (7).png" },
    { image: "/assets/image/Branding Partner/image s1 (8).png" },
    { image: "/assets/image/Branding Partner/image s1 (9).png" },
    { image: "/assets/image/Branding Partner/image s1 (10).png" },
    { image: "/assets/image/Branding Partner/image s1 (11).png" },
    { image: "/assets/image/Branding Partner/image s1 (12).png" },
    { image: "/assets/image/Branding Partner/image s1 (13).png" },
    { image: "/assets/image/Branding Partner/image s1 (14).png" },
    { image: "/assets/image/Branding Partner/image s1 (15).png" },
  ];
  const brandDatas2 = [
    { image: "/assets/image/Branding Partner/image s2 (1).webp" },
    { image: "/assets/image/Branding Partner/image s2 (1).png" },
    { image: "/assets/image/Branding Partner/image s2 (2).png" },
    { image: "/assets/image/Branding Partner/image s2 (2).webp" },
    { image: "/assets/image/Branding Partner/image s2 (3).png" },
    { image: "/assets/image/Branding Partner/image s2 (4).png" },
    { image: "/assets/image/Branding Partner/image s2 (5).png" },
    { image: "/assets/image/Branding Partner/image s2 (6).png" },
    { image: "/assets/image/Branding Partner/image s2 (7).png" },
    { image: "/assets/image/Branding Partner/image s2 (8).png" },
    { image: "/assets/image/Branding Partner/image s2 (9).png" },
    { image: "/assets/image/Branding Partner/image s2 (10).png" },
    { image: "/assets/image/Branding Partner/image s2 (11).png" },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-[90%] mx-auto my-12 ">
        <h1 className="font-bold text-3xl lg:pb-2 text-center">{mainTitle}</h1>
        <h1 className="text-center">{subtitle}</h1>
      </div>
      <div className="my-10 flex flex-col gap-5">
        <div>
          <LogoMarquee
            brandData={brandDatas1}
            imageHeight={60}
            imageWidth={80}
            direction={"left"}
            layout={"fixed"}
            newClass={"lg:mx-10 mx-5"}
          />
        </div>
        <div>
          <LogoMarquee
            brandData={brandDatas2}
            imageHeight={60}
            imageWidth={80}
            direction={"right"}
            layout={"fixed"}
            newClass={"lg:mx-10 mx-5"}
          />
        </div>
      </div>
    </div>
  );
};

export default BrandingPartner;
