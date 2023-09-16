import PaginatedItems from "../components/Layout/Blogs/PaginatedItems";

const Blogs = () => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-24 py-20">
      <h1 className="text-white font-bold text-[56px]">Блог</h1>
      <PaginatedItems itemsPerPage={9} />
    </div>
  );
};

export default Blogs;
