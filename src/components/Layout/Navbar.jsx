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
        className={`flex justify-between items-center w-screen px-6 lg:px-10 py-2 fixed top-0 z-30 ${
          isOpen ? "bg-none" : "bg-[#1a1a1a]"
        } `}
      >
        <h3>
          <Link smooth to="/#hero" onClick={() => setIsOpen(false)}>
            <img src={logo} className="w-[45px] h-[30px]" alt="" />
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
            : "top-[-1000px] lg:top-[-2000px] h-screen w-screen"
        } transition-all duration-700 fixed bg-[url('/src/assets/darker01.png')] bg-[#1a1a1a] z-20 py-32`}
      >
        <ul className="list-none uppercase gap-8 lg:gap-x-20 lg:gap-16 flex flex-col lg:flex-row lg:flex-wrap items-center lg:items-start lg:ps-10 lg:mx-auto lg:max-w-[1200px] lg:h-[479px]">
          {navLinks.map((item) => (
            <li key={item.id} className="flex item-center gap-5">
              <span className="text-white hidden lg:block italic pt-6">
                {item.number}
              </span>
              <Link
                smooth
                to={item.link}
                className="text-white text-[40px] lg:text-[90px] font-medium lg:w-[500px] pseudo-text-effect"
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
