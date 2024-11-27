// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import HomePage from "./HomePage";
// import Features from "./feature/Features";
// import Feature2 from "./feature/Feature2";
// import TestimonialSlider from "./Testimonials";
// import DigitalToolsSlider from "./DigitalToolsSlider ";
// const OnePageWebsite = () => {
//   const sections = [
//     { id: 0, component: <HomePage /> },
//     { id: 1, component: <Features /> },
//     { id: 2, component: <Feature2 /> },
//     { id: 3, component: <DigitalToolsSlider /> },
//     { id: 4, component: <TestimonialSlider /> },
//   ];

//   const [currentSection, setCurrentSection] = useState(0);
//   const [animationKey, setAnimationKey] = useState(0); // Key to trigger re-render for animation

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSection((prevSection) => {
//         const nextSection = (prevSection + 1) % sections.length;
//         setAnimationKey(nextSection); // Trigger animation re-render
//         return nextSection;
//       });
//     }, 4500);

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [sections.length]);

//   return (
//     <div>
//       <Navbar />
//       {sections.map((section, index) => (
//         <div
//           key={`${section.id}-${animationKey}`} // Unique key for triggering animation
//           style={{
//             display: currentSection === index ? "block" : "none",
//             animation: currentSection === index ? "fadeIn 1s ease-in-out" : "none",
//           }}
//         >
//           {section.component}
//         </div>
//       ))}
//       <style>
//         {`
//           @keyframes fadeIn {
//             0% {
//               opacity: 0;
//             }
//             100% {
//               opacity: 1;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default OnePageWebsite;


// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import HomePage from "./HomePage";
// import Features from "./feature/Features";
// import Feature2 from "./feature/Feature2";
// import TestimonialSlider from "./Testimonials";
// import DigitalToolsSlider from "./DigitalToolsSlider ";

// const OnePageWebsite = () => {
//   const sections = [
//     { id: 0, component: <HomePage /> },
//     { id: 1, component: <Features /> },
//     { id: 2, component: <Feature2 /> },
//     { id: 3, component: <DigitalToolsSlider /> },
//   ];

//   const [currentSection, setCurrentSection] = useState(0);
//   const [animationKey, setAnimationKey] = useState(0); // Key to trigger re-render for animation
//   const [isTestimonialVisible, setTestimonialVisible] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSection((prevSection) => {
//         const nextSection = (prevSection + 1) % sections.length;
//         setAnimationKey(nextSection); // Trigger animation re-render
//         return nextSection;
//       });
//     }, 4500);

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [sections.length]);

//   // Handle scroll to show testimonials
//   useEffect(() => {
//     const handleScroll = () => {
//       const testimonialElement = document.getElementById("testimonial-section");
//       if (testimonialElement) {
//         const rect = testimonialElement.getBoundingClientRect();
//         const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
//         setTestimonialVisible(isVisible);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       {sections.map((section, index) => (
//         <div
//           key={`${section.id}-${animationKey}`} // Unique key for triggering animation
//           style={{
//             display: currentSection === index ? "block" : "none",
//             animation: currentSection === index ? "fadeIn 1s ease-in-out" : "none",
//           }}
//         >
//           {section.component}
//         </div>
//       ))}

//       {/* Testimonial Section */}
//       <div
//         id="testimonial-section"
//         style={{
//           animation: isTestimonialVisible ? "fadeIn 1s ease-in-out" : "none",
//         }}
//       >
//         <TestimonialSlider />
//       </div>

//       <style>
//         {`
//           @keyframes fadeIn {
//             0% {
//               opacity: 0;
//             }
//             100% {
//               opacity: 1;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default OnePageWebsite;


// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import HomePage from "./HomePage";
// import Features from "./feature/Features";
// import Feature2 from "./feature/Feature2";
// import TestimonialSlider from "./Testimonials";
// import DigitalToolsSlider from "./DigitalToolsSlider ";

