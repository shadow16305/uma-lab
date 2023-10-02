import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <div className="flex flex-col gap-3 max-w-[325px] max-h-[305px] hover:text-sky-500 text-white transition duration-300">
      <span className="text-base text-gray-400 font-medium">{props.date}</span>
      <Link
        to="/blogpage"
        className="max-w-[325px] max-h-[215px] overflow-hidden"
      >
        <img
          src={props.img}
          alt="Blog Card Image"
          className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
        />
      </Link>
      <p className="text-base font-medium">{props.text}</p>
    </div>
  );
};

export default BlogCard;
