"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryDetails } from "@/db/gallerydb";
import Image from "next/image";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="section_top ">
      <div className="container">
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
  );
};

export default Gallery;
