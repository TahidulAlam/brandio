import ExplorePlan from "@/components/home/explore-plan/ExplorePlan";
import InquryBanner from "@/components/home/inquery-banner/InquryBanner";
import Allservice from "@/components/packagesComponents/allservice/Allservice";
import BrandioBanner from "@/components/packagesComponents/brandioBanner/BrandioBanner";
import PackagesBanner from "@/components/packagesComponents/packagesBanner/PackagesBanner";
import PackegesCard from "@/components/packagesComponents/packagesPlan/PackegesCard";
import React from "react";

const packages = () => {
  return (
    <div>
      {/* Top section with default stacking context */}
      <PackagesBanner />
      <PackegesCard />

      {/* Create a new stacking context for this section */}
      <div className="bg-black relative z-10">
        <ExplorePlan />
      </div>

      {/* Ensure BrandioBanner stays on top */}
      <div className="relative z-20">
        <BrandioBanner />
      </div>

      {/* Allservice should stay behind BrandioBanner */}
      <div className="bg-black relative z-5">
        <Allservice />
      </div>
      <div>
        <InquryBanner />
      </div>
    </div>
  );
};

export default packages;
