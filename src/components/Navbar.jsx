import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "../utils/Container";

const navItems = [
  {
    name: "All Products",
    path: "/all-products",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Container>
      <div className="flex justify-between items-center mx-auto mt-5">
        {/* Logo */}
        <div>
          <img
            src="./images/logo.svg"
            alt="logo"
            className="h-[44px] w-[44px]"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <nav className="flex justify-between gap-12 items-center">
            <ul className="flex justify-between gap-12">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className="text-[#565656] text-[18px] font-normal cursor-pointer hover:text-[#598931]"
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <button className="px-3 py-2 bg-[#598931] rounded-md border-none outline-none text-white">
              Sign in / Login
            </button>
          </nav>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-[#565656]">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col gap-4 items-center bg-white shadow-md py-4 rounded-lg">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className="text-[#565656] text-[18px] font-normal cursor-pointer hover:text-[#598931]"
                  onClick={toggleMenu}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <button
              onClick={toggleMenu}
              className="px-3 py-2 bg-[#598931] rounded-md border-none outline-none text-white"
            >
              Sign in / Login
            </button>
          </nav>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
