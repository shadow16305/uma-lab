import { useEffect } from "react";

import Typewriter from "typewriter-effect/dist/core";
import hero_img from "../../assets/umalogo.png";

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
      className="text-white bg-[#1a1a1a] justify-center items-center flex flex-col mt-24 md:mt-16 pb-60 lg:pb-40 md:gap-y-20 scroll-mt-16"
      id="hero">
      <div className="flex flex-col text-center gap-y-5 mt-9 md:mt-36">
        <img src={hero_img} className="mx-auto" width={165} height={500} alt="logo" />
        <h1 className="text-4xl font-bold md:text-8xl">UMA - LAB</h1>
      </div>

      <div className="md:mx-auto md:w-10/12 xl:w-[77.79%] mt-20 sm:mt-0">
        <div className="flex flex-col justify-center items-center h-[194px] md:self-center relative">
          <p className="w-[340px] md:w-9/12 lg:w-8/12 text-lg md:text-xl typewriter absolute"></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
