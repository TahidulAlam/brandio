import Button from "@/components/button/Button";
import React from "react";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudySection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 py-20">
      <CaseStudyCard
        image="/assets/image/gif-22.png"
        title="Brand identity design for Luxe Aura Fashion"
        description="Brand design services help create your brand's visual identity. These services include Naming, Research, designing logos, choosing colors and fonts, and creating graphics representing your brand. This helps make your brand recognizable and memorable to customers."
        buttonLabel="View Full Case Study"
      />
      <CaseStudyCard
        image="/assets/image/gif-23.png"
        title="Brand identity design for Luzo Platform"
        description="Luzo is a dynamic construction company that stands at the forefront of innovation and quality in the building industry. With a commitment to excellence, Luzo delivers projects that are not only structurally sound but also aesthetically pleasing and environmentally sustainable."
        buttonLabel="View Full Case Study"
      />
    </section>
  );
};

export default CaseStudySection;
