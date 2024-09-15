import { useContext, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollContext } from "../../context/scroll-context";

import { navLinks } from "../../constants/content";

import logo from "../../assets/umalogo.png";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollCtx = useContext(ScrollContext);
  const location = useLocation();

  const genericHamburgerLine = `${
    location.pathname === "/clients" ? (scrollCtx.scrolled ? "bg-black" : "bg-white") : "bg-white"
  } h-1 w-8 my-1 transition ease transform duration-300`;

  return (
    <>
      <div
        className={`flex justify-between items-center w-screen px-6 md:px-10 py-2 fixed top-0 z-30 ${
          isOpen ? "bg-none" : `${location.pathname === "/clients" && "bg-transparent"}`
        } `}>
        <h3>
          <Link smooth to="/#hero" onClick={() => setIsOpen(false)}>
            <img
              src={logo}
              className={`${location.pathname === "/clients" && scrollCtx.scrolled && "invert"} w-[45px] h-[30px]`}
              alt="Uma Lab"
            />
          </Link>
        </h3>
        <button
          className="flex flex-col items-center justify-center w-12 h-12 group"
          onClick={() => setIsOpen(!isOpen)}>
          <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-3" : ""}`} />
          <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`} />
          <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-3" : ""}`} />
        </button>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 bg-[url('/src/assets/darker01.png')] bg-[#1a1a1a] z-20 h-screen w-screen flex items-center justify-center lg:justify-start origin-top`}>
            <ul className="list-none uppercase gap-8 md:gap-x-20 lg:gap-16 flex flex-col md:flex-row md:flex-wrap items-center justify-center lg:items-start lg:justify-start lg:ps-10 md:mx-auto lg:max-w-[1200px] h-full lg:h-[479px]">
              {navLinks.map((item, index) => (
                <motion.li
                  key={index}
                  initial="hidden"
                  animate="onscreen"
                  exit="hidden"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -100,
                    },
                    onscreen: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, delay: index * 0.2 },
                    },
                  }}
                  className="flex gap-5 item-center">
                  <span className="hidden pt-6 italic text-white md:block">{item.number}</span>
                  <Link
                    to={item.link}
                    smooth
                    className="text-white text-[40px] md:text-[52px] lg:text-[90px] font-medium md:w-[300px] lg:w-[500px] pseudo-text-effect"
                    data-after={item.name}
                    onClick={() => setIsOpen(false)}>
                    <span>{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
