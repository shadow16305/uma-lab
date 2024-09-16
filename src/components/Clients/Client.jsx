import { motion } from "framer-motion";

const Client = ({
  name,
  description,
  desktop_img,
  mobile_img,
  tags = [],
  background,
  h2_color,
  text_color,
  border_color,
  text_stroke,
  imgClassName,
}) => {
  return (
    <div className={`${background} h-fit md:h-screen w-screen overflow-hidden flex flex-col items-center`}>
      <h2
        className={`${text_stroke} ${h2_color} text-center text-4xl md:text-7xl 2xl:text-8xl font-medium uppercase pt-12 md:pt-24`}>
        {name}
      </h2>
      <div className="flex flex-col-reverse items-center h-full mt-4 lg:w-10/12 2xl:w-9/12 md:flex-row md:justify-between md:mt-0">
        <div className="relative hidden w-1/2 md:block h-3/4">
          <img src={desktop_img} alt={name} className={`${imgClassName} absolute object-cover`} />
        </div>
        {mobile_img && <img src={mobile_img} className="md:hidden" alt={name} />}
        {name !== "Gemrays" && name !== "BOVA" && (
          <img src={desktop_img} alt={name} className="w-full scale-90 md:hidden" />
        )}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`${text_color} flex flex-col items-center text-center gap-y-4 md:gap-y-7 md:w-1/2 2xl:w-5/12`}>
          <p className="text-lg md:text-2xl">{description}</p>
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-4">
            {tags
              .filter((tag) => tag.name)
              .map((tag, index) => (
                <p
                  key={index}
                  className={`${border_color} px-2 py-1 text-center border rounded-lg w-fit text-lg md:text-2xl`}>
                  {tag.name}
                </p>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Client;
