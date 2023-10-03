import { Fragment, useState } from "react";

import { Waypoint } from "react-waypoint";

import { teamItems, teamItemsMobile } from "../../../Tools/item-database";
import Card from "../../../UI/Card";
import CardMobile from "../../../UI/CardMobile";
import dash from "../../../../assets/dash.svg";
import dash_mobile from "../../../../assets/dash_mobile.svg";

const Team = () => {
  const [onScreen, setOnScreen] = useState(false);

  const getOpactity = () => {
    return onScreen ? "opacity-100" : "opacity-0";
  };

  return (
    <Fragment>
      <div className="container mx-auto flex flex-col mt-44 md:mt-0 md:h-[898px]">
        <h1 className="text-stroke text-7xl md:text-[215px] font-bold md:ps-16 flex">
          UMA <img src={dash} className="hidden md:block" alt="dash" />{" "}
          <img src={dash_mobile} className="md:hidden" alt="dash" /> LAB
        </h1>
        <h1 className="text-stroke text-7xl md:text-[215px] font-bold text-end md:pe-16">
          TEAM
        </h1>
        <Waypoint onEnter={() => setOnScreen(true)}>
          <div
            className={`flex justify-center mt-44 ${getOpactity()} transition-all duration-1000`}
          >
            <p className="text-white text-lg md:text-3xl text-center font-medium max-w-[1034px]">
              Ми — команда натхненних та відданих фахівців, талановитих
              професіоналів з усіх дисциплін які працюють разом, щоб створювати
              не просто продукт, а унікальний досвід для наших клієнтів.
            </p>
          </div>
        </Waypoint>
      </div>
      <div className="bg-[url('/src/assets/darker01.png')] bg-fixed">
        {teamItems.map((item) => (
          <div
            className="container mx-auto py-52 hidden md:block"
            key={item.id}
          >
            <Card
              image={item.img}
              text={item.text}
              name={item.name}
              lastName={item.lastName}
              role={item.role}
            />
          </div>
        ))}
        {teamItemsMobile.map((item) => (
          <div className="container mx-auto py-36 md:hidden" key={item.id}>
            <CardMobile
              image={item.img}
              text={item.text}
              name={item.name}
              lastName={item.lastName}
              role={item.role}
            />
          </div>
        ))}
      </div>
      <Waypoint onEnter={() => setOnScreen(true)}>
        <div className="flex justify-center my-44">
          <p
            className={`text-white text-lg md:text-3xl text-center font-medium max-w-[1034px] ${getOpactity()} transition-all duration-1000`}
          >
            Ми не просто робимо нашу роботу, ми нею живемо. Кожен з нас вніс в
            це спільне діло свою пристрасть, досвід і унікальний погляд на світ.
            Ми — це більше, ніж просто команда, ми — це сім'я, що разом творить
            щось надзвичайне.
          </p>
        </div>
      </Waypoint>
    </Fragment>
  );
};

export default Team;
