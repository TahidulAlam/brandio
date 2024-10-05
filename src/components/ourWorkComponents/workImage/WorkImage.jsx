"use client";
import React from "react";
import WorkCard from "../workCard/WorkCard";

const WorkImage = () => {
  const projects = [
    { id: 1, title: "Logo/Design", image: "/assets/image/gif 9.png" },
    { id: 2, title: "Stationary Design", image: "/assets/image/gif 10.png" },
    { id: 3, title: "Motion Graphics", image: "/assets/image/gif 15.png" },
    { id: 4, title: "Restaurant Branding", image: "/assets/image/gif 12.png" },
    { id: 5, title: "3D Product Packaging", image: "/assets/image/gif 4.png" },
    { id: 6, title: "Branding Solutions", image: "/assets/image/gif 17.png" },
    { id: 7, title: "Mobile App Design", image: "/assets/image/gif 6.gif" },
    { id: 8, title: "Mobile App Design", image: "/assets/image/gif 7.gif" },
  ];

  return (
    <div className="bg-black px-10 w-[80%] mx-auto">
      {/* Row 1: ID 1 and ID 2 */}
      <div className="grid grid-cols-2 gap-8">
        <WorkCard
          id={1}
          title={projects[0].title}
          image={projects[0].image}
          ImageClass={``}
          CardClass={"mt-0"}
          alt={projects[0].title}
        />
        <WorkCard
          id={2}
          title={projects[1].title}
          image={projects[1].image}
          ImageClass={``}
          CardClass={"mt-20"}
          alt={projects[1].title}
        />
      </div>

      {/* Row 2: ID 3 */}
      <div className="mt-8">
        <WorkCard
          id={3}
          title={projects[2].title}
          image={projects[2].image}
          ImageClass={``}
          CardClass={`mt-0 w-[85%]`}
          alt={projects[2].title}
        />
      </div>

      {/* Row 3: ID 4 and ID 5 */}
      <div className="mt-8 grid grid-cols-2 gap-8">
        <WorkCard
          id={4}
          title={projects[3].title}
          image={projects[3].image}
          ImageClass={``}
          CardClass={"mt-0"}
          alt={projects[3].title}
        />
        <WorkCard
          id={5}
          title={projects[4].title}
          image={projects[4].image}
          ImageClass={``}
          CardClass={"mt-20"}
          alt={projects[4].title}
        />
      </div>

      {/* Row 4: ID 6 */}
      <div className="mt-8">
        <WorkCard
          id={6}
          title={projects[5].title}
          image={projects[5].image}
          ImageClass={``}
          CardClass={"mt-0 w-[85%] ml-[15%]"}
          alt={projects[5].title}
        />
      </div>

      {/* Row 5: ID 7 and ID 8 */}
      <div className="mt-8 grid grid-cols-2 gap-8">
        <WorkCard
          id={7}
          title={projects[6].title}
          image={projects[6].image}
          ImageClass={``}
          CardClass={"mt-0"}
          alt={projects[6].title}
        />
        <WorkCard
          id={8}
          title={projects[7].title}
          image={projects[7].image}
          ImageClass={``}
          CardClass={"mt-20"}
          alt={projects[7].title}
        />
      </div>
    </div>
  );
};

export default WorkImage;
