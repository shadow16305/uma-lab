import { useState } from "react";

import Carousel from "../../../UI/Carousel";

import { Waypoint } from "react-waypoint";
import { serviceItems } from "../../../Tools/item-database";

const Services = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  return (
    <div className="container mx-auto flex flex-col h-[890px] lg:h-[768px]">
      <div className="w-full flex justify-end">
        <h1
          className={`text-white text-end text-[32px] lg:text-[55px] font-bold max-w-[360px] lg:max-w-[633px] pb-32 pe-6 lg:pe-16 ${getOpactity()} transition-all duration-1000`}
        >
          UMA це інструмент для успіху
        </h1>
      </div>
      <Waypoint
        onEnter={() => setOnScreen(true)}
        onLeave={() => setOnScreen(false)}
      >
        <div className="hidden lg:flex justify-center gap-16">
          {serviceItems.map((item) => (
            <div
              className={`${getOpactity()} flex flex-col gap-6 transition-all duration-1000`}
              key={item.id}
            >
              <div className="flex">
                <span className="text-white text-lg font-bold">
                  {item.count}
                  <span className="text-white text-lg text-opacity-50">
                    {" "}
                    / 03
                  </span>
                </span>
              </div>
              <h2 className="text-white text-[34px] font-bold max-w-[360px]">
                {item.title}
              </h2>
              <p className="text-white text-opacity-75 text-sm tracking-[-0.42px] max-w-[353px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Waypoint>
      <div className="lg:hidden">
        <Carousel />
      </div>
    </div>
  );
};

export default Services;
