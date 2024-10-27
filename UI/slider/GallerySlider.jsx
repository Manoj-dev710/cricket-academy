"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { galleryDetails } from "@/db/gallerydb";
import Image from "next/image";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
const GallerySlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-next2",
          prevEl: ".custom-prev2",
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
        {galleryDetails.map((gallery) => (
          <SwiperSlide key={gallery.id}>
            <Image
              src={gallery.image}
              alt="team image"
              className="img-fluid block margin-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Arrows */}
      <div className="arrow-flex">
        <div className="custom-prev2">
          <FaArrowAltCircleLeft className="text-blue font-size" />
        </div>
        <div className="custom-next2">
          <FaArrowAltCircleRight className="text-blue font-size" />
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
