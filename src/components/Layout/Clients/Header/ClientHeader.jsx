import { useState } from "react";

import { Waypoint } from "react-waypoint";

import blob from "../../../../assets/blob.png";

const ClientHeader = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  return (
    <Waypoint onEnter={() => setOnScreen(true)}>
      <div className="lg:bg-[url('/src/assets/Clients.png')] bg-contain lg:bg-cover bg-no-repeat h-screen w-screen relative">
        <img
          src={blob}
          className="lg:hidden absolute right-0"
          width={350}
          alt="Blob"
        />
        <div className="container mx-auto flex items-center justify-center lg:items-start h-full">
          <h1
            className={`text-white text-7xl lg:text-[215px] font-bold leading-tight pt-28 ps-5 ${getOpactity()} transition-all duration-[1.5s]`}
          >
            НАШІ КЛІЄНТИ
          </h1>
        </div>
      </div>
    </Waypoint>
  );
};

export default ClientHeader;
