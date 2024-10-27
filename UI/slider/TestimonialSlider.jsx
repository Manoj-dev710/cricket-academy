"use client";
import { testimonialialDetails } from "@/db/testimonialDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import startImg from "@/assets/star.png";
import male from "@/assets/male.png";
import female from "@/assets/female.png";
const TestimonialSlider = () => {
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            nextEl: ".custom-next3",
            prevEl: ".custom-prev3",
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
              slidesPerView: 4, // 3 slides for desktop size
            },
          }}
        >
          {testimonialialDetails.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="glass">
                <p className="smalltext text-center">{item.description}</p>
                <div className="mt-3 flex justify-content align-center gap-1">
                  {Array.from({ length: item.star }).map((_, index) => (
                    <Image key={index} src={startImg} alt="star" />
                  ))}
                </div>
                <div className="mt-3">
                  <Image
                    src={item.gender === "male" ? male : female}
                    alt="team image"
                    className="gender"
                  />
                </div>
              </div>
              <div className="mt-3">
                <h3 className="name text-white text-center">{item.name}</h3>
                <p className="smalltext text-center">{item.player}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Arrows */}
        <div className="arrow-flex">
          <div className="custom-prev3">
            <FaArrowAltCircleLeft className="text-white font-size" />
          </div>
          <div className="custom-next3">
            <FaArrowAltCircleRight className="text-white font-size" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
