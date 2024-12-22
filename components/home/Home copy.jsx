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
              <h2 className="title ">
                Transforming enthusiasts into skilled cricketers through
                professional coaching and dedication.
              </h2>
              <div className="mobileview">
                <Image
                  src={aboutPlayer}
                  alt="cricket player"
                  className="img-fluid block margin-auto"
                />
              </div>
              <p className="paragraph full-text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur. Et ante imperdiet
                porttitor vulputate id. Ultrices id lectus lectus consequat
                porttitor lobortis. Morbi sit nunc eleifend magna ornare enim.
                Non malesuada amet pulvinar mus. Diam massa ac eget mauris. Mi
                ut enim in egestas massa. Bibendum nec rutrum sed commodo.
              </p>
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
      <Player />
      {/* slider */}
      <section className={`sectionpading bg1 section_top`}>
        <div className="container">
          <h2 className="title rocket text-center">Our players</h2>
          <div className="inner-margin">
            <TeamSlider />
          </div>
        </div>
      </section>
      {/* potential */}
      <section className="section_top">
        <div className="container">
          <div className="grid-2-to-2 gap5">
            <div>
              <h2 className="title rocket text-blue">
                Unlock potential, master skills, and dominate the cricketing
                arena together
              </h2>
              <p className="paragraph mt-2 text-gray full-text-justify">
                At our academy, we are committed to providing a world-class
                cricketing environment that inspires players to achieve their
                full potential. Our experienced coaching staff, state-of-the-art
                facilities, and vibrant community of players and enthusiasts
                make us the go-to destination for cricket in the Markham area.
                Founded with the goal of promoting the sport of cricket and
                developing well-rounded players who possess not only the skills
                but also the character to succeed in life, we take pride in
                offering a holistic approach to coaching that focuses not only
                on technique but also on mindset, fitness, and teamwork..
              </p>
              <div className="mt-2 mobile-flex-center">
                <Link href="/about" style={{ textDecoration: "none" }}>
                  <Button color="blue">LEARN MORE</Button>
                </Link>
              </div>
            </div>
            <div>
              <div className="grid-2-to-2 align_end gap5">
                <Image
                  src={MasterSkill}
                  alt="master skill"
                  className="img-fluid"
                />
                <p className="paragraph text-gray lg-margin-bottom2 ">
                  At our academy, we are committed to providing a world-class
                  cricketing environment that inspires players to achieve their
                  full potential. Our experienced coaching
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* head coach */}
      <section className={`sectionpading bg1 mt-2`}>
        <div className="container">
          <div className="grid-2-to-2 gap5">
            <div className="desktopview">
              <Image src={coach} alt="master skill" className="img-fluid" />
            </div>
            <div>
              <h2 className="title rocket lg-text-center">Our head coaches</h2>
              <p className="paragraph mt-2 lg-text-center">HASANTHA MENDIS</p>
              <div className="mobileview mt-2">
                <Image
                  src={coach}
                  alt="master skill"
                  className="img-fluid block margin-auto"
                />
              </div>
              <p className="paragraph mt-2 text-white full-text-justify">
                At our academy, we are committed to providing a world-class
                cricketing environment that inspires players to achieve their
                full potential. Our experienced coaching staff, state-of-the-art
                facilities, and vibrant community of players and enthusiasts
                make us the go-to destination for cricket in the Markham area.
                Founded with the goal of promoting the sport of cricket and
                developing well-rounded players who possess not only the skills
                but also the character to succeed in life, we take pride in
                offering a holistic approach to coaching that focuses not only
                on technique but also on mindset, fitness, and teamwork..
              </p>
              <div className="mt-2 mobile-flex-center">
                <Link href="/coaches" style={{ textDecoration: "none" }}>
                  <Button>KNOW MORE</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* OUR SPONSORs  */}
      <section className="section_top">
        <div className="container">
          <h2 className="title rocket text-blue text-center">OUR SPONSORS</h2>
          <div className="inner-margin">
            <SponserSlider />
          </div>
        </div>
      </section>
      {/* Cricket Academy */}
      <section className="section_top position-relative">
        <h2 className="title rocket text-blue text-center">
          ELITE CRICKET ACADEMY EXCELLENCE UNLEASHED
        </h2>
        <div className="abs-center">
          <div className="container">
            <div className="inner-margin">
              <GallerSlider />
            </div>
          </div>
        </div>
        <div className="desktopview">
          <Image src={academy} alt="academy" className="imagefit opacitydim" />
        </div>
      </section>
      {/* MATCH */}
      <section className="section_top sectionpading bg1">
        <div className="container">
          <h2 className="title rocket text-white text-center">MATCHES</h2>
          <div className="inner-margin">
            <Image
              src={match}
              alt="match"
              className="img-fluid d-block mx-auto"
            />
          </div>
          <div className="mt-3">
            <div className="line"></div>
          </div>
          <h2 className="title rocket text-white text-center mt-4">
            TESTIMONIAL
          </h2>
          <div className="inner-margin">
            <TestimonialSlider />
          </div>
        </div>
      </section>
      {/* contact */}
      <Contact />
    </>
  );
};

export default Home;
