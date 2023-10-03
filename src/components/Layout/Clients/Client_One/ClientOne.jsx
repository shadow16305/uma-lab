import { useState } from "react";

import { Waypoint } from "react-waypoint";

import robe from "../../../../assets/robe.png";

const ClientOne = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  const getScale = () => {
    return onScreen ? "md:scale-[130%] scale-[130%]" : "scale-100";
  };

  return (
    <div className="bg-[#4F7769] h-screen w-screen">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center h-full md:gap-32">
        <div className="h-screen overflow-hidden ms-2 md:ms-0 pt-5">
          <img
            src={robe}
            className={`${getScale()} origin-top transition duration-1000 ease-in md:object-cover md:w-[800px]`}
            alt="Robe"
          />
        </div>
        <Waypoint onEnter={() => setOnScreen(true)}>
          <div
            className={`flex flex-col items-center md:items-start gap-2 md:gap-7 ${getOpactity()} transition-all duration-[1.5s] md:pe-14 pt-28`}
          >
            <h2 className="text-stroke text-center md:text-start text-[80px] md:text-8xl font-medium text-[#4F7769]">
              BOVA
            </h2>
            <p className="text-white text-center md:text-start text-2xl font-light md:max-w-[353px] font-['Inter'] opacity-70 hidden md:block">
              Створення фотоконтенту для дизайнерської лінійки халатів ручної
              роботи
            </p>
            <p className="text-white text-base border rounded-lg px-2 py-1 md:max-w-[214px] text-center">
              Створення фотоконтенту
            </p>
          </div>
        </Waypoint>
      </div>
    </div>
  );
};

export default ClientOne;
