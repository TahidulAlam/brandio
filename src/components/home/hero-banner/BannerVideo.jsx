import React from "react";

const BannerVideo = () => {
  return (
    <div className="relative w-full h-0 pb-[70%] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-[750px] h-[600px] object-cover"
        // controls
        preload="none"
      >
        <source
          src="/assets/video/vecteezy_mesmerizing-3d-render-looping-animated-glass-like-liquids_37760961.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BannerVideo;
