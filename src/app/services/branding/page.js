import BrandDesignSection from "@/components/brandingComponents/brandDesignSection/BrandDesignSection";
import BrandingBanner from "@/components/brandingComponents/brandingBanner/BrandingBanner";
import BrandingSection from "@/components/brandingComponents/brandingSection/BrandingSection";
import BrandingSectionTow from "@/components/brandingComponents/brandingSectionTow/BrandingSectionTow";
import CaseStudySection from "@/components/brandingComponents/caseStudySection/CaseStudySection";
import Faq from "@/components/brandingComponents/faq/Faq";
import TailoredBrandDesign from "@/components/brandingComponents/tailoredBrandDesign/TailoredBrandDesign";
import WhyChooseSection from "@/components/brandingComponents/whyChooseBrandio/WhyChooseBrandio";

import BrandingServiceList from "@/components/brandingServiceList/BrandingServiceList";
import ClientFeedBack from "@/components/home/client-feedback/ClientFeedBack";
import InquryBanner from "@/components/home/inquery-banner/InquryBanner";

import React from "react";

const branding = () => {
  const featuresList = [
    "Proven track record with over 100 global brands.",
    "From logos to full comprehensive brand identity.",
    "Expert designers with deep market knowledge.",
    "Innovative approach using the latest technology.",
    "Personalized solutions based on client needs.",
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
          heading="Digital Product Design & Consulting Services"
          description="Our Global digital product design agency helps brands to make top-quality Branding, MVP, Software, Mobile apps, and Websites. We focus on user-friendly designs that look great and work smoothly. Let us help your business grow with our expert digital product solutions."
          bgClass={"bg-white"}
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
          // bgClass={"bg-black"}
          //   reverse={true}
          buttonText=" Design my Product Now"
        />
      </div>
      <div>
        <BrandingSectionTow />
      </div>
      <div className="w-[90%] mx-auto">
        <BrandingSection
          image="/assets/image/image 8.png"
          title="Brand Design Services"
          description={`Brand design services help create your brand's visual identity.
These services include Naming, Research, designing logos,
choosing colors and fonts, and creating graphics representing 
your brand. This helps make your brand recognizable and 
memorable to customers.`}
          reverse={true}
          buttonText="Create your Brand Identity"
        />
      </div>
      <div>
        <CaseStudySection />
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
        <WhyChooseSection
          heading="Let’s Ditch the Generic! Why Choose Brandio?"
          description="At Brandio, we take a detail-oriented approach, conducting in-depth research and analysis to understand your industry, target audience, and competitors, ensuring that your brand stands out in a crowded market."
          features={featuresList}
          buttonText="Get Started with Brandio"
          imageUrl="/assets/image/image09.png"
          altText="Brandio Sample Design"
          // onButtonClick={() => alert("Button clicked!")}
        />
      </div>
      <div className="bg-black">
        <TailoredBrandDesign />
      </div>
      <div>
        <ClientFeedBack />
      </div>
      <div>
        <Faq
          faqs={faqsData}
          title="FAQs about our Brand design services"
          sectionClassName="text-black"
          questionClassName="text-blue-600" // Optional customization
          answerClassName="transition-all" // Optional customization
        />
      </div>
      <div>
        <InquryBanner />
      </div>
    </div>
  );
};

export default branding;