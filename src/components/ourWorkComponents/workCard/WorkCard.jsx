// "use client";
// import React, { useState } from "react";
// import { BsPlusCircleFill } from "react-icons/bs";
// import WorkImageModal from "../workImageModal/WorkImageModal";

// const WorkCard = ({
//   id,
//   title,
//   image,
//   alt,
//   CardClass,
//   ImageClass,
//   titleClass,
//   link,
// }) => {
//   // const [openModal, setOpenModal] = useState(false);

//   return (
//     <div className="w-full mx-auto">
//       <div className={`${CardClass} relative rounded-lg overflow-hidden`}>
//         <img
//           src={image}
//           alt={alt}
//           className={`${ImageClass} w-full object-cover transition-transform duration-300 hover:scale-105`}
//         />
//         {/* Button to open the modal */}
//         <button
//           // onClick={() => setOpenModal(true)}
//           className="absolute bottom-5 right-4 text-white rounded-full bg-black hover:bg-gray-700 transition duration-200"
//         >
//           <BsPlusCircleFill className="text-yellow-400 text-3xl" />
//         </button>
//       </div>
//       <div className={`${titleClass}`}>{title}</div>

//       {/* Modal */}
//       {/* <WorkImageModal
//         openModal={openModal}
//         setOpenModal={setOpenModal}
//         title={`Details for ${title}`}
//         content={`This is additional information for the project with id: ${id}.`}
//       /> */}
//     </div>
//   );
// };

// export default WorkCard;
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsPlusCircleFill } from "react-icons/bs";

const WorkCard = ({
  id,
  title,
  image,
  alt,
  CardClass,
  ImageClass,
  titleClass,
  link,
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (link) {
      router.push(link); // Navigate to the specified link
    }
  };

  return (
    <div className="w-full mx-auto">
      <div className={`${CardClass} relative rounded-lg overflow-hidden`}>
        <img
          src={image}
          alt={alt}
          className={`${ImageClass} w-full object-cover transition-transform duration-300 hover:scale-105`}
        />

        {/* Button to navigate to another page */}
        <button
          onClick={handleButtonClick}
          className="absolute bottom-5 right-4 text-white rounded-full bg-black hover:bg-gray-700 transition duration-200"
        >
          <BsPlusCircleFill className="text-yellow-400 text-3xl" />
        </button>
      </div>

      <div className={`${titleClass}`}>{title}</div>
    </div>
  );
};

export default WorkCard;
