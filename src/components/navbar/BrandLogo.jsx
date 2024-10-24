import React from "react";
import Image from "next/image";
function BrandLogo() {
  return (
    <Image
      src="/assets/image/Logo.png" // Path relative to the public folder
      alt="Picture of the author"
      width={100}
      height={90}
      className="flex justify-center items-center"
    />
  );
}

export default BrandLogo;
