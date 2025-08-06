import { Link } from "react-router-dom";
import { RiMovie2AiFill } from "react-icons/ri";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 focus:outline-none"
    >
      <RiMovie2AiFill className="mr-2 text-3xl" />
      MovieHub
    </Link>
  );
}

export default Logo;
