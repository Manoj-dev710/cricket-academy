"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sponserDetails } from "@/db/sponserDetails";
import Image from "next/image";
const SponserSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={6}
        navigation={false}
        pagination={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination,Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3, // 2 slides for tablet size
          },
          1024: {
            slidesPerView: 6, // 3 slides for desktop size
          },
        }}
      >
        {sponserDetails.map((sponcer) => (
          <SwiperSlide key={sponcer.id}>
            <Image src={sponcer.image} alt="team image" className="img-fluid" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SponserSlider;
