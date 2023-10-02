import { useState } from "react";

import { Waypoint } from "react-waypoint";

import robe from "../../../../assets/robe.png";

const ClientOne = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  const getScale = () => {
    return onScreen ? "lg:scale-[130%] scale-[130%]" : "scale-100";
  };

  return (
    <div className="bg-[#4F7769] h-screen w-screen">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-center items-center h-full lg:gap-32">
        <div className="h-screen overflow-hidden ms-2 lg:ms-0 pt-5">
          <img
            src={robe}
            className={`${getScale()} origin-top transition duration-1000 ease-in lg:object-cover lg:w-[800px]`}
            alt="Robe Image"
          />
        </div>
        <Waypoint onEnter={() => setOnScreen(true)}>
          <div
            className={`flex flex-col items-center lg:items-start gap-2 lg:gap-7 ${getOpactity()} transition-all duration-[1.5s] lg:pe-14 pt-28`}
          >
            <h2 className="text-stroke text-center lg:text-start text-[80px] lg:text-8xl font-medium text-[#4F7769]">
              BOVA
            </h2>
            <p className="text-white text-center lg:text-start text-2xl font-light lg:max-w-[353px] font-['Inter'] opacity-70 hidden lg:block">
              Створення фотоконтенту для дизайнерської лінійки халатів ручної
              роботи
            </p>
            <p className="text-white text-base border rounded-lg px-2 py-1 lg:max-w-[214px] text-center">
              Створення фотоконтенту
            </p>
          </div>
        </Waypoint>
      </div>
    </div>
  );
};

export default ClientOne;
