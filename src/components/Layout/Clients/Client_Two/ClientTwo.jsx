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
    <div className="bg-[#d4deea] lg:h-screen w-screen">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row lg:justify-end justify-end items-center lg:h-full relative pt-10">
        <img
          src={diamonds}
          className="lg:max-w-[800px] lg:absolute lg:left-24 lg:z-0 hidden lg:block"
          alt=""
        />
        <img src={diamonds_two} className="lg:hidden" alt="" />
        <Waypoint onEnter={() => setOnScreen(true)}>
          <div
            className={`flex flex-col items-center lg:items-start gap-7 lg:pt-52 ${getOpactity()} transition-all duration-[1.5s] relative z-10 lg:pe-32 pt-24`}
          >
            <h2 className="text-stroke-dark text-center lg:text-start text-8xl font-medium text-[#d4deea]">
              BOVA
            </h2>
            <p className="text-black text-2xl font-['Inter'] max-w-[300px] lg:max-w-[383px] text-center lg:text-start hidden lg:block">
              Створення фото та колажів для ювелірно-біжутерної компанії{" "}
            </p>
            <p className="text-base text-black border border-black rounded-lg px-2 py-1 lg:max-w-[214px] text-center">
              Створення фотоконтенту
            </p>
          </div>
        </Waypoint>
      </div>
    </div>
  );
};

export default ClientThree;
