import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <div className="relative flex flex-col justify-center gap-20 px-10 md:flex-row md:gap-32">
      <div className="w-[361px]">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`overflow-hidden relative`}>
          <img src={props.image} alt="Portrait" className="object-cover w-full h-full" />
        </motion.div>
      </div>
      <h1 className="text-white text-[44px] md:text-[110px] font-medium tracking-[7.425px] md:tracking-[18.15px] absolute max-w-[605px] left-0 bottom-16 md:-bottom-24 lg:-bottom-32 flex flex-col leading-none">
        <motion.span
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`ps-16 md:ps-52 relative`}>
          {props.name}
        </motion.span>
        <motion.span
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative`}>
          {props.lastName}
        </motion.span>
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className={`flex flex-col items-end`}>
        <p className="text-white text-[22px] tracking-[1.98px] font-normal max-w-[579px] mt-10 hidden md:block">
          {props.text}
        </p>
        <p className="text-3xl text-white md:mt-auto md:text-2xl pe-10 md:pe-0">{props.role}</p>
      </motion.div>
    </div>
  );
};

export default Card;
