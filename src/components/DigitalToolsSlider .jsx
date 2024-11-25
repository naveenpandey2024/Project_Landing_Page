import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import { items } from "../utils/data";

const DigitalToolsSlider = () => {
  const [isTransformed, setIsTransformed] = useState(false);
  const [startIndex, setStartIndex] = useState(0); // Track the starting index for sliding
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTransformed(true); // Trigger animation when in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the container is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % items.length); // Increment index cyclically
  };

  return (
    <div
      className="bg-[#598931] min-h-screen w-full flex justify-center items-start flex-col"
      ref={containerRef} // Attach the ref to the main container
    >
      {/* Header Animation */}
      <motion.h1
        className="ml-20 text-4xl text-white font-semibold"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isTransformed ? 1 : 0, x: isTransformed ? 0 : -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        "Explore Our Comprehensive Range <br /> of Digital Tools"
      </motion.h1>

      {/* Image Slider */}
      <div className="flex justify-start items-center ml-[30rem] gap-8 mt-10 relative overflow-hidden pr-[150px]">
        {Array(4)
          .fill(0)
          .map((_, index) => {
            const currentIndex = (startIndex + index) % items.length; // Adjust index based on sliding

            return (
              <motion.div
                key={currentIndex}
                className="flex-shrink-0 relative"
                initial={{
                  x: isTransformed
                    ? 0
                    : 200 + Math.cos((index / 4) * 2 * Math.PI) * 150,
                  y: isTransformed
                    ? 0
                    : 200 + Math.sin((index / 4) * 2 * Math.PI) * 150,
                  rotate: isTransformed ? 0 : index * 45,
                }}
                animate={{
                  x: isTransformed ? 0 : undefined,
                  y: isTransformed ? 0 : undefined,
                  rotate: isTransformed ? 0 : undefined,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              >
                <img
                  src={items[currentIndex].image}
                  alt={items[currentIndex].alt}
                  className="w-[250px] object-contain rounded-lg"
                />
              </motion.div>
            );
          })}

        {/* Right Arrow Icon */}
        <div
          onClick={handleSlide} // Handle slide on click
          className="absolute right-[65px] top-1/2 transform -translate-y-1/2 bg-[#4D8733] bg-opacity-[0.56] text-white p-4 rounded-full shadow-lg cursor-pointer"
        >
          <FaChevronRight className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default DigitalToolsSlider;
