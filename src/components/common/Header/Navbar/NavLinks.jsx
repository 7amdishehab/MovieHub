import WatchListBtn from "../../../common/Header/WatchListBtn";
import ToggleModeBtn from "../ToggleModeBtn";
import NavLink from "./NavLink";

function NavLinks() {
  return (
    <nav className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-300">
      <NavLink to="/">Movies</NavLink>
      <NavLink to="/tv">TV Shows</NavLink>
      <WatchListBtn />
      <ToggleModeBtn />
    </nav>
  );
}

export default NavLinks;
