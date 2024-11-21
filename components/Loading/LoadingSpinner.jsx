"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ball from "@/assets/bigball.png";
// components
const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  const pathname = usePathname();
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "linear",
      },
    },
  };
  return (
    <>
      {isLoading && (
        <div className="loading-spinner-container">
          <AnimatePresence mode="wait">
            <div key={pathname}>
              <div>
                <motion.div variants={spinnerVariants} animate="animate">
                  <Image src={ball} alt="ball" className="loading-ball" />
                  {/* You can style this div as a spinner or use an SVG */}
                </motion.div>
              </div>
            </div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;
