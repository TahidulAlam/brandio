import BrandDesignSection from "@/components/brandingComponents/brandDesignSection/BrandDesignSection";
import BrandingBanner from "@/components/brandingComponents/brandingBanner/BrandingBanner";
import BrandingSection from "@/components/brandingComponents/brandingSection/BrandingSection";
import DesignSection from "@/components/brandingComponents/designSection/DesignSection";
import Faq from "@/components/brandingComponents/faq/Faq";
import BrandingServiceList from "@/components/brandingServiceList/BrandingServiceList";
import Container from "@/components/container/Container";
import InquryBanner from "@/components/home/inquery-banner/InquryBanner";
import React from "react";

const webDesign = () => {
  const brandData1 = [
    { image: "/assets/image/webdesign/serial1 (1).png" },
    { image: "/assets/image/webdesign/serial1 (2).png" },
    { image: "/assets/image/webdesign/serial1 (3).png" },
    { image: "/assets/image/webdesign/serial1 (4).png" },
  ];
  const brandData2 = [
    { image: "/assets/image/webdesign/serial2 (1).png" },
    { image: "/assets/image/webdesign/serial2 (2).png" },
    { image: "/assets/image/webdesign/serial2 (3).png" },
    { image: "/assets/image/webdesign/serial2 (4).png" },
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
      <Container bgClassName="bg-black">
        <BrandingBanner
          heading="Website Design & Development Services"
          description="Your website should convert, not confuse your visitors./n A perfect blend of good user experience and aesthetic design/n can ignite growth - we will help you get there."
          buttonText="Design my Product Now"
          imageSrc="/assets/image/object 13.png"
          imageAlt="Feedback Background"
          //   onButtonClick={handleButtonClick}
        />
      </Container>
      <div>
        <Container>
          <BrandingSection
            image="/assets/image/image 8.png"
            title="Optimize reach and/n maximize impact. Go/n responsive!"
            description={`You need a website that adapts to any screen size./n No loading delays, no navigation issues, and no/n performance problems. Just results. That’s what we do.`}
            h2Class={"text-black"}
            pClass={"text-black"}
            //   reverse={true}
            buttonText=" Design my Product Now"
          />
        </Container>
      </div>
      <div>
        <DesignSection
          title="Stunning visuals,/n smooth experience -/n we craft your success!"
          description="Boost your online presence with an intuitive/n website that helps you connect to your audience./n Turn browsers into revenue streams."
          buttonText="Begin Your Journey"
          // buttonAction={handleButtonClick}
          mainImageSrc="/assets/image/imageWebdeign.svg"
          mainImageAlt="Mobile Design"
          brandData1={brandData1}
          brandData2={brandData2}
          //   direction="left"
          imageHeight={500}
          imageWidth={500}
          bgClass={"bg-gradient-to-b from-green-700 to-[#101010]"}
          newClass={"mx-2"}
        />
      </div>
      <div>
        <BrandDesignSection
          sectionTitle="Why Web Design & Development/n Matters for Your Business"
          designInfo={designInfo}
          backgroundUrl="/assets/image/Group 20.png"
          customClasses="bg-gray-100"
        />
      </div>
      <div>
        <Container bgClassName="bg-black">
          <BrandingServiceList
            servicesData={servicesData}
            title="Range of Brand Design Services We Offer"
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
          <BrandingSection
            image="/assets/image/image21.png"
            title="Let’s create a web/n masterpiece together!"
            description={`We craft pixels with empathy. Great design is more than/n 
just aesthetics. It's about creating an emotional connection/n 
with your visitors.`}
            reverse={true}
            buttonText="Claim Your Website"
          />
        </Container>
      </div>
      <div>
        <Container bgClassName="bg-black">
          <BrandingSection
            image="/assets/image/image22.png"
            title="Digital Product Design & Consulting Services"
            description={`Your brand's design speaks before you do. 80% of 
      consumers recognize a brand just by its design & color!
      We use color psychology to design your brand to be
      memorable.`}
            // reverse={true}
            bgClass={"bg-black"}
            h2Class={"text-white"}
            pClass={"text-white"}
            buttonText=" Design my Product Now"
          />
        </Container>
      </div>
      <div>
        <Faq
          faqs={faqsData}
          title="FAQs about our web design services"
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

export default webDesign;
