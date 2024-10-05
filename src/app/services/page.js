import BrandingComponent from "@/components/servicesComponent/brandingComponent/BrandingComponent";
import ServicesBanner from "@/components/servicesComponent/servicesBanner/ServicesBanner";
import React from "react";

const services = () => {
  return (
    <div>
      <div className="bg-black">
        <ServicesBanner />
      </div>
      <div>
        <BrandingComponent />
      </div>
    </div>
  );
};

export default services;
