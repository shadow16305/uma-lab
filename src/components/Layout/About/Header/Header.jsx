import { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import Typewriter from "typewriter-effect/dist/core";

import dash from "../../../../assets/dash.svg";

const Header = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  useEffect(() => {
    const typewriter = new Typewriter(document.querySelector(".typewriter"), {
      cursor: "█",
      autoStart: true,
    });

    typewriter
      .changeDelay(20)
      .typeString("відкрийте майбутнє вашого бізнесу")
      .start();
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center h-[895px] lg:h-[800px]`}
    >
      <Waypoint
        onEnter={() => setOnScreen(true)}
        onLeave={() => setOnScreen(false)}
      >
        <h1
          className={`text-stroke text-7xl lg:text-[215px] font-bold flex transition-all duration-[1.5s] ${getOpactity()}`}
        >
          UMA <img src={dash} alt="" /> LAB
        </h1>
      </Waypoint>
      <p className="text-white text-xl lg:text-[41px] tracking-[0.615px] leading-normal typewriter"></p>
    </div>
  );
};

export default Header;
