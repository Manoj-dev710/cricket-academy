"use client";
import { testimonialialDetails } from "@/db/testimonialDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
const AboutTestimonial = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-next4",
          prevEl: ".custom-prev4",
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
        {testimonialialDetails.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonialItem">
              <p className="smalltext text-gray text-center">
                {item.description}
              </p>
              <div className="mt-2">
                <p className="middletext text-center">{item.name}</p>
              </div>
              <div className="testimonialoutnew "></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Arrows */}
      <div className="arrow-flex">
        <div className="custom-prev4">
          <FaArrowAltCircleLeft className="text-blue font-size" />
        </div>
        <div className="custom-next4">
          <FaArrowAltCircleRight className="text-blue font-size" />
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonial;
