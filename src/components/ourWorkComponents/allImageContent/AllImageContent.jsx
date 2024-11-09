"use client";
import Button from "@/components/button/Button";
import React, { useState } from "react";

const AllImageContent = ({ imageData }) => {
  const imagesPerBatch = 12;
  const [visibleImages, setVisibleImages] = useState(imagesPerBatch);

  const showMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + imagesPerBatch);
  };
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
        {imageData?.slice(0, visibleImages)?.map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-"
            />
          </div>
        ))}
      </div>

      {visibleImages < imageData?.length && (
        <div className="flex justify-center mt-4">
          <Button
            onClick={showMoreImages}
            // className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Show More
          </Button>
        </div>
      )}
    </div>
  );
};

export default AllImageContent;
