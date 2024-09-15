import Carousel from "../UI/Carousel";
import { serviceItems } from "../../constants/content";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="container mx-auto flex flex-col md:h-[768px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-end w-full">
        <h1
          className={`text-white text-end text-[32px] md:text-[55px] font-bold max-w-[360px] md:max-w-[633px] pb-32 pe-6 md:pe-16`}>
          UMA це інструмент для успіху
        </h1>
      </motion.div>
      <div className="justify-center hidden gap-16 md:flex">
        {serviceItems.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex flex-col gap-6`}
            key={item.id}>
            <div className="flex">
              <span className="text-lg font-bold text-white">
                {item.count}
                <span className="text-lg text-white text-opacity-50"> / 03</span>
              </span>
            </div>
            <h2 className="text-white text-[34px] font-bold max-w-[360px]">{item.title}</h2>
            <p className="text-white text-opacity-75 text-sm tracking-[-0.42px] max-w-[353px]">{item.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="md:hidden">
        <Carousel />
      </div>
    </div>
  );
};

export default Services;
