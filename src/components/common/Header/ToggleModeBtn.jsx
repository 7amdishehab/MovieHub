import { FiSun, FiMoon } from "react-icons/fi";
import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

function ToggleModeBtn() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out flex items-center justify-center text-xs ${
          isDarkMode ? "transform translate-x-6" : "transform translate-x-0"
        }`}
      >
        {isDarkMode ? (
          <FiMoon className="text-gray-700" />
        ) : (
          <FiSun className="text-yellow-500" />
        )}
      </span>
    </button>
  );
}

export default ToggleModeBtn;
