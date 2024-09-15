import { useRef } from "react";
import ReasonsGrid from "../UI/ReasonsGrid";
import { useInView, motion } from "framer-motion";
import { reasonsItems } from "../../constants/content";
import ReasonsCarousel from "../UI/ReasonsCarousel";

function Reasons() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col gap-y-8 bg-[#1a1a1a] text-white mt-44">
      <h1 className="py-10 text-4xl font-bold text-center md:text-5xl">Цифровий успіх з UMA</h1>
      <ReasonsCarousel />
      <ReasonsGrid>
        {reasonsItems.map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            key={item.id}>
            <div className="flex-col items-center hidden text-center gap-y-2 md:flex">
              <div className="h-[105px] w-[105] flex justify-center items-center">
                <img src={item.img} alt="logo" className="mt-[-26px] py-2 h-full object-contain" />
              </div>
              <div className="xl:line-clamp-2 md:w-3/4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p ref={ref} className="text-base text-gray-400">
                {item.paragraph}
              </p>
            </div>
          </motion.div>
        ))}
      </ReasonsGrid>
    </div>
  );
}

export default Reasons;
