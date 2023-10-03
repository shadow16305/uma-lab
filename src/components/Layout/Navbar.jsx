import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import { navLinks } from "../Tools/item-database";

import logo from "../../assets/umalogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-1 w-8 my-1 bg-white transition ease transform duration-300`;

  return (
    <div>
      <div
        className={`flex justify-between items-center w-screen px-6 md:px-10 py-2 fixed top-0 z-30 ${
          isOpen ? "bg-none" : "bg-[#1a1a1a]"
        } `}
      >
        <h3>
          <Link smooth to="/#hero" onClick={() => setIsOpen(false)}>
            <img src={logo} className="w-[45px] h-[30px]" alt="Uma Lab" />
          </Link>
        </h3>
        <button
          className="flex flex-col h-12 w-12 justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "rotate-45 translate-y-3" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`${
          isOpen
            ? "top-0 h-full w-screen"
            : "top-[-2000px] md:top-[-2000px] lg:top-[-1500px] 2xl:top-[-3000px] h-screen w-screen"
        } transition-all duration-700 fixed bg-[url('/src/assets/darker01.png')] bg-[#1a1a1a] z-20 py-32`}
      >
        <ul className="list-none uppercase gap-8 md:gap-x-20 lg:gap-16 flex flex-col md:flex-row md:flex-wrap items-center justify-center lg:items-start lg:ps-10 md:mx-auto lg::max-w-[1200px] h-full lg:h-[479px]">
          {navLinks.map((item) => (
            <li key={item.id} className="flex item-center gap-5">
              <span className="text-white hidden md:block italic pt-6">
                {item.number}
              </span>
              <Link
                smooth
                to={item.link}
                className="text-white text-[40px] md:text-[52px] lg:text-[90px] font-medium md:w-[300px] lg:w-[500px] pseudo-text-effect"
                data-after={item.name}
                onClick={() => setIsOpen(false)}
              >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
