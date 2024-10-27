import Image from "next/image";
import React from "react";
import classes from "./banner.module.css";
const Banner = ({ banner, mobilebanner, text }) => {
  return (
    <div className={classes.bannerrespomsive}>
      <div className="desktopview">
        <Image src={banner} alt="banner" className="img-responsive" />
      </div>

      <div className="mobileview">
        <Image src={mobilebanner} alt="banner" className="img-responsive" />
      </div>
      <div className={classes.bannerabs}>
        <h1 className="bannertitle rocket text-white text-center">{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
