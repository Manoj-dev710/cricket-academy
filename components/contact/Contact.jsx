import React from "react";
import Image from "next/image";
import Form from "../form/Form";
import Link from "next/link";
// IMAGES
import location from "@/assets/social/location.png";
import message from "@/assets/social/message.png";
import call from "@/assets/social/call.png";
import youtube from "@/assets/social/youtube.png";
import instagram from "@/assets/social/instagram.png";
import facebook from "@/assets/social/facebook.png";
const Contact = () => {
  return (
    <section className="section_top">
      <div className="container">
        <div className="grid-2-to-2 gap5">
          <div>
            <h2 className="title rocket text-blue">Get in touch</h2>
            <p className="paragraph text-gray">
              Lorem ipsum dolor sit amet consectetur. Auctor viverra mauris
              adipiscing et integer sit gravida scelerisque cursus. At
              vestibulum sit nullam enim
            </p>
            <div className="flex align_center gap2 mt-2 ">
              <Image src={location} alt="location" className="socialIcon" />
              <div>
                <h3 className="middletext outfit text-blue">Address</h3>
                <p className="paragraph text-gray">
                  FairTree Cricket Ground, 385 <br /> Elson St, Markham, ON L3S
                  4R9
                </p>
              </div>
            </div>
            <div className="flex align_center gap2 mt-2 ">
              <Image src={message} alt="message" className="socialIcon" />
              <div>
                <h3 className="middletext outfit text-blue">Mail</h3>
                <p className="paragraph text-gray">
                  coach@markhamcricketacademy
                </p>
              </div>
            </div>
            <div className="flex align_center gap2 mt-2 ">
              <Image src={call} alt="call" className="socialIcon" />
              <div>
                <h3 className="middletext outfit text-blue">Phone</h3>
                <p className="paragraph text-gray">+1 (416) 939-6202</p>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="middletext outfit text-blue lg-text-center">
                Follow us on
              </h3>
              <div className="flex align_center lg-justify-center gap2 mt-2">
                <Link
                  href="https://www.youtube.com/MarkhamCricketAcademy"
                  target="_blank"
                >
                  <Image src={youtube} alt="youtube" className="socialIcon" />
                </Link>
                <Link
                  href="https://www.instagram.com/MarkhamCricketAcademy"
                  target="_blank"
                >
                  <Image
                    src={instagram}
                    alt="instagram"
                    className="socialIcon"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/MarkhamCricketAcademy"
                  target="_blank"
                >
                  <Image src={facebook} alt="facebook" className="socialIcon" />
                </Link>
              </div>
            </div>

            <div className="flex align_center gap2"></div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
