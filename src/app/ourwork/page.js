import Container from "@/components/container/Container";
import InquryBanner from "@/components/home/inquery-banner/InquryBanner";
import WorkBanner from "@/components/ourWorkComponents/workBanner/WorkBanner";
import WorkImage from "@/components/ourWorkComponents/workImage/WorkImage";
import React from "react";

const ourwork = () => {
  return (
    <div className="bg-black">
      <Container>
        <WorkBanner />
      </Container>
      <WorkImage />
      <InquryBanner />
    </div>
  );
};

export default ourwork;
