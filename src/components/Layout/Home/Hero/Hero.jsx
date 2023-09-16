import React, { useEffect } from "react";

import Typewriter from "typewriter-effect/dist/core";
import hero_img from "../../../../assets/umalogo.png";

function Hero() {
  useEffect(() => {
    const typewriter = new Typewriter(document.querySelector(".typewriter"), {
      cursor: "|",
      autoStart: true,
    });

    typewriter
      .changeDelay(6)
      .typeString(
        "Діджитал-агентство. Інструменти розвитку вашого бізнесу, будь-якого масштабу. Створюємо продукт з найкращими технологіями та світовими принципами дизайну. Контент-мейкери, дизайнери, оптимізатори, розробники — це все UMA."
      )
      .start();
  }, []);

  return (
    <div
      className="text-white bg-[#1a1a1a] justify-center items-center flex flex-col mt-44 md:mt-16 pb-52 md:gap-y-20"
      id="hero"
    >
      <div className="flex flex-col gap-y-5 text-center mt-9 md:mt-36">
        <img
          src={hero_img}
          className="mx-auto"
          width={165}
          height={500}
          alt="logo"
        />
        <h1 className="text-4xl md:text-8xl font-bold">UMA - LAB</h1>
      </div>

      <div className="md:mx-auto lg:w-10/12 xl:w-[77.79%] mt-8 sm:mt-0">
        <div className="flex flex-col justify-center items-center h-[194px] lg:self-center">
          <p className="text-center md:text-start w-11/12 md:w-9/12 lg:w-8/12 text-lg md:text-xl typewriter"></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
