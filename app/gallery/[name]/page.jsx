"use client";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import banner from "@/assets/banner/contactbanner.png";
import bannermob from "@/assets/banner/contactbannermob.png";
import Banner from "@/components/banner/Banner";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
// import { useRouter } from "next/router";
import { galleryDetails } from "@/db/gallerydb";
import Image from "next/image";

const GalleryPage = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Gallery" }];
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  return (
    <>
      <Banner
        banner={banner}
        mobilebanner={bannermob}
        text="Get in Touch with Our Cricket Experts"
      />
      <section className="section_top">
        <div className="container">
          <Breadcrumbs paths={breadcrumbs} />
          <div className="image-grid">
            {galleryDetails.map((gallery, index) => (       
              <div
                key={gallery.id}
                className="galleryItem"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={gallery.image}
                  alt="team image"
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Lightbox Component */}
        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={galleryDetails.map((gallery) => ({
              src: gallery.src,
            }))}
            index={currentIndex}
            onIndexChange={setCurrentIndex}
          />
        )}
      </section>
    </>
  );
};

export default GalleryPage;
