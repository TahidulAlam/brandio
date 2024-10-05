import AboutBanner from "@/components/about/about-banner/AboutBanner";
import InnovationBanner from "@/components/about/Innovation-banner/InnovationBanner";
import PortfolioBanner from "@/components/about/portfolio-banner/PortfolioBanner";
import WorkSection from "@/components/about/workSection/WorkSection";
import InquryBanner from "@/components/home/inquery-banner/InquryBanner";
import React from "react";

const about = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <h1 className="font-bold text-6xl">Fueling Minds</h1>
        <h1 className="font-bold text-6xl"> - Inspiring Designs..</h1>
      </div>
      <div>
        <AboutBanner />
      </div>
      <div>
        <PortfolioBanner />
      </div>
      <div>
        <InnovationBanner />
      </div>
      <div>
        <WorkSection />
      </div>
      <div>
        <InquryBanner />
      </div>
    </div>
  );
};

export default about;
