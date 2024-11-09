"use client";
import React, { useState } from "react";
import AllServiceCard from "./AllServiceCard";

const Allservice = () => {
  const [isOpen, setIsOpen] = useState(null);

  const dataArr = [
    {
      title: "Branding",
      image: "/assets/image/Service/1.png",
      description:
        "Effective branding isn't just about logos and colors; it's about creating a lasting impression that distinguishes your business. At Brandio, we craft unique brand identities that resonate with your audience,enhancing recognition and trust.",
    },
    {
      title: "UI/UX Design",
      image: "/assets/image/Service/2.png",
      description:
        "Exceptional UX isn't just design; it's a journey that builds trust, forges loyalty, and makes your brand unforgettable and this is our commitment to you from our UX design agency.",
    },
    {
      title: "Web Development",
      image: "/assets/image/Service/3.png",
      description:
        " At Brandio, we specialize in creating stunning, user-friendly websites that drive results. Our web design and development services combine creativity with cutting-edge technology to build sites that not only look great but also deliver exceptional user experiences. From responsive designs to custom functionality, we ensure your website reflects your brand and engages your audience effectively.",
    },
    {
      title: "Mobile Application",
      image: "/assets/image/Service/4.png",
      description:
        "We create intuitive, high-performing apps that deliver seamless experiences across iOS and Android platforms. From conceptualization to launch, our team handles everything – UI/UX design, coding, integration, and testing – ensuring your app is user-friendly, secure, and scalable.",
    },
    {
      title: "Monthly Design",
      image: "/assets/image/Service/6.png",
      description:
        " At Brandio, our digital marketing services are crafted to elevate your brand’s online presence and drive meaningful engagement. We combine data-driven strategies with creative insight to reach your target audience effectively across channels.",
    },
    {
      title: "Digital Marketing",
      image: "/assets/image/Service/5.png",
      description:
        "Brandio’s monthly design service provides your business with consistent, high-quality creative solutions to meet all your ongoing design needs. From social media graphics and website banners to print materials and branding assets, our team delivers fresh, on-brand visuals tailored to your requirements every month.",
    },
    {
      title: "CMS Website",
      image: "/assets/image/Service/7.png",
      description:
        "Brandio’s CMS website development service empowers businesses with fully customized, easy-to-manage websites that put control in your hands. We build CMS websites using popular platforms like WordPress, Shopify, and Webflow, designed to align with your brand and support seamless content updates.",
    },
  ];

  const handleMouseEnter = (idx) => {
    setIsOpen(idx);
  };

  const handleMouseLeave = () => {
    setIsOpen(null);
  };

  return (
    <div className="w-full max-w-[90%] xl:max-w-[80%] -mt-20 lg:pt-36 pt-32  mx-auto flex flex-col lg:flex-row rounded-lg bg-[#000000] p-6">
      {/* Left Side - Header */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-6 pb-10 lg:pb-0">
        <h1 className="text-white font-bold text-xl lg:text-xl">
          Our Services
        </h1>
      </div>

      {/* Right Side - Services List */}
      <div className="w-full lg:w-1/2 space-y-4">
        {dataArr.map((PerAccordion, idx) => (
          <AllServiceCard
            key={idx}
            idx={idx}
            title={PerAccordion.title}
            image={PerAccordion.image}
            description={PerAccordion.description}
            isOpen={isOpen}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default Allservice;
