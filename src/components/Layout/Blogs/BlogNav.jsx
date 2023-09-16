import { Link } from "react-router-dom";

const BlogNav = () => {
  return (
    <nav className="flex flex-col gap-3">
      <h2 className="text-[32px] font-medium">ЗМІСТ</h2>
      <ul className="text-[18px] flex flex-col list-none gap-[18px] underline font-medium">
        <li>
          <Link smooth to="#section-1">
            *Головна тема...
          </Link>
        </li>
        <li>
          <Link smooth to="#section-2">
            *Підтема...
          </Link>
        </li>
        <li>
          <Link smooth to="#section-3">
            *Підтема...
          </Link>
        </li>
        <li>
          <Link smooth to="#section-4">
            *Підтема...
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BlogNav;
