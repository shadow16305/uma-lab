const BlogContent = ({ blogData }) => {
  return blogData.map((item) => (
    <div
      className="flex flex-col items-center md:items-start px-6 md:px-0 md:max-w-[600px] lg:max-w-[900px] gap-6 relative z-10"
      key={item.id}
    >
      <p className="text-base font-medium">{item.text_section_1}</p>
      {item.id === "1" && <img src={item.img_1} alt="img1" />}
      <ul className="text-base font-medium flex flex-col gap-14">
        {item.text_section_2.map((listItem, index) => (
          <li key={index} className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{listItem.title}</h1>
            <p>{listItem.content}</p>
            {index === 5 && item.id === "2" && (
              <img src={item.img_1} alt="img"></img>
            )}
            {index === 2 && item.id === "2" && (
              <img src={item.img_0} alt="img"></img>
            )}
          </li>
        ))}
      </ul>
      <img
        src={item.img_2}
        className="max-w-[340px] md:max-w-[658px] max-h-[381px]"
        alt="Blog"
      />
      <p className="text-base font-medium flex flex-col gap-4">
        <span className={`${item.id === "2" && "text-3xl font-bold"}`}>
          {item.text_section_3[0]}
        </span>
        {item.id === "2" && item.text_section_3[1]}
      </p>
    </div>
  ));
};

export default BlogContent;
