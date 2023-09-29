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
          <span className="lg:hidden">
            {props.mobile_text} {""}
          </span>
          <span className="hidden lg:block">{props.desktop_text}</span>
          {!showText[props.id] && (
            <button
              onClick={() => toggleShowText(props.id)}
              className="underline lg:hidden"
            >
              Читати більше...
            </button>
          )}
          {showText[props.id] && (
            <span className="lg:hidden">
              {props.full_mobile_text}{" "}
              <button
                onClick={() => toggleShowText(props.id)}
                className="underline lg:hidden"
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
