"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { coachDetails } from "@/db/coachdb";
import Image from "next/image";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
const CoachSlider = ({ onSelect }) => {

  
  return (
    <div>
      <Swiper
        // loop={true}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-nexta",
          prevEl: ".custom-preva",
        }}
        centeredSlides={true}
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
            slidesPerView: 4, // 3 slides for desktop size
          },
        }}
      >
        {coachDetails.map((coach) => (
          <SwiperSlide key={coach.id} onClick={() => onSelect(coach)}>
            <Image src={coach.image} alt="team image" className="coachimg" />
            <h3 className="name rocket text-center">{coach.name}</h3>
            <p className="paragraph text-black text-center">
              {coach.specialization}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Arrows */}
      <div className="arrow-flex">
        <div className="custom-preva">
          <FaArrowAltCircleLeft className="text-black font-size" />
        </div>
        <div className="custom-nexta">
          <FaArrowAltCircleRight className="text-black font-size" />
        </div>
      </div>
    </div>
  );
};

export default CoachSlider;
