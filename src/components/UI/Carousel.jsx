import { useSpringCarousel } from "react-spring-carousel";

const Carousel = () => {
  const { carouselFragment } = useSpringCarousel({
    items: [
      {
        id: "item-1",
        renderItem: (
          <div className="flex flex-col gap-4">
            <div className="flex">
              <span className="text-white text-lg font-bold">
                01
                <span className="text-white text-lg text-opacity-50">
                  {" "}
                  / 03
                </span>
              </span>
            </div>
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
        id: "item-2",
        renderItem: (
          <div className="flex flex-col gap-4">
            <div className="flex">
              <span className="text-white text-lg font-bold">
                02
                <span className="text-white text-lg text-opacity-50">
                  {" "}
                  / 03
                </span>
              </span>
            </div>
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
        id: "item-3",
        renderItem: (
          <div className="flex flex-col gap-4">
            <div className="flex">
              <span className="text-white text-lg font-bold">
                03
                <span className="text-white text-lg text-opacity-50">
                  {" "}
                  / 03
                </span>
              </span>
            </div>
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

  return (
    <div className="container mx-auto flex justify-center">
      <div className="relative overflow-hidden max-w-[320px]">
        {carouselFragment}
      </div>
    </div>
  );
};

export default Carousel;
