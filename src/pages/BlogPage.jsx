import { Fragment } from "react";
import BlogPageHeader from "../components/Layout/Blogs/BlogPageHeader";
import BlogContent from "../components/Layout/Blogs/BlogContent";
import BlogNav from "../components/Layout/Blogs/BlogNav";

const BlogPage = () => {
  return (
    <Fragment>
      <BlogPageHeader />
      <div className="bg-white">
        <div className="container mx-auto lg:flex lg:justify-center lg:gap-44 py-[74px]">
          <div className="hidden lg:block">
            <BlogNav />
          </div>
          <BlogContent />
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPage;
