import { icons } from "./main-page-images";
import { images } from "./about-page-images";
import { mobile_images } from "./about-page-images";

import temp_img from "../../assets/image 15.png";

export const serviceItems = [
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

export const reasonsItems = [
  {
    id: 0,
    img: icons[0],
    title: "Покращення вашої присутності онлайн",
    paragraph:
      "допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів",
  },
  {
    id: 1,
    img: icons[5],
    title: "Адміністрування сайту та соціальних мереж",
    paragraph:
      "За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів",
  },

  {
    id: 2,
    img: icons[2],
    title: "Підвищення свідомості про бренд",
    paragraph:
      "Креативний контент та стратегії брендингу, що привертають увагу, збільшують свідомість про ваш бренд",
  },

  {
    id: 3,
    img: icons[1],
    title: "Цільовий трафік",
    paragraph:
      "Розробка стратегії пошукової оптимізації та інших маркетингових каналів для приваблення цільового трафіку",
  },

  {
    id: 4,
    img: icons[4],
    title: "Ефективна реклама",
    paragraph: "Таргетована реклама для досягнення максимальних результатів",
  },

  {
    id: 5,
    img: icons[3],
    title: "Збільшення конверсії",
    paragraph:
      "Оптимізація сайту та маркетингових стратегій, що підвищують конверсію веб-трафіку та залучають нових клієнтів",
  },
];

export const teamItems = [
  {
    id: "person_one",
    img: images[0],
    text: `Наш SEO спеціалст — це головний "детектив" нашої команди, що займається розробкою і впровадженням стратегій оптимізації для пошукових систем. Наш професіонал володіє сучасними методами та інструментами, щоб забезпечити видимість вашого сайту в мережій зробити його привабливим для потенційних клієнтів.`,
    role: "SEO&CEO",
    name: "ROMAN",
    lastName: "RIZNYK",
  },
  {
    id: "person_two",
    img: images[1],
    text: `Наш фотограф, режисер— це майстер візуалізації. Він не простознімає фотографії та відео, але й створює образи, які говорять, викликають емоції і залучають увагу.`,
    role: "Content creator ",
    name: "ANDRII",
    lastName: "KONONOV",
  },
  {
    id: "person_three",
    img: images[2],
    text: `Наш таргетолог - це втілення стратегічного мислення. Він не просто розуміє потреби наших клієнтів, але й передбачає їх, використовуючи складні аналітичні інструменти для вибору найефективніших рекламних кампаній, щоб максимізувати повернення від ваших маркетингових інвестицій.`,
    role: "Media Buyer ",
    name: "VALERIIA",
    lastName: "MAILUNIS",
  },
  {
    id: "person_four",
    img: images[3],
    text: `Наш дизайнер — це творчий геній і майстер вирішення проблем. Він володіє високими навичками в розробці та дизайні, які дозволяють йому творити продукти, що виглядають дивовижно.`,
    role: "Designer UI/UX ",
    name: "VLADYSLAV",
    lastName: "SYDORUK",
  },
];

export const teamItemsMobile = [
  {
    id: "person_one_mobile",
    img: mobile_images[0],
    text: `Наш SEO спеціалст — це головний "детектив" нашої команди, що займається розробкою і впровадженням стратегій оптимізації для пошукових систем. Наш професіонал володіє сучасними методами та інструментами, щоб забезпечити видимість вашого сайту в мережій зробити його привабливим для потенційних клієнтів.`,
    role: "SEO&CEO",
    name: "ROMAN",
    lastName: "RIZNYK",
  },
  {
    id: "person_two_mobile",
    img: mobile_images[1],
    text: `Наш фотограф, режисер— це майстер візуалізації. Він не простознімає фотографії та відео, але й створює образи, які говорять, викликають емоції і залучають увагу.`,
    role: "Content creator ",
    name: "ANDRII",
    lastName: "KONONOV",
  },
  {
    id: "person_three_mobile",
    img: mobile_images[2],
    text: `Наш таргетолог - це втілення стратегічного мислення. Він не просто розуміє потреби наших клієнтів, але й передбачає їх, використовуючи складні аналітичні інструменти для вибору найефективніших рекламних кампаній, щоб максимізувати повернення від ваших маркетингових інвестицій.`,
    role: "Media Buyer ",
    name: "VALERIIA",
    lastName: "MAILUNIS",
  },
  {
    id: "person_four_mobile",
    img: mobile_images[3],
    text: `Наш дизайнер — це творчий геній і майстер вирішення проблем. Він володіє високими навичками в розробці та дизайні, які дозволяють йому творити продукти, що виглядають дивовижно.`,
    role: "Designer UI/UX ",
    name: "VLADYSLAV",
    lastName: "SYDORUK",
  },
];

export const navLinks = [
  {
    id: "home",
    name: "ГОЛОВНА",
    link: "/",
    number: "01",
  },
  {
    id: "contact",
    name: "КОНТАКТИ",
    link: "/#contact",
    number: "04",
  },
  {
    id: "services",
    name: "ПОСЛУГИ",
    link: "/#offer",
    number: "02",
  },
  {
    id: "clients",
    name: "КЛІЄНТИ",
    link: "#",
    number: "05",
  },
  {
    id: "blog",
    name: "БЛОГ",
    link: "/blog",
    number: "03",
  },
  {
    id: "about",
    name: "ПРО НАС",
    link: "/about",
    number: "06",
  },
];

export const blogSectionItems = [
  {
    id: "blog-1",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-2",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-3",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-4",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
];

export const blogPageItems = [
  {
    id: "blog-1",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-2",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-3",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-4",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-5",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-6",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-7",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-8",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-9",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-10",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-11",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-12",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-13",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-14",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-15",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-16",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-17",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
  {
    id: "blog-18",
    date: "20.07.2023",
    img: temp_img,
    text: "Увага на менеджерів середньої ланки чому вони вкрай потрібні компанії ",
  },
];

export const blogPageHeaderitems = [
  {
    id: "blog-page-1",
    date: "20.07.2023",
    title:
      "ЯК BRAND LIFT ДОПОМАГАЄ ВИМІРЮВАТИ ЕФЕКТИВНІСТЬ РЕКЛАМИ В YOUTUBE ТА FACEBOOK",
  },
];