// const OnePageWebsite = () => {
//   const sections = [
//     { id: 0, component: <HomePage /> },
//     { id: 1, component: <Features /> },
//     { id: 2, component: <Feature2 /> },
//     { id: 3, component: <DigitalToolsSlider /> },
//   ];

//   const [currentSection, setCurrentSection] = useState(0);
//   const [animationKey, setAnimationKey] = useState(0); // Key to trigger re-render for animation
//   const [isTestimonialVisible, setTestimonialVisible] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (!isTestimonialVisible) {
//       // Only run animation interval when testimonial is not visible
//       interval = setInterval(() => {
//         setCurrentSection((prevSection) => {
//           const nextSection = (prevSection + 1) % sections.length;
//           setAnimationKey(nextSection); // Trigger animation re-render
//           return nextSection;
//         });
//       }, 4000);
//     }

//     return () => clearInterval(interval); // Cleanup on component unmount or when testimonial becomes visible
//   }, [sections.length, isTestimonialVisible]);

//   // Handle scroll to show testimonials
//   useEffect(() => {
//     const handleScroll = () => {
//       const testimonialElement = document.getElementById("testimonial-section");
//       if (testimonialElement) {
//         const rect = testimonialElement.getBoundingClientRect();
//         const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
//         setTestimonialVisible(isVisible);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div>
//         {sections.map((section, index) => (
//           <div
//             key={`${section.id}-${animationKey}`} // Unique key for triggering animation
//             style={{
//               display: currentSection === index ? "block" : "none",
//               animation: currentSection === index
//                 ? "fadeIn 1s ease-in-out"
//                 : "none",
//             }}
//           >
//             {section.component}
//           </div>
//         ))}
//       </div>

//       {/* Testimonial Section */}
//       <div
//         id="testimonial-section"
//         style={{
//           animation: isTestimonialVisible ? "fadeIn 1s ease-in-out" : "none",
//         }}
//       >
//         <TestimonialSlider />
//       </div>

//       <style>
//         {`
//           @keyframes fadeIn {
//             0% {
//               opacity: 0;
//             }
//             100% {
//               opacity: 1;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default OnePageWebsite;


import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Features from "./feature/Features";
import Feature2 from "./feature/Feature2";
import TestimonialSlider from "./Testimonials";
import DigitalToolsSlider from "./DigitalToolsSlider ";


const OnePageWebsite = () => {
  const sections = [
    { id: 0, component: <HomePage /> },
    { id: 1, component: <Features /> },
    { id: 2, component: <Feature2 /> },
    { id: 3, component: <DigitalToolsSlider /> },
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // Key to trigger re-render for animation
  const [isTestimonialVisible, setTestimonialVisible] = useState(false);

  useEffect(() => {
    let interval;
    if (!isTestimonialVisible) {
      // Only run animation interval when testimonial is not visible
      interval = setInterval(() => {
        setCurrentSection((prevSection) => {
          const nextSection = (prevSection + 1) % sections.length;
          setAnimationKey(nextSection); // Trigger animation re-render
          return nextSection;
        });
      }, 4000);
    }

    return () => clearInterval(interval); // Cleanup on component unmount or when testimonial becomes visible
  }, [sections.length, isTestimonialVisible]);

  // Handle scroll to show testimonials
  useEffect(() => {
    const handleScroll = () => {
      const testimonialElement = document.getElementById("testimonial-section");
      if (testimonialElement) {
        const rect = testimonialElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setTestimonialVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        {sections.map((section, index) => (
          <div
            key={`${section.id}-${animationKey}`} // Unique key for triggering animation
            style={{
              display: currentSection === index ? "block" : "none",
              animation: currentSection === index
                ? "fadeIn 1s ease-in-out"
                : "none",
            }}
          >
            {section.component}
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
      <div
        id="testimonial-section"
        style={{
          visibility: isTestimonialVisible ? "visible" : "hidden", // Only visible when scrolled into view
          opacity: isTestimonialVisible ? 1 : 0, // Smooth transition when visible
          transition: "opacity 1s ease-in-out",
        }}
      >
        <TestimonialSlider />
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default OnePageWebsite;
