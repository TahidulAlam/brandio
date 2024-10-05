import LogoMarquee from "@/components/home/branding-partner/LogoMarquee";
import React from "react";

const WorkModalContent = () => {
  const brandData = [
    { image: "/assets/image/work image/work (1).png" },
    { image: "/assets/image/work image/work (2).png" },
    { image: "/assets/image/work image/work (3).png" },
    { image: "/assets/image/work image/work (4).png" },
    { image: "/assets/image/work image/work (5).png" },
    { image: "/assets/image/work image/work (6).png" },
    { image: "/assets/image/work image/work (7).png" },
    { image: "/assets/image/work image/work (8).png" },
    { image: "/assets/image/work image/work (9).png" },
    { image: "/assets/image/work image/work (9).png" },
    { image: "/assets/image/work image/work (10).png" },
    { image: "/assets/image/work image/work (11).png" },
  ];
  return (
    <div>
      <LogoMarquee
        brandData={brandData}
        direction={"left"}
        newClass={"mx-2"}
        imageHeight={200}
        imageWidth={200}
      />
      <LogoMarquee
        brandData={brandData}
        direction={"right"}
        newClass={"mx-2"}
        imageHeight={200}
        imageWidth={200}
      />
      <LogoMarquee
        brandData={brandData}
        direction={"left"}
        newClass={"mx-2"}
        imageHeight={200}
        imageWidth={200}
      />
      {/* <LogoMarquee
        brandData={brandData}
        direction={"right"}
        newClass={"mx-2"}
        imageHeight={200}
        imageWidth={200}
      /> */}
    </div>
  );
};

export default WorkModalContent;
