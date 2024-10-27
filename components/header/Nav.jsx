"use client";
import Link from "next/link";
import React, { useState } from "react";
import classes from "./header.module.css";
import { usePathname } from "next/navigation";
import Button from "@/UI/redbutton/Button";
import { AnimatePresence, motion } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
const Nav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const link = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Coaches", url: "/coaches" },
    // { name: "Matches", url: "/matches" },
    { name: "Team", url: "/team" },
    { name: "Testimonial", url: "/testimonials" },
    // { name: "Contact", url: "/contact" },
    // { name: "Membership", url: "/membership" },
  ];

  const tooglemenu = () => {
    setOpen(!open);
  };
  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };
  const linkVariants = {
    initial: {
      y: "30vh",
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };
  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.9,
      },
    },
  };
  return (
    <nav>
      <div className="desktopview">
        <div className={classes.nav}>
          {link.map((item) => (
            <Link
              href={item.url}
              key={item.name}
              className={`${pathname === item.url ? classes.active : ""} ${
                classes.link
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" className={classes.link}>
            <Button>Contact us</Button>
          </Link>
        </div>
      </div>
      <div className="mobileview">
        <div className="name" onClick={tooglemenu}>
          <TiThMenu size={30} color="black" />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fullview"
            >
              <div className="leftbtn" onClick={tooglemenu}>
                <MdOutlineClose size={30} color="white" />
              </div>
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="flex-navnew"
              >
                {link.map((item) => (
                  <div key={item.name} className="overflow-hidden">
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      animate="open"
                    >
                      <Link
                        href={item.url}
                        onClick={tooglemenu}
                        className={`${
                          pathname === item.url ? classes.active : ""
                        } ${classes.linkmob}`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  </div>
                ))}
                <Link
                  href="/contact"
                  
                  className={`${pathname === "/contact" ? classes.active : ""} ${
                    classes.linkmob
                  }`}
                  onClick={tooglemenu}
                >
                  Contact us
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
