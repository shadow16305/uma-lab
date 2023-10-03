import { useState } from "react";

import { Waypoint } from "react-waypoint";
import diamonds from "../../../../assets/diamonds.png";
import diamonds_two from "../../../../assets/diamonds_two.png";

const ClientThree = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  return (
    <div className="bg-[#c2cdd3] md:h-screen w-screen">
      <div className="container mx-auto flex flex-col-reverse md:flex-row md:justify-end justify-end items-center md:h-full relative pt-10">
        <img
          src={diamonds}
          className="md:max-w-[800px] md:absolute md:left-24 md:z-0 hidden md:block"
          alt="Diamonds"
        />
        <img src={diamonds_two} className="md:hidden" alt="Diamond" />
        <Waypoint onEnter={() => setOnScreen(true)}>
          <div
            className={`flex flex-col items-center md:items-start gap-7 md:pt-52 ${getOpactity()} transition-all duration-[1.5s] relative z-10 md:pe-14 pt-24`}
          >
            <h2 className="text-stroke-dark text-center md:text-start text-7xl md:text-8xl font-medium text-[#c2cdd3] uppercase">
              Gemrays
            </h2>
            <p className="text-black text-2xl font-['Inter'] max-w-[300px] md:max-w-[383px] text-center md:text-start hidden md:block">
              Створення фото та колажів для ювелірно-біжутерної компанії{" "}
            </p>
            <p className="text-base text-black border border-black rounded-lg px-2 py-1 md:max-w-[214px] text-center">
              Створення фотоконтенту
            </p>
          </div>
        </Waypoint>
      </div>
    </div>
  );
};

export default ClientThree;
