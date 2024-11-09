import InquryBanner from "@/components/home/inquery-banner/InquryBanner";
import BrandingComponent from "@/components/servicesComponent/brandingComponent/BrandingComponent";
import ServicesBanner from "@/components/servicesComponent/servicesBanner/ServicesBanner";
import React from "react";

const services = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="">
          <ServicesBanner />
        </div>
      </div>
      <div className="lg:pb-10 pb-0">
        <BrandingComponent />
      </div>
      <div>
        <InquryBanner />
      </div>
    </div>
  );
};

export default services;
