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
      <div className="container mx-auto flex flex-col mt-44 lg:mt-0 lg:h-[898px]">
        <h1 className="text-stroke text-7xl lg:text-[215px] font-bold lg:ps-16 flex">
          UMA <img src={dash} className="hidden lg:block" alt="" />{" "}
          <img src={dash_mobile} className="lg:hidden" alt="" /> LAB
        </h1>
        <h1 className="text-stroke text-7xl lg:text-[215px] font-bold text-end lg:pe-16">
          TEAM
        </h1>
        <Waypoint onEnter={() => setOnScreen(true)}>
          <div
            className={`flex justify-center mt-44 ${getOpactity()} transition-all duration-1000`}
          >
            <p className="text-white text-lg lg:text-3xl text-center font-medium max-w-[1034px]">
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
            className="container mx-auto py-72 hidden lg:block"
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
          <div className="container mx-auto py-36 lg:hidden" key={item.id}>
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
        <div className="flex justify-center my-80">
          <p
            className={`text-white text-lg lg:text-3xl text-center font-medium max-w-[1034px] ${getOpactity()} transition-all duration-1000`}
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
