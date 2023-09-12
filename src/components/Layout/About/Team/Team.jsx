import { Fragment } from "react";
import { images } from "../../../Tools/about-page-images";
import Card from "../../../UI/Card";

const items = [
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

const Team = () => {
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col lg:h-[898px]">
        <h1 className="text-stroke text-7xl lg:text-[215px] font-bold">
          UMA - LAB
        </h1>
        <h1 className="text-stroke text-7xl lg:text-[215px] font-bold text-end">
          TEAM
        </h1>
        <div className="flex justify-center mt-80">
          <p className="text-white text-lg lg:text-3xl text-center font-medium max-w-[1034px]">
            Ми — команда натхненних та відданих фахівців, талановитих
            професіоналів з усіх дисциплін які працюють разом, щоб створювати не
            просто продукт, а унікальний досвід для наших клієнтів.
          </p>
        </div>
      </div>
      <div className="bg-[url('/src/assets/mobile_bg.svg')] lg:bg-[url('/src/assets/Background.svg')] lg:bg-contain bg-no-repeat">
        {items.map((item) => (
          <div className="container mx-auto py-72" key={item.id}>
            <Card
              image={item.img}
              text={item.text}
              name={item.name}
              lastName={item.lastName}
              role={item.role}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center my-80">
        <p className="text-white text-lg lg:text-3xl text-center font-medium max-w-[1034px]">
          Ми не просто робимо нашу роботу, ми нею живемо. Кожен з нас вніс в це
          спільне діло свою пристрасть, досвід і унікальний погляд на світ. Ми —
          це більше, ніж просто команда, ми — це сім'я, що разом творить щось
          надзвичайне.
        </p>
      </div>
    </Fragment>
  );
};

export default Team;
