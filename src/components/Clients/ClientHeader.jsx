import { useState } from "react";

import { Waypoint } from "react-waypoint";

import blob from "../../assets/blob.png";

const ClientHeader = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  return (
    <Waypoint onEnter={() => setOnScreen(true)}>
      <div className="md:bg-[url('/src/assets/Clients.png')] bg-contain md:bg-cover bg-no-repeat h-screen w-screen relative">
        <img src={blob} className="absolute right-0 md:hidden" width={350} alt="Blob" />
        <div className="container flex items-center justify-center h-full mx-auto md:items-start">
          <h1
            className={`text-white text-7xl md:text-[215px] font-bold leading-tight pt-28 ps-5 ${getOpactity()} transition-all duration-[1.5s]`}>
            НАШІ КЛІЄНТИ
          </h1>
        </div>
      </div>
    </Waypoint>
  );
};

export default ClientHeader;
