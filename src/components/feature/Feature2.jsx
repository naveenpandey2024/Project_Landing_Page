import React, { useState, useEffect, useRef } from "react";
import { items } from "../../utils/data";

const Feature2 = () => {
  const [isTransformed, setIsTransformed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTransformed(true); // Start the transformation when visible
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
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

  return (
    <div className="bg-[#598931] min-h-screen w-full flex justify-center items-center">
      <div
        className="relative flex justify-center items-center w-[600px] h-[400px]"
        ref={containerRef} // Attach the ref to the container
      >
        {items.map((item, index) => {
          // Define the initial circular layout
          const angle = (index / items.length) * 2 * Math.PI; // Angle for circular positioning
          const initialLeft = 200 + Math.cos(angle) * 150; // x-coordinate in circular layout
          const initialTop = 200 + Math.sin(angle) * 150; // y-coordinate in circular layout

          // Define the final layout styles
          const finalLeft = index * 98; // Horizontal spacing for final layout
          const finalTop =
            index === 1 || index === 3
              ? "1rem" // Second and fourth cards
              : index === 0 || index === 4
              ? "0.7rem" // First and fifth cards
              : "0.6rem"; // Third card

          const finalZIndex = index === 2 ? 10 : 5 - Math.abs(index - 2);

          // Determine styles based on transformation state
          const styles = {
            left: `${isTransformed ? finalLeft : initialLeft}px`,
            top: isTransformed ? finalTop : `${initialTop}px`,
            zIndex: isTransformed ? finalZIndex : 5 - index,
            transform: isTransformed ? "rotate(0deg)" : `rotate(${index * 45}deg)`,
          };

          const centralStyles =
            index === 2 ? "scale-110 mt-[2rem]" : "opacity-80";

          return (
            <img
              key={index}
              src={item.image}
              alt={item.alt}
              className={`absolute transform transition-all duration-1000 w-[200px] object-contain ${centralStyles}`}
              style={styles}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feature2;
