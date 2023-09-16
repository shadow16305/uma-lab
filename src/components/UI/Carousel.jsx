import { Fragment, useState } from "react";

import { useSpringCarousel } from "react-spring-carousel";

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(0);

  const counter = (
    <span className="text-white text-lg font-bold">
      {activeItem + 1}
      <span className="text-white text-lg text-opacity-50"> / 03</span>
    </span>
  );

  const { carouselFragment, useListenToCustomEvent } = useSpringCarousel({
    items: [
      {
        id: 0,
        renderItem: (
          <div className="flex flex-col gap-4">
            <div className="flex"></div>
            <h2 className="text-white text-[34px] font-bold">
              Дизайн та розробка
            </h2>
            <p className="text-white text-opacity-75 text-sm tracking-[-0.42px]">
              Вони працюють над контент: використовуючи Вашу ідею, свої знання
              та доствід, вони створюють унікальний продукт. Для того, щоб саме
              Ваш бізнес виділявся. В цьому Вам допоможе наш програміст,
              дизайнер, контент-мейкер.
            </p>
          </div>
        ),
      },
      {
        id: 1,
        renderItem: (
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-[34px] font-bold">
              Інтернет-маркетинг
            </h2>
            <p className="text-white text-opacity-75 text-sm tracking-[-0.42px]">
              Наші інтернет-маркетологи допоможуть вам розробити оптиматьну
              стратегію онлайн-просування бізнесу. SEO-спеціалісти забезпечать
              високі позиції в пошукових системах та відкриють нові потоки
              клієнтів. РРС-менеджери проведуть індивідуальну піар-кампанію,
              спрямовану на залучення цільової аудиторії.
            </p>
          </div>
        ),
      },
      {
        id: 2,
        renderItem: (
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-[34px] font-bold">
              Менеджмент та підтримка
            </h2>
            <p className="text-white text-opacity-75 text-sm tracking-[-0.42px]">
              Допоможуть Вам у будь-якій ситуації. Проконсультують, деатьльно
              пояснять та порекомендують оптимальний варіант та спеціаліста для
              вирішення проблеми. Саме вони забезпечують оперативну комунікацію
              між Вами та нашої командою.
            </p>
          </div>
        ),
      },
    ],
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveItem(event.nextItem.id);
    }
  });

  return (
    <Fragment>
      <div className="flex items-center ps-[35px]">
        <span className="text-white font-bold text-lg">0</span>
        {counter}
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="relative overflow-hidden max-w-[320px]">
          {carouselFragment}
        </div>
      </div>
    </Fragment>
  );
};

export default Carousel;
