"use client";
import Image from "next/image";
import Banner from "@/components/banner/Banner";
// IMAGES
import banner from "@/assets/banner/coachesbanner.png";
import bannermob from "@/assets/banner/coachesbannermob.png";
import CoachComponent from "./Component/CoachComponent";

// export const metadata = {
//   title: "Coaches",
//   description: "Generated by create next app",
// };
const pages = () => {
  return (
    <>
      {/* Banner */}
      <Banner
        banner={banner}
        mobilebanner={bannermob}
        text="Transformative Coaching for Your Best Self"
      />
      {/* coaches */}
      <CoachComponent />
    </>
  );
};

export default pages;
