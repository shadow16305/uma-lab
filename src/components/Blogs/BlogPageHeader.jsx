const BlogPageHeader = ({ blogData }) => {
  return blogData.map((item) => (
    <div
      className={`h-screen relative overflow-hidden`}
      key={item.id}
      style={{
        backgroundImage: `url(${item.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen gap-20 bg-black md:gap-44 py-60 bg-opacity-40">
        <div className="flex flex-col items-center md:items-start gap-9">
          <span className="text-white text-[10px] font-medium">{item.date}</span>
          <h1 className="text-white text-4xl md:text-[44px] font-medium max-w-[350px] md:max-w-[660px] text-center md:text-start leading-[50px]">
            {item.title}
          </h1>
        </div>
        <div className="flex gap-3 md:w-[660px]">
          <button className="px-4 py-1 text-white transition duration-300 border border-white rounded-xl hover:bg-white hover:text-black">
            category
          </button>
          <button className="px-4 py-1 text-white transition duration-300 border border-white rounded-xl hover:bg-white hover:text-black">
            category
          </button>
        </div>
      </div>
    </div>
  ));
};

export default BlogPageHeader;
