import React from "react";
import { motion } from "framer-motion";
import Container from "../utils/Container";
import Features from "./feature/Features";
import Feature2 from "./feature/Feature2";
import TestimonialSlider from "./Testimonials";
import DigitalToolsSlider from "./DigitalToolsSlider ";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div>
      <Container>
        <header className="text-center mt-16 mb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-[#403D3D] text-6xl font-normal"
              variants={textVariants}
            >
              All-in-one{" "}
              <span className="text-[#598931] font-semibold">
                Digital Platform
              </span>
              <br />
              <span className="text-[#403D3D] mt-4 block">For you</span>
            </motion.h1>
          </motion.div>
        </header>
      </Container>
      <div className="flex gap-3 flex-col">
        <Features />
        <Feature2 />
        <DigitalToolsSlider />
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default HomePage;
