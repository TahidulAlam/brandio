"use client";
import React, { useState } from "react";
import AllServiceCard from "./AllServiceCard";

const Allservice = () => {
  const [isOpen, setIsOpen] = useState(null);

  const dataArr = [
    {
      title: "Branding",
      image: "/assets/image/service/1.png",
      description:
        "Effective branding isn't just about logos and colors. it's about creating a lasting impression that distinguishes your business. At Musemind, we craft unique brand identities that resonate with your audience, enhancing recognition and trust.",
    },
    {
      title: "UI/UX Design",
      image: "/assets/image/service/1.png",
      description:
        "Exceptional UX isn't just design; it's a journey that builds trust, forges loyalty, and makes your brand unforgettable and this is our commitment to you from our UX design agency.",
    },
    {
      title: "Web Design & Development",
      image: "/assets/image/service/1.png",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Mobile Application",
      image: "/assets/image/service/1.png",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
    {
      title: "Web Design",
      image: "/assets/image/service/2.png",
      description:
        "Creating visually appealing and user-friendly web designs tailored to your brand's needs.",
    },
    {
      title: "Mobile App",
      image: "/assets/image/service/3.png",
      description:
        "Developing engaging and functional mobile applications for both iOS and Android platforms.",
    },
    {
      title: "Monthly Design",
      image: "/assets/image/service/4.png",
      description:
        "Providing monthly design updates and maintenance to keep your digital presence fresh and relevant.",
    },
    {
      title: "Digital Marketing",
      image: "/assets/image/service/5.png",
      description:
        "Implementing effective digital marketing strategies to boost your online presence and drive growth.",
    },
    {
      title: "CMS Website",
      image: "/assets/image/service/6.png",
      description:
        "Building and maintaining content management system (CMS) websites for easy content updates and management.",
    },
  ];

  const handleMouseEnter = (idx) => {
    setIsOpen(idx);
  };

  const handleMouseLeave = () => {
    setIsOpen(null);
  };

  return (
    <div className="w-full max-w-[90%] xl:max-w-[80%] -mt-20 pt-36 mx-auto flex flex-col lg:flex-row rounded-lg bg-[#000000] p-6">
      {/* Left Side - Header */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <h1 className="text-white font-bold text-3xl lg:text-4xl">
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
