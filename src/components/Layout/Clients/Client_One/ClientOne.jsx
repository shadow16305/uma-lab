import { useState } from "react";

import { Waypoint } from "react-waypoint";

const ClientOne = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  return (
    <div className="bg-[url('/src/assets/Client_one.png')] bg-cover bg-no-repeat h-screen w-screen">
      <div className="container mx-auto flex justify-end items-center h-full">
        <Waypoint onEnter={() => setOnScreen(true)}>
          <div
            className={`flex flex-col pe-72 gap-7 ${getOpactity()} transition-all duration-[1.5s]`}
          >
            <h2 className="text-stroke text-8xl font-medium text-[#4F7769]">
              BOVA
            </h2>
            <p className="text-white text-2xl font-light lg:max-w-[353px] font-['Inter'] opacity-70">
              Створення фотоконтенту для дизайнерської лінійки халатів ручної
              роботи
            </p>
            <p className="text-white text-base border rounded-lg px-2 py-1 lg:max-w-[214px] text-center">
              Сторення фотоконтенту
            </p>
          </div>
        </Waypoint>
      </div>
    </div>
  );
};

export default ClientOne;
