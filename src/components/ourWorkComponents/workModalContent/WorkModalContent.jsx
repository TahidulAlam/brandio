import LogoMarquee from "@/components/home/branding-partner/LogoMarquee";
import React, { useEffect, useState } from "react";

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
  const [imageSize, setImageSize] = useState({ width: 200, height: 200 });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setImageSize({ width: 150, height: 150 });
      } else if (screenWidth < 1024) {
        setImageSize({ width: 150, height: 150 });
      } else {
        setImageSize({ width: 200, height: 200 });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial size
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <LogoMarquee
        brandData={brandData}
        direction={"left"}
        newClass={"mx-2"}
        imageHeight={imageSize.height}
        imageWidth={imageSize.width}
        speed={10}
      />

      <LogoMarquee
        brandData={brandData}
        direction={"right"}
        newClass={"mx-2"}
        imageHeight={imageSize.height}
        imageWidth={imageSize.width}
        speed={10}
      />
      <LogoMarquee
        brandData={brandData}
        direction={"left"}
        newClass={"mx-2"}
        imageHeight={imageSize.height}
        imageWidth={imageSize.width}
        speed={10}
      />
    </div>
  );
};

export default WorkModalContent;
