import { useState } from "react";

import { Waypoint } from "react-waypoint";
import diamonds from "../../../../assets/diamonds.png";

const ClientThree = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  return (
    <div className="bg-[#BAC4CC] h-screen w-screen">
      <div className="container mx-auto flex flex-col lg:flex-row justify-end items-center h-full relative">
        <img
          src={diamonds}
          className="max-w-[800px] absolute left-24 z-0"
          alt=""
        />
        <Waypoint onEnter={() => setOnScreen(true)}>
          <div
            className={`flex flex-col items-center lg:items-start gap-7  pt-52 ${getOpactity()} transition-all duration-[1.5s] relative z-10 pe-32`}
          >
            <p className="text-black text-2xl font-['Inter'] max-w-[300px] lg:max-w-[383px] text-center lg:text-start">
              Створення фото та колажів для ювелірно-біжутерної компанії{" "}
            </p>
            <p className="text-base text-black border border-black rounded-lg px-2 py-1 lg:max-w-[214px] text-center">
              Сторення фотоконтенту
            </p>
          </div>
        </Waypoint>
      </div>
    </div>
  );
};

export default ClientThree;
