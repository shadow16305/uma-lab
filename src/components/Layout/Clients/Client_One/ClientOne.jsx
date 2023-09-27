import { useState } from "react";

import { Waypoint } from "react-waypoint";

import robe from "../../../../assets/robe.png";

const ClientOne = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  const getScale = () => {
    return onScreen ? "scale-[130%]" : "scale-100";
  };

  return (
    <div className="bg-[#4F7769] h-screen w-screen">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center h-full gap-20 lg:gap-0">
        <div className="h-screen overflow-hidden">
          <img
            src={robe}
            className={`${getScale()} origin-top transition duration-1000 ease-in object-cover`}
            alt=""
          />
        </div>
        <Waypoint onEnter={() => setOnScreen(true)}>
          <div
            className={`flex flex-col items-center lg:items-start gap-7 ${getOpactity()} transition-all duration-[1.5s] pb-14 lg:pb-0`}
          >
            <h2 className="text-stroke text-center lg:text-start text-8xl font-medium text-[#4F7769]">
              BOVA
            </h2>
            <p className="text-white text-center lg:text-start text-2xl font-light lg:max-w-[353px] font-['Inter'] opacity-70">
              Створення фотоконтенту для дизайнерської лінійки халатів ручної
              роботи
            </p>
            <p className="text-white text-base border rounded-lg px-2 py-1 max-w-[200px] lg:max-w-[214px] text-center">
              Сторення фотоконтенту
            </p>
          </div>
        </Waypoint>
      </div>
    </div>
  );
};

export default ClientOne;
