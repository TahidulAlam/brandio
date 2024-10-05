"use client";
import { useEffect, useState } from "react";
import VideoBan from "./VideoBan";
import BannerDownText from "./BannerDownText";

export default function VideoBanner() {
  return (
    <>
      <div>
        <VideoBan />
        <div className="mt-5">
          <BannerDownText />
        </div>
      </div>
    </>
  );
}
