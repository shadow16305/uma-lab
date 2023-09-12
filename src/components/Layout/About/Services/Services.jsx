import React from "react";
import Carousel from "../../../UI/Carousel";

const items = [
  {
    id: 0,
    count: "01",
    title: "Дизайн та розробка",
    text: `Вони працюють над контент: використовуючи Вашу ідею, свої знання
    та доствід, вони створюють унікальний продукт. Для того, щоб саме
    Ваш бізнес виділявся. В цьому Вам допоможе наш програміст,
    дизайнер, контент-мейкер.`,
  },
  {
    id: 1,
    count: "02",
    title: "Інтернет-маркетинг",
    text: ` Наші інтернет-маркетологи допоможуть вам розробити оптиматьну
    стратегію онлайн-просування бізнесу. SEO-спеціалісти забезпечать
    високі позиції в пошукових системах та відкриють нові потоки
    клієнтів. РРС-менеджери проведуть індивідуальну піар-кампанію,
    спрямовану на залучення цільової аудиторії.`,
  },
  {
    id: 2,
    count: "03",
    title: "Менеджмент та підтримка",
    text: `Допоможуть Вам у будь-якій ситуації. Проконсультують, деатьльно
    пояснять та порекомендують оптимальний варіант та спеціаліста для
    вирішення проблеми. Саме вони забезпечують оперативну комунікацію
    між Вами та нашої командою.`,
  },
];

const Services = () => {
  return (
    <div className="container mx-auto flex flex-col h-[890px] lg:h-[768px]">
      <div className="w-full flex justify-end">
        <h1 className="text-white text-end text-[32px] lg:text-[55px] font-bold max-w-[360px] lg:max-w-[633px] pb-32">
          UMA це інструмент для успіху
        </h1>
      </div>
      <div className="hidden lg:flex justify-center gap-16">
        {items.map((item) => (
          <div className="flex flex-col gap-4" key={item.id}>
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
      <div className="lg:hidden">
        <Carousel />
      </div>
    </div>
  );
};

export default Services;
