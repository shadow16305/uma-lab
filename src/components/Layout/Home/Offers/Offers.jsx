import { useRef } from "react";
import OfferGrid from "../../../UI/OfferGrid";
import { useInView, motion } from "framer-motion";

const Offers = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  const inView1 = useInView(ref1, { once: true });
  const inView2 = useInView(ref2, { once: true });
  const inView3 = useInView(ref3, { once: true });
  const inView4 = useInView(ref4, { once: true });
  const inView5 = useInView(ref5, { once: true });
  const inView6 = useInView(ref6, { once: true });
  const inView7 = useInView(ref7, { once: true });

  return (
    <div
      className="flex flex-col lg:flex-row lg:gap-x-4 bg-[#1a1a1a] text-white px-4 md:px-10 lg:px-20"
      id="offer"
    >
      <div className="lg:w-1/2 relative mb-12 text-center lg:mb-0 lg:text-start ">
        <div className="lg:sticky top-16 lg:mt-[-50px]">
          <h1 className="font-bold text-5xl">Послуги</h1>

          <p className="text-xl text-gray-400">
            Ось інтсрументи для вирішення бізнес-завдань:
          </p>
        </div>
      </div>

      <OfferGrid>
        <motion.div
          ref={ref1}
          initial={{ opacity: 0 }}
          animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-y-5"
        >
          <h1 className="font-semibold text-3xl basis-11/12">
            Експрес-аналіз Бренду
          </h1>
          <p className="basis-full text-base font-light text-gray-400">
            Проведення швидкого дослідження вашого бренду, аналіз його
            позиціонування, конкурентне середовище та сприйняття цільової
            аудиторії, аби надати вам цінну інформацію та рекомендації для
            подальшого розвитку та успішної стратегії бренду.
          </p>
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ opacity: 0 }}
          animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-y-5"
        >
          <h1 className="font-semibold text-3xl basis-11/12">
            Розробка дизайну{" "}
          </h1>
          <p className="basis-full text-base font-light text-gray-400">
            Створення унікальних та привабливих елементів бренду, зокрема його
            назву, логотип, кольорову палітру та стиль, щоб ви могли вирізнятися
            на ринку та створити послідовний та професійний образ вашої компанії
          </p>
        </motion.div>

        <motion.div
          ref={ref3}
          initial={{ opacity: 0 }}
          animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-y-5"
        >
          <h1 className="font-semibold w-full text-3xl basis-11/12">
            Створення медіа-простору
          </h1>
          <p className="basis-full text-base font-light text-gray-400">
            Розробка і налаштовуння медіа-каналів, в тому числі соціальні
            мережі, веб-сайти та інші платформи, завдяки яким Ваша компанія
            ефективно комунікувала зі своєю аудиторією, забезпечувала зростання
            впізнаваності та залучення нових клієнті
          </p>
        </motion.div>

        <motion.div
          ref={ref4}
          initial={{ opacity: 0 }}
          animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-y-5"
        >
          <h1 className="font-semibold w-full text-3xl basis-11/12">
            Створення медіаконтенту
          </h1>
          <p className="basis-full text-base font-light text-gray-400">
            Наша команда розробляє високоякісний відео- та фотоконтент,
            супроводжує його інформативними текстами та проводить інтервю з
            експертами вашої компанії, допомагаючи вам ефективно комунікувати зі
            своєю аудиторією та підвищувати рівень впізнаваності та довіри
          </p>
        </motion.div>

        <motion.div
          ref={ref5}
          initial={{ opacity: 0 }}
          animate={inView5 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-y-5"
        >
          <h1 className="font-semibold w-full text-3xl basis-11/12">
            Таргетована реклама
          </h1>
          <p className="basis-full text-base font-light text-gray-400">
            Створення та оптимізація рекламних кампанії на платформах Facebook
            та Instagram, забезпечуючи точне налаштування та спрямування реклами
            на вашу цільову аудиторію, що дозволяє досягти кращих результатів та
            збільшити конверсію
          </p>
        </motion.div>

        <motion.div
          ref={ref6}
          initial={{ opacity: 0 }}
          animate={inView6 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-y-5"
        >
          <h1 className="font-semibold w-full text-3xl basis-11/12">
            SEO просування
          </h1>
          <p className="basis-full text-base font-light text-gray-400">
            Забезпечення оптимізацією вашого веб-сайту, включаючи ключові слова,
            внутрішню структуру, мета-теги та посилання, для поліпшення
            видимості сайту в пошукових системах. Це допомагає залучити більше
            органічного трафіку, підвищити рейтинг вашого сайту та покращити
            його позиції у пошукових результатів
          </p>
        </motion.div>

        <motion.div
          ref={ref7}
          initial={{ opacity: 0 }}
          animate={inView7 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-y-5"
        >
          <h1 className="font-semibold text-3xl basis-11/12">
            Контекстна реклама
          </h1>
          <p className="basis-full text-base font-light text-gray-400">
            Створення та налаштування рекламних кампанії, що показуються
            відповідно до контексту та інтересів користувачів. Це дозволяє
            ефективно дотягнутися до цільової аудиторії, показуючи рекламні
            оголошення на веб-сайтах, де вони можуть бути найбільш релевантними
            та привертливими для потенційних клієнтів.
          </p>
        </motion.div>
      </OfferGrid>
    </div>
  );
};

export default Offers;
