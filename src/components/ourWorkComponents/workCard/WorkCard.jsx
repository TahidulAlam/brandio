"use client";
import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import WorkImageModal from "../workImageModal/WorkImageModal";

const WorkCard = ({ id, title, image, alt, CardClass, ImageClass }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-[100%] mx-auto">
      <div className={`${CardClass} relative rounded-lg overflow-hidden`}>
        <img
          src={image}
          alt={alt}
          className={`${ImageClass} w-full object-cover transition-transform duration-300 hover:scale-105`}
        />
        {/* Button to open the modal */}
        <button
          onClick={() => setOpenModal(true)}
          className="absolute bottom-4 right-4 text-white rounded-full bg-black hover:bg-gray-700 transition duration-200"
        >
          <BsPlusCircleFill className="text-yellow-400 text-2xl" />
        </button>
      </div>
      <div className="p-2 text-white text-center">{title}</div>

      {/* Modal */}
      <WorkImageModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title={`Details for ${title}`}
        content={`This is additional information for the project with id: ${id}.`}
      />
    </div>
  );
};

export default WorkCard;
