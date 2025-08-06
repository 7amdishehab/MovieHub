import { Link } from "react-router-dom";

function ToggleMenuLink({ to, children, setOpen }) {
  return (
    <Link
      to={to}
      className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none hover:scale-105"
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  );
}

export default ToggleMenuLink;
