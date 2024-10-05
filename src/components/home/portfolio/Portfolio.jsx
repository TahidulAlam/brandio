import Button from "@/components/button/Button";
import React from "react";

const imageData = [
  { id: 1, src: "/assets/image/gif 2.gif", alt: "Image 1" },
  { id: 2, src: "/assets/image/gif 3.gif", alt: "Image 2" },
  { id: 3, src: "/assets/image/gif 4.gif", alt: "Image 3" },
  { id: 4, src: "/assets/image/gif 5.gif", alt: "Image 4" },
  { id: 5, src: "/assets/image/gif 6.gif", alt: "Image 5" },
  { id: 6, src: "/assets/image/gif 7.gif", alt: "Image 6" },
];

const Portfolio = () => {
  return (
    <div className="p-20">
      <div className="flex justify-center items-center p-10">
        <h1 className="text-2xl font-bold text-white">Portfolio at a Glance</h1>
      </div>
      <div className="grid grid-cols-3 w-[70%] mx-auto">
        {imageData.map((image) => (
          <div key={image.id} className="relative w-full h-80">
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center p-10">
        <Button children={"show more"} className={"rounded-2xl px-6 py-2"} />
      </div>
    </div>
  );
};

export default Portfolio;
