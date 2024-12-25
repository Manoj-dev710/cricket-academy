"use client";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Image from "next/image";
import coaches from "@/assets/coache.png";
import srilanka from "@/assets/srilanka.png";
import players from "@/assets/players.png";
import messageblue from "@/assets/messageblue.png";
import message from "@/assets/messageicon.png";
import CoachTestimonial from "@/UI/slider/CoachTestimonial";
import Coach from "@/components/coach/Coach";

import CoachSlider from "@/UI/slider/CoachSlider";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/UI/redbutton/Button";
import CoachParagraph from "../[name]/Component/CoachParagraph";
import { coachDetails } from "@/db/coachdb";
const CoachComponent = () => {
  const router = useRouter();
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Coaches" }];
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const [selectedCoach, setSelectedCoach] = useState(
    coachDetails[0]
  );
  const handleCoachSelect = (coach) => {
    setSelectedCoach(coach);
  };
  const handleCoachClick = (name) => {
    const coachNameSlug = name.toLowerCase().replace(/\s+/g, "-"); // Convert name to slug
    router.push(`/coaches/${coachNameSlug}`); // Navigate to the respective coach's page
  };
  return (
    <>
      <section className="section_top">
        <div className="container">
          <Breadcrumbs paths={breadcrumbs} />
          {/* <div className="grid-2-to-2 gap5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="title text-blue rocket">Head coach</h2>
              <h3 className="middletext text-red lg-text-center">
                Gerard Rajendram
              </h3>
              <div className="mobileview">
                <Image
                  src={coaches}
                  alt="cricket player"
                  className="img-fluid block margin-auto"
                />
              </div>
              <p className="paragraph text-gray full-text-justify mt-2">
                With more than 25 years of combined coaching experience, Gerard
                Rajendram is now Founder, President and Head Coach of the
                Markham Cricket Academy (MCA), a program he started back in 2007
                for students ranging from children aged four to players in the
                Senior Division. Since the formation of the Academy, Coach
                Gerard has been training students year-round at various indoor
                facilities and cricket grounds in Ontario, such as Markham,
                Scarborough and elsewhere. The coaching program includes cricket
                drills for all students, one-on-one sessions, hands-on training
                and mentoring, as well as a strong focus on discipline and
                fitness for the young cricketers. Before moving to Canada, Coach
                Gerard gained the Sri Lanka Cricket Coaching Certificate (Levels
                1 and 2) and achieved the Diploma in Physical Education from the
                National Institute of Education in Sri Lanka. From the period
                2000-2006, he served Sri Lanka Cricket as a one of the District
                Coaches
              </p>
            </motion.div>
            <div className="desktopview">
              <Image src={coaches} alt="cricket player" className="img-fluid" />
            </div>
          </div> */}
        </div>
      </section>
      {/* Our Coaches */}
      <section className="section_top">
        <div className="container">
          <h2 className="title text-blue rocket text-center">Our Coaches</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="inner-margin" style={{cursor:"pointer"}}>
              {/* <Coach /> */}
              <CoachSlider onSelect={handleCoachSelect} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Selected Coach Content */}
      {selectedCoach && (
        <section className="section_top">
          <div className="container">
            <div className="grid-2-to-2 gap5">
              <div className="desktopview">
                <Image
                  src={selectedCoach.image}
                  alt={selectedCoach.name}
                  className="img-fluid block margin-auto"
                />
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeIn}
              >
                <h2 className="title text-blue rocket text-lg-center">
                  {selectedCoach.name}
                </h2>
                <div className="mobileview mt-2">
                  <Image
                    src={selectedCoach.image}
                    alt={selectedCoach.name}
                    className="img-fluid block margin-auto"
                  />
                </div>
                <CoachParagraph para={selectedCoach.para} btn={false} />
                <div className="mt-2">
                  <Button onClick={() => handleCoachClick(selectedCoach.name)}>
                    Know more
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}
      {/* srilanka */}
      <section className="section_top ">
        <div className="container">
          <div className="sectionpadingfull bg3">
            <div className="grid_1_to_2 gap5">
              <div className="desktopview">
                <Image
                  src={srilanka}
                  alt="cricket player"
                  className="img-fluid block margin-auto"
                />
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeIn}
              >
                <h2 className="title text-blue rocket">
                  Playing Career Highlights
                </h2>
                <div className="mobileview mt-2">
                  <Image
                    src={srilanka}
                    alt="cricket player"
                    className="img-fluid block margin-auto"
                  />
                </div>
                <p className="paragraph text-gray justify-center mt-2">
                  Lorem ipsum dolor sit amet consectetur. Et ante imperdiet
                  porttitor vulputate id. Ultrices id lectus lectus consequat
                  porttitor lobortis. Morbi sit nunc eleifend magna ornare enim.
                  Non malesuada amet pulvinar mus. Diam massa ac eget mauris. Mi
                  ut enim in egestas massa. Bibendum nec rutrum sed commodo.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Coaching Philosophy */}
      <section className="section_top">
        <div className="container">
          <div className="grid_2_to_1 gap5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="title text-blue rocket">Coaching Philosophy</h2>
              <p className="paragraph text-gray justify-center mt-2">
                Lorem ipsum dolor sit amet consectetur. Et ante imperdiet
                porttitor vulputate id. Ultrices id lectus lectus consequat
                porttitor lobortis. Morbi sit nunc eleifend magna ornare enim.
                Non malesuada amet pulvinar mus. Diam massa ac eget mauris. Mi
                ut enim in egestas massa. Bibendum nec rutrum sed commodo.
              </p>
            </motion.div>
            <div>
              <Image
                src={players}
                alt="cricket player"
                className="img-fluid block margin-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* coach team */}
      <section className="section_top">
        <div className="container">
          <h2 className="title text-blue rocket text-center">
            Coaching Specialization
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
          >
            <p className="paragraph text-gray text-center mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium optio nobis fugit tempore magni quia, sequi molestias
              unde numquam velit beatae laboriosam cum ipsa a, voluptate enim
              harum. Quisquam, minima.
            </p>
            <p className="paragraph text-gray text-center mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium optio nobis fugit tempore magni quia, sequi molestias
              unde numquam velit beatae laboriosam cum ipsa a, voluptate enim
              harum. Quisquam, minima.
            </p>
            <p className="paragraph text-gray text-center mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium optio nobis fugit tempore magni quia, sequi molestias
              unde numquam velit beatae laboriosam cum ipsa a, voluptate enim
              harum. Quisquam, minima.
            </p>
          </motion.div>
        </div>
      </section>
      {/* testimonial */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
        className="section_top testpos"
      >
        <div className="container">
          <div className="sectionpadingfull bg3">
            <div className="desktopview">
              <Image
                src={messageblue}
                alt="cricket player"
                className="messageiconblue"
              />
            </div>
            <h2 className="title text-blue rocket text-center">Testimonials</h2>
            <div className="inner-margin">
              <CoachTestimonial />
            </div>
            <div className="desktopview">
              <Image
                src={message}
                alt="cricket player"
                className="messageiconnew"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default CoachComponent;
