import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { id, date, img, text } = props;

  return (
    <div className="flex flex-col gap-3 max-w-[325px] max-h-[305px] hover:text-sky-500 text-white transition duration-300">
      <span className="text-base text-gray-400 font-medium">{date}</span>
      <Link to={`/blogpage/${id}`} className="flex flex-col gap-6">
        <div className="max-w-[325px] max-h-[215px] overflow-hidden">
          <img
            src={img}
            alt="Blog Card"
            className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </div>
        <p className="text-base font-medium">{text}</p>
      </Link>
    </div>
  );
};

export default BlogCard;
