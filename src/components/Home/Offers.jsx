import OfferGrid from "../UI/OfferGrid";
import { offersItems } from "../../constants/content";
import OffersText from "../UI/OffersText";

const Offers = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:gap-x-4 bg-[#1a1a1a] text-white px-4 md:px-10 lg:px-20 pt-2 xl:pt-16 scroll-mt-16"
      id="offer">
      <div className="relative mb-12 text-center md:w-1/2 md:mb-0 md:text-start">
        <div className="md:sticky top-16">
          <h1 className="text-5xl font-bold">Послуги</h1>

          <p className="text-xl text-gray-400">Ось інтсрументи для вирішення бізнес-завдань:</p>
        </div>
      </div>
      <OfferGrid>
        <div>
          {offersItems.map((item) => (
            <OffersText
              key={item.id}
              title={item.title}
              mobile_text={item.mobile_text}
              desktop_text={item.desktop_text}
              full_mobile_text={item.full_mobile_text}
            />
          ))}
        </div>
      </OfferGrid>
    </div>
  );
};

export default Offers;
