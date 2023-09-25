import { useState } from "react";

import { Waypoint } from "react-waypoint";

const ClientHeader = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  return (
    <Waypoint onEnter={() => setOnScreen(true)}>
      <div className="bg-[url('/src/assets/Clients.png')] bg-cover bg-no-repeat h-screen w-screen">
        <div className="container mx-auto">
          <h1
            className={`text-white lg:text-[215px] font-bold leading-tight py-32 ${getOpactity()} transition-all duration-[1.5s]`}
          >
            НАШІ КЛІЄНТИ
          </h1>
        </div>
      </div>
    </Waypoint>
  );
};

export default ClientHeader;
