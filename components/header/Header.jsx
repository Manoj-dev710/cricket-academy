"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import logo from "../../assets/markham-cricket-academy.jpg";
import classes from "./header.module.css";
import Link from "next/link";
import Nav from "./Nav";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${classes.header} ${isScrolled ? classes.fixed : ""}`}>
      <div className="container">
        <div className={classes.header_flex}>
          <Link href="/">
            <Image src={logo} alt="logo" className={classes.logo} />
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
