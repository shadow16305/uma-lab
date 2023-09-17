import { useState, useEffect } from "react";

import { Waypoint } from "react-waypoint";
import Typewriter from "typewriter-effect/dist/core";

import dash from "../../../../assets/dash.svg";
import dash_mobile from "../../../../assets/dash_mobile.svg";

const Header = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  useEffect(() => {
    const typewriter = new Typewriter(document.querySelector(".typewriter"), {
      cursor: "|",
      autoStart: true,
    });

    typewriter
      .changeDelay(20)
      .typeString("відкрийте майбутнє Вашого бізнесу")
      .start();
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center h-[895px] lg:h-[800px]`}
    >
      <Waypoint onEnter={() => setOnScreen(true)}>
        <h1
          className={`text-stroke text-7xl lg:text-[215px] font-bold flex transition-all duration-[1.5s] ${getOpactity()}`}
        >
          UMA <img src={dash} className="hidden lg:block" alt="" />{" "}
          <img src={dash_mobile} className="lg:hidden" alt="" /> LAB
        </h1>
      </Waypoint>
      <p className="text-white text-xl lg:text-[41px] tracking-[0.615px] leading-normal typewriter"></p>
    </div>
  );
};

export default Header;
