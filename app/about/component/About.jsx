"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import Counter from "@/components/counter/Counter";
import Player from "@/components/player/Player";
import SponserSlider from "@/UI/slider/SponserSlider";
import { sponserDetails } from "@/db/sponserDetails";
import AboutTestimonial from "@/UI/slider/AboutTestimonial";
import Mainform from "@/components/mainform/Mainform";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

import aboutImage from "@/assets/about-markam.png";
import Gallery1 from "@/assets/galleryItem/gallery-1.png";
import Gallery2 from "@/assets/galleryItem/gallery-2.png";
import Gallery3 from "@/assets/galleryItem/gallery-3.png";
import Gallery4 from "@/assets/galleryItem/gallery-4.png";
import Gallery5 from "@/assets/galleryItem/gallery-5.png";
import Gallery6 from "@/assets/galleryItem/gallery-6.png";
import message from "@/assets/messageicon.png";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const About = () => {
  const galleryImages = [
    { id: 1, image: Gallery1 },
    { id: 2, image: Gallery2 },
    { id: 3, image: Gallery3 },
    { id: 4, image: Gallery4 },
    { id: 5, image: Gallery5 },
    { id: 6, image: Gallery6 },
  ];

  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "About" }];
  return (
    <>
      {/* about */}
      <section className="section_top">
        <div className="container">
          <Breadcrumbs paths={breadcrumbs} />
          <div className="grid-2-to-2 gap5">
            <div className="desktopview">
              <Image
                src={aboutImage}
                alt="cricket player"
                className="img-fluid"
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="title text-blue rocket">
                At MCA, we believe that cricket is more than just a sport -{" "}
                <span className="text-red">it's a way of life</span>
              </h2>
              <div className="mobileview">
                <Image
                  src={aboutImage}
                  alt="cricket player"
                  className="img-fluid block margin-auto"
                />
              </div>
              <p className="paragraph text-gray full-text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur. Et ante imperdiet
                porttitor vulputate id. Ultrices id lectus lectus consequat
                porttitor lobortis. Morbi sit nunc eleifend magna ornare enim.
                Non malesuada amet pulvinar mus. Diam massa ac eget mauris. Mi
                ut enim in egestas massa. Bibendum nec rutrum sed commodo.
              </p>
              <p className="paragraph text-gray full-text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur. Et ante imperdiet
                porttitor vulputate id. Ultrices id lectus lectus consequat
                porttitor lobortis. Morbi sit nunc eleifend magna ornare enim.
                Non malesuada amet pulvinar mus. Diam massa ac eget mauris. Mi
                ut enim in egestas massa. Bibendum nec rutrum sed commodo.
              </p>
              <p className="paragraph text-gray full-text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur. Et ante imperdiet
                porttitor vulputate id. Ultrices id lectus lectus consequat
                porttitor lobortis. Morbi sit nunc eleifend magna ornare enim.
                Non malesuada amet pulvinar mus. Diam massa ac eget mauris. Mi
                ut enim in egestas massa. Bibendum nec rutrum sed commodo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* members */}
      <section className="section_top">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
            className="blue-counter-box"
          >
            <Counter counterNumber={50} counterText="Members" />
            <Counter counterNumber={20} counterText="Coaches" />
            <Counter counterNumber={10} counterText="Years Experience" />
            <Counter counterNumber={50} counterText="Championships" />
          </motion.div>
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
      <section className={`section_top sectionpading bg1`}>
        <div className="container">
          <div className="grid-2-to-2 gap5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="title text-white rocket">
                Elevating Passion: Join Our Cricket Training Journey
              </h2>
              <p className="paragraph text-white full-text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur. Aenean in consectetur
                massa sit id aenean id. Urna tortor maecenas egestas id.
                Dignissim dui a luctus id dui vitae sed tincidunt faucibus.
                Accumsan semper nunc mattis ullamcorper in. Dolor nunc elit
                pulvinar blandit lacinia ornare mauris amet. Varius elit luctus
                egestas amet ultrices. Sed integer dictum nisl pellentesque sit.
                Tellus pharetra tempor tincidunt turpis bibendum. Sagittis
                interdum porttitor interdum purus pulvinar non at. Tellus sit mi
                vitae vitae accumsan tincidunt Diam interdum tempus orci quis
                neque. Pellentesque adipiscing turpis donec adipiscing ut
                viverra gravida. Cras eget diam metus commodo tortor urna.
                Egestas ultrices egestas dui laoreet nisl leo. Viverra in proin
                pharetra et quis feugiat. Id ut tellus
              </p>
            </motion.div>
            <div>
              <div className="imagesGrids">
                {galleryImages.map((image, index) => (
                  <Image
                    src={image.image}
                    alt="cricket player"
                    key={index}
                    className="img-fluid block"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* sponsors */}
      <section className="section_top">
        <div className="container">
          <h2 className="title rocket text-blue text-center">Our Sponsors</h2>
          <div className="inner-margin">
            <div className="desktopview">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeIn}
                className="imagesGridsnew"
              >
                {sponserDetails.map((sponcer) => (
                  <div className="imagesGridItem" key={sponcer.id}>
                    <Image
                      src={sponcer.image}
                      alt="cricket player"
                      className="img-fluid block"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="mobileview">
              <SponserSlider />
            </div>
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className="section_top sectionpading bg3 testimonial">
        <div className="container">
          <div className="desktopview">
            <Image src={message} alt="cricket player" className="messageicon" />
          </div>
          <h2 className="title text-blue rocket text-center">Testimonials</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
            className="inner-margin"
          >
            <AboutTestimonial />
          </motion.div>
        </div>
      </section>
      {/* join us */}
      <section className="section_top">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
          >
            <h2 className="title rocket text-blue text-center">
              Join Our Cricket Academy
            </h2>
          </motion.div>
          <Mainform />
        </div>
      </section>
    </>
  );
};

export default About;
