import BrandDesignSection from "@/components/brandingComponents/brandDesignSection/BrandDesignSection";
import BrandingBanner from "@/components/brandingComponents/brandingBanner/BrandingBanner";
import BrandingSection from "@/components/brandingComponents/brandingSection/BrandingSection";
import BrandingSectionTow from "@/components/brandingComponents/brandingSectionTow/BrandingSectionTow";
import CaseStudySection from "@/components/brandingComponents/caseStudySection/CaseStudySection";
import Faq from "@/components/brandingComponents/faq/Faq";
import TailoredBrandDesign from "@/components/brandingComponents/tailoredBrandDesign/TailoredBrandDesign";
import WhyChooseSection from "@/components/brandingComponents/whyChooseBrandio/WhyChooseBrandio";

import BrandingServiceList from "@/components/brandingServiceList/BrandingServiceList";
import Container from "@/components/container/Container";
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
      </div>
      {/* <div className="lg:w-[83%] w-[90%] mx-auto">
        <BrandingSection
          image="/assets/image/image 8.png"
          title="Design Speaks Louder Than Words"
          description={`Your brand's design speaks before you do. 80% of 
          consumers recognize a brand just by its design & color!
          We use color psychology to design your brand to be
          memorable.`}
          // bgClass={"bg-black"}
          //   reverse={true}
          buttonText=" Design my Product Now"
        />
      </div> */}
      <Container bgClassName="bg-white">
        <BrandingSection
          image="/assets/image/image 8.png"
          title="Design Speaks Louder/n Than Words"
          description={`Your brand's design speaks before you do. 80% of 
          consumers recognize a brand just by its design & color!
          We use color psychology to design your brand to be
          memorable.`}
          classNameP="mb-4"
          // bgClass={"bg-black"}
          //   reverse={true}
          buttonText=" Design my Product Now"
        />
      </Container>
      {/* <div className="bg-black">
        <div className="lg:w-[83%] w-[90%] mx-auto">
          <BrandingSectionTow />
        </div>
      </div> */}
      <Container bgClassName={"bg-black"}>
        <BrandingSectionTow />
      </Container>

      {/* <div className="lg:w-[83%] w-[90%] mx-auto">
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
      </div> */}
      <Container>
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
      </Container>
      <div>
        <Container bgClassName="bg-black">
          <CaseStudySection />
        </Container>
      </div>
      <div>
        <BrandDesignSection
          sectionTitle="Why Brand Design Matters for/n Your Business"
          designInfo={designInfo}
          backgroundUrl="/assets/image/Group 20.png"
          customClasses="bg-gray-100"
          classNameP="mb-4"
        />
      </div>
      <div>
        <Container bgClassName="bg-black">
          <BrandingServiceList
            servicesData={servicesData}
            title="Range of Brand Design Services/n We Offer"
            backgroundImage="/assets/image/object1.png"
            backgroundPosition="right"
            textColor="text-white"
            highlightColor="text-yellow-500"
            iconColor="bg-yellow-500 text-black"
          />
        </Container>
      </div>
      <div>
        <Container>
          <WhyChooseSection
            heading="Let’s Ditch the Generic!/n Why Choose Brandio?"
            description="At Brandio, we take a detail-oriented approach, conducting in-depth research and analysis to understand your industry, target audience, and competitors, ensuring that your brand stands out in a crowded market."
            features={featuresList}
            buttonText="Get Started with Brandio"
            imageUrl="/assets/image/image09.png"
            altText="Brandio Sample Design"
            // onButtonClick={() => alert("Button clicked!")}
          />
        </Container>
      </div>
      <Container bgClassName="bg-black">
        <TailoredBrandDesign />
      </Container>

      <div>
        <ClientFeedBack />
      </div>
      <div>
        <Container bgClassName="bg-white">
          <Faq
            faqs={faqsData}
            title="FAQs about our Brand design services"
            sectionClassName="text-black"
            questionClassName="text-black" // Optional customization
            answerClassName="transition-all" // Optional customization
          />
        </Container>
      </div>
      <div>
        <InquryBanner />
      </div>
    </div>
  );
};

export default branding;
