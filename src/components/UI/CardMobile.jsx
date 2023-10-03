import { useState } from "react";
import { Waypoint } from "react-waypoint";

const CardMobile = (props) => {
  const [onScreen, setOnScreen] = useState(false);

  const getWidth = () => {
    return onScreen ? "w-[300px]  h-[474px]" : "w-0 h-[474px]";
  };

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  const getPositionRight = () => {
    return onScreen ? "left-0" : "-left-[200px]";
  };

  const getPositionLeft = () => {
    return onScreen ? "left-0" : "-left-[200px]";
  };

  return (
    <Waypoint onEnter={() => setOnScreen(true)}>
      <div className="flex flex-col justify-center items-center gap-20 md:gap-32 relative">
        <div className="w-[300px]">
          <div
            className={`overflow-hidden transition-all duration-700 origin-left ${getWidth()}`}
          >
            <img
              src={props.image}
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-white text-[44px] md:text-[110px] font-medium tracking-[7.425px] md:tracking-[18.15px] absolute max-w-[605px] left-0 bottom-16 md:-bottom-24 flex flex-col leading-none">
          <span
            className={`ps-16 md:ps-52 relative transition-all duration-1000 ${getPositionRight()} ${getOpactity()}`}
          >
            {props.name}
          </span>
          <span
            className={`relative transition-all duration-1000 ${getPositionLeft()} ${getOpactity()}`}
          >
            {props.lastName}
          </span>
        </h1>
        <div
          className={`flex flex-col items-end ${getOpactity()} transition-all duration-1000`}
        >
          <p className="text-white text-[22px] tracking-[1.98px] font-normal max-w-[579px] mt-10 hidden md:block">
            {props.text}
          </p>

          <p className="text-white md:mt-auto text-3xl md:text-2xl pe-10 md:pe-0">
            {props.role}
          </p>
        </div>
      </div>
    </Waypoint>
  );
};

export default CardMobile;
