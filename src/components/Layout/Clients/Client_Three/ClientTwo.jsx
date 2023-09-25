import { useState } from "react";

import { Waypoint } from "react-waypoint";

const ClientThree = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  return (
    <div className="bg-[url('/src/assets/client_two.png')] bg-no-repeat bg-cover h-screen w-screen">
      <div className="container mx-auto flex justify-end items-center h-full">
        <Waypoint onEnter={() => setOnScreen(true)}>
          <div
            className={`flex flex-col gap-7 pe-52 pt-52 ${getOpactity()} transition-all duration-[1.5s]`}
          >
            <p className="text-black text-2xl font-['Inter'] lg:max-w-[383px]">
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
