"use client";
import React from "react";
import WorkCard from "../workCard/WorkCard";

const WorkImage = () => {
  // const projects = [
  //   { id: 1, title: "Logo Design", image: "/assets/image/gif 9.png" },
  //   { id: 2, title: "Stationary Design", image: "/assets/image/gif 10.png" },
  //   { id: 3, title: "Motion Graphics", image: "/assets/image/gif 15.png" },
  //   { id: 4, title: "Social Media Banner", image: "/assets/image/gif 12.png" },
  //   { id: 5, title: "3D Product Packaging", image: "/assets/image/gif 4.png" },
  //   { id: 6, title: "Branding Solutions", image: "/assets/image/gif 17.png" },
  //   { id: 7, title: "Web Development", image: "/assets/image/gif 6.gif" },
  //   { id: 8, title: "Mobile Application", image: "/assets/image/gif 7.gif" },
  // ];
  const projects = [
    {
      id: 1,
      title: "Logo Design",
      image: "/assets/image/gif 9.png",
      link: "/ourwork/logoDesign",
    },
    {
      id: 2,
      title: "Stationary Design",
      image: "/assets/image/gif 10.png",
      link: "/ourwork/stationaryDesign",
    },
    {
      id: 3,
      title: "Motion Graphics",
      image: "/assets/image/gif 15.png",
      link: "/ourwork/motionGraphics",
    },
    {
      id: 4,
      title: "Social Media Banner",
      image: "/assets/image/gif 12.png",
      link: "/ourwork/socialMediaBanner",
    },
    {
      id: 5,
      title: "3D Product Packaging",
      image: "/assets/image/gif 4.png",
      link: "/ourwork/productPackaging",
    },
    {
      id: 6,
      title: "Branding Solutions",
      image: "/assets/image/gif 17.png",
      link: "/ourwork/brandingSolutions",
    },
    {
      id: 7,
      title: "Web Development",
      image: "/assets/image/gif 6.gif",
      link: "/ourwork/webDevelopment",
    },
    {
      id: 8,
      title: "Mobile Application",
      image: "/assets/image/gif 7.gif",
      link: "/ourwork/mobileApplication",
    },
  ];

  const renderWorkCard = (
    project,
    additionalClasses = "",
    customTitleClass = "p-2 text-white text-start pt-4 lg:text-3xl text-xl font-semibold"
  ) => (
    <WorkCard
      key={project?.id}
      title={project?.title}
      titleClass={customTitleClass}
      image={project?.image}
      ImageClass=""
      CardClass={additionalClasses}
      alt={project?.title}
      link={project?.link}
    />
  );

  return (
    <div className="bg-black px-4 md:px-10 w-[90%] lg:w-[80%] mx-auto pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {renderWorkCard(projects[0])}
        {renderWorkCard(projects[1], "md:mt-20")}
      </div>

      <div className="mt-8">
        {renderWorkCard(projects[2], "w-full md:w-[85%]")}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {renderWorkCard(projects[3])}
        {renderWorkCard(projects[4], "md:mt-20")}
      </div>

      <div className="mt-8">
        {renderWorkCard(
          projects[5],
          "lg:ml-44 w-full md:w-[85%] md:ml-[15%]",
          "p-2 text-white text-start pt-4 lg:text-3xl text-xl font-semibold lg:ml-40"
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {renderWorkCard(projects[6])}
        {renderWorkCard(projects[7], "md:mt-20")}
      </div>
    </div>
  );
};

export default WorkImage;
