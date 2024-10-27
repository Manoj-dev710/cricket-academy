"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { teamDetails } from "@/db/teamDetails"; // Correctly import teamDetails
import Image from "next/image";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
const TeamSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={false}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2, // 2 slides for tablet size
          },
          1024: {
            slidesPerView: 3, // 3 slides for desktop size
          },
        }}
      >
        {teamDetails.map((team) => (
          <SwiperSlide key={team.id}>
            <Image
              src={team.image}
              alt="team image"
              className="img-fluid block margin-auto"
            />
            <h3 className="name rocket text-white text-center">{team.name}</h3>
            {team.talent.map((talent, index) => (
              <p key={index} className="paragraph text-white text-center">
                {talent}
              </p>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Arrows */}
      <div className="arrow-flex">
        <div className="custom-prev">
          <FaArrowAltCircleLeft className="text-white font-size" />
        </div>
        <div className="custom-next">
          <FaArrowAltCircleRight className="text-white font-size" />
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
