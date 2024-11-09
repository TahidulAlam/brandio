// import React from "react";
// import Button from "@/components/button/Button";
// import TextWithLineBreaks from "@/components/TextWithLineBreaks";

// const BrandingSection = ({
//   image,
//   title,
//   description,
//   reverse = false,
//   buttonText,
//   bgClass,
//   h2Class,
//   pClass,
// }) => {
//   return (
//     <div
//       className={`${bgClass} grid grid-cols-1 lg:grid-cols-11 gap-8 items-center lg:py-24 py-5`}
//     >
//       {/* Image Column */}
//       <div
//         className={`w-full h-full  ${
//           reverse ? "lg:order-2 lg:col-span-5" : "lg:order-1 lg:col-span-5"
//         }`}
//       >
//         <div className={`flex justify-start`}>
//           <img
//             src={image}
//             alt={title}
//             width={600}
//             height={400}
//             className="object-cover rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* Text Column */}
//       <div
//         className={` ${
//           reverse ? "lg:order-1 lg:col-span-5" : "lg:order-2 lg:col-span-5"
//         }`}
//       >
//         <div className="flex flex-col justify-between gap-5 h-full">
//           <div
//             className={`${h2Class}  text-2xl md:text-3xl lg:text-5xl font-bold text-black`}
//           >
//             <TextWithLineBreaks text={title} />
//           </div>
//           <div
//             className={`${pClass}  text-base md:text-lg text-gray-700 leading-relaxed`}
//           >
//             <TextWithLineBreaks text={description} />
//           </div>
//           <div>
//             <Button
//               text="Create your Brand Identity"
//               // className="mt-5 rounded-3xl font-semibold bg-yellow-400 px-8 py-3 text-sm md:text-base lg:text-lg text-black duration-300 active:scale-95"
//             >
//               {buttonText}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandingSection;

import React from "react";
import Button from "@/components/button/Button";
import TextWithLineBreaks from "@/components/TextWithLineBreaks";

const BrandingSection = ({
  image,
  title,
  description,
  reverse = false,
  buttonText = "",
  bgClass = "",
  h2Class = "",
  pClass = "",
}) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-11 lg:gap-16 gap-5 items-center py-5 lg:py-24 ${bgClass}`}
    >
      {/* Image Column */}
      <div
        className={`w-full h-full lg:col-span-5 ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <img
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Text Column */}
      <div
        className={`flex flex-col gap-5 h-full lg:col-span-5 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div
          className={`text-2xl md:text-3xl lg:text-4xl font-bold text-black ${h2Class}`}
        >
          <TextWithLineBreaks text={title} />
        </div>
        <div
          className={`text-base md:text-lg text-gray-700 leading-relaxed ${pClass}`}
        >
          <TextWithLineBreaks text={description} />
        </div>
        <div>
          <Button>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default BrandingSection;
