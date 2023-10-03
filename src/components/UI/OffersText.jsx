import { useState } from "react";

import { Waypoint } from "react-waypoint";

const OffersText = (props) => {
  const [showText, setShowText] = useState({});
  const [onScreen, setOnScreen] = useState(false);

  const toggleShowText = (itemId) => {
    setShowText((prevShowText) => ({
      ...prevShowText,
      [itemId]: !prevShowText[itemId],
    }));
  };

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  return (
    <Waypoint onEnter={() => setOnScreen(true)}>
      <div
        className={`flex flex-col gap-y-5 py-7 transition duration-1000 ${getOpactity()}`}
      >
        <h1 className="font-semibold text-3xl basis-11/12">{props.title}</h1>
        <p className="basis-full text-base font-light text-gray-400">
          <span className="md:hidden">
            {props.mobile_text} {""}
          </span>
          <span className="hidden md:block">{props.desktop_text}</span>
          {!showText[props.id] && (
            <button
              onClick={() => toggleShowText(props.id)}
              className="underline md:hidden"
            >
              Читати більше...
            </button>
          )}
          {showText[props.id] && (
            <span className="md:hidden">
              {props.full_mobile_text}{" "}
              <button
                onClick={() => toggleShowText(props.id)}
                className="underline md:hidden"
              >
                Меньше...
              </button>
            </span>
          )}
        </p>
      </div>
    </Waypoint>
  );
};

export default OffersText;
