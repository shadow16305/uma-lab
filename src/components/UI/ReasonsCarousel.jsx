import { useState } from "react";

import { useSpringCarousel } from "react-spring-carousel";
import { reasonsItems } from "../Tools/item-database";

const ReasonsCarousel = () => {
  const [activeItem, setActiveItem] = useState(0);

  const { carouselFragment, useListenToCustomEvent } = useSpringCarousel({
    items: reasonsItems.map((item) => ({
      id: item.id,
      renderItem: (
        <div
          className="flex flex-col items-center gap-6 text-center"
          key={item.id}
        >
          <div className="h-[105px] w-[105]">
            <img src={item.img} className="h-full object-contain" alt="" />
          </div>
          <h2 className="text-white font-bold">{item.title}</h2>
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
    <div className="container mx-auto flex flex-col items-center lg:hidden">
      <div className="relative overflow-hidden max-w-[320px]">
        {carouselFragment}
      </div>
      <div className="font-bold pt-10">
        {activeItem + 1} / {reasonsItems.length}
      </div>
    </div>
  );
};

export default ReasonsCarousel;
