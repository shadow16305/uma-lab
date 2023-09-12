import { useState } from "react";
import { Waypoint } from "react-waypoint";

const Card = (props) => {
  const [onScreen, setOnScreen] = useState(false);

  const getWidth = () => {
    return onScreen ? "w-[361px] h-[474px]" : "w-0 h-[474px]";
  };

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  const getPositionRight = () => {
    return onScreen ? "right-0" : "-right-[300px]";
  };

  const getPositionLeft = () => {
    return onScreen ? "left-0" : "-left-[300px]";
  };

  return (
    <Waypoint
      onEnter={() => setOnScreen(true)}
      onLeave={() => setOnScreen(false)}
    >
      <div className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-32 relative">
        <div className="w-[361px]">
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
        <h1 className="text-white text-[44px] lg:text-[110px] font-medium tracking-[7.425px] lg:tracking-[18.15px] absolute max-w-[605px] left-0 bottom-16 lg:-bottom-24 flex flex-col leading-none">
          <span
            className={`ps-16 lg:ps-52 relative transition-all duration-1000 ${getPositionRight()} ${getOpactity()}`}
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
          <p className="text-white text-[22px] tracking-[1.98px] font-normal max-w-[579px] mt-10 hidden lg:block">
            {props.text}
          </p>

          <p className="text-white lg:mt-auto text-3xl lg:text-2xl pe-10 lg:pe-0">
            {props.role}
          </p>
        </div>
      </div>
    </Waypoint>
  );
};

export default Card;
