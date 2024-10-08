import { useRef } from "react";
import { Link } from "react-router-dom";

import { useInView, motion } from "framer-motion";

import BlogCard from "../UI/BlogCard";
import { blogPageItems } from "../../constants/content";

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}>
      <div className="container flex flex-col items-center justify-center mx-auto gap-28 my-44" ref={ref}>
        <div className="flex flex-col md:flex-row justify-between items-center w-full md:px-[224px]">
          <h1 className="text-white font-bold text-[56px]">Блог</h1>
          <Link to="/blog" className="underline text-white font-bold text-base hover:opacity-50 transition-[0.25s]">
            ВСІ СТАТТІ
          </Link>
        </div>
        <div className="flex flex-col gap-20 md:flex-row">
          {blogPageItems.map((item) => (
            <BlogCard key={item.id} id={item.id} date={item.date} img={item.img} text={item.text} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogSection;
