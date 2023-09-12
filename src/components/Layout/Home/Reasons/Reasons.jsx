import { useRef } from "react";
import ReasonsGrid from "../../../UI/ReasonsGrid";
import { useInView, motion } from "framer-motion";
import { icons } from "../../../Tools/main-page-images";

function Reasons() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: true });

  const items = [
    {
      img: icons[0],
      h: "105px",
      w: "70px",
      title: "Покращення вашої присутності онлайн",
      paragraph:
        "допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів",
    },
    {
      img: icons[5],
      h: "59px",
      w: "70px",
      title: "Адміністрування сайту та соціальних мереж",
      paragraph:
        "За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів",
    },

    {
      img: icons[2],
      h: "70px",
      w: "70px",
      title: "Підвищення свідомості про бренд",
      paragraph:
        "Креативний контент та стратегії брендингу, що привертають увагу, збільшують свідомість про ваш бренд",
    },

    {
      img: icons[1],
      h: "57px",
      w: "70px",
      title: "Цільовий трафік",
      paragraph:
        "Розробка стратегії пошукової оптимізації та інших маркетингових каналів для приваблення цільового трафіку",
    },

    {
      img: icons[4],
      h: "78px",
      w: "45px",
      title: "Ефективна реклама",
      paragraph: "Таргетована реклама для досягнення максимальних результатів",
    },

    {
      img: icons[3],
      h: "60px",
      w: "70px",
      title: "Збільшення конверсії",
      paragraph:
        "Оптимізація сайту та маркетингових стратегій, що підвищують конверсію веб-трафіку та залучають нових клієнтів",
    },

    // Add more items as needed
  ];

  return (
    <div className="flex flex-col gap-y-8 bg-[#1a1a1a] text-white mt-32">
      <h1 className="text-center font-bold text-5xl py-10">
        Цифровий успіх з UMA
      </h1>
      <ReasonsGrid>
        {items.map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            className="flex flex-col gap-y-2 items-center text-center"
          >
            <img
              src={item.img}
              alt="logo"
              height={item.h}
              width={item.w}
              className="mt-[-26px] py-2"
            />
            <div className="xl:line-clamp-2 lg:w-3/4">
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </div>
            <p ref={ref} className="text-base text-gray-400">
              {item.paragraph}
            </p>
          </motion.div>
        ))}
      </ReasonsGrid>
    </div>
  );
}

export default Reasons;
