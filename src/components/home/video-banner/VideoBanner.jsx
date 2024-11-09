// "use client";
// import { useEffect, useState } from "react";
// import VideoBan from "./VideoBan";
// import BannerDownText from "./BannerDownText";

// export default function VideoBanner() {
//   return (
//     <div>
//       {/* Large screen video */}
//       <div className="lg:block hidden no-smooth-scroll">
//         <VideoBan />
//       </div>

//       {/* Small screen video */}
//       <div>
//         <video
//           autoPlay
//           loop
//           muted
//           preload="none"
//           className="object-cover lg:hidden block"
//           style={{ width: "100%", height: "100%" }}
//         >
//           <source src="/assets/video/Middle Video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <h1 className="lg:hidden block mt-20 font-extrabold text-2xl w-[90%] mx-auto">
//           Elevating UX, Empowering Businesses, Redefining Experiences...
//         </h1>
//       </div>

//       {/* Banner down text */}
//       <div className="mt-5">
//         <BannerDownText />
//       </div>
//     </div>
//   );
// }

/* code step 01 */
"use client";
import React from "react";
import VideoBan from "./VideoBan";
import BannerDownText from "./BannerDownText";

export default function VideoBanner() {
  return (
    <div>
      {/* Large screen video */}
      <div className="lg:block hidden no-smooth-scroll">
        <VideoBan />
      </div>

      {/* Small screen video */}
      <div>
        <video
          autoPlay
          loop
          muted
          preload="none"
          className="object-cover block lg:hidden"
          style={{ width: "100%", height: "100%" }}
        >
          <source src="/assets/video/Middle Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h1 className="lg:hidden block mt-20 font-extrabold text-2xl w-[90%] mx-auto">
          Elevating UX, Empowering Businesses, Redefining Experiences...
        </h1>
      </div>

      {/* Banner down text */}
      <div className="mt-5 mb-20 lg:mb-0">
        <BannerDownText />
      </div>
    </div>
  );
}
