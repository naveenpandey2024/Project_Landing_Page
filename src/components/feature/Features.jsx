import React from "react";
import { items } from "../../utils/data";
import "./Features.css"; // Create and import a CSS file for animation

const Features = () => {
  return (
    <div className="flex items-center justify-center w-full mx-auto mb-10">
      <div className="bg-[#598931] h-[500px] w-[500px] rounded-full flex justify-center items-center animate-slide-in">
        <div className="relative flex justify-center items-center w-[1000px] h-[400px] mx-auto">
          {items.map((item, index) => {
            const styles = {
              left: `${index * 80}px`,
              zIndex: index === 2 ? 10 : 5 - Math.abs(index - 2),
              top:
                index === 0 || index === 4
                  ? "7rem"
                  : index === 1 || index === 3
                  ? "4rem"
                  : "0px",
            };
            const centralStyles = index === 2 ? "scale-110 mt-[2rem]" : "";
            return (
              <img
                key={index}
                src={item.image}
                alt={item.alt}
                className={`absolute transform transition-all duration-500 w-[200px] object-contain ${centralStyles} ${item.rotate}`}
                style={styles}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
