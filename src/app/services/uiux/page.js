import BrandDesignSection from "@/components/brandingComponents/brandDesignSection/BrandDesignSection";
import BrandingBanner from "@/components/brandingComponents/brandingBanner/BrandingBanner";
import BrandingSection from "@/components/brandingComponents/brandingSection/BrandingSection";
import DesignSection from "@/components/brandingComponents/designSection/DesignSection";
import Faq from "@/components/brandingComponents/faq/Faq";
import BrandingServiceList from "@/components/brandingServiceList/BrandingServiceList";
import InquryBanner from "@/components/home/inquery-banner/InquryBanner";
import React from "react";

const uiux = () => {
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
  const designInfo = [
    {
      title: "Get Noticed Quickly",
      description:
        "Your brand can stand out from the competition with our one-of-a-kind visual identity. Customers will remember you, not the generic brand next door.",
    },
    {
      title: "Attract your Target Audience",
      description:
        "Your brand design attracts customers aligned with your values and products, so no chasing the wrong crowd anymore.",
    },
    {
      title: "Build Trust & Credibility",
      description:
        "Professional design promotes authority and trustworthiness, and the customer will see you as a leader in the industry.",
    },
    {
      title: "Create Lasting Impact",
      description:
        "Every interaction with your brand, from website to packaging, tells a powerful story that leaves a lasting impression.",
    },
  ];
  const servicesData = [
    {
      category: "Brand Identity Design",
      details: [
        "Logo Design",
        "Color Palette",
        "Typography",
        "Brand Guidelines",
        "Imagery",
        "Iconography",
        "Slogan",
        "Brand Voice",
      ],
      isOpen: true,
    },
    {
      category: "Brand Strategy",
      details: [
        "Market Research",
        "Brand Positioning",
        "Target Audience Definition",
        "Competitive Analysis",
        "Value Proposition",
      ],
      isOpen: false,
    },
    {
      category: "Corporate Identity",
      details: [
        "Business Card Design",
        "Letterhead Design",
        "Email Signature Design",
        "Corporate Brochure",
        "Presentation Templates",
      ],
      isOpen: false,
    },
    {
      category: "Promotional Reels",
      details: [
        "Brand Intro Videos",
        "Product Demo Videos",
        "Client Testimonials",
        "Event Coverage",
        "Social Media Reels",
      ],
      isOpen: false,
    },
    {
      category: "Motion Graphics",
      details: [
        "Animated Logos",
        "Explainer Videos",
        "Infographics",
        "Promotional Animations",
        "3D Motion Design",
      ],
      isOpen: false,
    },
    {
      category: "Graphics Design",
      details: [
        "Website Banners",
        "Social Media Graphics",
        "Infographics Design",
        "Print Media Design",
        "Advertisement Design",
      ],
      isOpen: false,
    },
  ];
  const faqsData = [
    {
      question: "What is Brand Design?",
      answer:
        "Brand design is creating visuals like logos, colors, and imagery that represent a company's identity and values. It aims to build a memorable, cohesive brand that resonates with the target audience, establishes loyalty, and drives success.",
    },
    {
      question: "Why is Brand Identity needed for business?",
      answer:
        "Brand identity is essential for businesses to differentiate themselves in the marketplace, build trust with customers, and communicate the unique value they offer.",
    },
    {
      question: "How Much Does Your Brand Design Service Cost?",
      answer:
        "Our brand design services are tailored to each client. Please contact us for a detailed quote based on your specific needs.",
    },
    {
      question: "Do You Offer A Branding Package For Small Businesses?",
      answer:
        "Yes, we offer specially crafted branding packages that cater to the needs and budget of small businesses and startups.",
    },
    {
      question: "Will The Brand Identity Designs You Provide Be Unique?",
      answer:
        "Absolutely! We create unique and custom brand identities that reflect your business values and stand out in the industry.",
    },
    {
      question: "How much time do you take for Design?",
      answer:
        "The time for brand design varies depending on the scope of the project, but typically we aim to complete it within 2-4 weeks.",
    },
  ];
  return (
    <div>
      <div className="bg-black">
        <BrandingBanner
          heading="User Experience Design Services"
          description="Your brand, your customers, your unique design challenges. We tailor UI/UX solutions to solve them all quickly and efficiently."
          buttonText="Design my Product Now"
          imageSrc="/assets/image/image 7.png"
          imageAlt="Feedback Background"
          //   onButtonClick={handleButtonClick}
        />
      </div>
      <div>
        <BrandingSection
          image="/assets/image/image 8.png"
          title="Digital Product Design & Consulting Services"
          description={`Your brand's design speaks before you do. 80% of 
          consumers recognize a brand just by its design & color!
          We use color psychology to design your brand to be
          memorable.`}
          //   reverse={true}
          buttonText=" Design my Product Now"
        />
      </div>
      <div>
        <DesignSection
          title="Connect with your audience through intuitive design!"
          description="We design intuitive UI/UX solutions that connect you with your audience. Whether it’s a website, an app, or a product, we make it easy and engaging."
          buttonText="Begin Your Journey"
          // buttonAction={handleButtonClick}
          mainImageSrc="/assets/image/image 10.png"
          mainImageAlt="Mobile Design"
          brandData={brandData}
          //   direction="left"
          imageHeight={350}
          imageWidth={350}
          bgClass={"bg-gradient-to-b from-red-700 to-[#101010]"}
          newClass={"mx-2"}
        />
      </div>
      <div>
        <BrandDesignSection
          sectionTitle="Why Brand Design Matters for Your Business"
          designInfo={designInfo}
          backgroundUrl="/assets/image/Group 20.png"
          customClasses="bg-gray-100"
        />
      </div>
      <div>
        <BrandingServiceList
          servicesData={servicesData}
          title="Range of Brand Design Services We Offer"
          backgroundImage="/assets/image/object1.png"
          backgroundPosition="right"
          textColor="text-white"
          highlightColor="text-yellow-500"
          iconColor="bg-yellow-500 text-black"
        />
      </div>
      <div>
        <BrandingSection
          image="/assets/image/image 8.png"
          title="Digital Product Design & Consulting Services"
          description={`Your brand's design speaks before you do. 80% of 
          consumers recognize a brand just by its design & color!
          We use color psychology to design your brand to be
          memorable.`}
          //   reverse={true}
          buttonText=" Design my Product Now"
        />
      </div>
      <div>
        <BrandingSection
          image="/assets/image/image 8.png"
          title="Digital Product Design & Consulting Services"
          description={`Your brand's design speaks before you do. 80% of 
          consumers recognize a brand just by its design & color!
          We use color psychology to design your brand to be
          memorable.`}
          reverse={true}
          bgClass={"bg-black"}
          h2Class={"text-white"}
          pClass={"text-white"}
          buttonText=" Design my Product Now"
        />
      </div>
      <div>
        <Faq
          faqs={faqsData}
          title="FAQs about our Brand design services"
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

export default uiux;
