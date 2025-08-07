import { FiX } from "react-icons/fi";
import WatchListBtn from "../../../common/Header/WatchListBtn";
import ToggleMenuLink from "./ToggleMenuLink";
import ToggleModeBtn from "../ToggleModeBtn";

function ToggleMenuLinks({ setOpen }) {
  return (
    <div className="w-64 bg-white dark:bg-gray-900 h-full shadow-lg flex flex-col p-6 relative animate-slide-in">
      <button
        className="absolute top-4 right-4 text-2xl text-gray-700 dark:text-gray-300 focus:outline-none"
        onClick={() => setOpen(false)}
        aria-label="Close menu"
      >
        <FiX />
      </button>
      <nav className="flex flex-col gap-6 mt-12 text-lg">
        <ToggleModeBtn />
        <ToggleMenuLink to="/" setOpen={setOpen}>
          Movies
        </ToggleMenuLink>
        <ToggleMenuLink to="/tv" setOpen={setOpen}>
          TV Shows
        </ToggleMenuLink>
        <ToggleMenuLink to="/wishlist" setOpen={setOpen}>
          <WatchListBtn />
        </ToggleMenuLink>
      </nav>
    </div>
  );
}

export default ToggleMenuLinks;
