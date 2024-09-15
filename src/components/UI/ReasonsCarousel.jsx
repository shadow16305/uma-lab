import { useState } from "react";

import { useSpringCarousel } from "react-spring-carousel";
import { reasonsItems } from "../../constants/content";

const ReasonsCarousel = () => {
  const [activeItem, setActiveItem] = useState(0);

  const { carouselFragment, useListenToCustomEvent } = useSpringCarousel({
    items: reasonsItems.map((item) => ({
      id: item.id,
      renderItem: (
        <div className="flex flex-col items-center gap-6 text-center" key={item.id}>
          <div className="h-[105px] w-[105]">
            <img src={item.img} className="object-contain h-full" alt="Reasons Icons" />
          </div>
          <h2 className="font-bold text-white">{item.title}</h2>
          <p>{item.paragraph}</p>
        </div>
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveItem(event.nextItem.id);
    }
  });

  return (
    <div className="container flex flex-col items-center mx-auto md:hidden">
      <div className="relative overflow-hidden max-w-[320px]">{carouselFragment}</div>
      <div className="pt-10 font-bold">
        {activeItem + 1} / {reasonsItems.length}
      </div>
    </div>
  );
};

export default ReasonsCarousel;
