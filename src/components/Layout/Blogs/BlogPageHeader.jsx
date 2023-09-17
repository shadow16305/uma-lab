import { blogPageHeaderitems } from "../../Tools/item-database";

const BlogPageHeader = () => {
  return (
    <div className="bg-[url('/src/assets/blogBG.png')] bg-cover bg-fixed h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center gap-20 lg:gap-44 h-screen py-60">
        {blogPageHeaderitems.map((item) => (
          <div
            className="flex flex-col items-center lg:items-start gap-9"
            key={item.id}
          >
            <span className="text-white text-[10px] font-medium">
              {item.date}
            </span>
            <h1 className="text-white text-[44px] font-medium lg:max-w-[660px] text-center lg:text-start">
              {item.title}
            </h1>
          </div>
        ))}

        <div className="flex gap-3 lg:w-[660px]">
          <button className="border rounded-xl border-white py-1 px-4 text-white hover:bg-white hover:text-black transition duration-300">
            category
          </button>
          <button className="border rounded-xl border-white py-1 px-4 text-white hover:bg-white hover:text-black transition duration-300">
            category
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPageHeader;
