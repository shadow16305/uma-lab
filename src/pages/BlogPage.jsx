import BlogPageHeader from "../components/Layout/Blogs/BlogPageHeader";
import BlogContent from "../components/Layout/Blogs/BlogContent";
import BlogNav from "../components/Layout/Blogs/BlogNav";
import Footer from "../components/Layout/Footer";

const BlogPage = () => {
  return (
    <div className="h-screen overflow-auto">
      <BlogPageHeader />
      <div className="bg-white">
        <div className="container mx-auto md:flex md:justify-center md:gap-44 py-[74px]">
          <div className="hidden md:block">
            <BlogNav />
          </div>
          <BlogContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
