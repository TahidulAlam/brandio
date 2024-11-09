import React from "react";
import BrandingCardComponent from "./BrandingCardComponent";

const BrandingComponent = () => {
  const services = [
    {
      id: 1,
      title: "Branding",
      description:
        "Our approach connects brand and user experience closely. We specialize in creating and presenting digital brand identities on all platforms. We also provide strategy help and guidelines to keep everything consistent.",
      services: [
        "Brand Identity Design",
        "Brand Strategy",
        "Corporate Identity",
        "Promotional Reels",
        "Motion Graphics",
        "Social Media Banner",
        "3D Product Packaging",
      ],
      image: "/assets/image/service image/1 (7).png",
      cta: {
        text: "Learn More",
        link: "/branding",
      },
    },
    {
      id: 2,
      title: "UX UI Design",
      description:
        "At Brandio, we believe everyone should have a great user experience, whether at work or in their free time. We create memorable products for businesses and consumers, and we provide easy-to-use design systems for smooth product",
      services: [
        "UX UI Design",
        "UX UI Consulting",
        "UX Research",
        "Usability Testing",
        "Wireframe",
        "UI Prototyping",
      ],
      image: "/assets/image/service image/1 (6).png",
      cta: {
        text: "Learn More",
        link: "/branding",
      },
    },
    {
      id: 3,
      title: "Branding",
      description:
        "Our approach connects brand and user experience closely. We specialize in creating and presenting digital brand identities on all platforms. We also provide strategy help and guidelines to keep everything consistent.",
      services: [
        "Brand Identity Design",
        "Brand Strategy",
        "Corporate Identity",
        "Promotional Reels",
        "Motion Graphics",
        "Social Media Banner",
        "3D Product Packaging",
      ],
      image: "/assets/image/service image/1 (1).png",
      cta: {
        text: "Learn More",
        link: "/branding",
      },
    },
    {
      id: 1,
      title: "Branding",
      description:
        "Our approach connects brand and user experience closely. We specialize in creating and presenting digital brand identities on all platforms. We also provide strategy help and guidelines to keep everything consistent.",
      services: [
        "Brand Identity Design",
        "Brand Strategy",
        "Corporate Identity",
        "Promotional Reels",
        "Motion Graphics",
        "Social Media Banner",
        "3D Product Packaging",
      ],
      image: "/assets/image/service image/1 (5).png",
      cta: {
        text: "Learn More",
        link: "/branding",
      },
    },
    {
      id: 1,
      title: "Branding",
      description:
        "Our approach connects brand and user experience closely. We specialize in creating and presenting digital brand identities on all platforms. We also provide strategy help and guidelines to keep everything consistent.",
      services: [
        "Brand Identity Design",
        "Brand Strategy",
        "Corporate Identity",
        "Promotional Reels",
        "Motion Graphics",
        "Social Media Banner",
        "3D Product Packaging",
      ],
      image: "/assets/image/service image/1 (2).png",
      cta: {
        text: "Learn More",
        link: "/branding",
      },
    },
    {
      id: 1,
      title: "Branding",
      description:
        "Our approach connects brand and user experience closely. We specialize in creating and presenting digital brand identities on all platforms. We also provide strategy help and guidelines to keep everything consistent.",
      services: [
        "Brand Identity Design",
        "Brand Strategy",
        "Corporate Identity",
        "Promotional Reels",
        "Motion Graphics",
        "Social Media Banner",
        "3D Product Packaging",
      ],
      image: "/assets/image/service image/1 (3).png",
      cta: {
        text: "Learn More",
        link: "/branding",
      },
    },
    {
      id: 1,
      title: "Branding",
      description:
        "Our approach connects brand and user experience closely. We specialize in creating and presenting digital brand identities on all platforms. We also provide strategy help and guidelines to keep everything consistent.",
      services: [
        "Brand Identity Design",
        "Brand Strategy",
        "Corporate Identity",
        "Promotional Reels",
        "Motion Graphics",
        "Social Media Banner",
        "3D Product Packaging",
      ],
      image: "/assets/image/service image/1 (4).png",
      cta: {
        text: "Learn More",
        link: "/branding",
      },
    },
  ];

  return (
    <div className="container lg:w-[85%] w-[90%] mx-auto px-4">
      {services.map((service, index) => (
        <BrandingCardComponent
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          services={service.services}
          image={service.image}
          link={service.cta.link}
          reverseLayout={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default BrandingComponent;
