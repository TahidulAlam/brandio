// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link"; // Import Link from Next.js

// const DropDown = () => {
//   const imageData = [
//     {
//       link: "/packages/branding",
//       name: "Branding",
//       image: "/assets/image/service/1.png",
//     },
//     {
//       link: "/packages/uiux",
//       name: "UI/UX Design",
//       image: "/assets/image/service/2.png",
//     },
//     {
//       link: "/packages/webdesign",
//       name: "Web Design",
//       image: "/assets/image/service/3.png",
//     },
//     {
//       link: "/packages/mobileapp",
//       name: "Mobile App",
//       image: "/assets/image/service/4.png",
//     },
//     {
//       link: "/packages/monthlydesign",
//       name: "Monthly Design",
//       image: "/assets/image/service/5.png",
//     },
//     {
//       link: "/packages/digitalmarketing",
//       name: "Digital Marketing",
//       image: "/assets/image/service/6.png",
//     },
//     {
//       link: "/packages/cmswebsite",
//       name: "CMS Website",
//       image: "/assets/image/service/7.png",
//     },
//   ];

//   const [selectedImage, setSelectedImage] = useState(imageData[0].image);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   return (
//     <div className="w-full text-white p-20 h-[560px]">
//       <div className="w-[90%] mx-auto mt-10">
//         <div className="lg:hidden flex justify-around items-center">
//           {/* Image Display Section */}
//           <div className="mr-4">
//             <Image
//               src={selectedImage}
//               alt="Selected"
//               width={500}
//               height={400}
//               className="object-cover"
//               priority // Ensures fast loading of the image
//             />
//           </div>

//           {/* Service List Section */}
//           <div className="flex flex-col items-end gap-5">
//             {imageData.map((item) => (
//               <Link href={item.link} key={item.name}>
//                 {/* Directly using Link without an <a> tag */}
//                 <span
//                   onClick={() => handleImageClick(item.image)}
//                   className="font-semibold text-2xl transition-colors hover:text-yellow-500 text-start cursor-pointer"
//                 >
//                   {item.name}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DropDown;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const DropDown = () => {
  const imageData = [
    {
      link: "/services/branding",
      name: "Branding",
      image: "/assets/image/Service/1.png",
    },
    {
      link: "/services/uiUx",
      name: "UI/UX Design",
      image: "/assets/image/Service/2.png",
    },
    {
      link: "/services/webDesign",
      name: "Web Design & Development",
      image: "/assets/image/Service/3.png",
    },
    {
      link: "/services/mobileApp",
      name: "Mobile App",
      image: "/assets/image/Service/4.png",
    },
    {
      link: "/services/monthlyDesign",
      name: "Monthly Design",
      image: "/assets/image/Service/5.png",
    },
    {
      link: "/services/digitalMarketing",
      name: "Digital Marketing",
      image: "/assets/image/Service/6.png",
    },
    {
      link: "/services/cmsWebsite",
      name: "CMS Website",
      image: "/assets/image/Service/7.png",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(imageData[0].image);

  const handleImageHover = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="w-full text-white p-4 lg:p-20 max-h-[100%] lg:h-[700px]">
      <div className="w-[70%] mx-auto mt-5 lg:mt-20">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="hidden lg:block mr-4 lg:mr-10 mt-28">
            <Image
              src={selectedImage}
              alt="Selected"
              width={500}
              height={400}
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col items-center lg:items-end gap-4 lg:gap-5 w-full lg:w-auto lg:mt-16 lg:mr-14 mr-0">
            {imageData.map((item) => (
              <Link href={item.link} key={item.name}>
                <span
                  onMouseEnter={() => handleImageHover(item.image)} // Change image on hover
                  className="font-semibold text-lg lg:text-2xl transition-colors hover:text-yellow-500 cursor-pointer"
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
