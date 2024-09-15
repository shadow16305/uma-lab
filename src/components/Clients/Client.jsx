import { motion } from "framer-motion";

const Client = ({
  name,
  description,
  type,
  desktop_img,
  mobile_img,
  background,
  h2_color,
  text_color,
  border_color,
  text_stroke,
}) => {
  return (
    <div className={`${background} md:h-screen w-screen overflow-hidden flex flex-col items-center`}>
      <h2
        className={`${text_stroke} ${h2_color} text-center md:text-start text-7xl md:text-8xl font-medium uppercase pt-24`}>
        {name}
      </h2>
      <div className="flex flex-col-reverse items-center w-10/12 h-full md:flex-row md:justify-between">
        <div className="relative w-5/12 h-full">
          <img src={desktop_img} alt={name} className="absolute object-cover size-full" />
        </div>
        {mobile_img && <img src={mobile_img} className="md:hidden" alt="Diamond" />}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`${text_color} flex flex-col items-center text-center gap-y-7 w-5/12`}>
          <p className="text-2xl">{description}</p>
          <p className={`${border_color} px-2 py-1 text-base text-center border rounded-lg w-fit`}>{type}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Client;
