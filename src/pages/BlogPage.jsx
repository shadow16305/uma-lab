import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import BlogPageHeader from "../components/Layout/Blogs/BlogPageHeader";
import BlogContent from "../components/Layout/Blogs/BlogContent";
import Footer from "../components/Layout/Footer";
import { blogPageData } from "../constants/content";
import { FaArrowLeftLong } from "react-icons/fa6";

const BlogPage = () => {
  const [prevIsVisible, setPrevIsVisible] = useState(false);
  const [nextIsVisible, setNextIsVisible] = useState(true);
  const [maxId, setMaxId] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const maxIdFromData = blogPageData.reduce((max, item) => Math.max(max, item.id), 0);
    setMaxId(maxIdFromData);

    const nextId = String(Number(id) + 1);

    if (nextId <= maxId) {
      setNextIsVisible(true);
    } else {
      setNextIsVisible(false);
    }

    const idNumber = Number(id);

    if (idNumber === 1) {
      setPrevIsVisible(false);
    } else {
      setPrevIsVisible(true);
    }
  }, [id, maxId]);

  const currentBlogData = blogPageData.filter((item) => item.id === id);

  const handleNextButtonClick = () => {
    const nextId = String(Number(id) + 1);

    if (nextId <= maxId) {
      navigate(`/blogpage/${nextId}`);
    }
  };

  const handlePrevButtonClick = () => {
    const prevId = Number(id) - 1;

    if (prevId >= 1) {
      navigate(`/blogpage/${String(prevId)}`);
    }
  };

  return (
    <div className="h-screen overflow-auto">
      <div className="relative">
        <button
          onClick={handlePrevButtonClick}
          className={`absolute z-20 cursor-pointer left-10 top-1/2 bg-sky-500 hover:bg-white group transition-all duration-300 rounded-full p-4 ${
            prevIsVisible ? "block" : "hidden"
          }`}>
          <FaArrowLeftLong className="text-white transition-all duration-300 group-hover:text-black" />
        </button>
        <button
          onClick={handleNextButtonClick}
          className={`absolute z-20 p-4 transition-all duration-300 rounded-full cursor-pointer right-10 top-1/2 bg-sky-500 hover:bg-white group ${
            nextIsVisible ? "block" : "hidden"
          }`}>
          <FaArrowLeftLong className="text-white transition-all duration-300 rotate-180 group-hover:text-black" />
        </button>
        <BlogPageHeader blogData={currentBlogData} />
      </div>
      <div className="bg-white">
        <div className="container mx-auto md:flex md:justify-center md:gap-44 py-[74px]">
          <BlogContent blogData={currentBlogData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
