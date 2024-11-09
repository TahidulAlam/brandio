import BrandDesignSection from "@/components/brandingComponents/brandDesignSection/BrandDesignSection";
import BrandingBanner from "@/components/brandingComponents/brandingBanner/BrandingBanner";
import Container from "@/components/container/Container";
import BrandingPartner from "@/components/home/branding-partner/BrandingPartner";
import React from "react";
import {
  brandData1,
  brandData2,
  designInfo,
  servicesData,
  faqsData,
  brandingBannerData,
  brandingSectionData1,
  brandingDesignData,
  designSectionData,
  brandingSectionData2,
  BrandingServiceListData,
  brandingSectionData,
} from "@/data/monthlyDesignData";
import MonthlyDesignBanner from "@/components/servicesComponent/monthlyDesign/MonthlyDesignBanner";
import DesignSection from "@/components/brandingComponents/designSection/DesignSection";
import LogoMarquee from "@/components/home/branding-partner/LogoMarquee";
import TextWithLineBreaks from "@/components/TextWithLineBreaks";
import InquryBanner from "@/components/home/inquery-banner/InquryBanner";
const monthlyDesign = () => {
  return (
    <div>
      <Container bgClassName="bg-black">
        <BrandingBanner
          heading="Brand Design & Consulting Services"
          description="Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable."
          bgClass={"bg-white"}
          buttonText="Design my Product Now"
          imageSrc="/assets/image/dsprsd.png"
          imageAlt="Feedback Background"
          // h2Class="w-2/3"
          // pClass="w-1/3"
          //   onButtonClick={handleButtonClick}
        />
      </Container>
      <div className="lg:mt-20 mt-4 lg:mb-20 mb-0">
        <BrandingPartner
          mainTitle={"Few Brands we Provide Monthly Services"}
          //   subtitle={
          //     " Brands are the cultural connection between companies and their communities."
          //   }
        />
      </div>
      <div>
        <BrandDesignSection
          sectionTitle="Why Brand Design Matters/n for Your Business"
          designInfo={designInfo}
          backgroundUrl="/assets/image/Group 20.png"
          customClasses="bg-gray-100"
        />
      </div>
      <Container bgClassName="bg-black">
        <MonthlyDesignBanner
          buttonText="Design my Product Now"
          imageSrc="/assets/image/monthlyDesign/bannerfull.svg"
          width={500}
          height={300}
        />
      </Container>
      <div>
        <div className="mt-12 md:mt-16 mb-10">
          <Container>
            <div className="text-2xl lg:text-5xl font-semibold lg:text-start text-center mb-8">
              <TextWithLineBreaks
                text={"Glimpse of our client -/n favorite works!"}
              />
            </div>
          </Container>
          <div className="flex flex-col gap-5">
            <LogoMarquee
              brandData={brandData1}
              direction={"left"}
              imageHeight={450}
              imageWidth={450}
              newClass={"mx-2"}
              layout={"responsive"}
            />
            <LogoMarquee
              brandData={brandData2}
              direction={"right"}
              imageHeight={450}
              imageWidth={450}
              newClass={"mx-2"}
              layout={"responsive"}
            />
          </div>
        </div>
      </div>
      <InquryBanner />
    </div>
  );
};

export default monthlyDesign;
