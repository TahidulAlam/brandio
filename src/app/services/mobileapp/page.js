import BrandDesignSection from "@/components/brandingComponents/brandDesignSection/BrandDesignSection";
import BrandingBanner from "@/components/brandingComponents/brandingBanner/BrandingBanner";
import BrandingSection from "@/components/brandingComponents/brandingSection/BrandingSection";
import DesignSection from "@/components/brandingComponents/designSection/DesignSection";
import Faq from "@/components/brandingComponents/faq/Faq";
import BrandingServiceList from "@/components/brandingServiceList/BrandingServiceList";
import Container from "@/components/container/Container";
import InquryBanner from "@/components/home/inquery-banner/InquryBanner";
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
} from "@/data/mobileAppData";
const mobileapp = () => {
  return (
    <div>
      <Container bgClassName="bg-black">
        <BrandingBanner
          heading={brandingBannerData?.heading}
          description={brandingBannerData?.description}
          buttonText={brandingBannerData?.buttonText}
          imageSrc={brandingBannerData?.imageSrc}
          imageAlt="Feedback Background"
          //   onButtonClick={handleButtonClick}
        />
      </Container>
      <div>
        <Container>
          <BrandingSection
            // image="/assets/image/image 8.png"
            image={brandingSectionData1?.image}
            title={brandingSectionData1?.title}
            description={brandingSectionData1?.description}
            h2Class={"text-black"}
            pClass={"text-black"}
            //   reverse={true}
            buttonText={brandingSectionData1?.buttonText}
          />
        </Container>
      </div>
      <div>
        <DesignSection
          title={designSectionData?.title}
          description={designSectionData?.description}
          buttonText={designSectionData?.buttonText}
          // buttonAction={handleButtonClick}
          mainImageSrc={designSectionData?.mainImageSrc}
          mainImageAlt="Mobile Design"
          brandData1={brandData1}
          brandData2={brandData2}
          //   direction="left"
          imageHeight={designSectionData?.imageHeight}
          imageWidth={designSectionData?.imageWidth}
          bgClass={"bg-gradient-to-b from-[#431010] to-[#291E11]"}
          newClass={designSectionData?.newClass}
        />
      </div>
      <div>
        <BrandDesignSection
          sectionTitle="Why Mobile Application Matters/n for Your Business"
          designInfo={designInfo}
          backgroundUrl="/assets/image/Group 20.png"
          customClasses="bg-gray-100"
        />
      </div>
      <div>
        <Container bgClassName="bg-black">
          <BrandingServiceList
            servicesData={servicesData}
            title={BrandingServiceListData?.title}
            backgroundImage={BrandingServiceListData?.backgroundImage}
            // backgroundPosition="right"
            textColor={BrandingServiceListData?.textColor}
            highlightColor={BrandingServiceListData?.highlightColor}
            iconColor={BrandingServiceListData?.iconColor}
          />
        </Container>
      </div>
      <div>
        <Container>
          <BrandingSection
            image={brandingSectionData1?.image}
            title={brandingSectionData1?.title}
            description={brandingSectionData1?.description}
            reverse={true}
            buttonText={brandingSectionData1?.buttonText}
          />
        </Container>
      </div>
      <div>
        <Container bgClassName="bg-black">
          <BrandingSection
            image={brandingSectionData2?.image}
            title={brandingSectionData2?.title}
            description={brandingSectionData2?.description}
            // reverse={true}
            bgClass={"bg-black"}
            h2Class={"text-white"}
            pClass={"text-white"}
            buttonText={brandingSectionData2?.buttonText}
          />
        </Container>
      </div>
      <div>
        <Faq
          faqs={faqsData}
          title="FAQs about our App design services"
          sectionClassName="text-black"
          questionClassName="text-black" // Optional customization
          answerClassName="transition-all" // Optional customization
        />
      </div>
      <div>
        <InquryBanner />
      </div>
    </div>
  );
};

export default mobileapp;
