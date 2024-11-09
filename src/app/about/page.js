import AboutBanner from "@/components/about/about-banner/AboutBanner";
import InnovationBanner from "@/components/about/Innovation-banner/InnovationBanner";
import PortfolioBanner from "@/components/about/portfolio-banner/PortfolioBanner";
import WorkSection from "@/components/about/workSection/WorkSection";
import Container from "@/components/container/Container";
import InquryBanner from "@/components/home/inquery-banner/InquryBanner";
import React from "react";

const about = () => {
  return (
    <>
      <Container>
        <div>
          <h1 className="font-[1000] lg:text-8xl text-4xl lg:py-5 py-1">
            Fueling Minds
          </h1>
          <h1 className="font-[1000] lg:text-8xl text-4xl lg:py-5 py-1">
            {" "}
            - <span className="text-slate-500">Inspiring Designs..</span>
          </h1>
        </div>
      </Container>
      <div className="">
        <AboutBanner />
      </div>
      <div className="">
        <PortfolioBanner />
      </div>
      <div className="">
        <InnovationBanner />
      </div>
      <div className="">
        <WorkSection />
      </div>
      <div className="">
        <InquryBanner />
      </div>
    </>
  );
};

export default about;
