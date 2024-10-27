import React from "react";
import classes from "./footer.module.css";
import Image from "next/image";
import logo from "../../assets/cricketlogo.png";
import Link from "next/link";
import locationNew from "../../assets/locationnew.png";
import msgnew from "../../assets/msgnew.png";
import callnew from "../../assets/callnew.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footer_flex}>
          <div className={classes.item1}>
            <Image src={logo} alt="logo" className={classes.logo} />
            <p className="paragraph text-white mt-2">
              Lorem ipsum dolor sit amet consectetur. Vitae et volutpat purus
              mattis nam nec faucibus purus nulla. At placerat eros adipiscing
              non. Sapien aliquam mattis id sagittis eu est nec duis.
            </p>
          </div>
          <div className={classes.item2}>
            <h3 className="name text-white">Quick Actions</h3>
            <ul className={classes.footerlist}>
              <li>
                <Link href="/" className={classes.footer_link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={classes.footer_link}>
                  About us
                </Link>
              </li>
              <li>
                <Link href="/coaches" className={classes.footer_link}>
                  Coaches
                </Link>
              </li>
              <li>
                <Link href="/team" className={classes.footer_link}>
                  Team
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className={classes.footer_link}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className={classes.footer_link}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.item3}>
            <h3 className="name text-white">Address</h3>
            <div className="mt-2">
              <div className="flex align_center gap2 ">
                <Image
                  src={locationNew}
                  alt="location"
                  className="socialIcon2"
                />
                <div>
                  <h3 className="middletext text-white">Address</h3>
                  <p className="paragraph text-white mt-1">
                    FairTree Cricket Ground, 385 Elson St, Markham, ON L3S 4R9
                  </p>
                </div>
              </div>
              <div className="flex align_center gap2 mt-2">
                <Image src={callnew} alt="callnew" className="socialIcon2" />
                <div>
                  <h3 className="middletext text-white">Phone</h3>
                  <p className="paragraph text-white mt-1">+1 (416) 939-6202</p>
                </div>
              </div>
              <div className="flex align_center gap2 mt-2">
                <Image src={msgnew} alt="msgnew" className="socialIcon2" />
                <div>
                  <h3 className="middletext text-white">Mail</h3>
                  <p className="paragraph text-white mt-1">
                    coach@markhamcricketacademy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.line}></div>
        <p className="paragraph text-white mt-2 text-center">
          Copyright © 2024 Markham Cricket Academy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
