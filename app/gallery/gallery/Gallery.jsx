"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryDetails } from "@/db/gallerydb";
import Image from "next/image";
import gallery1 from "@/public/gallery/gallery1.png";
import gallery2 from "@/public/gallery/gallery2.png";
import { useRouter } from "next/navigation";
const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  const handleCoachClick = (name) => {
    router.push(`/gallery/${name}`); // Navigate to the respective coach's page
  };
  return (
    <section className="section_top ">
      <div className="container">
        <div className="image-grid">
          <div
            className="galleryItemcard"
            onClick={() => handleCoachClick("team")}
          >
            <Image src={gallery1} alt="team image" className="img-fluid" />
            <h3>Team Gallery</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
