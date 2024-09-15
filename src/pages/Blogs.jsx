import PaginatedItems from "../components/Blogs/PaginatedItems";
import Footer from "../components/Layout/Footer";

const Blogs = () => {
  return (
    <div className="h-screen overflow-auto">
      <div className="container flex flex-col items-center gap-24 pt-16 pb-24 mx-auto">
        <h1 className="text-white font-bold text-[56px]">Блог</h1>
        <PaginatedItems itemsPerPage={9} />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
