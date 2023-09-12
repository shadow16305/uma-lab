import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/umalogo.png";
import hamburger from "../../assets/hamburger.png";
import close from "../../assets/close.png";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-[#1a1a1a] bg-opacity-70 backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-6 mx-auto md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link to="/">
                <img
                  src={logo}
                  className=""
                  width={35}
                  height={30}
                  alt="logo"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <img
                      src={close}
                      className="invert"
                      width={30}
                      height={30}
                      alt="logo"
                    />
                  ) : (
                    <img
                      src={hamburger}
                      width={30}
                      height={30}
                      alt="logo"
                      className="invert focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-2 text-base text-white py-2 md:px-2 text-center border-b-2 md:border-b-0  hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent">
                  <Link to="/about" onClick={() => setNavbar(!navbar)}>
                    <p className="">Послуги</p>
                  </Link>
                </li>

                <li className="pb-2 text-base hidden md:block text-white py-2 text-center border-b-2 md:border-b-0  hover:bg-sky-600 border-sky-600 md:hover:text-sky-600 md:hover:bg-transparent">
                  <p className="text-sky-500">|</p>
                </li>

                <li className="pb-2 text-base justify-center md:justify-normal text-white py-2 px-2 text-center border-b-2 md:border-b-0  hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent">
                  <Link to="#blog" onClick={() => setNavbar(!navbar)}>
                    <p className="flex flex-row justify-center md:justify-normal">
                      Клієнти
                    </p>
                  </Link>
                </li>

                <li className="pb-2 text-base text-white hidden md:block py-2 text-center  border-b-2 md:border-b-0  hover:bg-sky-600  border-sky-600  md:hover:text-sky-600 md:hover:bg-transparent">
                  <p className="text-sky-500">|</p>
                </li>

                <li className="pb-2 text-base text-white py-2 px-2 text-center border-b-2 md:border-b-0  hover:bg-sky-600  border-sky-600 md:hover:text-sky-600 md:hover:bg-transparent">
                  <a href="#footer" onClick={() => setNavbar(!navbar)}>
                    <p className="flex flex-row justify-center md:justify-normal">
                      Контакти
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
