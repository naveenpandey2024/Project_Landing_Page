
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, Tech.",
      image: "/public/images/image1.png",
      quote:
        "This platform has transformed how we manage our business operations. The intuitive interface and comprehensive features have made a significant impact on our productivity.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, Digital",
      image: "/public/images/image.png",
      quote:
        "The range of tools available has streamlined our workflow tremendously. It's been instrumental in scaling our business operations effectively.",
    },
    {
      id: 3,
      name: "Jim Sheppard",
      role: "Visionary and Marketing CEO.",
      image: "/public/images/Jim.png",
      quote:
        "As a business owner, CEOITBOX has been a game-changer for me. Their range of websites covers everything I need—from productivity tools to data management. It's a one-stop shop for all my business needs!",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "CTO, Future",
      image: "/public/images/image2.png",
      quote:
        "The comprehensive suite of features has exceeded our expectations. It's truly an all-in-one solution for modern businesses.",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Operations Manager",
      image: "/public/images/image3.png",
      quote:
        "We've seen remarkable improvements in our team's efficiency since implementing this solution. The support team has been exceptional throughout.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  // Ref for the section and InView hook to track visibility
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: -50 }} // Start off-screen (above)
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing effect
      className="w-full bg-gray-50 py-10 sm:py-12 lg:py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Quote Icon */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 text-[#598931]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Testimonial Quote */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-sm sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
            {testimonials[currentIndex].quote}
          </p>
        </div>

        {/* Testimonials Avatar */}
        <div className="relative flex justify-center items-center gap-2 sm:gap-4 mt-6 sm:mt-8">
          {testimonials.map((testimonial, index) => {
            const isCenter = index === currentIndex;
            const position = index - currentIndex;

            return (
              <motion.div
                key={testimonial.id}
                className={`transition-all duration-300 cursor-pointer ${
                  isCenter ? "z-10" : "z-0"
                } ${Math.abs(position) <= 2 ? "block" : "hidden"}`}
                style={{
                  opacity: isCenter ? 1 : 0.5,
                  transform: `translateX(${position * 16}px) scale(${
                    isCenter ? 1.2 : 0.9
                  })`,
                }}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`rounded-full overflow-hidden flex justify-between gap-2 mx-2 sm:mx-4 ${
                    isCenter ? "border-[#598931]" : "border-transparent"
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full ${
                      isCenter &&
                      "border-[#4D8733] border-[2px] border-solid"
                    }`}
                  />
                  {isCenter && (
                    <div className="text-center mt-2 sm:mt-4 opacity-100">
                      <h3 className="font-semibold text-xs sm:text-sm text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialSlider;
