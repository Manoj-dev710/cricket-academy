"use client";
import { motion } from "framer-motion";
import classes from "./home.module.css";
import Button from "@/UI/redbutton/Button";
import Image from "next/image";
import Link from "next/link";
import Player from "../player/Player";
import TeamSlider from "@/UI/slider/TeamSlider";
import SponserSlider from "@/UI/slider/SponserSlider";
import GallerSlider from "@/UI/slider/GallerySlider";
import TestimonialSlider from "@/UI/slider/TestimonialSlider";
import Contact from "../contact/Contact";
// images
import player from "@/assets/cricket-player.png";
import bigball from "@/assets/bigball.png";
import playermob from "@/assets/playermob.png";
import aboutPlayer from "@/assets/about-player.png";
import MasterSkill from "@/assets/masterSkill.png";
import coach from "@/assets/coach.png";
import academy from "@/assets/academy.png";
import match from "@/assets/match.png";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <>
      {/* banner */}
      <section className={classes.banner}>
        <div className="container">
          <div className="grid-2-to-2 align_center">
            <div>
              <div className="mobile-flex-center">
                <Button>CRICKET ACADEMY</Button>
              </div>
              <h1 className="title mt-3">
                Transforming Aspirants into Cricket Stars
              </h1>
            </div>
            <div className="desktopview">
              <div className={classes.playerpos}>
                <Image
                  src={player}
                  alt="cricket player"
                  className={classes.player}
                />
                <Image
                  src={bigball}
                  alt="cricket player"
                  className={classes.ball}
                />
              </div>
            </div>
            <div className="mobileview mt-3">
              <Image
                src={playermob}
                alt="cricket player"
                className={classes.player}
              />
            </div>
          </div>
        </div>
      </section>
      {/* about */}
      <section className={`sectionpading bg1`}>
        <div className="container">
          <div className="grid_1_to_2 gap5">
            <div className="desktopview">
              <Image
                src={aboutPlayer}
                alt="cricket player"
                className="img-fluid"
              />
            </div>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeIn}
              >
                <h2 className="title ">
                  Transforming enthusiasts into skilled cricketers through
                  professional coaching and dedication.
                </h2>
              </motion.div>
              <div className="mobileview">
                <Image
                  src={aboutPlayer}
                  alt="cricket player"
                  className="img-fluid block margin-auto"
                />
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                variants={fadeIn}
              >
                <p className="paragraph full-text-justify mt-2">
                  Lorem ipsum dolor sit amet consectetur. Et ante imperdiet
                  porttitor vulputate id. Ultrices id lectus lectus consequat
                  porttitor lobortis. Morbi sit nunc eleifend magna ornare enim.
                  Non malesuada amet pulvinar mus. Diam massa ac eget mauris. Mi
                  ut enim in egestas massa. Bibendum nec rutrum sed commodo.
                </p>
              </motion.div>
              <div className="mt-2 mobile-flex-center">
                <Link href="/about" style={{ textDecoration: "none" }}>
                  <Button>VIEW MORE</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* players */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <Player />
      </motion.div>
      {/* slider */}
      <motion.section
        className={`sectionpading bg1 section_top`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container">
          <h2 className="title rocket text-center">Our players</h2>
          <div className="inner-margin">
            <TeamSlider />
          </div>
        </div>
      </motion.section>
      {/* Add similar animations for remaining sections */}
      <Contact />
    </>
  );
};

export default Home;
